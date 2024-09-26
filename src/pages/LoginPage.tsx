import { useState } from "react";
import Base from "../components/Base";
import LoginModal from "../components/LoginModal";

const LoginPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Base>
      <div className="content bg-primary w-full h-full justify-center">
        <button
          className="bg-white px-5 py-2 text-2xl active:scale-90"
          onClick={() => setIsModalOpen(true)}
        >
          Login
        </button>
        {isModalOpen && (
          <LoginModal handleClose={() => setIsModalOpen(false)} />
        )}
      </div>
    </Base>
  );
};

export default LoginPage;
