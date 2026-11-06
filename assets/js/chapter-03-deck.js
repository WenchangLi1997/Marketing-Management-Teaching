(() => {
  "use strict";

  const deck = document.getElementById("deck");
  const source = new Map(window.chapter3Content.slides.map(slide => [String(slide.number), slide]));
  const revisions = window.chapter3Revisions || {};
  const fontStack = '"Garamond", "EB Garamond", Georgia, serif';
  const slideKeys = deck.dataset.slides.split(",").flatMap(rawPart => {
    const part = rawPart.trim();
    const range = part.match(/^(\d+)-(\d+)$/);
    if (!range) return [part];
    const start = Number(range[1]);
    const end = Number(range[2]);
    return Array.from({ length: end - start + 1 }, (_, index) => String(start + index));
  }).filter(key => !revisions[key]?.hidden);
  const rgb = value => `rgb(${value & 255}, ${(value >> 8) & 255}, ${(value >> 16) & 255})`;
  const textOf = shape => (shape.paragraphs || []).map(paragraph => paragraph.text).join(" ").trim();
  const smartPunctuation = value => value
    .replace(/"([^"\n]+)"/g, "“$1”")
    .replace(/([\p{L}\p{N}])'([\p{L}\p{N}])/gu, "$1’$2")
    .replace(/(^|[\s([{])"(?=\S)/g, "$1“")
    .replace(/"(?=$|[\s,.;:!?)}\]])/g, "”");
  const isFooter = shape => /^(Footer|Slide Number)/i.test(shape.name) || /Palmatier/i.test(textOf(shape));
  const isFullBleed = shape =>
    shape.asset && shape.x <= 10 && shape.y <= 5 && shape.w >= 700 && shape.h >= 530;
  const isDominantImage = shape => shape.asset && shape.w > 600 && shape.h > 350;

  function position(element, shape) {
    Object.assign(element.style, {
      left: `${shape.x}px`,
      top: `${shape.y}px`,
      width: `${shape.w}px`,
      height: `${shape.h}px`
    });
    if (shape.rotation) element.style.transform = `rotate(${shape.rotation}deg)`;
    if (shape.fill !== undefined) element.style.backgroundColor = rgb(shape.fill);
    if (shape.fillTransparency !== undefined) element.style.opacity = 1 - shape.fillTransparency;
    if (shape.line !== undefined) {
      element.style.border = `${Math.max(0.7, shape.lineWidth || 1)}px solid ${rgb(shape.line)}`;
    }
    if (/Round/i.test(shape.name)) element.style.borderRadius = "8px";
    return element;
  }

  function isTitle(shape, slideNumber) {
    if (!shape.paragraphs?.length) return false;
    if (slideNumber === 1) return shape.y < 220;
    const largestRun = Math.max(
      0,
      ...shape.paragraphs.flatMap(paragraph => (paragraph.runs || []).map(run => run.size || 0))
    );
    return shape.y < 100 && (/Title/i.test(shape.name) || largestRun >= 26);
  }

  function renderObject(shape, slideNumber) {
    if (shape.asset) {
      const image = position(document.createElement("img"), shape);
      image.className = "ppt-object ppt-image";
      if (isDominantImage(shape)) image.classList.add("dominant-image");
      if (isFullBleed(shape)) image.classList.add("full-bleed-image");
      image.src = `../../assets/images/chapter-03-elements/${shape.asset}`;
      image.alt = shape.name;
      image.dataset.shapeName = shape.name;
      return image;
    }

    if (shape.paragraphs?.length) {
      const box = position(document.createElement("div"), shape);
      box.className = "ppt-object ppt-text";
      if (shape.type === 14) {
        box.style.backgroundColor = "transparent";
        box.style.border = "none";
        box.style.opacity = "1";
      }
      box.dataset.shapeName = shape.name;
      box.contentEditable = "true";
      box.spellcheck = false;
      if (isTitle(shape, slideNumber)) {
        box.classList.add("slide-title");
        box.style.height = `${Math.max(shape.h, 70)}px`;
      }
      if (slideNumber === 1) {
        box.classList.add(shape.y < 220 ? "cover-title" : "cover-subtitle");
      }

      const margins = shape.margins || [0, 0, 0, 0];
      box.style.padding = `${margins[1]}px ${margins[2]}px ${margins[3]}px ${margins[0]}px`;
      if (shape.verticalAnchor === 3) box.style.justifyContent = "flex-end";
      if (shape.verticalAnchor === 2) box.style.justifyContent = "center";

      for (const paragraph of shape.paragraphs) {
        const row = document.createElement("p");
        row.className = "ppt-paragraph";
        row.style.marginTop = `${shape.h < 40 ? 0 : paragraph.before || 0}px`;
        row.style.marginBottom = `${shape.h < 40 ? 0 : paragraph.after || 0}px`;
        row.style.textAlign = paragraph.align === 2 ? "center" : paragraph.align === 3 ? "right" : "left";
        const paragraphScale = isTitle(shape, slideNumber) ? 1 : 0.92;
        const paragraphSize = Math.max(0, ...(paragraph.runs || []).map(run => run.size || 0));
        if (paragraphSize) row.style.fontSize = `${paragraphSize * paragraphScale}px`;
        if (paragraph.bullet === -1) {
          row.classList.add("ppt-bullet", paragraph.indent > 1 ? "ppt-bullet-sub" : "ppt-bullet-main");
          row.style.paddingLeft = paragraph.indent > 1 ? "27px" : "23px";
        }

        for (const run of paragraph.runs?.length ? paragraph.runs : [{ text: paragraph.text }]) {
          const span = document.createElement("span");
          span.textContent = smartPunctuation(run.text
            .replace(/[\r\n\v\f]+$/g, "")
            .replace(/[\uF0E0\uF0E8]/g, "→"));
          span.style.fontFamily = fontStack;
          if (run.size) span.style.fontSize = `${run.size * paragraphScale}px`;
          if (run.bold === -1) span.style.fontWeight = "700";
          if (run.italic === -1) span.style.fontStyle = "italic";
          row.append(span);
        }
        box.append(row);
      }
      return box;
    }

    if (shape.type === 1 || shape.type === 9) {
      const element = position(document.createElement("div"), shape);
      element.className = "ppt-object ppt-shape";
      element.dataset.shapeName = shape.name;
      return element;
    }
    return null;
  }

  slideKeys.forEach((key, index) => {
    const revision = revisions[key];
    const sourceSlide = source.get(key);
    const shapes = sourceSlide?.shapes || [];
    const number = Number.isFinite(Number(key)) ? Number(key) : key;
    const fullBleed = shapes.some(isFullBleed);
    const embeddedMasterIcon = shapes.some(
      shape => isDominantImage(shape) && shape.x > 20 && shape.y >= 30 && shape.y < 60 && shape.h > 480
    );

    const slide = document.createElement("section");
    slide.className = "slide";
    slide.id = `slide-${key}`;
    slide.setAttribute("aria-label", revision?.ariaLabel || `Chapter 3, slide ${key}`);

    const canvas = document.createElement("div");
    canvas.className = "ppt-canvas";
    if (revision?.className) canvas.classList.add(...revision.className.split(/\s+/));
    if (number === 1) canvas.classList.add("cover");
    if (fullBleed) canvas.classList.add("full-bleed");
    if (embeddedMasterIcon) canvas.classList.add("embedded-master-icon");

    if (revision?.html) {
      const custom = document.createElement("div");
      custom.className = "custom-slide";
      custom.innerHTML = revision.html;
      custom.querySelectorAll("[data-editable]").forEach(element => {
        element.contentEditable = "true";
        element.spellcheck = false;
      });
      canvas.append(custom);
    } else {
      for (const shape of shapes) {
        if (isFooter(shape)) continue;
        if (number === 1 && shape.asset) continue;
        const element = renderObject(shape, number);
        if (element) canvas.append(element);
      }

      for (const line of window.chapter3Ocr?.[number] || []) {
        if (/Palmatier/i.test(line.text)) continue;
        const box = document.createElement("div");
        box.className = "ocr-text";
        box.contentEditable = "true";
        box.spellcheck = false;
        box.dataset.targetWidth = line.w + 1;
        const span = document.createElement("span");
        span.textContent = smartPunctuation(line.text);
        box.append(span);
        Object.assign(box.style, {
          left: `${line.x - 2}px`,
          top: `${line.y - 2}px`,
          width: `${line.w + 5}px`,
          height: `${line.h + 5}px`,
          backgroundColor: line.bg,
          color: line.fg,
          fontSize: `${Math.max(9, line.h * 1.03)}px`
        });
        canvas.append(box);
      }
    }

    if (embeddedMasterIcon) {
      const mask = document.createElement("div");
      mask.className = "corner-mask";
      mask.setAttribute("aria-hidden", "true");
      canvas.append(mask);
    }

    if (fullBleed) {
      const mask = document.createElement("div");
      mask.className = "image-footer-mask";
      mask.setAttribute("aria-hidden", "true");
      canvas.append(mask);
    }

    const progress = document.createElement("div");
    progress.className = "slide-progress";
    progress.setAttribute("aria-hidden", "true");
    const progressValue = document.createElement("span");
    progressValue.style.width = `${((index + 1) / slideKeys.length) * 100}%`;
    progress.append(progressValue);
    canvas.append(progress);

    const pageNumber = document.createElement("div");
    pageNumber.className = "slide-number";
    pageNumber.textContent = revision?.pageNumber || key;
    pageNumber.setAttribute("aria-hidden", "true");
    canvas.append(pageNumber);

    slide.append(canvas);
    deck.append(slide);
  });

  deck.querySelectorAll(".slide-title").forEach(box => {
    let size = 32;
    while ((box.scrollHeight > box.clientHeight + 2 || box.scrollWidth > box.clientWidth + 2) && size > 20) {
      size -= 1;
      box.style.setProperty("--title-size", `${size}px`);
    }
  });

  deck.querySelectorAll(".ppt-text:not(.slide-title):not(.cover-title):not(.cover-subtitle)").forEach(box => {
    let attempts = 0;
    while ((box.scrollHeight > box.clientHeight + 2 || box.scrollWidth > box.clientWidth + 2) && attempts < 12) {
      let changed = false;
      box.querySelectorAll(".ppt-paragraph").forEach(paragraph => {
        const size = Number.parseFloat(paragraph.style.fontSize);
        if (Number.isFinite(size) && size > 8) {
          paragraph.style.fontSize = `${Math.max(8, size * 0.95)}px`;
          changed = true;
        }
      });
      box.querySelectorAll("span").forEach(span => {
        const size = Number.parseFloat(span.style.fontSize);
        if (Number.isFinite(size) && size > 8) {
          span.style.fontSize = `${Math.max(8, size * 0.95)}px`;
          changed = true;
        }
      });
      if (!changed) break;
      attempts += 1;
    }
  });

  deck.querySelectorAll(".ocr-text").forEach(element => {
    const span = element.firstChild;
    const ratio = Number(element.dataset.targetWidth) / span.getBoundingClientRect().width;
    if (ratio < 1) span.style.transform = `scaleX(${ratio})`;
  });

  function scale() {
    const factor = Math.min(innerWidth / 720, innerHeight / 540);
    deck.querySelectorAll(".ppt-canvas").forEach(element => {
      element.style.transform = `scale(${factor})`;
    });
  }

  addEventListener("resize", scale);
  scale();

  const linkedSlide = location.hash && document.querySelector(location.hash);
  if (linkedSlide) requestAnimationFrame(() => linkedSlide.scrollIntoView());

  addEventListener("keydown", event => {
    if (event.target.isContentEditable) return;
    const forward = ["ArrowDown", "ArrowRight", "PageDown", " "];
    const backward = ["ArrowUp", "ArrowLeft", "PageUp"];
    if (!forward.includes(event.key) && !backward.includes(event.key)) return;
    event.preventDefault();
    const current = Math.min(slideKeys.length - 1, Math.round(scrollY / innerHeight));
    const direction = forward.includes(event.key) ? 1 : -1;
    const next = Math.max(0, Math.min(slideKeys.length - 1, current + direction));
    deck.children[next].scrollIntoView({ behavior: "smooth" });
  });
})();
