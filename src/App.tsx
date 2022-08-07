import React from 'react';
import Map from 'react-map-gl';

export default function App() {
  return <Map
    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    initialViewState={{
      latitude: 43.653225,
      longitude: -79.383186,
      zoom: 13,
    }}
    style={{ width: '100vw', height: '100vh' }}
    mapStyle="mapbox://styles/mapbox/light-v10"
  />;
}
