import React from "react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-3/4 max-w-sm">
        {children}
        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default Modal;
