/* ====================================
   BANANA COFFEE — Component Loader
   Loads HTML partials from /components/
   ==================================== */

/**
 * List of components to load, in order.
 * Each entry maps a container ID to a component file.
 */
const COMPONENTS = [
    { id: 'component-navbar', file: 'navbar.html' },
    { id: 'component-hero', file: 'hero.html' },
    { id: 'component-features', file: 'features.html' },
    { id: 'component-about', file: 'about.html' },
    { id: 'component-menu', file: 'menu.html' },
    { id: 'component-parallax', file: 'parallax.html' },
    { id: 'component-gallery', file: 'gallery.html' },
    { id: 'component-testimonials', file: 'testimonials.html' },
    { id: 'component-reservation', file: 'reservation.html' },
    { id: 'component-contact', file: 'contact.html' },
    { id: 'component-newsletter', file: 'newsletter.html' },
    { id: 'component-footer', file: 'footer.html' },
];

/**
 * Fetches all HTML component files in parallel and injects them
 * into their respective container divs in the DOM.
 * Returns a Promise that resolves when all components are loaded.
 */
export async function loadComponents() {
    const basePath = 'components/';

    const fetchPromises = COMPONENTS.map(async ({ id, file }) => {
        try {
            const response = await fetch(basePath + file);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const html = await response.text();
            const container = document.getElementById(id);
            if (container) {
                container.innerHTML = html;
            }
        } catch (error) {
            console.warn(`[ComponentLoader] Failed to load ${file}:`, error);
        }
    });

    await Promise.all(fetchPromises);
}
