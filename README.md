# Marketing Management Course Website

A simple, build-free course website for GitHub Pages. The site uses only HTML, CSS, and vanilla JavaScript.

## Main files

```text
index.html
assets/
  css/styles.css
  css/slides.css
  js/course-data.js
  js/app.js
  js/slides.js
materials/
  slides/
  data/week-03/
  code/
  other/
```

## Update the schedule

Edit `assets/js/course-data.js`.

Each week has a title, one-paragraph description, optional AI integration text, and four resource categories:

```javascript
{
  number: 4,
  title: "Week title",
  description: "One paragraph describing the week.",
  ai: "Optional AI topic",
  resources: {
    slides: [{ label: "Web", url: "./materials/slides/week-04.html" }],
    data: [{ label: "CSV", url: "./materials/data/week-04/data.csv" }],
    code: [{ label: "Python", url: "./materials/code/week-04.py" }],
    other: [{ label: "Reading", url: "./materials/other/week-04.md" }]
  }
}
```

Use an empty object for a week whose files are not ready:

```javascript
resources: {}
```

The page displays an em dash instead of a broken link.

## Current completed weeks

### Week 2

- Web and Markdown slides on segmentation concepts
- DentMax case guide
- No data or code links

### Week 3

- Web and Markdown slides on clustering and embedding-based segmentation
- UCI Wholesale Customers data for SPSS clustering
- SPSS syntax for hierarchical and k-means clustering
- Synthetic customer feedback data
- Python sentence-embedding and k-means workflow
- Workshop guide and data notes

## Preview locally

Run a static server from the project directory:

```bash
python -m http.server 8000
```

Open `http://localhost:8000/`.

## Deploy to GitHub Pages

1. Upload the contents of this directory to the repository root.
2. Open the repository's **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Select `main` and `/ (root)`.
5. Save the setting and wait for the Pages workflow to finish.

All internal URLs use relative paths, so the site works at:

```text
https://username.github.io/repository-name/
```

## Data attribution

`materials/data/week-03/wholesale_customers.csv` is the Wholesale Customers dataset from the UCI Machine Learning Repository:

> Cardoso, M. (2013). Wholesale customers [Dataset]. UCI Machine Learning Repository. https://doi.org/10.24432/C5030X

License: CC BY 4.0.

`customer_feedback.csv` is synthetic teaching data and contains no real customers.
