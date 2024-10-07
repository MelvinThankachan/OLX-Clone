import PostCard from "./PostCard.tsx";
import { usePostsContext } from "../context/PostsContext.tsx";

const PostsGrid = () => {
  const { posts, loading, error } = usePostsContext();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-4 flex flex-col flex-grow gap-4 max-w-7xl min-w-[1024px] mx-auto ">
      <h1 className="text-2xl">Fresh recommendations</h1>
      <div className="w-full grid grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <PostCard key={post.userId} post={post} />
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
