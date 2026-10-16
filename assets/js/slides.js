(function () {
  "use strict";

  const slides = [...document.querySelectorAll(".slide")];
  const progress = document.querySelector(".progress");
  const counter = document.querySelector(".deck-counter");

  function currentIndex() {
    const middle = window.scrollY + window.innerHeight / 2;
    let best = 0;
    slides.forEach((slide, index) => {
      if (slide.offsetTop <= middle) best = index;
    });
    return best;
  }

  function update() {
    const index = currentIndex();
    const maximum = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = maximum > 0 ? window.scrollY / maximum : 0;
    progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
    counter.textContent = `${index + 1} / ${slides.length}`;
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  window.addEventListener("keydown", (event) => {
    if (!["ArrowDown", "ArrowRight", "PageDown", "ArrowUp", "ArrowLeft", "PageUp"].includes(event.key)) return;
    event.preventDefault();
    const direction = ["ArrowDown", "ArrowRight", "PageDown"].includes(event.key) ? 1 : -1;
    const next = Math.min(slides.length - 1, Math.max(0, currentIndex() + direction));
    slides[next].scrollIntoView({ behavior: "smooth" });
  });
  update();
})();
