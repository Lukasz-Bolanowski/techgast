const locations = {
  rymanow: {
    name: 'Rymanów',
    coords: [49.574114392159856, 21.867005537221825],
    address: 'ul. Piłsudskiego 17, 38-480 Rymanów, Polska',
    email: 'biuro@techgast.com'
  },

  rzeszow: {
    name: 'Rzeszów',
    coords: [50.01895, 22.02645],
    address: 'Aleja Armii Krajowej 12a, 35-307 Rzeszów, Polska',
    email: 'biurorzeszow@techgast.com'
  }
}

const tabsContainer = document.querySelector('.forms__locations-tabs')
const contentContainer = document.querySelector('.forms__locations-content')

const maps = {}

Object.entries(locations).forEach(([key, loc], index) => {

  const tab = document.createElement('button')
  tab.className = 'forms__locations-tab' + (index === 0 ? ' active' : '')
  tab.textContent = loc.name
  tab.dataset.id = key
  tabsContainer.appendChild(tab)

  const item = document.createElement('div')
  item.className = 'forms__locations-item' + (index === 0 ? ' active' : '')
  item.id = key

  item.innerHTML = `
    <div class="forms__locations-info">
      <p class="forms__locations-text"><span class="forms__locations-bold">Adres:</span> ${loc.address}</p>
      <p class="forms__locations-text"><span class="forms__locations-bold">Email:</span> ${loc.email}</p>
    </div>
    <div class="forms__locations-map"></div>
  `

  contentContainer.appendChild(item)

  const mapContainer = item.querySelector('.forms__locations-map')

  const map = L.map(mapContainer).setView(loc.coords, 15)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map)

  L.marker(loc.coords)
    .addTo(map)
    .bindPopup(loc.address)

  maps[key] = map
})

document.querySelectorAll('.forms__locations-tab').forEach(tab => {
  tab.addEventListener('click', () => {

    const id = tab.dataset.id

    document.querySelectorAll('.forms__locations-tab')
      .forEach(t => t.classList.remove('active'))

    document.querySelectorAll('.forms__locations-item')
      .forEach(i => i.classList.remove('active'))

    tab.classList.add('active')
    document.getElementById(id).classList.add('active')

    setTimeout(() => {
      maps[id].invalidateSize()
    }, 50)
  })
})