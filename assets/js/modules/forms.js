/* ====================================
   BANANA COFFEE — Forms Module
   Reservation & Newsletter handlers
   ==================================== */

export function initReservationForm() {
    const reservationForm = document.getElementById('reservationForm');
    if (!reservationForm) return;

    // Set min date to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(reservationForm);
        const data = Object.fromEntries(formData);

        const submitBtn = reservationForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-check"></i> ¡Reserva Enviada!';
        submitBtn.style.background = 'var(--color-success)';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
            reservationForm.reset();
        }, 3000);
    });
}

export function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (!newsletterForm) return;

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('input');
        const btn = newsletterForm.querySelector('button');
        const originalText = btn.textContent;

        btn.textContent = '¡Suscrito! ✓';
        btn.style.background = 'var(--color-success)';
        input.value = '';

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 3000);
    });
}
