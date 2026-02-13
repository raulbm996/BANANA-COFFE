/* ====================================
   BANANA COFFEE — Menu Filter Module
   ==================================== */

export function initMenuFilter() {
    const categoryBtns = document.querySelectorAll('.menu-cat-btn');
    const menuCards = document.querySelectorAll('.menu-card');

    if (!categoryBtns.length || !menuCards.length) return;

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');

            menuCards.forEach((card, index) => {
                const cardCategory = card.getAttribute('data-category');

                if (category === 'all' || cardCategory === category) {
                    card.classList.remove('hidden');
                    card.style.animation = `fadeInUp 0.4s ease ${index * 0.06}s both`;
                } else {
                    card.classList.add('hidden');
                    card.style.animation = '';
                }
            });
        });
    });
}
