import { useState } from "react";
import Heart from "../assets/icons/Heart";
import { formatDate, PostType } from "../misc/utils";
import { Link } from "react-router-dom";
import slugify from "slugify";

type PostCardProps = {
  post: PostType;
};

const PostCard = ({ post }: PostCardProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  console.log("Post ID from card: ", post.id);

  const slug = slugify(post.title, { lower: true, strict: true });
  const postLink = `/item/${post.id}/${slug}`;
  console.log(postLink);

  return (
    <Link
      to={postLink}
      className="p-3 border border-gray-300 rounded overflow-hidden flex flex-col"
    >
      <div className="relative">
        <img
          src={post.imageUrl}
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
              {formatDate(post.date)};
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
