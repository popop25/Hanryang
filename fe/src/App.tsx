// src/App.tsx
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import useAuthStore from "./stores/authStore";
import Layout from "./components/common/Layout";

import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import RecommendationPage from "./pages/RecommendationPage";
import KakaoCallback from "./pages/KakaoCallback";

const App: React.FC = () => {
  const checkLoginStatus = useAuthStore((state) => state.checkLoginStatus);

  // 앱 로드 시 로그인 상태 확인
  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommendation" element={<RecommendationPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/auth/kakao/callback" element={<KakaoCallback />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
