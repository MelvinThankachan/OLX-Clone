import { useParams } from "react-router-dom";
import Base from "../components/Base";
import PostDetails from "../components/PostDetails";
import { PostType } from "../misc/utils";
import { useEffect, useState } from "react";

const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<PostType | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getPost = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${postId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPost(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPost();
  }, [postId]);

  return (
    <Base>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <PostDetails post={post} />
      )}
    </Base>
  );
};

export default PostPage;
