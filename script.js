<!-- AOS Animation JS -->
<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
<script>
  AOS.init({
    duration: 1000,
    once: true
  });
</script>

<!-- Custom Script: Console + Back to Top Button -->
<script>
  // Show welcome message on page load
  window.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Neck and Nut Tech's website!");
  });

  // Add back-to-top button
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
</script>
