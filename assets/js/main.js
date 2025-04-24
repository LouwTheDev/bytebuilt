document.addEventListener("DOMContentLoaded", () => {
    // Floating dots
    const dots = document.createElement("div");
    dots.className = "floating-dots";
    document.body.appendChild(dots);
    for (let i = 0; i < 50; i++) {
      const dot = document.createElement("span");
      dot.className = "dot";
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.animationDuration = `${4 + Math.random() * 6}s`;
      dots.appendChild(dot);
    }
  
    // Burger menu toggle
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
  
    if (burger && navLinks) {
      burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    }
  
    // Auto-slide reviews
    const carousel = document.querySelector(".carousel");
    const track = document.querySelector(".carousel-track");
  
    if (carousel && track) {
      const scrollStep = 320;
      const scrollDelay = 4000;
  
      setInterval(() => {
        const maxScrollLeft = track.scrollWidth - carousel.clientWidth;
  
        if (carousel.scrollLeft >= maxScrollLeft - 10) {
          carousel.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carousel.scrollBy({ left: scrollStep, behavior: "smooth" });
        }
      }, scrollDelay);
    }
  });
  
  // Manual scroll with arrows
  function scrollCarousel(direction) {
    const carousel = document.querySelector(".carousel");
    const scrollStep = 320;
    if (carousel) {
      carousel.scrollBy({
        left: scrollStep * direction,
        behavior: "smooth"
      });
    }
  }
  