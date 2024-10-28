'use client'

import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, FormEvent, useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { loadingStates } from "@/lib/loading-states";
import { getLLMResponse } from "@/server/base";
import { ToneEnum } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Clipboard } from "lucide-react";
import { getOffensiveInference } from "@/server/aggresive";

export default function AggresivePage() {
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false)
  const [level, setLevel] = useState<number | null>(null);
  const [llmResponse, setLLMResponse] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    const level = await getOffensiveInference(input);
    setLevel(level)
    setLoading(false)
  };
  const handleCopy = () => {
    if (!llmResponse) return;
    navigator.clipboard.writeText(llmResponse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  const handleLLMResponse = async () => {
    setLoading(true)
    const output = await getLLMResponse(input, ToneEnum.Offensive);
    setLLMResponse(output)
    setLoading(false)

  }

  return (
    <div className="min-h-screen font-gtEss w-2/3 mx-auto">
      <section className="flex flex-col items-center justify-center h-1/2 mt-24 bg-white/40 rounded-2xl p-10">
        <div className="text-6xl mb-20">
          Enter your text
        </div>
        <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
        <form className="flex flex-col gap-10 w-full" onSubmit={handleSubmit}>
          <Textarea
            className="shadow-lg font-geist max-h-60 min-h-18 border border-neutral-400"
            value={input}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
          />
          <Button
            type="submit"
            className="mx-20 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </Button>
        </form>
        <div className="font-geist my-5 text-xl">
          {level && (
            <div className="flex flex-col items-center gap-8">
              <div>
                That was <span className="underline">{level}</span>% offensive
              </div>
              {
                llmResponse ? (
                  <div className="flex items-center space-x-2 p-4 bg-gray-100 rounded-lg shadow-md border border-neutral-300 gap-4">
                    <div className="text-lg">
                      You could reply with <span className="font-bold">{llmResponse}</span>
                    </div>
                    {copied ? <span className="text-green-600 text-sm">Copied!</span> : (<Clipboard className="w-6 h-6 cursor-pointer" onClick={handleCopy} />
                    )}
                  </div>
                ) : (
                  <Button
                    onClick={handleLLMResponse}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 hover:scale-105 transition duration-300"
                  >
                    Get an appropriate response for it?
                  </Button>)
              }
            </div>
          )}
        </div>
      </section>
    </div>
  );
}