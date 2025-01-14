import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import useAuthStore from "@/stores/authStore";
import { redirectToKakaoLogin } from "@/api/authApi";
const Header = () => {
    const { user, logout, loading } = useAuthStore();
    const handleLogin = () => {
        redirectToKakaoLogin(); // 카카오 로그인 페이지로 이동
    };
    const handleLogout = async () => {
        try {
            await logout();
        }
        catch (err) {
            console.error("로그아웃 실패:", err);
        }
    };
    return (_jsxs("header", { className: "flex justify-between items-center p-4 bg-gray-800 text-white", children: [_jsx("div", { className: "text-lg font-bold", children: _jsx(Link, { to: "/", children: "PLAY GROUND" }) }), _jsxs("nav", { className: "flex space-x-4", children: [_jsx(Link, { to: "/recommendation", className: "hover:underline", children: "RECOMMEND" }), _jsx(Link, { to: "/map", className: "hover:underline", children: "MAP" }), user ? (_jsxs("button", { onClick: handleLogout, className: "hover:underline", children: ["LOGOUT ", user.nick] })) : (_jsx("button", { onClick: handleLogin, className: "hover:underline", children: "LOGIN" }))] }), loading && _jsx("p", { children: "Loading..." })] }));
};
export default Header;
