// types/place.ts
export interface Place {
  id: string;
  name: string;
  category: string;
  thumbnail: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  url: string;
}
