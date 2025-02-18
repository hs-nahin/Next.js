import type { NextPage } from "next";

export const getSinglePost = async (post_id: number): Promise<PostType> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = res.json();
  return data;
};

export type PostType = {
  id: number;
  title: string;
  body: string;
};

const SinglePost: NextPage<{
  params: { id: number; title: string; body: string };
}> = async ({ params }) => {
  const p = await params;
  const singlePost = await getSinglePost(p.id);
  return (
    <>
      <div className="flex mt-20 justify-center min-h-screen ">
        <div className="text-left p-4 w-1/2">
          <p>Post No: {singlePost.id}</p>
          <h1 className="text-2xl text-rose-400">{singlePost.title}</h1>
          <p>{singlePost.body}</p>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
