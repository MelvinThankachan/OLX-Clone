import { useEffect, useState } from "react";
import Post from "./Post";
import { PostType } from "../misc/utils";

const PostsGrid = () => {
  const [postList, setPostList] = useState<PostType[]>([]);
  const getPosts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const posts = await response.json();
    setPostList(posts);
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="p-4 flex flex-col gap-4 max-w-7xl min-w-[1024px] mx-auto ">
      <h1 className="text-2xl">Fresh recommendations</h1>
      <div className="w-full grid grid-cols-3 lg:grid-cols-4 gap-4">
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <div className="m-auto">
        <button className="border-2 rounded p-3 text-center font-semibold border-primary">
          Load more
        </button>
      </div>
    </div>
  );
};

export default PostsGrid;
