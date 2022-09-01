import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
// import Ward from './manual/wards';
import Overlays from './manual/overlays';

export default function App() {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-79.383186);
  const [lat] = useState(43.653225);
  const [zoom] = useState(13);
  // const ward = new Ward();
  const overlays = new Overlays();

  const mapStyles = {
    width: '100vw',
    height: '100vh',
  };

  useEffect(() => {
    console.warn('useEffect');
    if (map.current) return; // initialize map only once
    console.warn('useEffect: initializing map');
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
  });
  useEffect(() => {
    console.warn('useEffect2');
    if (!map.current) return; // initialize map only once
    console.warn('useEffect2: initializing map');
    map.current.on('load', () => {
      console.warn('Loading!');
      overlays.addOverlays(map.current);
      // ward.torontoWardsJSONfromKML(map.current);
    });
  });
  return (
    <div>
      <div style={mapStyles} ref={mapContainer} className="map-container" />
    </div>
  );
}
