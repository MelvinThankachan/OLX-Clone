import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

type AuthContextType = {
  user: User | null;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export default AuthContext;

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
