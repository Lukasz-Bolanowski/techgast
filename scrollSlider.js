const track = document.querySelector('.slider__track');
const logos = [...track.children];
const viewportWidth = track.parentElement.offsetWidth;

// powielamy loga dopóki track < 2x viewport
let trackWidth = track.scrollWidth;
while (trackWidth < viewportWidth * 2) {
  logos.forEach(logo => {
    const clone = logo.cloneNode(true);
    track.appendChild(clone);
  });
  trackWidth = track.scrollWidth;
}

// ustawiamy zmienne CSS dla animacji
const singleSetWidth = track.scrollWidth / 2;
const speed = 80; // px/s
const duration = singleSetWidth / speed;

track.style.setProperty('--translate', `${singleSetWidth}px`);
track.style.setProperty('--duration', `${duration}s`);
