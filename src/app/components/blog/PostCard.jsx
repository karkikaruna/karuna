import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, ClockIcon } from "@heroicons/react/24/outline";
import { formatDate, getReadingTime } from "@/data/posts";

const PostCard = ({ post, featured = false }) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex overflow-hidden rounded-2xl border border-white/10 bg-[#415a77]/30 shadow-xl backdrop-blur-md transition-all duration-500 hover:border-white/25 hover:shadow-white/10 ${
        featured ? "flex-col md:flex-row" : "h-full flex-col"
      }`}
    >
      <div
        className={`relative overflow-hidden bg-[#0d1b2a] ${
          featured ? "h-56 md:h-auto md:w-1/2" : "h-48"
        }`}
      >
        <Image
          src={post.cover}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className={`flex flex-1 flex-col p-6 ${featured ? "md:w-1/2 md:p-8" : ""}`}>
        <div className="mb-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-[#e0e1dd]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3
          className={`font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#00d4ff] group-hover:to-[#7f5af0] group-hover:bg-clip-text group-hover:text-transparent ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {post.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#e0e1dd]">{post.excerpt}</p>

        <div className="mt-5 flex items-center justify-between text-sm text-[#778da9]">
          <span className="flex items-center gap-1.5">
            <ClockIcon className="h-4 w-4" aria-hidden="true" />
            {formatDate(post.date)} · {getReadingTime(post)} min read
          </span>
          <span className="flex items-center gap-1 font-medium text-[#e0e1dd] transition-all group-hover:gap-2">
            Read <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
