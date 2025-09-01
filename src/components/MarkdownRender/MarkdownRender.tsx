"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

type MarkdownRenderProps = {
  markdown: string;
  isMobile: boolean;
};

export const MarkdownRender: React.FC<MarkdownRenderProps> = ({
  markdown,
  isMobile,
}) => {
  const [expanded, setExpanded] = useState(false);

  if (isMobile) {
    return (
      <div
        className="relative overflow-hidden transition-all duration-300"
        style={{
          maxHeight: expanded ? "none" : "10rem", // 10rem ≈ Tailwind max-h-40
        }}
      >
        <ReactMarkdown className="markdown sm:w-2/3 w-full text-left">
          {markdown}
        </ReactMarkdown>

        {!expanded && (
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
        )}

        {!expanded && (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="mt-2 px-4 py-2 bg-main-yellow text-black rounded w-full text-center relative z-10"
          >
            Читать полностью
          </button>
        )}
      </div>
    );
  }

  return (
    <ReactMarkdown className="markdown sm:w-2/3 w-full text-left">
      {markdown}
    </ReactMarkdown>
  );
};
