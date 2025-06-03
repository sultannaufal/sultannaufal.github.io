export function initScrollBehavior() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const sections = document.querySelectorAll('.snap-section');
    
    // Smooth scroll to next section when clicking scroll indicator
    scrollIndicator?.addEventListener('click', () => {
      sections[1]?.scrollIntoView({ behavior: 'smooth' });
    });
  
    // Get current section index
    function getCurrentSection() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      return Math.round(scrollPosition / windowHeight);
    }
  
    // Hide scroll indicator when not on first section
    document.addEventListener('scroll', () => {
      const currentSection = getCurrentSection();
      if (scrollIndicator) {
        scrollIndicator.style.opacity = currentSection === 0 ? '1' : '0';
      }
    });
  }