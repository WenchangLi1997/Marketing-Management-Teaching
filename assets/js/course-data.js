window.courseData = {
  title: "Marketing Management",
  introduction:
    "This course organizes marketing decisions around four first principles: customers differ, customers change, competitors react, and resources are limited. Concepts, cases, analytical workshops, and selected AI frontiers are integrated throughout the course.",

  weeks: [
    {
      number: 1,
      title: "Introduction, syllabus, Four Principles, and SPSS warm-up",
      description:
        "Course orientation and an overview of the four recurring marketing problems. The session also introduces the role of analytics and provides a short SPSS warm-up.",
      ai: "Brief overview of AI in marketing",
      resources: {},
    },
    {
      number: 2,
      title: "MP#1: Segmentation concepts and case",
      description:
        "Why customers differ, where heterogeneity comes from, and how segmentation, targeting, and positioning convert those differences into marketing decisions. Cases are used to connect the concepts to managerial choices.",
      resources: {
        slides: [
          { label: "Web", url: "./materials/slides/week-02-segmentation.html" },
          { label: "Markdown", url: "./materials/slides/week-02-segmentation.md" },
        ],
        other: [{ label: "Case guide", url: "./materials/other/week-02-case-guide.md" }],
      },
    },
    {
      number: 3,
      title: "MP#1: Clustering and case workshop",
      description:
        "A methods-focused workshop on preparing customer data, choosing a cluster solution, interpreting segment profiles, and translating results into actions. The second half extends segmentation to unstructured customer language.",
      ai: "AI Frontier 1: Embedding-based segmentation",
      resources: {
        slides: [
          { label: "Web", url: "./materials/slides/week-03-clustering-ai.html" },
          { label: "Markdown", url: "./materials/slides/week-03-clustering-ai.md" },
        ],
        data: [
          { label: "Wholesale customers", url: "./materials/data/week-03/wholesale_customers.csv" },
          { label: "Customer feedback", url: "./materials/data/week-03/customer_feedback.csv" },
        ],
        code: [
          { label: "SPSS", url: "./materials/code/week-03-clustering.sps" },
          { label: "Python", url: "./materials/code/week-03-embedding-segmentation.py" },
        ],
        other: [
          { label: "Workshop guide", url: "./materials/other/week-03-workshop-guide.md" },
          { label: "Data notes", url: "./materials/data/week-03/SOURCE.md" },
        ],
      },
    },
    {
      number: 4,
      title: "MP#2: Customer dynamics and AER",
      description:
        "Customer needs and behaviors change over time. This week introduces acquisition, expansion, and retention as a framework for managing those changes.",
      resources: {},
    },
    {
      number: 5,
      title: "MP#2: Customer transitions, CLV, and case workshop",
      description:
        "Customer transitions and customer lifetime value provide the analytical foundation for deciding which relationships to acquire, develop, or retain.",
      ai: "AI Frontier 2: Sequential customer prediction",
      resources: {},
    },
    {
      number: 6,
      title: "MP#3: Competitive advantage and positioning",
      description:
        "This week examines how firms create customer-valued differences, support them with credible evidence, and make those advantages difficult for competitors to copy.",
      resources: {},
    },
    {
      number: 7,
      title: "MP#3: Perceptual mapping and case workshop",
      description:
        "Perceptual maps turn customer perceptions into a view of competitive position. The workshop connects mapping choices to positioning strategy.",
      ai: "AI Frontier 3: LLM-based perceptual analysis",
      resources: {},
    },
    { recess: true, title: "Recess" },
    {
      number: 8,
      title: "MP#4: Marketing response and resource allocation",
      description:
        "Limited resources require explicit trade-offs. This week introduces response functions, metrics, and the logic of allocating budgets across marketing activities.",
      resources: {},
    },
    {
      number: 9,
      title: "MP#4: Regression and case workshop",
      description:
        "Regression models are used to estimate marketing response and support resource allocation decisions in a structured case workshop.",
      ai: "AI Frontier 4: Advanced marketing mix modeling",
      resources: {},
    },
    {
      number: 10,
      title: "A/B testing, marketing, and society",
      description:
        "The final week covers experimental evaluation and asks when marketing interventions create incremental value for firms, customers, and society.",
      ai: "Evaluating whether marketing interventions create incremental value",
      resources: {},
    },
  ],
};
