'use server'

import { ToneEnum } from "@/lib/types";

export async function getLLMResponse(text: string, tone: ToneEnum) {
  const response = await fetch(process.env.BACKEND_URL + "/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ message: text, tone: tone }).toString(),
  });
  const body = await response.json();
  return body.data as string;
}