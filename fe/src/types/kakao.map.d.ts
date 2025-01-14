declare namespace kakao.maps {
  class Map {
    constructor(container: HTMLElement, options: object);
  }
  class LatLng {
    constructor(lat: number, lng: number);
  }
  class Marker {
    constructor(options: object);
  }
  interface MapOptions {
    center: LatLng;
    level: number;
  }
}
