import { useNavigate } from "react-router-dom";
import Base from "../components/Base";
import PostForm from "../components/PostForm";
import { useAuthContext } from "../context/AuthContext";
import { useEffect } from "react";

const CreatePostPage = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Base>
      <PostForm />
    </Base>
  );
};

export default CreatePostPage;
