# Marketing Management Course Website

A lightweight, build-free course website designed for GitHub Pages. The page uses only HTML, CSS, and vanilla JavaScript.

## Project structure

```text
.
├── index.html
├── assets/
│   ├── css/styles.css
│   └── js/
│       ├── course-data.js
│       └── app.js
├── materials/
│   ├── code/
│   ├── datasets/
│   ├── readings/
│   └── slides/
└── README.md
```

## Edit course information

Open `assets/js/course-data.js`. This file contains:

- course title, instructor, term, and institution;
- learning objectives;
- schedule and lecture card content;
- links to slides, datasets, code, videos, and additional resources.

The HTML layout does not need to change when you add or remove a week.

### Add a week

Copy one object inside the `weeks` array and update its values:

```javascript
{
  number: 4,
  title: "New Topic",
  subtitle: "Short description",
  mode: "Lecture",
  description: "What students will study.",
  topics: ["Topic one", "Topic two"],
  resources: [
    { label: "Slides", url: "./materials/slides/week-04.pptx", download: true },
    { label: "Dataset", url: null },
    { label: "Code", url: null },
    { label: "Video", url: "https://example.com/video" }
  ]
}
```

Use `null` for a resource that is not available yet. The page will display it as “Soon” instead of creating a broken link.

## Add course files

1. Put slides in `materials/slides/`.
2. Put datasets in `materials/datasets/`.
3. Put Python or R files in `materials/code/`.
4. Put reading guides in `materials/readings/`.
5. Add or update the matching relative URL in `assets/js/course-data.js`.

Keep internal URLs relative and begin them with `./`. This makes the same site work at both a custom domain and a GitHub project URL such as:

```text
https://username.github.io/repository-name/
```

Do not use root-relative paths such as `/assets/css/styles.css`, because those point to the account root rather than the repository subdirectory.

## Preview locally

You can open `index.html` directly. For a more accurate GitHub Pages preview, run a local static server from the project directory:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Deploy to GitHub Pages

1. Create a new GitHub repository, for example `marketing-management-course`.
2. Add these project files to the repository root.
3. Commit the files and push them to the `main` branch.
4. On GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select the `main` branch and the `/ (root)` folder, then click **Save**.
7. Wait for GitHub to publish the site. Its URL will be:

   ```text
   https://username.github.io/marketing-management-course/
   ```

8. Replace the sample instructor details and add video URLs in `assets/js/course-data.js`.

Future updates only require a new commit and push. GitHub Pages will republish the site automatically.

## Notes

- The sample datasets are synthetic and intended for classroom demonstration.
- The Week 3 embedding starter intentionally leaves the model provider open so the instructor can choose an approved tool and privacy policy.
- The page has no framework, package installation, build command, backend, database, or analytics dependency.
