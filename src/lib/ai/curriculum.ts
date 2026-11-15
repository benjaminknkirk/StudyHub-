import { generateObject } from "ai";
import { z } from "zod";
import { buildSampleCurriculum } from "@/lib/demo/sample-course";
import type { DocumentExtraction } from "@/lib/ai/document-intelligence";
import { getOpenAI, hasOpenAI } from "@/lib/ai/openai";
import type { GeneratedCurriculum, LessonContent, SourceRef } from "@/lib/types";

const curriculumSchema = z.object({
  title: z.string(),
  subject: z.string(),
  units: z.array(
    z.object({
      title: z.string(),
      conceptTitles: z.array(z.string()),
    }),
  ),
  concepts: z.array(
    z.object({
      title: z.string(),
      summary: z.string(),
      learningObjective: z.string(),
      whyItMatters: z.string(),
      prerequisites: z.array(z.string()),
      misconceptions: z.array(z.string()),
      formulas: z.array(z.string()),
      sourcePage: z.number().int().positive(),
      sourceExcerpt: z.string(),
      difficulty: z.number().min(0).max(1),
      plainExplanation: z.string(),
      workedExampleSteps: z.array(
        z.object({ label: z.string(), detail: z.string() }),
      ),
      guidedQuestion: z.object({
        prompt: z.string(),
        type: z.enum([
          "multiple_choice",
          "fill_blank",
          "short_answer",
          "scenario",
          "numerical",
          "self_explain",
        ]),
        choices: z.array(z.string()).optional(),
        acceptedAnswers: z.array(z.string()),
        hints: z.array(z.string()).min(1).max(4),
        explanation: z.string(),
      }),
      independentQuestion: z.object({
        prompt: z.string(),
        type: z.enum([
          "multiple_choice",
          "fill_blank",
          "short_answer",
          "scenario",
          "numerical",
          "self_explain",
        ]),
        choices: z.array(z.string()).optional(),
        acceptedAnswers: z.array(z.string()),
        hints: z.array(z.string()).min(1).max(4),
        explanation: z.string(),
      }),
      applicationQuestion: z.object({
        prompt: z.string(),
        type: z.enum([
          "multiple_choice",
          "fill_blank",
          "short_answer",
          "scenario",
          "numerical",
          "self_explain",
        ]),
        choices: z.array(z.string()).optional(),
        acceptedAnswers: z.array(z.string()),
        hints: z.array(z.string()).min(1).max(4),
        explanation: z.string(),
      }),
    }),
  ),
});

export async function generateCurriculum(
  extraction: DocumentExtraction,
  options?: { forceSample?: boolean },
): Promise<{ curriculum: GeneratedCurriculum; usedAI: boolean; notes: string[] }> {
  const notes = [...extraction.limitations];

  if (options?.forceSample || looksLikeSample(extraction)) {
    return {
      curriculum: buildSampleCurriculum(),
      usedAI: false,
      notes: [
        ...notes,
        "Loaded curated demo curriculum for Machine Learning classification.",
      ],
    };
  }

  if (!hasOpenAI() || extraction.fullText.length < 80) {
    const heuristic = heuristicCurriculum(extraction);
    return {
      curriculum: heuristic,
      usedAI: false,
      notes: [
        ...notes,
        hasOpenAI()
          ? "Sparse source text — generated a structured heuristic pathway."
          : "OPENAI_API_KEY not configured — generated a heuristic pathway from extracted headings. Add the key for richer AI lessons.",
      ],
    };
  }

  try {
    const openai = getOpenAI();
    if (!openai) throw new Error("missing openai");
    const { object } = await generateObject({
      model: openai("gpt-4o-mini"),
      schema: curriculumSchema,
      prompt: `You are SlideQuest's Curriculum Generation Service.
Build a concept-based learning pathway from these lecture notes.
Rules:
- Organize by conceptual dependencies, not blind slide order.
- Do not invent lecture facts. If unclear, keep summaries conservative.
- Mark source pages accurately from the text when possible.
- Each concept needs orient→explain→demonstrate→guided→independent→application style materials.
- Prefer free-recall / short-answer for independent stages; MCQ ok for guided.
- Keep explanations short (cognitive load).
- Include common misconceptions.

Filename: ${extraction.filename}
Pages: ${extraction.pageCount}
Text:
"""
${extraction.fullText.slice(0, 24000)}
"""`,
    });

    const curriculum = mapAICurriculum(object, extraction.filename);
    return { curriculum, usedAI: true, notes };
  } catch (error) {
    notes.push(
      `AI curriculum generation failed (${error instanceof Error ? error.message : "error"}); using heuristic pathway.`,
    );
    return {
      curriculum: heuristicCurriculum(extraction),
      usedAI: false,
      notes,
    };
  }
}

function looksLikeSample(extraction: DocumentExtraction): boolean {
  const name = extraction.filename.toLowerCase();
  return (
    name.includes("sample") ||
    name.includes("demo") ||
    name.includes("classification") ||
    /accuracy.*imbalance|precision.*recall/i.test(extraction.fullText)
  );
}

function mapAICurriculum(
  object: z.infer<typeof curriculumSchema>,
  filename: string,
): GeneratedCurriculum {
  type RawConcept = z.infer<typeof curriculumSchema>["concepts"][number];
  const paired: { concept: GeneratedCurriculum["concepts"][number]; raw: RawConcept }[] =
    object.concepts.map((c, i) => {
      const id = `c-${i + 1}-${slug(c.title)}`;
      const sourceRefs: SourceRef[] = [
        {
          filename,
          page: c.sourcePage,
          excerpt: c.sourceExcerpt,
          supplemental: false,
        },
      ];
      return {
        raw: c,
        concept: {
          id,
          title: c.title,
          summary: c.summary,
          learningObjective: c.learningObjective,
          whyItMatters: c.whyItMatters,
          prerequisites: c.prerequisites.map((p) => {
            const match = object.concepts.findIndex((x) => x.title === p);
            return match >= 0
              ? `c-${match + 1}-${slug(object.concepts[match].title)}`
              : p;
          }),
          misconceptions: c.misconceptions,
          formulas: c.formulas,
          sourceRefs,
          difficulty: c.difficulty,
          sortOrder: i,
          unitTitle:
            object.units.find((u) => u.conceptTitles.includes(c.title))?.title ||
            "Core concepts",
        },
      };
    });

  const unitMap = new Map<string, string[]>();
  for (const { concept } of paired) {
    const list = unitMap.get(concept.unitTitle) || [];
    list.push(concept.id);
    unitMap.set(concept.unitTitle, list);
  }

  return {
    title: object.title,
    subject: object.subject,
    units: [...unitMap.entries()].map(([title, conceptIds]) => ({
      title,
      conceptIds,
    })),
    concepts: paired.map((p) => p.concept),
    lessons: paired.map(({ concept, raw }) => ({
      conceptId: concept.id,
      title: concept.title,
      content: buildLessonFromAI(concept, raw),
    })),
  };
}

function buildLessonFromAI(
  concept: GeneratedCurriculum["concepts"][number],
  raw: z.infer<typeof curriculumSchema>["concepts"][number],
): LessonContent {
  const q = (
    stage: "guided" | "independent" | "application",
    data: typeof raw.guidedQuestion,
    id: string,
  ) => ({
    id: `${stage}-${id}`,
    stage,
    question: {
      id: `${stage}-${id}`,
      type: data.type,
      prompt: data.prompt,
      choices: data.choices,
      acceptedAnswers: data.acceptedAnswers,
      hints: data.hints.slice(0, 4),
      explanation: data.explanation,
      sourceRefs: concept.sourceRefs,
      askConfidence: true,
    },
  });

  return {
    estimatedMinutes: 5,
    steps: [
      {
        id: `orient-${concept.id}`,
        stage: "orient",
        objective: concept.learningObjective,
        whyItMatters: concept.whyItMatters,
        priorConnection: concept.prerequisites.length
          ? "Builds on concepts you have started learning in this course."
          : "We'll start from first principles with one clear idea.",
      },
      {
        id: `explain-${concept.id}`,
        stage: "explain",
        plainLanguage: raw.plainExplanation,
        preciseTerms: raw.formulas.join(" · ") || undefined,
        sourceRefs: concept.sourceRefs,
      },
      {
        id: `demo-${concept.id}`,
        stage: "demonstrate",
        title: "Worked example",
        steps:
          raw.workedExampleSteps.length > 0
            ? raw.workedExampleSteps
            : [{ label: "Idea", detail: concept.summary }],
      },
      q("guided", raw.guidedQuestion, concept.id),
      q("independent", raw.independentQuestion, concept.id),
      q("application", raw.applicationQuestion, concept.id),
      {
        id: `reflect-${concept.id}`,
        stage: "reflect",
        summary: concept.summary,
        strengthsPrompt: "Capture what you can now explain without looking.",
        uncertaintyPrompt: "Note anything still fuzzy for spaced review.",
        xp: 40,
      },
    ],
  };
}

function heuristicCurriculum(extraction: DocumentExtraction): GeneratedCurriculum {
  const headings = extraction.pages
    .map((p) => {
      const line =
        p.text
          .split("\n")
          .map((l) => l.trim())
          .find((l) => l.length > 8 && l.length < 100) || `Topic from page ${p.page}`;
      return { title: cleanHeading(line), page: p.page, text: p.text };
    })
    .filter((h, i, arr) => arr.findIndex((x) => x.title === h.title) === i)
    .slice(0, 6);

  if (headings.length === 0) {
    return buildSampleCurriculum();
  }

  const concepts = headings.map((h, i) => {
    const id = `c-${i + 1}-${slug(h.title)}`;
    const sourceRefs: SourceRef[] = [
      {
        filename: extraction.filename,
        page: h.page,
        excerpt: h.text.slice(0, 180),
        supplemental: false,
      },
    ];
    const excerpt = h.text.slice(0, 320) || h.title;
    return {
      id,
      title: h.title,
      summary: excerpt,
      learningObjective: `Understand and independently explain: ${h.title}`,
      whyItMatters: `This idea appears in your uploaded materials (p. ${h.page}).`,
      prerequisites: i > 0 ? [`c-${i}-${slug(headings[i - 1].title)}`] : [],
      misconceptions: [`Confusing ${h.title} with neighboring topics`],
      formulas: [],
      sourceRefs,
      difficulty: 0.4 + (i % 3) * 0.1,
      sortOrder: i,
      unitTitle: i < Math.ceil(headings.length / 2) ? "Unit 1" : "Unit 2",
      excerpt,
    };
  });

  return {
    title: titleFromFilename(extraction.filename),
    subject: "Uploaded course",
    units: [
      {
        title: "Unit 1",
        conceptIds: concepts.filter((c) => c.unitTitle === "Unit 1").map((c) => c.id),
      },
      {
        title: "Unit 2",
        conceptIds: concepts.filter((c) => c.unitTitle === "Unit 2").map((c) => c.id),
      },
    ].filter((u) => u.conceptIds.length),
    concepts: concepts.map(({ excerpt: _, ...c }) => c),
    lessons: concepts.map((c) => ({
      conceptId: c.id,
      title: c.title,
      content: {
        estimatedMinutes: 4,
        steps: [
          {
            id: `o-${c.id}`,
            stage: "orient",
            objective: c.learningObjective,
            whyItMatters: c.whyItMatters,
            priorConnection: "Connected to earlier ideas in your slides.",
          },
          {
            id: `e-${c.id}`,
            stage: "explain",
            plainLanguage: (c as { excerpt?: string }).excerpt || c.summary,
            sourceRefs: c.sourceRefs,
          },
          {
            id: `d-${c.id}`,
            stage: "demonstrate",
            title: "From your slides",
            steps: [
              { label: "Source", detail: `See page ${c.sourceRefs[0]?.page}` },
              { label: "Focus", detail: c.summary.slice(0, 200) },
            ],
          },
          {
            id: `g-${c.id}`,
            stage: "guided",
            question: {
              id: `gq-${c.id}`,
              type: "short_answer",
              prompt: `In your own words, what is the key idea of “${c.title}”?`,
              acceptedAnswers: [c.title, ...c.summary.split(" ").slice(0, 8)],
              hints: [
                "Skim the core definition first.",
                "Name the concept and one property.",
                c.summary.slice(0, 120),
              ],
              explanation: c.summary,
              sourceRefs: c.sourceRefs,
              askConfidence: true,
            },
          },
          {
            id: `i-${c.id}`,
            stage: "independent",
            question: {
              id: `iq-${c.id}`,
              type: "self_explain",
              prompt: `Why does “${c.title}” matter for this course?`,
              acceptedAnswers: [c.whyItMatters, c.summary],
              hints: [
                "Connect to a decision or later topic.",
                "Avoid restating the title alone.",
              ],
              explanation: c.whyItMatters,
              sourceRefs: c.sourceRefs,
              askConfidence: true,
            },
          },
          {
            id: `a-${c.id}`,
            stage: "application",
            question: {
              id: `aq-${c.id}`,
              type: "scenario",
              prompt: `Give one example situation where misunderstanding “${c.title}” would cause a mistake.`,
              acceptedAnswers: ["mistake", "error", "wrong", c.title],
              hints: ["Think of a concrete homework or exam scenario."],
              explanation:
                "Transfer requires applying the idea beyond the slide wording. Review the source slide if stuck.",
              sourceRefs: c.sourceRefs,
              askConfidence: true,
            },
          },
          {
            id: `r-${c.id}`,
            stage: "reflect",
            summary: c.summary,
            strengthsPrompt: "Note what you retrieved independently.",
            uncertaintyPrompt: "Flag fuzzy parts for spaced review.",
            xp: 35,
          },
        ],
      },
    })),
  };
}

function slug(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
}

function cleanHeading(line: string): string {
  return line.replace(/^slide\s*\d+[:.\s-]*/i, "").trim() || line.trim();
}

function titleFromFilename(name: string): string {
  return name.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").trim() || "Uploaded course";
}
