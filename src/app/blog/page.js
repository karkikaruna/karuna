import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PostCard from "../components/blog/PostCard";
import { getAllPosts } from "@/data/posts";

export const metadata = {
  title: "Blog | Karuna",
  description:
    "Notes on algorithms, programming and the projects I build, written to help others learn.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="container mx-auto mt-24 px-6 py-4 md:px-12">
        <section className="py-16">
          <div className="mb-14 text-center">
            <h1 className="text-4xl font-extrabold text-white md:text-5xl">Blog</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#e0e1dd]">
              Notes on algorithms, programming and the projects I build, written to help
              others learn.
            </p>
          </div>

          {featured ? (
            <div className="mx-auto max-w-5xl">
              <PostCard post={featured} featured />

              {rest.length > 0 && (
                <ul className="mt-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                  {rest.map((post) => (
                    <li key={post.slug}>
                      <PostCard post={post} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <p className="text-center text-[#778da9]">No posts yet. Check back soon.</p>
          )}
        </section>
        <Footer />
      </div>
    </main>
  );
}
