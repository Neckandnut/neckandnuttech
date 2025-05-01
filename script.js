// Show welcome message in console
window.addEventListener('DOMContentLoaded', () => {
  console.log("Welcome to Neck and Nut Tech's amazing site!");
  animateSections();
});

// Animate sections on scroll
function animateSections() {
  const sections = document.querySelectorAll('section');
  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, options);

  sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });
}

// Back-to-top button
const backToTop = document.createElement('button');
backToTop.textContent = '↑ Top';
backToTop.style.position = 'fixed';
backToTop.style.bottom = '25px';
backToTop.style.right = '25px';
backToTop.style.padding = '12px 18px';
backToTop.style.border = 'none';
backToTop.style.background = '#0c8b3c';
backToTop.style.color = 'white';
backToTop.style.borderRadius = '50%';
backToTop.style.cursor = 'pointer';
backToTop.style.display = 'none';
backToTop.style.zIndex = '1000';
backToTop.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
backToTop.style.fontSize = '16px';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 400 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
