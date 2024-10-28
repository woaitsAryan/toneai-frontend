import { Tone } from "@/lib/types";

export function getLLMResponse(text: string, tone: Tone) {
  return `LLM response for text: ${text} ${tone}`
}