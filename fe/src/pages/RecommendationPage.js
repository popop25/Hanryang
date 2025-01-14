import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const RecommendationPage = () => {
    const [selectedStyles, setSelectedStyles] = useState([]);
    const [recommendation, setRecommendation] = useState(null);
    const handleStyleChange = (style) => {
        setSelectedStyles((prev) => prev.includes(style)
            ? prev.filter((s) => s !== style) // 이미 선택된 스타일이면 제거
            : [...prev, style] // 새로운 스타일 추가
        );
    };
    const handleRecommend = () => {
        if (selectedStyles.length === 0) {
            alert("원하시는 활동을 선택해주세요!");
            return;
        }
        // 선택된 스타일 중 하나를 랜덤으로 추천
        const randomStyle = selectedStyles[Math.floor(Math.random() * selectedStyles.length)];
        setRecommendation(randomStyle);
    };
    return (_jsxs("div", { className: "flex flex-col items-center p-8 space-y-4", children: [_jsx("div", { className: "text-lg font-bold", children: "\uC5B4\uB5A4 \uD65C\uB3D9\uC744 \uC6D0\uD558\uC2DC\uB098\uC694?" }), _jsx("div", { className: "flex flex-wrap gap-4", children: [
                    "고궁 및 박물관",
                    "전시",
                    "공방",
                    "공연 관람",
                    "공원",
                    "복합문화공간",
                    "실내 액티비티",
                    "카페/힐링",
                    "팝업스토어",
                ].map((style, index) => (_jsxs("label", { className: "flex items-center space-x-2 cursor-pointer", children: [_jsx("input", { type: "checkbox", value: style, checked: selectedStyles.includes(style), onChange: () => handleStyleChange(style), className: "form-checkbox" }), _jsx("span", { children: style })] }, index))) }), _jsx("button", { onClick: handleRecommend, className: "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600", children: "\uCD94\uCC9C\uBC1B\uAE30" }), recommendation && (_jsxs("div", { className: "mt-6 p-4 border border-gray-300 rounded shadow", children: [_jsx("div", { className: "font-bold text-xl mb-2", children: "\uCD94\uCC9C \uACB0\uACFC" }), _jsx("div", { className: "text-green-700", children: recommendation })] }))] }));
};
export default RecommendationPage;
