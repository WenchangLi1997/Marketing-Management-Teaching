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
      title: "MP#1: Introduction and approaches for managing customer heterogeneity",
      description:
        "Customer heterogeneity, the evolution of approaches for managing it, and the STP and customer-centric approaches. Updated cases include Macy’s versus TJ Maxx, the U.S. OTC hearing-aid market, Spotify, an MBA program, and Sainsbury’s.",
      resources: {
        slides: [
          { label: "Web", url: "./materials/slides/week-02-segmentation.html" },
          { label: "PDF", url: "./materials/slides/week-02-segmentation.pdf" },
        ],
      },
    },
    {
      number: 3,
      title: "MP#1: Framework and examples for managing customer heterogeneity",
      description:
        "The inputs, outputs, and process of the customer heterogeneity framework, followed by AI Frontiers on embedding-based segmentation and a guided EMBA segmentation homework workshop.",
      resources: {
        slides: [
          { label: "Web", url: "./materials/slides/week-03-clustering-ai.html" },
          { label: "PDF", url: "./materials/slides/week-03-clustering-ai.pdf" },
        ],
      },
    },
    {
      number: 4,
      title: "MP#2: Introduction and approaches for managing customer dynamics",
      description:
        "Why customer needs and behavior change over time, followed by the principal approaches for managing those changes: lifecycle and AER logic, hidden Markov models, customer lifetime value, RFM, lost-customer analysis, and choice models. Cases include Nike versus HOKA and Blue Apron’s customer economics.",
      resources: {
        slides: [
          { label: "Web", url: "./materials/slides/week-04-customer-dynamics.html" },
          { label: "PDF", url: "./materials/slides/week-04-customer-dynamics.pdf" },
        ],
        other: [
          { label: "Blue Apron case access", url: "https://store.hbr.org/product/blue-apron-turning-around-the-struggling-meal-kit-market-leader/W73C09" },
        ],
      },
    },
    {
      number: 5,
      title: "MP#2: Framework and case workshop for managing customer dynamics",
      description:
        "The customer-dynamics framework connects longitudinal customer and marketing data to managerial decisions. In the Madrigal workshop, students use four years of transaction records to audit customer growth, heterogeneity, value, and segmentation before recommending a sustainable growth strategy.",
      resources: {
        slides: [
          { label: "Web", url: "./materials/slides/week-05-customer-dynamics-workshop.html" },
          { label: "PDF", url: "./materials/slides/week-05-customer-dynamics-workshop.pdf" },
        ],
        other: [
          { label: "Madrigal case access", url: "https://store.hbr.org/product/madrigal-conducting-a-customer-base-audit/524046" },
          { label: "Customer-Base Audit discussion guide", url: "https://dhjhkxawhe8q4.cloudfront.net/penn-university-press/wp-content/uploads/2023/12/04095250/The-Customer-Base-Audit-Discussion-Guide.pdf" },
        ],
      },
    },
    {
      number: 6,
      title: "MP#3: Introduction and approaches for managing sustainable competitive advantage",
      description:
        "Why competitor reactions make sustainable advantage essential, followed by market-based sources of advantage, brand–offering–relationship equity, and marketing experiments for measuring incremental impact.",
      resources: {
        slides: [
          { label: "Web", url: "./materials/slides/week-06-sustainable-competitive-advantage.html" },
          { label: "PDF", url: "./materials/slides/week-06-sustainable-competitive-advantage.pdf" },
        ],
      },
    },
    {
      number: 7,
      title: "MP#3: Framework and AI Frontier for managing sustainable competitive advantage",
      description:
        "The sustainable-advantage framework connects market and competitor inputs to brand, offering, and relationship outcomes. The AI Frontier uses social-engagement embeddings to discover dynamic market structure beyond predefined categories.",
      ai: "AI Frontier 3: Embedding-based market structure from social engagement",
      resources: {
        slides: [
          { label: "Web", url: "./materials/slides/week-07-sca-ai-frontier.html" },
          { label: "PDF", url: "./materials/slides/week-07-sca-ai-frontier.pdf" },
        ],
        other: [
          { label: "Yang, Zhang, and Kannan (2021)", url: "https://journals.sagepub.com/doi/10.1177/00222429211033585" },
        ],
      },
    },
    { recess: true, title: "Recess" },
    {
      number: 8,
      title: "MP#4: Introduction and approaches for managing resource trade-offs",
      description:
        "Why limited and interdependent resources create recurring marketing trade-offs, followed by heuristic and attribution approaches, response models, optimization, and marketing metrics.",
      resources: {
        slides: [
          { label: "Web", url: "./materials/slides/week-08-resource-tradeoffs.html" },
          { label: "PDF", url: "./materials/slides/week-08-resource-tradeoffs.pdf" },
        ],
      },
    },
    {
      number: 9,
      title: "MP#4: Framework and Double Machine Learning case workshop",
      description:
        "The resource trade-off framework connects strategic priorities to budgets and metrics. A case workshop extends response-model attribution with Double Machine Learning to estimate causal marginal returns before optimizing a fixed marketing budget.",
      ai: "AI Frontier 4: Double Machine Learning for causal resource allocation",
      resources: {
        slides: [
          { label: "Web", url: "./materials/slides/week-09-resource-allocation-dml.html" },
          { label: "PDF", url: "./materials/slides/week-09-resource-allocation-dml.pdf" },
        ],
        data: [
          { label: "SkyLink workshop dataset", url: "./materials/data/week-09-dml-marketing-allocation.csv" },
        ],
        code: [
          { label: "Python DML workshop", url: "./materials/code/week-09-dml-workshop.py" },
        ],
        other: [
          { label: "DoubleML documentation", url: "https://docs.doubleml.org/" },
          { label: "Chernozhukov et al. (2018)", url: "https://academic.oup.com/ectj/article/21/1/C1/5056401" },
        ],
      },
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
