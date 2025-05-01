// Animate welcome message on page load
window.addEventListener('DOMContentLoaded', () => {
  console.log("Welcome to Neck and Nut Tech's website!");
});

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000, // Animation duration in ms
  once: true      // Only animate once per element
});

// Create and show back-to-top button
const backToTop = document.createElement('button');
backToTop.textContent = '↑ Top';
backToTop.style.position = 'fixed';
backToTop.style.bottom = '20px';
backToTop.style.right = '20px';
backToTop.style.padding = '12px 18px';
backToTop.style.border = 'none';
backToTop.style.background = '#0c8b3c';
backToTop.style.color = 'white';
backToTop.style.borderRadius = '50px';
backToTop.style.cursor = 'pointer';
backToTop.style.display = 'none';
backToTop.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
backToTop.style.zIndex = '1000';
backToTop.style.transition = 'opacity 0.3s ease';

document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 400 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add subtle floating animation to header logo
const logo = document.querySelector('header img');
if (logo) {
  logo.style.animation = 'float 3s ease-in-out infinite';
}

// Floating animation keyframe
const style = document.createElement('style');
style.textContent = `
@keyframes float {
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}
`;
document.head.appendChild(style);
