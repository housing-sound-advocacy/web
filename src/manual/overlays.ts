/* eslint-disable max-len */

import { Map } from 'mapbox-gl';

export default class Overlays {
  addOverlays = (map: Map) => {

    /*
  const polygonHOUSINGWORKER = L.polygon([
  [43.644274, -79.418278], [43.66514, -79.425659], [43.683764, -79.414158], [43.679543, -79.397507], [43.679294, -79.376564], [43.68786, -79.35545], [43.698907, -79.376907], [43.693073, -79.401627], [43.683764, -79.414158], [43.694563, -79.431324], [43.699899, -79.449692], [43.689101, -79.469948], [43.68277, -79.450207], [43.683764, -79.414158]],
{ color: 'pink', fillColor:'pink', weight: 7 }).addTo(mymap).bindPopup('<center><a href="WA/jobdescriptionhousingworkerWA_draft3.pdf">vision for a housing worker&strategist at Workman Arts (draft 3)</a></center>');
*/

    map.addSource('circle', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-79.418278, 43.644274],
            },
            properties: {
              'description': 'Hello Popup',
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
        'circle-stroke-opacity': 0.8,
        'circle-radius': 8,
      },
    });
  /*
L.circle([43.644140, -79.418100], {
  color: '#FFFF00',
  fillColor: '#575211',
  fillOpacity: 0.8,
  radius: 400, // this is in meters, not kilometers
}).bindTooltip('Workman Arts is here').addTo(mymap);

L.circle([43.661042, -79.383945], {
  color: '#FF00CC',
  fillColor: '#FF99FF',
  fillOpacity: 0.8,
  radius: 400, // this is in meters, not kilometers
}).bindTooltip('dystopia/utopia', { permanent: true }).bindPopup('<a href="maputopias/CW_1.jpg">CW_1</a>').addTo(mymap);

*/
  };
  /*
L.circle([43.665761, -79.378452], {
  color: '#FF00CC',
  fillColor: '#FF99FF',
  fillOpacity: 0.8,
  radius: 400, // this is in meters, not kilometers
}).bindTooltip('utopias', { permanent: true }).bindPopup('<a href="maputopias/CW_2.jpg">CW_2</a>' + '<br><br>' + '<a href="maputopias/transparent.png">transparent?</a>', { opacity: 0.5 }).addTo(mymap);

// HOUSING CRISES

L.marker([43.660300, -79.444110], { icon: housingcrisisIcon }).addTo(mymap).bindPopup('typical personal sharing that will appear on the final soundmap' + '<br><br>' +
'17 Paton Road' + '<br><br>' + 'About 20 artists were ordered by the City to vacate their live-work housing because landlords were too slow to comply to the Provincial Building and Fire code. This was deeply affordable housing and it had been safe for decades.' + '<br><br>' + '<a href="http://claudewittmann.ca/FIRE/FIREChief.html">claude wittmann - housing crisis number 1</a>' + '<br><br>'
+ '<img src="markers/CW_1-houseinhand4_Rhubarb 2022_crisis.jpg" style="width: 120px">' + '<br><br>'
+ 'Start on March 10, 2020 (beginning of the pandemic) - end on August 19, 2020');

L.marker([43.635730, -79.399860], { icon: housingcrisisIcon }).addTo(mymap).bindPopup('typical personal sharing that will appear on the final soundmap' + '<br><br>' +
'25 Bishop Tutu Boulevard' + '<br><br>' + 'claude wittmann - housing crisis number 2' + '<br><br>' + 'Start of the crisis at the end of September 2021, when i became seriously  ill from the noise pollution around and vibrations in my building (24/7 loud excavation of Lakeshore Boulevard, Porter airport, Gardener Expressway, Army reserve). My health continued to deteriorate as i could not sleep in my home and experienced daily displacement and fear of homelessness, all this while i continued providing for all my meals and my friends amazingly took turns to offer their couch for a night or too or more. In November 2021, my landlord, Toronto Community Housing Corporation (TCHC), refused my request to be transferred to another building despite my human right to be accommodated as a person with disability. - End of crisis when a dear friend of mine introduced me to a landlady open to take me as her next tenant. I moved on January 12, 2022. Weight by then: 35 kg = less than 80 lbs.');

L.marker([43.691400, -79.438310], { icon: housingcrisisIcon }).addTo(mymap).bindPopup('typical personal sharing that will appear on the final soundmap' + '<br><br>' +
'557 Vaughan Road' + '<br><br>' + 'claude wittmann - housing crisis number 3' + '<br><br>' + 'Start of the crisis at the end of February 2022, 6 weeks after moving into this nice house and apartment. This house had allowed me to find sleep again after housing crisis no 2. At the end of February however, invasive bugs showed up and the work started. One of the bugs was the spider beetle which is apparently common in old houses. It is a very small roundish brown beetle with 6 long legs (spiders have 8 legs) that basically goes everywhere and feeds on a lot of different things. I had to start paying for exterminations. By the end of April, after 3 exterminations, and slowly aware that the area was more noisy than expected, with new construction intitiaves popping up and long hours of noises or smells, the situation might have been better, but my ability to continue dealing with housing insecurity after my 2 other housing crises since 2020 was getting really stretched. Stress levels were high. Nightmares constant and my hopes for peace and for an end to paying for exterminations were gone.');
*/

}
