/* ====================================
   BANANA COFFEE — Loader Module
   ==================================== */

export function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 800);
    });

    // Fallback: hide loader after 3s max
    setTimeout(() => loader.classList.add('hidden'), 3000);
}
