// ========================================
// MINIMAL PORTFOLIO - JESPER TNG
// ========================================

'use strict';

// ========================================
// Navigation Active State (Multi-page)
// ========================================

function updateActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');

        // Remove active class from all links
        link.classList.remove('active');

        // Add active class to current page link
        if (linkHref === currentPage ||
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === 'index.html' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
}

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
    const elementsToAnimate = document.querySelectorAll('.project-card, .case-study-card, .about-item');
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
