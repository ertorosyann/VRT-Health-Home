import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";

type Place = {
  lat: number;
  lng: number;
  name: string;
  address: string;
};

export default function Map() {
  const [place] = useState<Place>({
    lat: 34.1425,
    lng: -118.2551,
    name: "VRT HOME HEALTH CARE",
    address: "600 W Broadway, Glendale, CA 91204",
  });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  return (
    <div style={{ width: "100%", height: "150px" }}>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          zoom={15}
          center={{ lat: place.lat, lng: place.lng }}
        >
          <Marker position={{ lat: place.lat, lng: place.lng }} />
        </GoogleMap>
      )}
    </div>
  );
}
