(() => {
  "use strict";

  const deck = document.getElementById("deck");
  const slides = window.week1Slides || [];

  slides.forEach((item, index) => {
    const page = index + 1;
    const footerSection = page === 1 ? "WELCOME"
      : page === 2 ? "PLAN"
      : page <= 16 ? "CASE"
      : page === 17 ? "BREAK"
      : page <= 26 ? "SYLLABUS"
      : page <= 30 ? "SPSS"
      : "CLOSING";
    const section = document.createElement("section");
    section.className = "slide";
    section.id = `slide-${page}`;
    section.setAttribute("aria-label", `Week 1, slide ${page}: ${item.title.replace(/<br>/g, " ")}`);

    const canvas = document.createElement("div");
    canvas.className = `week1-canvas ${item.className || ""}`.trim();
    canvas.innerHTML = `
      <article class="week1-layout">
        <header class="slide-header">
          <p class="slide-kicker" data-editable>${item.section}</p>
          <h1 data-editable>${item.title}</h1>
          ${item.subtitle ? `<p class="slide-subtitle" data-editable>${item.subtitle}</p>` : ""}
        </header>
        ${item.body ? `<div class="week1-body" data-editable>${item.body}</div>` : ""}
      </article>
      <footer class="slide-footer" aria-label="Slide footer">
        <span>SMU MiM · Marketing · Week 1</span>
        <span class="footer-philosophy">PROBLEM-DRIVEN · FRAMEWORK-GUIDED · ANALYTICS-INFORMED</span>
        <span>${footerSection} / ${String(page).padStart(2, "0")}</span>
      </footer>
      <div class="slide-progress" aria-hidden="true"><span style="width:${(page / slides.length) * 100}%"></span></div>`;

    canvas.querySelectorAll("[data-editable]").forEach(element => {
      element.contentEditable = "true";
      element.spellcheck = false;
    });

    section.append(canvas);
    deck.append(section);
  });

  function scale() {
    const factor = Math.min(innerWidth / 960, innerHeight / 540);
    deck.querySelectorAll(".week1-canvas").forEach(element => {
      element.style.transform = `scale(${factor})`;
    });
  }

  addEventListener("resize", scale);
  scale();

  addEventListener("keydown", event => {
    if (event.target.isContentEditable) return;
    const forward = ["ArrowDown", "ArrowRight", "PageDown", " "];
    const backward = ["ArrowUp", "ArrowLeft", "PageUp"];
    if (!forward.includes(event.key) && !backward.includes(event.key)) return;
    event.preventDefault();
    const current = Math.min(slides.length - 1, Math.round(scrollY / innerHeight));
    const direction = forward.includes(event.key) ? 1 : -1;
    const next = Math.max(0, Math.min(slides.length - 1, current + direction));
    deck.children[next].scrollIntoView({ behavior: "smooth" });
  });
})();
