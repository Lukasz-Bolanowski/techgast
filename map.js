// pobieramy kontener mapy
const mapContainer = document.querySelector('.map__container');

// Twoje współrzędne
const coords = [49.574114392159856, 21.867005537221825];

// inicjalizacja mapy w wybranym miejscu
const map = L.map(mapContainer).setView(coords, 15); // zoom 15 = dość blisko

// kafelki OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

// pinezka z popupem
L.marker(coords).addTo(map)
  .bindPopup("ul. Piłsudskiego 17, 38-480 Rymanów ")
  .openPopup();
