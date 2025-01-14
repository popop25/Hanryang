import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/App.tsx
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useAuthStore from "./stores/authStore";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import RecommendationPage from "./pages/RecommendationPage";
import KakaoCallback from "./pages/KakaoCallback";
const App = () => {
    const checkLoginStatus = useAuthStore((state) => state.checkLoginStatus);
    // 앱 로드 시 로그인 상태 확인
    useEffect(() => {
        checkLoginStatus();
    }, [checkLoginStatus]);
    return (_jsx(BrowserRouter, { children: _jsx(Layout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/recommendation", element: _jsx(RecommendationPage, {}) }), _jsx(Route, { path: "/map", element: _jsx(MapPage, {}) }), _jsx(Route, { path: "/auth/kakao/callback", element: _jsx(KakaoCallback, {}) })] }) }) }));
};
export default App;
