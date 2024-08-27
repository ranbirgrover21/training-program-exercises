import { useEffect, useState } from "react";

import { File, Line, LineState, Resource } from "./types";
import Highlight from "./components/Highlight";

const CODE_FILES: File[] = [
  {
    filename: "WarpPacket.java",
    language: "java",
  },
  {
    filename: "function.py",
    language: "python",
  }
];

const getRandomLine = async (): Promise<Line> => {
  const fileIndex = Math.floor(Math.random() * CODE_FILES.length);
  const file = CODE_FILES[fileIndex];

  const contents = await fetch(`/code/${file.filename}`);
  const rawText = await contents.text();
  const lines = rawText.split("\n").filter(line => line.length > 0);

  const lineIndex = Math.floor(Math.random() * lines.length);

  return {
    contents: lines[lineIndex].trimStart(),
    language: file.language,
  };
};

export default function App() {
  const codeLine = {
    contents: "console.log('Hello, World!');",
    language: "javascript",
  };

  return (
    <div>
      <div className="bg-gray-200 p-2 w-1/2 mt-5 m-auto rounded-md">
        <Highlight
          contents={codeLine.contents}
          language={codeLine.language} />
      </div>
      <div className="bg-gray-200 p-5 w-1/2 mt-10 m-auto">
        <p>Lines of code written: {0}</p>
        <br />
        <button
          className="bg-gray-400 p-1 rounded-sm">
          Add line
        </button>
      </div>
    </div>
  );
}
