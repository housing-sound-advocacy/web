import mapboxgl from 'mapbox-gl';
import { Map } from 'mapbox-gl';

export default class Popups {
  addPopups = (map: Map) => {
    map.on('click', (event) => {
      const features = map.queryRenderedFeatures(event.point, {
        layers: ['circle'],
      });
      if (!features.length) {
        return;
      }
      const feature: GeoJSON.Feature = features[0];
      const geometry = feature.geometry as GeoJSON.Point;
      new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat([geometry.coordinates[0], geometry.coordinates[1]])
        .setHTML(
          `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`,
        )
        .addTo(map);
    });
  };
}
