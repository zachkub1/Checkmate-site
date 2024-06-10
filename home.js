document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        formResponse.innerHTML = `<p>Thank you, ${name}. We have received your message and will get back to you at ${email} soon.</p>`;
        contactForm.reset();
    });
});

function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('load', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate');
        }, index * 200); // Stagger the animation start times
    });
});
