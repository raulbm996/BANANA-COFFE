/* ====================================
   BANANA COFFEE — Testimonials Slider Module
   ==================================== */

export function initTestimonialsSlider() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');

    if (!testimonialCards.length || !dots.length) return;

    let currentTestimonial = 0;
    let testimonialInterval;

    function showTestimonial(index) {
        testimonialCards.forEach(card => {
            card.classList.remove('active');
            card.style.transform = 'translateX(60px)';
        });
        dots.forEach(dot => dot.classList.remove('active'));

        testimonialCards[index].classList.add('active');
        testimonialCards[index].style.transform = 'translateX(0)';
        dots[index].classList.add('active');
        currentTestimonial = index;
    }

    function nextTestimonial() {
        const next = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(next);
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            clearInterval(testimonialInterval);
            showTestimonial(parseInt(dot.getAttribute('data-index')));
            testimonialInterval = setInterval(nextTestimonial, 5000);
        });
    });

    testimonialInterval = setInterval(nextTestimonial, 5000);
}
