import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import PostCard from "./blog/PostCard";
import { getAllPosts } from "@/data/posts";

const BlogSection = () => {
  const latest = getAllPosts().slice(0, 3);
  if (latest.length === 0) return null;
  const single = latest.length === 1;

  return (
    <section id="blog" className="bg-background py-20 px-6 md:px-12 relative">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">From the Blog</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-textcolor">
          Things That Interest Me.
        </p>
      </div>

      {single ? (
        <div className="mx-auto max-w-5xl">
          <PostCard post={latest[0]} featured />
        </div>
      ) : (
        <ul className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {latest.map((post) => (
            <li key={post.slug}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      )}

      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-xl border border-hovercolor px-6 py-3 text-hovercolor shadow-md transition hover:bg-hovercolor hover:text-header"
        >
          View all posts
          <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
