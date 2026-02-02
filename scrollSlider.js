const track = document.querySelector('.slider__track');
const originalLogos = [...track.children];
const viewportWidth = track.parentElement.offsetWidth;

const originalWidth = track.scrollWidth;

while (track.scrollWidth < viewportWidth * 2) {
  originalLogos.forEach(logo => {
    track.appendChild(logo.cloneNode(true));
  });
}

const singleSetWidth = originalWidth;

track.style.setProperty('--translate', `${singleSetWidth}px`);
track.style.setProperty('--duration', `${duration}s`);
