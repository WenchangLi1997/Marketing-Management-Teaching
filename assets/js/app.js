(function () {
  "use strict";

  const data = window.courseData;
  if (!data) {
    document.body.innerHTML = '<p style="padding:2rem;font-family:sans-serif">Course data could not be loaded.</p>';
    return;
  }

  const byId = (id) => document.getElementById(id);
  const create = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const isExternal = (url) => /^https?:\/\//i.test(url || "");

  function renderCourse() {
    const { course, objectives, weeks } = data;
    document.title = `Marketing Management | ${course.title}`;
    byId("course-kicker").textContent = course.kicker;
    byId("course-title").textContent = course.title;
    byId("course-introduction").textContent = course.introduction;
    byId("course-description").textContent = course.description;
    byId("footer-course-name").textContent = "Marketing Management";
    byId("footer-institution").textContent = course.institution;
    byId("current-year").textContent = new Date().getFullYear();

    const metaItems = [
      ["Instructor", course.instructor],
      ["Term", course.term],
      ["Format", course.format],
    ];
    const meta = byId("course-meta");
    metaItems.forEach(([label, value]) => {
      const group = create("div");
      group.append(create("dt", "", label), create("dd", "", value));
      meta.append(group);
    });

    const sequence = byId("module-sequence");
    weeks.forEach((week) => sequence.append(create("li", "", week.title)));

    const objectiveList = byId("learning-objectives");
    objectives.forEach((objective) => objectiveList.append(create("li", "", objective)));
  }

  function renderSchedule() {
    const schedule = byId("schedule-list");
    data.weeks.forEach((week) => {
      const row = create("article", "schedule-row");
      const label = create("div", "week-label", `Week ${String(week.number).padStart(2, "0")}`);
      const heading = create("div");
      heading.append(create("h3", "", week.title), create("p", "schedule-subtitle", week.subtitle));
      const topicList = create("ul", "topic-list");
      week.topics.forEach((topic) => topicList.append(create("li", "", topic)));
      row.append(label, heading, topicList);
      schedule.append(row);
    });
  }

  function makeResource(resource) {
    if (!resource.url) {
      const unavailable = create("span", "resource-unavailable", `${resource.label} · Soon`);
      unavailable.setAttribute("aria-disabled", "true");
      return unavailable;
    }

    const link = create("a", "resource-link", resource.label);
    link.href = resource.url;
    link.dataset.download = String(Boolean(resource.download));
    if (resource.download) link.setAttribute("download", "");
    if (isExternal(resource.url)) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
    return link;
  }

  function renderLectureCards() {
    const grid = byId("lecture-grid");
    data.weeks.forEach((week) => {
      const card = create("article", "lecture-card");
      const top = create("div", "card-topline");
      top.append(
        create("span", "card-week", `Week ${String(week.number).padStart(2, "0")}`),
        create("span", "card-mode", week.mode),
      );
      const links = create("div", "resource-links");
      links.setAttribute("aria-label", `${week.title} resources`);
      week.resources.forEach((resource) => links.append(makeResource(resource)));
      card.append(top, create("h3", "", week.title), create("p", "", week.description), links);
      grid.append(card);
    });
  }

  function renderAdditionalResources() {
    const list = byId("resource-list");
    data.additionalResources.forEach((resource, index) => {
      const item = create("article", "resource-item");
      const copy = create("div");
      copy.append(create("h3", "", resource.title), create("p", "", resource.description));
      item.append(create("span", "resource-index", String(index + 1).padStart(2, "0")), copy);

      if (resource.url) {
        const link = create("a", "", resource.linkLabel);
        link.href = resource.url;
        if (isExternal(resource.url)) {
          link.target = "_blank";
          link.rel = "noreferrer";
        } else {
          link.setAttribute("download", "");
        }
        item.append(link);
      } else {
        const status = create("span", "resource-unavailable", resource.linkLabel);
        status.setAttribute("aria-disabled", "true");
        item.append(status);
      }
      list.append(item);
    });
  }

  function setupNavigation() {
    const toggle = document.querySelector(".menu-toggle");
    const nav = byId("site-navigation");
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      nav.dataset.open = String(!isOpen);
    });
    nav.addEventListener("click", (event) => {
      if (event.target.matches("a")) {
        toggle.setAttribute("aria-expanded", "false");
        nav.dataset.open = "false";
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) {
        toggle.setAttribute("aria-expanded", "false");
        nav.dataset.open = "false";
      }
    });
  }

  renderCourse();
  renderSchedule();
  renderLectureCards();
  renderAdditionalResources();
  setupNavigation();
})();
