import { useNavigate } from "react-router-dom";
import Base from "../components/Base";
import PostForm from "../components/PostForm";
import { useAuthContext } from "../context/AuthContext";

const CreatePostPage = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  if (!user) {
    navigate("/");
  }
  return (
    <Base>
      <PostForm />
    </Base>
  );
};

export default CreatePostPage;
