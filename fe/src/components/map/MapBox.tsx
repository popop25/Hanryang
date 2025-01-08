import React, { useRef, useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const MapBox: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = () => {
      if (!mapContainer.current) {
        console.error("Map container is not ready.");
        return;
      }

      const { kakao } = window;
      const options = {
        center: new kakao.maps.LatLng(37.5665, 126.978), // 서울 좌표
        level: 3, // 확대/축소 레벨
      };

      const map = new kakao.maps.Map(mapContainer.current, options);

      // 마커 추가
      new kakao.maps.Marker({
        position: new kakao.maps.LatLng(37.5665, 126.978),
        map,
      });

      console.log("Map initialized:", map);
    };

    const loadKakaoMap = () => {
      const scriptId = "kakao-map-script";

      if (document.getElementById(scriptId)) {
        initializeMap();
        return;
      }

      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
        import.meta.env.VITE_KAKAO_API_KEY
      }&libraries=services,clusterer`;
      script.async = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    loadKakaoMap();
  }, []);

  return (
    <div
      id="map"
      className="w-full h-full max-w-screen-lg max-h-[500px] border border-gray-300"
    />
  );
};

export default MapBox;
