import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { locations } from "../../data/locations";
const MapBox = () => {
    const mapContainer = useRef(null);
    useEffect(() => {
        const initializeMap = () => {
            if (!mapContainer.current) {
                console.error("Map container is not ready.");
                return;
            }
            const { kakao } = window;
            const options = {
                center: new kakao.maps.LatLng(37.5665, 126.978), // 서울 중심 좌표
                level: 8, // 줌 레벨
            };
            const map = new kakao.maps.Map(mapContainer.current, options);
            // 마커 및 정보창 추가
            locations.forEach((location) => {
                const markerPosition = new kakao.maps.LatLng(location.lat, location.lng);
                const marker = new kakao.maps.Marker({
                    position: markerPosition,
                    map,
                });
                const infowindow = new kakao.maps.InfoWindow({
                    content: `
            <div style="padding:5px; width:200px; text-align:center;">
              <strong>${location.name}</strong>
              <p>${location.description || "설명이 없습니다."}</p>
            </div>
          `,
                });
                // 마커 클릭 시 정보창 열고 지도 중심 이동
                kakao.maps.event.addListener(marker, "click", () => {
                    map.setCenter(markerPosition);
                    map.setLevel(4); // 줌 레벨 변경
                    infowindow.open(map, marker);
                });
            });
        };
        const loadKakaoMap = () => {
            const scriptId = "kakao-map-script";
            if (document.getElementById(scriptId)) {
                initializeMap();
                return;
            }
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_API_KEY}&libraries=services,clusterer`;
            script.async = true;
            script.onload = initializeMap;
            document.head.appendChild(script);
        };
        loadKakaoMap();
    }, []);
    return _jsx("div", { ref: mapContainer, className: "w-full h-full border" });
};
export default MapBox;
