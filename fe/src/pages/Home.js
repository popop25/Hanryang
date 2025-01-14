import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/Home.tsx
import BouncingBall from "../components/home/BouncingBall";
import HumanCharacter from "../components/home/HumanCharacter";
const Home = () => {
    return (_jsxs("div", { className: "flex flex-col items-center justify-center w-full h-full", children: [_jsx(BouncingBall, {}), _jsx(HumanCharacter, {})] }));
};
export default Home;
