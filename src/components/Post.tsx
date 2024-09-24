import { useState } from "react";
import Heart from "../assets/icons/Heart";
import { PostType } from "../misc/utils";
import { Link } from "react-router-dom";
import slugify from "slugify";

type PostProps = {
  post: PostType;
};

const Post = ({ post }: PostProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const slug = slugify(post.title, { lower: true, strict: true });
  return (
    <Link
      to={`/item/${post.id}/${slug}`}
      className="p-3 border border-gray-300 rounded overflow-hidden flex flex-col"
    >
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-44 object-cover"
        />
        <button
          className={`bg-white p-2 rounded-full absolute top-2 right-2 ${
            isLiked && "fill-red-500"
          }`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart isLiked={isLiked} className="fill-red w-6" />
        </button>
      </div>
      <div className="flex flex-col ">
        <span className="text-xl font-bold ">₹ {post.price}</span>
        <div className="flex flex-col justify-between gap-2">
          <span className="truncate font-normal text-gray-500 text-base">
            {post.title}
          </span>
          <div className="flex justify-between">
            <span className="truncate font-light text-gray-500 text-sm">
              {post.category}
            </span>
            <span className="truncate font-light text-gray-500 text-sm">
              {post.rating.rate} &#9733;
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
