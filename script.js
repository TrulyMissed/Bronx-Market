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

/* Neon orbs background effect */
const neonOrbs = document.getElementById("neon-orbs");
const orbData = [
    { size: 60,  color: '#4dbbff', top: '8%',  left: '15%', duration: 14, delay: 0,   anim: 'orbMove1', opacity: 0.65 },
    { size: 50,  color: '#6ad1ff', top: '18%', left: '78%', duration: 18, delay: -4,  anim: 'orbMove2', opacity: 0.60 },
    { size: 70,  color: '#4dbbff', top: '42%', left: '6%',  duration: 20, delay: -9,  anim: 'orbMove3', opacity: 0.55 },
    { size: 55,  color: '#7dd8ff', top: '30%', left: '88%', duration: 16, delay: -6,  anim: 'orbMove4', opacity: 0.62 },
    { size: 65,  color: '#4dbbff', top: '50%', left: '44%', duration: 19, delay: -12, anim: 'orbMove5', opacity: 0.58 },
    { size: 52,  color: '#6ad1ff', top: '22%', left: '58%', duration: 15, delay: -3,  anim: 'orbMove6', opacity: 0.60 },
    { size: 58,  color: '#48adff', top: '45%', left: '72%', duration: 21, delay: -8,  anim: 'orbMove7', opacity: 0.55 },
    { size: 48,  color: '#4dbbff', top: '10%', left: '52%', duration: 13, delay: -5,  anim: 'orbMove2', opacity: 0.65 },
];

orbData.forEach(d => {
    const orb = document.createElement('div');
    orb.classList.add('neon-orb');
    orb.style.width = d.size + 'px';
    orb.style.height = d.size + 'px';
    orb.style.background = d.color;
    orb.style.top = d.top;
    orb.style.left = d.left;
    orb.style.opacity = d.opacity;
    orb.style.animation = `${d.anim} ${d.duration}s ease-in-out ${d.delay}s infinite`;
    neonOrbs.appendChild(orb);
});
