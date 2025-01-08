// import React from "react";
// import Map from "../components/map/Map";
// import RecommendationList from "../components/map/RecommendationList";
// import { locations } from "../data/locations";

// const MapPage: React.FC = () => {
//   const handleSelectLocation = (id: number) => {
//     const location = locations.find((loc) => loc.id === id);
//     if (location && window.kakao && window.kakao.maps && mapRef.current) {
//       const { kakao } = window;
//       const map = mapRef.current;
//       const moveLatLon = new kakao.maps.LatLng(location.lat, location.lng);
//       map.panTo(moveLatLon);
//     }
//   };

//   return (
//     <div className="h-screen flex flex-col">
//       <Map />
//       <RecommendationList onSelect={handleSelectLocation} />
//     </div>
//   );
// };

// export default MapPage;

import React from "react";
import MapBox from "@/components/map/MapBox";

const MapPage: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <MapBox />
    </div>
  );
};

export default MapPage;
