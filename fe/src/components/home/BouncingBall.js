import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const BouncingBall = () => {
    const handleBounce = () => {
        alert("공이 튕깁니다!");
    };
    return (_jsxs("div", { className: "flex space-x-4", children: [_jsx("button", { className: "w-12 h-12 bg-blue-500 rounded-full animate-bounce", onClick: handleBounce, children: "P" }), _jsx("button", { className: "w-12 h-12 bg-red-500 rounded-full animate-bounce", onClick: handleBounce, children: "L" }), _jsx("button", { className: "w-12 h-12 bg-green-500 rounded-full animate-bounce", onClick: handleBounce, children: "A" })] }));
};
export default BouncingBall;
