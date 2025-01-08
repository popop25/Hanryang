import React from "react";
import { locations } from "../../data/locations";

const RecommendationList: React.FC<{ onSelect: (id: number) => void }> = ({
  onSelect,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {locations.map((loc) => (
        <div
          key={loc.id}
          className="flex flex-col items-center text-center cursor-pointer p-4 border-2 rounded-lg border-[#3065AC] hover:shadow-lg transition-shadow"
          onClick={() => onSelect(loc.id)}
        >
          {/* 이미지 */}
          <div className="w-32 h-32 rounded-full overflow-hidden transform transition-transform hover:scale-110">
            <img
              src={loc.image}
              alt={loc.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* 이름 */}
          <div className="mt-4 text-lg font-bold text-[#3065AC]">
            {loc.name}
          </div>
          {/* 설명 */}
          <div className="text-sm text-gray-500">{loc.description}</div>
        </div>
      ))}
    </div>
  );
};

export default RecommendationList;
