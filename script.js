// ========================================
// MINIMAL PORTFOLIO - JESPER TNG
// ========================================

'use strict';

// ========================================
// Smooth Scrolling
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if href is just "#"
        if (href === '#') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Navigation Active State
// ========================================

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.style.color = '';
            });
            if (navLink) {
                navLink.style.color = 'var(--color-text)';
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// ========================================
// Fade In Animation on Scroll
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.project-card, .about-item');
    elementsToAnimate.forEach(el => observer.observe(el));
});

// ========================================
// Update Footer Year
// ========================================

function updateFooterYear() {
    const footerText = document.querySelector('.footer-text');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.textContent = `© ${currentYear} Jesper Tng`;
    }
}

document.addEventListener('DOMContentLoaded', updateFooterYear);

// ========================================
// Performance: Reduce Motion for Accessibility
// ========================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.documentElement.style.scrollBehavior = 'auto';
}

// ========================================
// Console Message
// ========================================

console.log('%cJesper Tng', 'font-size: 24px; font-weight: bold; color: #0a0a0a;');
console.log('%cProduct Manager for Digital Transformation', 'font-size: 14px; color: #666;');
console.log('%cPortfolio: https://jespertng.com', 'font-size: 12px; color: #666;');
