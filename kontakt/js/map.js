const mapsData = [
  {
    selector: '.forms__map-container-1',
    coords: [49.574114392159856, 21.867005537221825],
    popup: 'ul. Piłsudskiego 17, 38-480 Rymanów'
  },
  {
    selector: '.forms__map-container-2',
    coords: [50.017940, 22.025846],
    popup: 'al. Armii Krajowej 12a, 35-307 Rzeszów'
  }
]

mapsData.forEach(({ selector, coords, popup }) => {
  const container = document.querySelector(selector)

  if (!container) return

  const map = L.map(container).setView(coords, 15)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map)

  L.marker(coords)
    .addTo(map)
    .bindPopup(popup)
})