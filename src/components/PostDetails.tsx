import { Navigate } from "react-router-dom";
import { PostType } from "../misc/utils";
import AuthContext, { useAuth } from "../context/AuthContext";
import { useContext } from "react";
import PlaceholderImage from "../assets/images/PlaceholderImage";

type PostDetailsProps = {
  post: PostType | undefined;
};
const PostDetails = ({ post }: PostDetailsProps) => {
  const { user } = useAuth();

  if (post === undefined) {
    return <Navigate to="/NotFound404" />;
  }
  return (
    <div className="content bg-[#f2f4f5] w-full justify-center">
      <div className="flex flex-col lg:flex-row gap-3 w-screen p-5 max-w-screen-xl">
        <div className="flex flex-col gap-3 min-w-[66%]">
          <div className="post-details pb-10">
            <div className="bg-black w-full">
              <img
                src={post.image}
                alt=""
                className="h-[500px] w-full object-contain"
              />
            </div>
            <div className="p-4"></div>
          </div>
          <div className="post-details">
            <h1 className="font-bold text-2xl">Description</h1>
            <p>{post.description}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="post-details">
            <h1 className="font-bold text-4xl">₹ {post.price}</h1>
            <p>Get {post.title} at genuine price in your budget.</p>
            <p>Posted on {post.rating.count}</p>
          </div>
          <div className="post-details">
            <h1 className="font-bold text-2xl">Posted by</h1>
            <div className="flex gap-3 items-center">
              {user ? (
                <>
                  <img
                    src={user.photoURL || ""}
                    alt=""
                    className="w-16 rounded-full"
                  />
                  <span className="">{user.displayName}</span>
                </>
              ) : (
                <>
                  <PlaceholderImage size={30} className="w-16 rounded-full" />
                  <span className="">Unknown</span>
                </>
              )}
            </div>
            <div className="border border-primary rounded w-full">
              <button className="flex justify-center px-4 py-3 border-4 border-transparent font-semibold hover:border-primary w-full">
                Chat with seller
              </button>
            </div>
          </div>
          <div className="flex justify-between font-bold text-sm px-1">
            <span>AD ID {post.id}</span>
            <span>Report this ad</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
