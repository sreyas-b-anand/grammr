"use client";

import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Ask() {
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);
  const [paragraph, setParagraph] = useState("");
  const [value, setValue] = useState("");
  const [responseText, setResponsetext] = useState("");
  useEffect(() => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `You are an ai model who will check any grammar errors in a a provide text.The paragraph to correct will be provided at the end of prompt.Also provide the errors and corrections one by one with good readability.Dont add * in the corrected sentence.The paragraph to convert is ${value} `;
    async function run() {
      const result = await model.generateContent(prompt);
      const response = result.response;
      setResponsetext(response.text());
    }
    run();
  }, [value]);
  const handleSubmit = () => {
    setValue(paragraph);
    setParagraph("");
  };
  const handleDelete = () => {
    setParagraph("");
  };

  return (
    <main className="w-screen h-screen bg-bg flex items-center justify-center">
      <div className=" flex flex-col flex-wrap flex-shrink-2 items-center justify-center gap-8 bg-slate-500 p-5 pb-7 rounded">
        <header className="px-2 text-center text-white font-semibold text-xl">
          Check and Improve Your Grammar Here
        </header>
        <textarea
          readOnly
          className=" max-w-80 w-full p-2  h-40 flex flex-shrink-2 flex-wrap border border-primary rounded bg-gray-600 text-white"
          value={responseText}
          placeholder="Formatted text will be displayed here"
        ></textarea>
        <section className="flex flex-wrap items-center rounded-md justify-center gap-3 p-2 bg-gray-600  ">
          <textarea
            className="flex flex-shrink-2 flex-wrap  rounded bg-gray-600 text-white px-3"
            value={paragraph}
            onChange={(e) => setParagraph(e.target.value)}
            placeholder="Your prompt here"
          />
          <div className="flex justify-center items-center gap-2">
            <button
              className="bg-blue-600 px-1.5 rounded-md text-white "
              onClick={handleSubmit}
            >
              Send
            </button>
            <button
              onClick={handleDelete}
              className="bg-blue-600 px-1.5 rounded text-white "
            >
              Clear
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
