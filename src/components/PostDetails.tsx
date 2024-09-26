import { Navigate } from "react-router-dom";
import { PostType } from "../misc/utils";

type PostDetailsProps = {
  post: PostType | undefined;
};
const PostDetails = ({ post }: PostDetailsProps) => {
  console.log(post);

  if (post === undefined) {
    return <Navigate to="/NotFound404" />;
  }
  return (
    <div className="content">
      <h1>{post.title}</h1>
      <h1>{post.description}</h1>
      <h1>{post.category}</h1>
      <h1>₹ {post.price}</h1>
      <h1>
        {post.rating.rate} {post.rating.count}
      </h1>
      <img src={post.image} alt="" />
    </div>
  );
};

export default PostDetails;
