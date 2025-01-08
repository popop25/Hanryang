// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import Recommendation from "./pages/Recommendation";
import MapPage from "./pages/MapPage";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
