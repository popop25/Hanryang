import React from "react";
import MapBox from "@/components/map/MapBox";
import RecommendationList from "@/components/map/RecommendationList";

const MapPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* 지도 */}
      <div className="w-[80%] h-[500px] my-4">
        <MapBox />
      </div>
      {/* 추천 리스트 */}
      <div className="w-[80%]">
        <RecommendationList onSelect={(id) => console.log(`Selected: ${id}`)} />
      </div>
    </div>
  );
};

export default MapPage;
