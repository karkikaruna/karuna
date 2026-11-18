import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, ClockIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PostBody, { slugify } from "../../components/blog/PostBody";
import { formatDate, getAllPosts, getPostBySlug, getReadingTime } from "@/data/posts";

// The site is exported as static HTML, so every post is built ahead of time
// and unknown slugs are a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Karuna`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headings = post.blocks.filter((b) => b.type === "h2");

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="container mx-auto mt-24 px-6 py-4 md:px-12">
        <article className="mx-auto max-w-3xl py-12">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-[#778da9] transition hover:text-white"
          >
            <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
            All posts
          </Link>

          <header>
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-[#e0e1dd]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl font-extrabold leading-tight text-white md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 flex items-center gap-1.5 text-sm text-[#778da9]">
              <ClockIcon className="h-4 w-4" aria-hidden="true" />
              {formatDate(post.date)} · {getReadingTime(post)} min read
            </p>
            {post.repoUrl && (
              <a
                href={post.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/30 px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-[#0d1b2a]"
              >
                <CodeBracketIcon className="h-5 w-5" aria-hidden="true" />
                View the source code
              </a>
            )}
          </header>

          {headings.length > 2 && (
            <nav
              aria-label="Table of contents"
              className="mt-10 rounded-xl border border-white/10 bg-white/[0.04] p-5"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#778da9]">
                In this post
              </p>
              <ol className="text-sm sm:columns-2 sm:gap-x-8">
                {headings.map((h) => (
                  <li key={h.text} className="mb-1.5 break-inside-avoid">
                    <a
                      href={`#${slugify(h.text)}`}
                      className="text-[#e0e1dd] transition hover:text-[#38bdf8]"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="mt-6">
            <PostBody blocks={post.blocks} />
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center">
            <p className="text-lg font-semibold text-white">Enjoyed this post?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/blog"
                className="rounded-xl bg-fourth-bg px-6 py-3 font-semibold text-header shadow-md transition hover:bg-hovercolor"
              >
                More posts
              </Link>
              <Link
                href="/#contact"
                className="rounded-xl border border-hovercolor px-6 py-3 text-hovercolor shadow-md transition hover:bg-hovercolor hover:text-header"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </main>
  );
}
