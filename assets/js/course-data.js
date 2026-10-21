window.courseData = {
  title: "Marketing Management",
  introduction:
    "Marketing Management equips students to use marketing data and reports to make informed, critical decisions. The course begins with data collection, visualization, and analysis, then applies these skills to four fundamental marketing problems: customers differ, customers change, competitors react, and resources are limited. Through cases, analytical workshops, machine learning methods, and unstructured data such as customer text, students learn to develop marketing strategies that create customer value and improve business performance.",

  weeks: [
    {
      number: 1,
      title: "Introduction, syllabus, Four Principles, and SPSS warm-up",
      description:
        "Course orientation and an overview of the four recurring marketing problems. The session also introduces the role of analytics and provides a short SPSS warm-up.",
      ai: "Brief overview of AI in marketing",
      resources: {
        other: [
          { label: "SPSS learning resources", url: "https://www.ibm.com/products/spss-statistics/resources" },
          { label: "Python tutorial", url: "https://docs.python.org/3/tutorial/" },
        ],
      },
    },
    {
      number: 2,
      title: "MP#1: Segmentation concepts and case",
      description:
        "Why customers differ, where heterogeneity comes from, and how segmentation, targeting, and positioning convert those differences into marketing decisions. Cases are used to connect the concepts to managerial choices.",
      resources: {
        slides: [
          { label: "Web", url: "./materials/slides/week-02-segmentation.html" },
        ],
        pdf: [
          { label: "Download", url: "./materials/slides/week-02-segmentation.pdf" },
        ],
        other: [
          { label: "Customer-centric structures", url: "https://doi.org/10.1287/mksc.2014.0878" },
        ],
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
        ],
        pdf: [
          { label: "Download", url: "./materials/slides/week-03-clustering-ai.pdf" },
        ],
        data: [
          { label: "UrbanCart workshop", url: "./materials/data/week-03/customer_segmentation_workshop.csv" },
        ],
        code: [
          { label: "SPSS factor", url: "./materials/code/week-03-factor-analysis.sps" },
          { label: "SPSS cluster", url: "./materials/code/week-03-cluster-analysis.sps" },
          { label: "SPSS classification", url: "./materials/code/week-03-discriminant-classification.sps" },
          { label: "Python embeddings", url: "./materials/code/week-03-embedding-segmentation.py" },
        ],
        other: [
          { label: "Workshop guide", url: "./materials/other/week-03-workshop-guide.md" },
          { label: "Data dictionary", url: "./materials/data/week-03/DATA_DICTIONARY.md" },
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
