import Categories from "./Categories";
import Footer from "./Footer";
import NavBar from "./NavBar";

type BaseProps = {
  children: JSX.Element;
};

const Base = ({ children }: BaseProps) => {
  return (
    <div className="bg-white min-h-screen flex flex-col gap-4 text-primary">
      <NavBar />
      <Categories />
      {children}
      <Footer />
    </div>
  );
};

export default Base;
