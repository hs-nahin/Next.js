// app/posts/page.tsx (or similar)
import Link from "next/link";
import { Suspense } from "react";
import Loading from "../loading";
// import { metadata } from "../layout";

export const getPosts = async (): Promise<PostType[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = res.json();
  return data;
};

export const metadata = {
  title: "All Posts",
  description: "List of posts",
};

export type PostType = {
  id: number;
  title: string;
  body: string;
};

// This async component fetches and renders the posts.
// It may suspend during data fetching.
const PostsList = async () => {
  const posts = await getPosts();
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="mb-4 p-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-rose-400">{post.body}</p>
          <Link href={`/posts/${post.id}`}>
            <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-rose-400 transition">
              Details
            </button>{" "}
          </Link>
        </div>
      ))}
    </>
  );
};

// The parent component wraps PostsList with Suspense.
// (If TypeScript complains about an async component as a child, you can add a
// comment to suppress the error since this pattern is expected in Next.js.)
export default function PostsPage() {
  return <Suspense fallback={<Loading />}>{<PostsList />}</Suspense>;
}
