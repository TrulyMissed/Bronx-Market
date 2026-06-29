document.addEventListener("DOMContentLoaded", () => {
    /* Typing animation for the hero section */
    const textArray = [
        "SB Cash",
        "Max Money Accounts",
        "Instant Delivery",
        "Trusted Marketplace"
    ];

    let textIndex = 0;
    const typing = document.getElementById("typing");

    const typingSpeed = 70;
    const deletingSpeed = 45;
    const pauseTime = 1400;
    let charIndex = 0;
    let deleting = false;

    const typeText = () => {
        const current = textArray[textIndex];

        typing.textContent = current.substring(0, charIndex);

        if (!deleting) {
            if (charIndex < current.length) {
                charIndex += 1;
                setTimeout(typeText, typingSpeed);
            } else {
                deleting = true;
                setTimeout(typeText, pauseTime);
            }
        } else {
            if (charIndex > 0) {
                charIndex -= 1;
                setTimeout(typeText, deletingSpeed);
            } else {
                deleting = false;
                textIndex = (textIndex + 1) % textArray.length;
                setTimeout(typeText, typingSpeed);
            }
        }
    };

    typeText();

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

    const header = document.querySelector('header');
    const scrollTopBtn = document.querySelector('.scroll-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        if (scrollTopBtn) {
            if (window.scrollY > 200) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        }
    });

    if (scrollTopBtn) {
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
    particle.style.top = Math.random() * 100 + "%";
    const size = Math.random() * 8 + 4;
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.animationDuration = (Math.random() * 10 + 10) + "s";
    particle.style.animationDelay = Math.random() * 10 + "s";
    particle.style.opacity = Math.random() * 0.4 + 0.18;
    particles.appendChild(particle);
}
