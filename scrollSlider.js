const track = document.querySelector('.slider__track')
const logos = [...track.children];
const viewportWidth = track.parentElement.offsetWidth

let trackWidth = track.scrollWidth
while (trackWidth < viewportWidth * 2) {
  logos.forEach(logo => {
    const clone = logo.cloneNode(true)
    track.appendChild(clone)
  })
  trackWidth = track.scrollWidth
}

const singleSetWidth = track.scrollWidth / 2
const speed = 80
const duration = singleSetWidth / speed

track.style.setProperty('--translate', `${singleSetWidth}px`)
track.style.setProperty('--duration', `${duration}s`)
