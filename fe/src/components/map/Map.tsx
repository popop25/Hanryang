// src/components/map/Map.tsx
import React, { useEffect } from "react";
import { locations } from "../../data/locations";

interface MapProps {
  mapRef: React.RefObject<kakao.maps.Map | null>;
}

const Map: React.FC<MapProps> = ({ mapRef }) => {
  useEffect(() => {
    const initializeMap = () => {
      if (typeof window.kakao === "undefined" || !window.kakao.maps) {
        console.error("Kakao Maps API is not available.");
        return;
      }

      const { kakao } = window;
      const container = document.getElementById("map");
      if (!container) return;

      const options = {
        center: new kakao.maps.LatLng(37.58556076415895, 126.98409887772272),
        level: 4,
      };

      const map = new kakao.maps.Map(container, options);
      mapRef.current = map;

      // 마커와 정보창 추가
      locations.forEach((location) => {
        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(location.lat, location.lng),
          map,
        });

        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="padding:5px;">${location.name}</div>`,
        });

        kakao.maps.event.addListener(marker, "click", () => {
          infowindow.open(map, marker);
        });
      });
    };

    // 스크립트가 이미 로드되었는지 확인
    if (window.kakao && window.kakao.maps) {
      initializeMap();
    } else {
      const script = document.createElement("script");
      script.id = "kakao-map-script";
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
        import.meta.env.VITE_KAKAO_API_KEY
      }&libraries=services,clusterer`;
      script.async = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    }

    // cleanup function
    return () => {
      const script = document.getElementById("kakao-map-script");
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, [mapRef]);

  return <div id="map" style={{ width: "100%", height: "500px" }} />;
};

export default Map;
