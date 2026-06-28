document.addEventListener("DOMContentLoaded", () => {
    /* Text typing animation for the hero section */
    const textArray = [
        "SB Cash",
        "Max Money Accounts"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const typing = document.getElementById("typing");

    function type() {
        const current = textArray[textIndex];

        if (!deleting) {
            typing.textContent = current.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === current.length) {
                deleting = true;
                setTimeout(type, 1500);
                return;
            }
        } else {
            typing.textContent = current.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                deleting = false;
                textIndex = (textIndex + 1) % textArray.length;
            }
        }

        setTimeout(type, deleting ? 55 : 100);
    }

    type();

    /* FAQ toggle functionality */
    document.querySelectorAll(".faq-question").forEach(button => {
        button.addEventListener("click", () => {
            const item = button.parentElement;

            document.querySelectorAll(".faq-item").forEach(faq => {
                if (faq !== item) {
                    faq.classList.remove("active");
                }
            });

            item.classList.toggle("active");
        });
    });

    const scrollTopBtn = document.querySelector('.scroll-top');

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });
        // Smooth scroll when back-to-top is clicked
        scrollTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Scroll reveal: observe elements with data-reveal and add .active when visible
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));
    
});

/* Particle background effect */
const particles = document.getElementById("particles");

for (let i = 0; i < 40; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = Math.random() * 100 + "%";
    const size = Math.random() * 8 + 4;
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.animationDuration = (Math.random() * 12 + 8) + "s";
    particle.style.animationDelay = Math.random() * 10 + "s";
    particle.style.opacity = Math.random() * 0.5 + 0.2;
    particles.appendChild(particle);
}
