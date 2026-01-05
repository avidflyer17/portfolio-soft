// ========================================
// Portfolio JavaScript - Damien SCHONBAKLER
// Neo-Industrial & Blueprint Theme
// ========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initSmoothScroll();
    updateCopyrightYear();
});

/**
 * Initialize Intersection Observer for scroll animations
 */
function initAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add stagger delay for elements
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 100);

                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Smooth scroll behavior for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Update copyright year dynamically
 */
function updateCopyrightYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Add parallax effect to background (optional enhancement)
 */
function initParallax() {
    const techGrid = document.querySelector('.tech-grid-bg');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;

        if (techGrid) {
            techGrid.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

// Optional: Initialize parallax (commented out by default for performance)
// initParallax();

/**
 * Typewriter effect for elements with .typewriter class
 */
function initTypingEffect() {
    const element = document.querySelector('.hero-tagline');
    if (!element) return;

    const text = element.textContent;
    element.textContent = '';
    element.classList.add('typing-cursor');
    element.style.opacity = '1'; // Ensure visibility

    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50); // Typing speed
        } else {
            // Remove cursor after a delay
            setTimeout(() => {
                element.classList.remove('typing-cursor');
            }, 3000);
        }
    }

    // Start typing after a small delay
    setTimeout(type, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    // Re-added helper for strict ordering
    initTypingEffect();
});
