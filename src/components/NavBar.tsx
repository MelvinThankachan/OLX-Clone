import { Link, useNavigate } from "react-router-dom";
import Add from "../assets/icons/Add";
import ButtonBorder from "../assets/icons/ButtonBorder";
import DownArrow from "../assets/icons/DownArrow";
import Lens from "../assets/icons/Lens";
import Logo from "../assets/icons/Logo";
import { useState } from "react";
import LoginModal from "./LoginModal";
import { useAuthContext } from "../context/AuthContext";
import { getAuth, signOut } from "firebase/auth";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpen = () => setIsModalOpen(!isModalOpen);

  const { user } = useAuthContext();
  const auth = getAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <>
      <nav className="sticky top-0 left-0 flex p-4 gap-4 justify-between w-screen bg-secondary z-10">
        <Link to="/">
          <Logo className="w-12" />
        </Link>
        <div className="location bg-white p-2 flex gap-4 items-center border-2 rounded border-primary ">
          <div className="search-icon w-5">
            <Lens className="w-auto" />
          </div>
          <input
            className="location-input focus:outline-none"
            type="text"
            value="India"
            onChange={() => {}}
          />
          <div className="dropdown-arrow ">
            <DownArrow className="w-6" />
          </div>
        </div>
        <div className="search-tab bg-white flex flex-grow  gap-4 items-center justify-between border-2 rounded border-primary ">
          <input
            className="search-input p-2 flex-grow focus:outline-none"
            type="text"
            placeholder="Find cars, Mobile Phones and more..."
          />
          <div className="bg-primary h-full flex px-4">
            <Lens className="w-6 fill-white" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-bold text-sm">ENGLISH</span>
          <DownArrow className="w-6" />
        </div>
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <img
                src={
                  user.photoURL ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBcPHzBjqWRUL7QeEluahJrsa56i5ulJ0_Q&s"
                }
                alt="User Profile"
                className="w-8 h-8 rounded-full"
              />
              <span
                onClick={handleLogout}
                className="font-bold text-base underline hover:no-underline underline-offset-4 cursor-pointer"
              >
                Logout
              </span>
            </>
          ) : (
            <span
              onClick={handleOpen}
              className="font-bold text-base underline hover:no-underline underline-offset-4 cursor-pointer"
            >
              Login
            </span>
          )}
        </div>
        <div
          onClick={() => {
            if (!user) handleOpen();
            else {
              navigate("/create-post");
            }
          }}
          className="flex items-center relative cursor-pointer"
        >
          <button className="flex gap-2 items-center h-full px-4  font-bold text-md rounded-full bg-white border-4 border-secondary">
            <Add className="w-4" />
            SELL
          </button>
          <ButtonBorder className="absolute shadow-xl" />
        </div>
      </nav>

      {/* Login Modal */}
      {isModalOpen && <LoginModal handleClose={handleOpen} />}
    </>
  );
};

export default NavBar;
