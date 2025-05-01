// Smooth fade-in on scroll
const sections = document.querySelectorAll('.section');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('fade-in');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Back-to-top button
const backToTop = document.createElement('button');
backToTop.textContent = '↑';
backToTop.title = 'Back to top';
backToTop.style.position = 'fixed';
backToTop.style.bottom = '20px';
backToTop.style.right = '20px';
backToTop.style.padding = '12px 16px';
backToTop.style.border = 'none';
backToTop.style.background = '#0c8b3c';
backToTop.style.color = '#fff';
backToTop.style.borderRadius = '50%';
backToTop.style.cursor = 'pointer';
backToTop.style.display = 'none';
backToTop.style.fontSize = '20px';
backToTop.style.zIndex = '1000';
backToTop.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
backToTop.style.transition = 'opacity 0.3s ease';

document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 400 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Optional welcome message in console
console.log("%cWelcome to Neck and Nut Tech!", "color: #0c8b3c; font-size: 16px; font-weight: bold;");
