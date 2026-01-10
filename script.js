// Lightweight fade-in on load for subtle polish

document.querySelectorAll(".hero-image img, .hero-text").forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(10px)";
    setTimeout(() => {
        el.style.transition = "all 0.8s ease";
        el.style.opacity = 1;
        el.style.transform = "none";
    }, 150);
});
