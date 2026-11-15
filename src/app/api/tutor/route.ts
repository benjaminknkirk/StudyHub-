import { generateText } from "ai";
import { requireUser } from "@/lib/auth";
import { getOpenAI, hasOpenAI } from "@/lib/ai/openai";

export async function POST(request: Request) {
  const user = await requireUser(request);
  if (user instanceof Response) return user;

  const body = await request.json();
  const {
    message,
    lessonTitle,
    conceptTitle,
    objective,
    stage,
    questionPrompt,
    sourceExcerpt,
    hintLevel = 1,
  } = body as {
    message: string;
    lessonTitle?: string;
    conceptTitle?: string;
    objective?: string;
    stage?: string;
    questionPrompt?: string;
    sourceExcerpt?: string;
    hintLevel?: number;
  };

  if (!hasOpenAI()) {
    const fallback = scaffoldHint(hintLevel, {
      conceptTitle,
      questionPrompt,
      sourceExcerpt,
    });
    return Response.json({
      reply: fallback,
      mode: "scaffold_fallback",
      note: "AI tutor using local scaffolds until OPENAI_API_KEY is configured.",
    });
  }

  const openai = getOpenAI();
  if (!openai) {
    return Response.json({ error: "ai_unavailable" }, { status: 503 });
  }

  const { text } = await generateText({
    model: openai("gpt-4o-mini"),
    system: `You are SlideQuest's AI tutor. Help students think — do not dump full answers unless they explicitly ask to reveal the solution.
Scaffolding level ${hintLevel}/4:
1 = conceptual clue only
2 = relevant principle/formula
3 = first step guidance
4 = full worked solution with explanation
Never invent lecture facts. If using supplemental knowledge, label it.
Current learner: ${user.name}`,
    prompt: `Lesson: ${lessonTitle}
Concept: ${conceptTitle}
Objective: ${objective}
Stage: ${stage}
Question: ${questionPrompt}
Source excerpt: ${sourceExcerpt || "n/a"}
Student message: ${message}`,
  });

  return Response.json({ reply: text, mode: "ai", hintLevel });
}

function scaffoldHint(
  level: number,
  ctx: {
    conceptTitle?: string;
    questionPrompt?: string;
    sourceExcerpt?: string;
  },
): string {
  if (level <= 1) {
    return `Conceptual clue: Focus on the core idea of “${ctx.conceptTitle || "this concept"}” before computing anything. What distinction is the question really testing?`;
  }
  if (level <= 2) {
    return `Relevant principle: Re-read the definition tied to this question${ctx.sourceExcerpt ? ` — slide note: “${ctx.sourceExcerpt.slice(0, 160)}”` : ""}. Name the formula or rule first.`;
  }
  if (level <= 3) {
    return `First step: Restate the question in your own words, list the knowns, then pick which quantity you need. For “${ctx.questionPrompt || "this problem"}”, identify the target metric or claim before substituting numbers.`;
  }
  return `Worked path: Identify the target concept (${ctx.conceptTitle}), write the governing definition, substitute the given values, and check whether the result is reasonable. If you reveal this full path, the attempt will be marked assisted and will not count as independent mastery.`;
}
