import { db } from "../firebase/setup";
import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
import { PostType } from "../misc/utils";
import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";

type PostsContextType = {
  posts: PostType[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => void;
};

export const PostsContext = createContext<PostsContextType | undefined>(
  undefined
);

const PostsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const snapshot: QuerySnapshot = await getDocs(collection(db, "posts"));
      const postsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as PostType[];

      setPosts(postsData);
    } catch (err) {
      setError("Failed to fetch posts");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [setPosts]);

  return (
    <PostsContext.Provider value={{ posts, loading, error, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePostsContext = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePostsContext must be used within an PostsProvider");
  }

  return context;
};

export default PostsProvider;
