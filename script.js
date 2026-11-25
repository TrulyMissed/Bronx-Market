document.addEventListener("DOMContentLoaded", () => {
    const words = ["SB Cash", "Max Money Accounts", "Fast Delivery", "Trusted Sellers"];
    const typing = document.getElementById("typing");
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {
        const word = words[wordIndex];
        typing.textContent = word.slice(0, charIndex);
        let delay = deleting ? 45 : 70;

        if (!deleting && charIndex === word.length) {
            deleting = true;
            delay = 1400;
        } else if (deleting && charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        } else {
            charIndex += deleting ? -1 : 1;
        }

        setTimeout(type, delay);
    }
    type();

    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        item.querySelector(".faq-question").addEventListener("click", () => {
            faqItems.forEach(other => {
                if (other !== item) other.classList.remove("active");
            });
            item.classList.toggle("active");
        });
    });

    const scrollTop = document.querySelector(".scroll-top");
    window.addEventListener("scroll", () => {
        scrollTop.classList.toggle("show", window.scrollY > 200);
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll("[data-reveal]").forEach(el => observer.observe(el));
});
