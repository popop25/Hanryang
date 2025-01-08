import React, { useState } from "react";
import { locations } from "../data/locations"; // 데이터 가져오기

const RecommendationPage: React.FC = () => {
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const handleStyleChange = (style: string) => {
    setSelectedStyles(
      (prev) =>
        prev.includes(style)
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
    const randomStyle =
      selectedStyles[Math.floor(Math.random() * selectedStyles.length)];
    setRecommendation(randomStyle);
  };

  return (
    <div className="flex flex-col items-center p-8 space-y-4">
      {/* 질문 섹션 */}
      <div className="text-lg font-bold">어떤 활동을 원하시나요?</div>
      <div className="flex flex-wrap gap-4">
        {/* 활동 선택 체크박스 */}
        {[
          "고궁 및 박물관",
          "전시",
          "공방",
          "공연 관람",
          "공원",
          "복합문화공간",
          "실내 액티비티",
          "카페/힐링",
          "팝업스토어",
        ].map((style, index) => (
          <label
            key={index}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              value={style}
              checked={selectedStyles.includes(style)}
              onChange={() => handleStyleChange(style)}
              className="form-checkbox"
            />
            <span>{style}</span>
          </label>
        ))}
      </div>

      {/* 추천 버튼 */}
      <button
        onClick={handleRecommend}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        추천받기
      </button>

      {/* 추천 결과 */}
      {recommendation && (
        <div className="mt-6 p-4 border border-gray-300 rounded shadow">
          <div className="font-bold text-xl mb-2">추천 결과</div>
          <div className="text-green-700">{recommendation}</div>
        </div>
      )}
    </div>
  );
};

export default RecommendationPage;
