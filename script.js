// Typing effect for welcome message
document.addEventListener('DOMContentLoaded', () => {
  const welcomeText = "Every guitarist knows: when your guitar feels right, your soul sings louder...";
  const target = document.getElementById('typing-text');
  let index = 0;

  function type() {
    if (index < welcomeText.length) {
      target.textContent += welcomeText.charAt(index);
      index++;
      setTimeout(type, 30);
    }
  }

  if (target) {
    target.textContent = '';
    type();
  }

  // Fade-in sections on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

  // Animate header logo
  const logo = document.querySelector('header img');
  if (logo) {
    logo.classList.add('bounce-in');
  }
});

// Smooth scroll to top
const backToTop = document.createElement('button');
backToTop.textContent = '↑';
backToTop.classList.add('back-to-top');
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
