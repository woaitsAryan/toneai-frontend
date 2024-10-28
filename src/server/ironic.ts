'use server'

import { ToneResponse } from "@/lib/types";

export async function getIronicInference(text: string) {
  const response = await fetch(process.env.BACKEND_URL + "/ironic/", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ message: text }).toString(),
  });
  const body = await response.json() as ToneResponse;
  return body.tone.value;
}