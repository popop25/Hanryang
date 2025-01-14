import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Modal = ({ onClose, children }) => {
    return (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50", children: _jsxs("div", { className: "bg-white p-6 rounded shadow-lg w-3/4 max-w-sm", children: [children, _jsx("button", { onClick: onClose, className: "mt-4 w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700", children: "\uB2EB\uAE30" })] }) }));
};
export default Modal;
