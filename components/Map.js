import React from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import { getCenter } from "geolib";
import { LocationMarkerIcon } from "@heroicons/react/outline";

const Map = ({ searchResults }) => {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  return (
    <MapGL
      mapStyle="mapbox://styles/rogalio/cl5f6xm4e000914rhabp1amwr"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(event) => setViewport(event.viewport)}
    >
      {searchResults.map((result) => {
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
            anchor="bottom"
          >
            <LocationMarkerIcon className=" cursor-pointer text-2xl animate-bounce" />
          </Marker>
        </div>;
      })}
    </MapGL>
  );
};

export default Map;
