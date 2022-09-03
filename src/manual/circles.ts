import { Map } from 'mapbox-gl';


export default class Circles {
  addOverlays = (map: Map) => {
    map.addSource('circle', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-79.418100, 43.644140],
            },
            properties: {
              'description': 'Workman Arts is here',
            },
          },
        ],
      },
    });

    map.addLayer({
      'id': 'circle',
      'type': 'circle',
      'source': 'circle',
      'paint': {
        'circle-stroke-color': '#FFFF00',
        'circle-color': '#575211',
        'circle-opacity': 0.8,
        'circle-stroke-opacity': 0.8,
        'circle-radius': 15,
      },
    });
    /*
L.circle([43.661042, -79.383945], {
  color: '#FF00CC',
  fillColor: '#FF99FF',
  fillOpacity: 0.8,
  radius: 400, // this is in meters, not kilometers
}).bindTooltip('dystopia/utopia', { permanent: true }).bindPopup('<a href="maputopias/CW_1.jpg">CW_1</a>').addTo(mymap);
  }
  */
  };
}
