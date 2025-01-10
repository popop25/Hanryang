// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import RecommendationPage from "./pages/RecommendationPage";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommendation" element={<RecommendationPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
