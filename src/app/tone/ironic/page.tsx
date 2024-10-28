'use client'

import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, FormEvent, useState } from "react";

export default function IronicPage() {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with input:", input);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-gtEss w-2/3 mx-auto">
      <form className="flex flex-col gap-10 w-full" onSubmit={handleSubmit}>
        <div className="text-4xl">
          Enter your text
        </div>
        <Textarea
          className="shadow-lg font-geist max-h-40"
          value={input}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}