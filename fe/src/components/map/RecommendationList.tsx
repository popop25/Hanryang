import React from "react";
import { locations } from "../../data/locations";

const RecommendationList: React.FC<{ onSelect: (id: number) => void }> = ({
  onSelect,
}) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">추천 장소</h2>
      <ul className="space-y-2">
        {locations.map((loc) => (
          <li
            key={loc.id}
            className="cursor-pointer text-blue-600 hover:underline"
            onClick={() => onSelect(loc.id)}
          >
            {loc.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationList;
