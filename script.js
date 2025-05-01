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
const
