(function () {
  "use strict";

  const data = window.courseData;
  const title = document.getElementById("course-title");
  const introduction = document.getElementById("course-introduction");
  const weekList = document.getElementById("week-list");

  title.textContent = data.title;
  introduction.textContent = data.introduction;

  const labels = [
    ["slides", "Slides"],
    ["pdf", "PDF"],
    ["data", "Data"],
    ["code", "Code"],
    ["other", "Other materials"],
  ];

  function create(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function renderResourceGroup(resources, key, label) {
    const group = create("span", "resource-group");
    group.append(create("span", "resource-label", `${label}:`));

    const items = resources[key] || [];
    if (!items.length) {
      group.append(create("span", "resource-empty", "—"));
      return group;
    }

    const links = create("span", "resource-links");
    items.forEach((item) => {
      const link = create("a", "", item.label);
      link.href = item.url;
      links.append(link);
    });
    group.append(links);
    return group;
  }

  data.weeks.forEach((week) => {
    if (week.recess) {
      weekList.append(create("div", "recess", week.title));
      return;
    }

    const article = create("article", "week");
    const heading = create("div", "week-heading");
    heading.append(
      create("span", "week-number", `Week ${week.number}`),
      create("h3", "", week.title),
    );
    article.append(heading, create("p", "week-description", week.description));

    if (week.ai) {
      const ai = create("p", "week-ai");
      ai.append(create("strong", "", "AI integration: "), document.createTextNode(week.ai));
      article.append(ai);
    }

    const resourceLine = create("p", "resource-line");
    labels.forEach(([key, label]) => resourceLine.append(renderResourceGroup(week.resources || {}, key, label)));
    article.append(resourceLine);
    weekList.append(article);
  });
})();
