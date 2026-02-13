/* ====================================
   BANANA COFFEE — Main JavaScript
   Entry point — loads components, then inits modules
   ==================================== */

import { loadComponents } from './modules/component-loader.js';
import { initLoader } from './modules/loader.js';
import { initNavbar } from './modules/navbar.js';
import { initScrollAnimations, initCounterAnimation, initParallax } from './modules/animations.js';
import { initMenuFilter } from './modules/menu-filter.js';
import { initTestimonialsSlider } from './modules/testimonials.js';
import { initReservationForm, initNewsletterForm } from './modules/forms.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Show loader immediately (it's already in index.html)
    initLoader();

    // Load all HTML components from /components/
    await loadComponents();

    // Initialize modules after HTML is in the DOM
    initNavbar();

    // Animations
    initScrollAnimations();
    initCounterAnimation();
    initParallax();

    // Interactive sections
    initMenuFilter();
    initTestimonialsSlider();

    // Forms
    initReservationForm();
    initNewsletterForm();
});
