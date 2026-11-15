export type StudyMode =
  | "learn_from_zero"
  | "quick_review"
  | "exam_prep"
  | "deep_understanding";

export type KnowledgeState =
  | "unlearned"
  | "developing"
  | "practicing"
  | "provisional_mastery"
  | "retained_mastery";

export type Confidence = "guessing" | "somewhat" | "very";

export type QuestionType =
  | "multiple_choice"
  | "fill_blank"
  | "short_answer"
  | "scenario"
  | "numerical"
  | "self_explain";

export type LessonStage =
  | "orient"
  | "explain"
  | "demonstrate"
  | "guided"
  | "independent"
  | "application"
  | "reflect";

export type SourceRef = {
  documentId?: string;
  filename: string;
  page: number;
  excerpt?: string;
  supplemental?: boolean;
};

export type LessonStep =
  | {
      id: string;
      stage: "orient";
      objective: string;
      whyItMatters: string;
      priorConnection: string;
    }
  | {
      id: string;
      stage: "explain";
      plainLanguage: string;
      preciseTerms?: string;
      visual?: { kind: "diagram" | "equation" | "comparison"; content: string };
      sourceRefs: SourceRef[];
    }
  | {
      id: string;
      stage: "demonstrate";
      title: string;
      steps: { label: string; detail: string }[];
      visual?: string;
    }
  | {
      id: string;
      stage: "guided" | "independent" | "application";
      question: LessonQuestion;
    }
  | {
      id: string;
      stage: "reflect";
      summary: string;
      strengthsPrompt: string;
      uncertaintyPrompt: string;
      xp: number;
    };

export type LessonQuestion = {
  id: string;
  type: QuestionType;
  prompt: string;
  choices?: string[];
  acceptedAnswers: string[];
  rubric?: string;
  misconceptionMap?: Record<string, string>;
  hints: string[];
  explanation: string;
  sourceRefs: SourceRef[];
  askConfidence?: boolean;
};

export type LessonContent = {
  estimatedMinutes: number;
  steps: LessonStep[];
};

export type ConceptNode = {
  id: string;
  title: string;
  summary: string;
  learningObjective: string;
  whyItMatters: string;
  prerequisites: string[];
  misconceptions: string[];
  formulas: string[];
  sourceRefs: SourceRef[];
  difficulty: number;
  sortOrder: number;
  unitTitle: string;
};

export type GeneratedCurriculum = {
  title: string;
  subject: string;
  units: { title: string; conceptIds: string[] }[];
  concepts: ConceptNode[];
  lessons: {
    conceptId: string;
    title: string;
    content: LessonContent;
  }[];
};
