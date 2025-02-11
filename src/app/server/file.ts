'use server'
import OpenAI from 'openai';
import z from 'zod';
import { zodResponseFormat } from "openai/helpers/zod";

const client = new OpenAI({
  apiKey: process.env['OPENAI_KEY'], // This is the default and can be omitted
});

export async function isOffensive(text: string) {
  const offensiveOutput = z.object({
    result: z.number().int()
  })

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { 'role': "system", "content": "Classify the following text into how offensive it is on a scale of 1 to 100. Act as a emotion classifier, give estimates" },
      { 'role': "user", "content": text }
    ],
    response_format: zodResponseFormat(offensiveOutput, "result")
  })

  const output = JSON.parse(response.choices[0]!.message.content as any) as z.infer<typeof offensiveOutput>

  return output.result
}

export async function isIronic(text: string) {
  const ironicOutput = z.object({
    result: z.number().int()
  })

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { 'role': "system", "content": "Classify the following text into how ironic it is on a scale of 1 to 100. Act as a emotion classifier, give estimates" },
      { 'role': "user", "content": text }
    ],
    response_format: zodResponseFormat(ironicOutput, "result")
  })

  const output = JSON.parse(response.choices[0]!.message.content as any) as z.infer<typeof ironicOutput>

  return output.result
}

export async function generateLLMOutput(text: string) {
  const system_prompt = "Analyze the input tone, style, and language patterns, then generate a casual, Gen-Z response that matches the intent and flows naturally with informal expressions or slang where fitting."
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { 'role': "system", "content": system_prompt},
      { 'role': "user", "content": text }
    ],
  })

  return response.choices[0].message.content as string

}