"use client";
import React, { useState } from "react";
import { ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/outline";


const PY =
  /(#.*)|("""[\s\S]*?"""|'(?:\\.|[^'\\\n])*'|"(?:\\.|[^"\\\n])*")|\b(def|return|if|elif|else|for|while|in|and|or|not|import|from|as|None|True|False|break|continue|pass|class|lambda|is)\b|\b(len|range|print|sorted|min|max|sum|int|str|list)\b|\b(\d+(?:\.\d+)?)\b/g;

const SH =
  /(#.*)|("(?:\\.|[^"\\])*")|(--[\w-]+)|^(python|pip|ffmpeg)\b/gm;

const PY_CLASSES = [
  "text-[#6b7a90] italic", // comment
  "text-[#a5e3b0]", //        string
  "text-[#c4a7ff]", //        keyword
  "text-[#7dd3fc]", //        built-in
  "text-[#fdba74]", //        number
];

const SH_CLASSES = [
  "text-[#6b7a90] italic", // comment
  "text-[#a5e3b0]", //        string
  "text-[#7dd3fc]", //        flag
  "text-[#c4a7ff]", //        command
];

function highlight(code, lang) {
  const regex = lang === "python" ? PY : lang === "bash" ? SH : null;
  if (!regex) return code;
  const classes = lang === "python" ? PY_CLASSES : SH_CLASSES;

  const out = [];
  let last = 0;
  let n = 0;
  for (const m of code.matchAll(regex)) {
    if (m.index > last) out.push(code.slice(last, m.index));
    const group = m.findIndex((g, i) => i > 0 && g !== undefined) - 1;
    out.push(
      <span key={n++} className={classes[group]}>
        {m[0]}
      </span>
    );
    last = m.index + m[0].length;
  }
  if (last < code.length) out.push(code.slice(last));
  return out;
}

const CodeBlock = ({ code, lang = "text", caption }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard can be blocked (for example on plain http). Nothing to do.
    }
  };

  return (
    <figure className="my-6">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1b2a] shadow-lg">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#778da9]">
            {lang}
          </span>
          <button
            type="button"
            onClick={copy}
            className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-[#e0e1dd] transition hover:bg-white/10"
            aria-label="Copy code to clipboard"
          >
            {copied ? (
              <CheckIcon className="h-4 w-4 text-emerald-400" />
            ) : (
              <ClipboardDocumentIcon className="h-4 w-4" />
            )}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed text-[#e0e1dd] md:text-sm">
          <code className="font-mono">{highlight(code, lang)}</code>
        </pre>
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-[#778da9]">{caption}</figcaption>
      )}
    </figure>
  );
};

export default CodeBlock;
