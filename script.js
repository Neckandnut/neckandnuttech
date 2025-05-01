// Background music
const audio = new Audio('background-music.mp3');
audio.loop = true;
audio.volume = 0.4;
audio.autoplay = true;

// Create music toggle button
const musicToggle = document.createElement('button');
musicToggle.id = 'music-toggle';
musicToggle.textContent = '🔈 Music On';
document.body.appendChild(musicToggle);

// Handle toggle
let musicPlaying = true;
musicToggle.addEventListener('click', () => {
  if (musicPlaying) {
    audio.pause();
    musicToggle.textContent = '🔇 Music Off';
  } else {
    audio.play();
    musicToggle.textContent = '🔈 Music On';
  }
  musicPlaying = !musicPlaying;
});

// Autoplay when page loads
window.addEventListener('DOMContentLoaded', () => {
  audio.play().catch(err => {
    console.warn('Auto-play blocked. Waiting for user interaction.');
  });
});

// Animate sections on scroll
const animatedSections = document.querySelectorAll('.animated-section');

function revealOnScroll() {
  animatedSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.style.animationDelay = '0s';
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Back to top button
const backToTop = document.createElement('button');
backToTop.textContent = '↑ Top';
backToTop.style.position = 'fixed';
backToTop.style.bottom = '20px';
backToTop.style.right = '20px';
backToTop.style.padding = '10px 15px';
backToTop.style.border = 'none';
backToTop.style.background = '#0c8b3c';
backToTop.style.color = 'white';
backToTop.style.borderRadius = '5px';
backToTop.style.cursor = 'pointer';
backToTop.style.display = 'none';
backToTop.style.zIndex = '1000';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
