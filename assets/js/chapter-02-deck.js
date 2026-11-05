(() => {
  "use strict";
  const deck = document.getElementById("deck");
  const source = new Map(window.chapter2Content.slides.map(s => [s.number, s]));
  const numbers = deck.dataset.slides.split(",").flatMap(part => {
    const [start, end = start] = part.split("-").map(Number);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  });
  const rgb = n => `rgb(${n & 255}, ${(n >> 8) & 255}, ${(n >> 16) & 255})`;

  function position(el, s) {
    Object.assign(el.style, { left: `${s.x}px`, top: `${s.y}px`, width: `${s.w}px`, height: `${s.h}px` });
    if (s.rotation) el.style.transform = `rotate(${s.rotation}deg)`;
    if (s.fill !== undefined) el.style.backgroundColor = rgb(s.fill);
    if (s.fillTransparency !== undefined) el.style.opacity = 1 - s.fillTransparency;
    if (s.line !== undefined) el.style.border = `${Math.max(.7, s.lineWidth || 1)}px solid ${rgb(s.line)}`;
    if (/Round/i.test(s.name)) el.style.borderRadius = "14px";
    return el;
  }

  function object(s) {
    if (s.asset) {
      const img = position(document.createElement("img"), s);
      img.className = "ppt-object ppt-image";
      img.src = `../../assets/images/chapter-02-elements/${s.asset}`;
      img.alt = s.name;
      return img;
    }
    if (s.paragraphs?.length) {
      const box = position(document.createElement("div"), s);
      box.className = "ppt-object ppt-text";
      box.contentEditable = "true";
      box.spellcheck = false;
      const m = s.margins || [0, 0, 0, 0];
      box.style.padding = `${m[1]}px ${m[2]}px ${m[3]}px ${m[0]}px`;
      if (s.verticalAnchor === 3) box.style.justifyContent = "flex-end";
      if (s.verticalAnchor === 2) box.style.justifyContent = "center";
      for (const p of s.paragraphs) {
        const row = document.createElement("p");
        row.className = "ppt-paragraph";
        row.style.marginTop = `${p.before || 0}px`;
        row.style.marginBottom = `${p.after || 0}px`;
        row.style.textAlign = p.align === 2 ? "center" : p.align === 3 ? "right" : "left";
        if (p.bullet === -1) {
          row.classList.add("ppt-bullet", p.indent > 1 ? "ppt-bullet-sub" : "ppt-bullet-main");
          row.style.paddingLeft = p.indent > 1 ? "23px" : "25px";
        }
        for (const run of p.runs?.length ? p.runs : [{ text: p.text }]) {
          const span = document.createElement("span");
          span.textContent = run.text.replace(/[\r\n\v\f]+$/g, "").replaceAll("", "→");
          span.style.fontFamily = `"${run.font || "Cambria"}", Georgia, serif`;
          if (run.size) span.style.fontSize = `${run.size}px`;
          if (run.color !== undefined) span.style.color = rgb(run.color);
          if (run.bold === -1) span.style.fontWeight = "700";
          if (run.italic === -1) span.style.fontStyle = "italic";
          row.append(span);
        }
        box.append(row);
      }
      return box;
    }
    if (s.type === 1 || s.type === 9) {
      const shape = position(document.createElement("div"), s);
      shape.className = "ppt-object ppt-shape";
      return shape;
    }
    return null;
  }

  for (const number of numbers) {
    const shapes = source.get(number).shapes;
    const imageCover = shapes.some(s => s.asset && s.w > 600 && s.h > 350 && s.y < 60);
    const slide = document.createElement("section");
    slide.className = "slide";
    slide.id = `slide-${number}`;
    slide.setAttribute("aria-label", `Chapter 2, original slide ${number}`);
    const canvas = document.createElement("div");
    canvas.className = `ppt-canvas${number === 1 ? " cover" : ""}${imageCover ? " image-cover" : ""}`;
    if (number !== 1 && !imageCover) {
      const header = document.createElement("img");
      header.className = "master-header";
      header.src = "../../assets/images/chapter-02-elements/header.png";
      header.alt = "";
      canvas.append(header);
    }
    for (const s of shapes) {
      if (imageCover && /^(Footer|Slide Number)/.test(s.name)) continue;
      const el = object(s);
      if (el) canvas.append(el);
    }
    if (window.chapter2Ocr?.[number]) {
      for (const line of window.chapter2Ocr?.[number] || []) {
        const el = document.createElement("div");
        el.className = "ocr-text";
        el.contentEditable = "true";
        el.spellcheck = false;
        el.dataset.targetWidth = line.w + 1;
        const span = document.createElement("span");
        span.textContent = line.text;
        el.append(span);
        Object.assign(el.style, {
          left: `${line.x - 2}px`, top: `${line.y - 2}px`,
          width: `${line.w + 5}px`, height: `${line.h + 5}px`,
          backgroundColor: line.bg, color: line.fg,
          fontSize: `${Math.max(9, line.h * 1.03)}px`
        });
        canvas.append(el);
      }
    }
    slide.append(canvas);
    deck.append(slide);
  }
  deck.querySelectorAll(".ocr-text").forEach(el => {
    const span = el.firstChild;
    const ratio = Number(el.dataset.targetWidth) / span.getBoundingClientRect().width;
    if (ratio < 1) span.style.transform = `scaleX(${ratio})`;
  });

  function scale() {
    const factor = Math.min(innerWidth / 720, innerHeight / 540);
    deck.querySelectorAll(".ppt-canvas").forEach(el => { el.style.transform = `scale(${factor})`; });
  }
  addEventListener("resize", scale);
  scale();

  addEventListener("keydown", event => {
    if (event.target.isContentEditable) return;
    const forward = ["ArrowDown", "ArrowRight", "PageDown", " "];
    const backward = ["ArrowUp", "ArrowLeft", "PageUp"];
    if (!forward.includes(event.key) && !backward.includes(event.key)) return;
    event.preventDefault();
    const current = Math.min(numbers.length - 1, Math.round(scrollY / innerHeight));
    const next = Math.max(0, Math.min(numbers.length - 1, current + (forward.includes(event.key) ? 1 : -1)));
    deck.children[next].scrollIntoView({ behavior: "smooth" });
  });
})();
