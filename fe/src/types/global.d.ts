// declare global {
//   interface Window {
//     kakao: KakaoNamespace;
//   }
// }

// interface KakaoNamespace {
//   maps: {
//     LatLng: new (lat: number, lng: number) => LatLng;
//     Map: new (container: HTMLElement, options: MapOptions) => Map;
//     Marker: new (options: MarkerOptions) => Marker;
//     InfoWindow: new (options: InfoWindowOptions) => InfoWindow;
//     event: {
//       addListener: (
//         target: Map | Marker | InfoWindow,
//         type: string,
//         handler: () => void
//       ) => void;
//     };
//   };
// }

interface LatLng {
  getLat: () => number;
  getLng: () => number;
}

interface MapOptions {
  center: LatLng;
  level: number;
}

interface Map {
  setCenter: (latlng: LatLng) => void;
  setLevel: (level: number) => void;
  panTo: (latlng: LatLng) => void; // 추가
  addOverlayMapTypeId: (type: string) => void; // 추가
  removeOverlayMapTypeId: (type: string) => void; // 추가
  getCenter: () => LatLng; // 추가
}

interface MarkerOptions {
  position: LatLng;
  map: Map;
}

interface Marker {
  setMap: (map: Map | null) => void;
}

interface InfoWindowOptions {
  content: string;
}

interface InfoWindow {
  open: (map: Map, marker: Marker) => void;
  close: () => void;
}

export {};
