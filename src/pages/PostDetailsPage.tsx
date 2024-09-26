import { useParams } from "react-router-dom";
import Base from "../components/Base";
import PostDetails from "../components/PostDetails";
import { PostType } from "../misc/utils";
import { useEffect, useState } from "react";

const PostDetailsPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<PostType | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const getPost = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${postId}`
      );
      const data = await response.json();
      setPost(data);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPost();
  }, [postId]);

  return (
    <Base>{loading ? <p>Loading...</p> : <PostDetails post={post} />}</Base>
  );
};

export default PostDetailsPage;
