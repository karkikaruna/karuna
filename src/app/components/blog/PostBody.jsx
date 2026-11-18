import React from "react";
import Link from "next/link";
import {
  LightBulbIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import CodeBlock from "./CodeBlock";
import SortVideo from "./SortVideo";

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Inline formatting: **bold**, `code` and [text](url).
const INLINE = /(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

function Inline({ text }) {
  return text.split(INLINE).map((part, i) => {
    if (!part) return null;
    if (part.startsWith("`")) {
      return (
        <code
          key={i}
          className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-[#7dd3fc]"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("[")) {
      const [, label, href] = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
      const cls =
        "text-[#38bdf8] underline decoration-[#38bdf8]/40 underline-offset-2 hover:decoration-[#38bdf8]";
      return href.startsWith("/") ? (
        <Link key={i} href={href} className={cls}>
          {label}
        </Link>
      ) : (
        <a key={i} href={href} className={cls} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

const CALLOUT = {
  tip: { Icon: LightBulbIcon, box: "border-[#38bdf8]/30 bg-[#38bdf8]/10", icon: "text-[#38bdf8]" },
  note: { Icon: InformationCircleIcon, box: "border-white/15 bg-white/5", icon: "text-[#778da9]" },
  warn: { Icon: ExclamationTriangleIcon, box: "border-amber-400/30 bg-amber-400/10", icon: "text-amber-300" },
};

function Block({ block }) {
  switch (block.type) {
    case "p":
      return (
        <p className="my-4 leading-7 text-[#e0e1dd]/90">
          <Inline text={block.text} />
        </p>
      );

    case "h2":
      return (
        <h2
          id={slugify(block.text)}
          className="mt-14 mb-4 scroll-mt-28 text-2xl font-extrabold text-white md:text-3xl"
        >
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3 className="mt-8 mb-2 text-lg font-bold text-white md:text-xl">{block.text}</h3>
      );

    case "ul":
      return (
        <ul className="my-4 list-disc space-y-2 pl-6 leading-7 text-[#e0e1dd]/90 marker:text-[#778da9]">
          {block.items.map((item, i) => (
            <li key={i}>
              <Inline text={item} />
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="my-4 list-decimal space-y-2 pl-6 leading-7 text-[#e0e1dd]/90 marker:text-[#778da9]">
          {block.items.map((item, i) => (
            <li key={i}>
              <Inline text={item} />
            </li>
          ))}
        </ol>
      );

    case "code":
      return <CodeBlock code={block.code} lang={block.lang} caption={block.caption} />;

    case "video":
      return (
        <SortVideo
          src={block.src}
          poster={block.poster}
          title={block.title}
          caption={block.caption}
          width={block.width}
          height={block.height}
        />
      );

    case "table":
      return (
        <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <thead className="bg-white/10 text-white">
              <tr>
                {block.head.map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-t border-white/10 even:bg-white/[0.03]">
                  {row.map((cell, c) => (
                    <td
                      key={c}
                      className={`px-4 py-3 ${c === 0 ? "font-medium text-white" : "text-[#e0e1dd]/90"}`}
                    >
                      <Inline text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "callout": {
      const { Icon, box, icon } = CALLOUT[block.tone] || CALLOUT.note;
      return (
        <aside className={`my-6 flex gap-3 rounded-xl border p-4 ${box}`}>
          <Icon className={`mt-0.5 h-6 w-6 shrink-0 ${icon}`} aria-hidden="true" />
          <div>
            {block.title && <p className="font-semibold text-white">{block.title}</p>}
            <p className="leading-7 text-[#e0e1dd]/90">
              <Inline text={block.text} />
            </p>
          </div>
        </aside>
      );
    }

    case "qa":
      return (
        <details className="group my-3 rounded-xl border border-white/10 bg-white/[0.04] open:bg-white/[0.07]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-semibold text-white [&::-webkit-details-marker]:hidden">
            <span>
              <Inline text={block.q} />
            </span>
            <ChevronDownIcon className="h-5 w-5 shrink-0 text-[#778da9] transition-transform group-open:rotate-180" />
          </summary>
          <div className="px-4 pb-4">
            {block.a.map((para, i) => (
              <p key={i} className="mt-2 leading-7 text-[#e0e1dd]/90">
                <Inline text={para} />
              </p>
            ))}
          </div>
        </details>
      );

    default:
      return null;
  }
}

const PostBody = ({ blocks }) => (
  <div>
    {blocks.map((block, i) => (
      <Block key={i} block={block} />
    ))}
  </div>
);

export default PostBody;
