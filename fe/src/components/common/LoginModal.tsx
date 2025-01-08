import React from "react";
import Modal from "./Modal";
import { useAuth } from "../../hooks/useAuth";

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      await login();
      onClose();
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  return (
    <Modal onClose={onClose}>
      <h2 className="text-xl font-bold mb-4">
        카카오 로그인을 진행하시겠습니까?
      </h2>
      <div className="flex justify-between">
        <button
          onClick={handleLogin}
          className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
        >
          로그인
        </button>
        <button
          onClick={onClose}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
        >
          취소
        </button>
      </div>
    </Modal>
  );
};

export default LoginModal;
