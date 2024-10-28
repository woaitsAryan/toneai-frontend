'use server'

import { ToneResponse } from "@/lib/types";

export async function getOffensiveInference(text: string) {
  const response = await fetch(process.env.BACKEND_URL + "/offensive/", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ message: text }).toString(),
  });
  const body = await response.json() as ToneResponse;
  return body.tone.value;
}