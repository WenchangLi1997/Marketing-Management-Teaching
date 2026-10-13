/*
 * Edit this file to update the course website.
 * Keep local URLs relative (begin with "./") so GitHub project pages work.
 */
window.courseData = {
  course: {
    kicker: "Marketing Management · Module I",
    title: "Managing Customer Heterogeneity",
    introduction:
      "A focused three-week module on how marketers identify meaningful customer differences, translate data into segments, and extend segmentation with modern AI methods.",
    description:
      "The module starts with the strategic logic of segmentation, targeting, and positioning. Students then work through clustering as an applied decision process before examining how text embeddings can surface patterns in unstructured customer language.",
    instructor: "Instructor Name",
    institution: "Nanyang Technological University",
    term: "Academic Year 2026–27",
    format: "Lecture + Case Workshop",
    contact: "instructor@university.edu",
  },

  objectives: [
    "Explain why customer heterogeneity is a foundational marketing problem and distinguish needs-based segments from demographic descriptions.",
    "Build an STP argument using customer, company, and competitor evidence.",
    "Interpret cluster solutions and translate segment profiles into targeting decisions.",
    "Evaluate segment quality using managerial criteria such as distinctiveness, actionability, and financial value.",
    "Use embeddings to explore unstructured customer feedback while keeping strategic judgment and validation in the loop.",
  ],

  weeks: [
    {
      number: 1,
      title: "Segmentation Concepts and Case",
      subtitle: "Strategic foundations",
      mode: "Concept + case",
      description:
        "Customer heterogeneity, latent demand, STP, target selection, and positioning through the DentMax and EMBA examples.",
      topics: [
        "Why all customers differ and why those differences matter",
        "Needs, descriptors, and the logic of STP",
        "Target attractiveness, competitive strength, and positioning",
      ],
      resources: [
        { label: "Slides", url: "./materials/slides/week-01-segmentation-concepts-and-case.pptx", download: true },
        { label: "Dataset", url: "./materials/datasets/customer-segmentation-sample.csv", download: true },
        { label: "Code", url: null },
        { label: "Video", url: null },
      ],
    },
    {
      number: 2,
      title: "Clustering: Case Workshop",
      subtitle: "Applied segmentation analytics",
      mode: "Workshop",
      description:
        "A guided case workshop covering variable selection, data preparation, cluster interpretation, segment naming, and managerial recommendations.",
      topics: [
        "From survey attributes to an analysis-ready customer matrix",
        "Choosing and interpreting a cluster solution",
        "Connecting segment profiles to targeting and positioning",
      ],
      resources: [
        { label: "Slides", url: "./materials/slides/week-01-segmentation-concepts-and-case.pptx", download: true },
        { label: "Dataset", url: "./materials/datasets/customer-segmentation-sample.csv", download: true },
        { label: "Code", url: "./materials/code/week-02-clustering-workshop.py", download: true },
        { label: "Video", url: null },
      ],
    },
    {
      number: 3,
      title: "AI Frontier: Embedding-Based Segmentation",
      subtitle: "Unstructured customer data",
      mode: "AI frontier",
      description:
        "An introduction to representing customer language as vectors, clustering those representations, and assessing whether the resulting segments are useful for marketing decisions.",
      topics: [
        "Text embeddings as representations of customer meaning",
        "Clustering reviews, interviews, and open-ended responses",
        "Human interpretation, validation, and responsible use",
      ],
      resources: [
        { label: "Brief", url: "./materials/readings/week-03-embedding-segmentation-brief.md", download: true },
        { label: "Dataset", url: "./materials/datasets/voice-of-customer-sample.csv", download: true },
        { label: "Code", url: "./materials/code/week-03-embedding-segmentation-starter.py", download: true },
        { label: "Video", url: null },
      ],
    },
  ],

  additionalResources: [
    {
      title: "Segmentation reading guide",
      description: "Questions that connect customer heterogeneity, STP, and the Week 1 case.",
      url: "./materials/readings/week-01-segmentation-reading-guide.md",
      linkLabel: "Download guide",
    },
    {
      title: "Workshop dataset",
      description: "A small synthetic dataset for demonstrating customer clustering workflows.",
      url: "./materials/datasets/customer-segmentation-sample.csv",
      linkLabel: "Download CSV",
    },
    {
      title: "Python workshop starter",
      description: "A readable starting point for scaling, clustering, and profiling customer data.",
      url: "./materials/code/week-02-clustering-workshop.py",
      linkLabel: "Download code",
    },
    {
      title: "Video lecture collection",
      description: "Add the course recording or playlist URL in course-data.js when it is available.",
      url: null,
      linkLabel: "Coming soon",
    },
  ],
};
