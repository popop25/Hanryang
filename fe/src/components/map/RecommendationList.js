import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { locations } from "../../data/locations";
const RecommendationList = ({ onSelect, }) => {
    return (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: locations.map((loc) => (_jsxs("div", { className: "flex flex-col items-center text-center cursor-pointer p-4 border-2 rounded-lg border-[#3065AC] hover:shadow-lg transition-shadow", onClick: () => onSelect(loc.id), children: [_jsx("div", { className: "w-32 h-32 rounded-full overflow-hidden transform transition-transform hover:scale-110", children: _jsx("img", { src: loc.image, alt: loc.name, className: "w-full h-full object-cover" }) }), _jsx("div", { className: "mt-4 text-lg font-bold text-[#3065AC]", children: loc.name }), _jsx("div", { className: "text-sm text-gray-500", children: loc.description })] }, loc.id))) }));
};
export default RecommendationList;
