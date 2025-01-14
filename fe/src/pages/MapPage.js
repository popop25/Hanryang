import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MapBox from "@/components/map/MapBox";
import RecommendationList from "@/components/map/RecommendationList";
const MapPage = () => {
    return (_jsxs("div", { className: "w-full flex flex-col items-center", children: [_jsx("div", { className: "w-[80%] h-[500px] my-4", children: _jsx(MapBox, {}) }), _jsx("div", { className: "w-[80%]", children: _jsx(RecommendationList, { onSelect: (id) => console.log(`Selected: ${id}`) }) })] }));
};
export default MapPage;
