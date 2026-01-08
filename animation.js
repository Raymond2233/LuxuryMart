function showConfettiAnimation() {
    // Create overlay
    const overlay = document.createElement("div");
    overlay.id = "confettiOverlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.zIndex = "9999";
    overlay.style.pointerEvents = "none";
    overlay.style.overflow = "hidden";
    document.body.appendChild(overlay);

    // Generate confetti
    const colors = ["#ff4d4d", "#4dff4d", "#4d4dff", "#ffff4d", "#ff4dff", "#4dffff", "#ffa64d"];
    const total = 150;

    for (let i = 0; i < total; i++) {
        const confetti = document.createElement("div");
        confetti.style.position = "absolute";
        confetti.style.width = Math.random() * 10 + 5 + "px";
        confetti.style.height = Math.random() * 10 + 5 + "px";
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = "-20px";
        confetti.style.opacity = Math.random() + 0.5;
        confetti.style.borderRadius = "50%";
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        overlay.appendChild(confetti);

        // Animate falling
        const duration = Math.random() * 3 + 2; // 2-5s
        confetti.animate([
            { transform: `translateY(0) rotate(0deg)` },
            { transform: `translateY(${window.innerHeight + 50}px) rotate(${Math.random()*720}deg)` }
        ], {
            duration: duration * 1000,
            iterations: 1,
            easing: "linear",
            delay: Math.random() * 1000
        });
    }

    // Remove overlay after 5 seconds
    setTimeout(() => {
        overlay.remove();
    }, 5000);
}
