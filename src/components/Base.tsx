import { AuthProvider } from "../context/AuthContext";
import Categories from "./Categories";
import Footer from "./Footer";
import NavBar from "./NavBar";

type BaseProps = {
  children: JSX.Element;
};

const Base = ({ children }: BaseProps) => {
  return (
    <AuthProvider>
      <div className="bg-white min-h-screen flex flex-col gap-4 text-primary min-w-[1024px]">
        <NavBar />
        <Categories />
        {children}
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default Base;
