import { createOpenAI } from "@ai-sdk/openai";

export function hasOpenAI(): boolean {
  return Boolean(process.env.OPENAI_API_KEY?.trim());
}

export function getOpenAI() {
  const key = process.env.OPENAI_API_KEY?.trim();
  if (!key) return null;
  return createOpenAI({ apiKey: key });
}
