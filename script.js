// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Horizontal Expanding Cards Logic
    const cards = document.querySelectorAll('.expand-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active class from all cards
            removeActiveClasses();
            
            // Add active class to clicked card
            card.classList.add('active');
        });
    });

    function removeActiveClasses() {
        cards.forEach(card => {
            card.classList.remove('active');
        });
    }

    // 2. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Navbar background effect on scroll (Light Mode)
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.05)';
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.03)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.85)';
            navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.08)';
            navbar.style.boxShadow = 'none';
        }
    });
});
