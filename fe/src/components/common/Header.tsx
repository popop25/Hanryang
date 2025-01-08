import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">
        <Link to="/">PLAY GROUND</Link>
      </div>
      <nav className="flex space-x-4">
        <Link to="/team" className="hover:underline">
          TEAM
        </Link>
        <Link to="/recommendation" className="hover:underline">
          RECOMMEND
        </Link>
        <Link to="/map" className="hover:underline">
          MAP
        </Link>
        <button onClick={handleOpenModal} className="hover:underline">
          LOGIN
        </button>
      </nav>
      {isModalOpen && <LoginModal onClose={handleCloseModal} />}
    </header>
  );
};

export default Header;
