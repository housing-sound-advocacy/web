import React from 'react';
import Map from 'react-map-gl';

export default function App() {
  return <Map
    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5,
    }}
    style={{ width: 600, height: 400 }}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  />;
}
