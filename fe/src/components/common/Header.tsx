import React from "react";
import { Link } from "react-router-dom";
import useAuthStore from "@/stores/authStore";
import { redirectToKakaoLogin } from "@/api/authApi";

const Header: React.FC = () => {
  const { user, logout, loading } = useAuthStore();

  const handleLogin = () => {
    redirectToKakaoLogin(); // 카카오 로그인 페이지로 이동
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error("로그아웃 실패:", err);
    }
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">
        <Link to="/">PLAY GROUND</Link>
      </div>
      <nav className="flex space-x-4">
        <Link to="/recommendation" className="hover:underline">
          RECOMMEND
        </Link>
        <Link to="/map" className="hover:underline">
          MAP
        </Link>
        {user ? (
          <button onClick={handleLogout} className="hover:underline">
            LOGOUT {user.nick}
          </button>
        ) : (
          <button onClick={handleLogin} className="hover:underline">
            LOGIN
          </button>
        )}
      </nav>
      {loading && <p>Loading...</p>}
    </header>
  );
};

export default Header;
