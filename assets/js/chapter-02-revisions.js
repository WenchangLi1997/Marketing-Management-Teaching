(() => {
  "use strict";

  const slide = (title, body, extraClass = "") => `
    <article class="custom-layout ${extraClass}">
      <h1 class="custom-title" data-editable>${title}</h1>
      <div class="custom-body">${body}</div>
    </article>`;

  const source = text => `<p class="slide-source" data-editable>${text}</p>`;

  window.chapter2Revisions = {
    "4": {
      html: slide("Example: Macy’s vs. TJ Maxx (US)", `
        <div class="case-grid">
          <div class="case-copy">
            <ul class="slide-list" data-editable>
              <li>Macy’s traditionally serves many needs across apparel, beauty, and home categories.</li>
              <li>In 2024, Macy’s announced plans to close approximately 150 underproductive locations through 2026 and invest in about 350 continuing locations.</li>
              <li>TJ Maxx focuses on value-seeking shoppers through an off-price model and locally tailored assortments.</li>
            </ul>
            <p class="discussion-question" data-editable>Why might a department store that sells almost everything fail to outperform a specialist for one customer segment?</p>
          </div>
          <div class="case-images retail-images">
            <figure><img src="../../assets/images/cases/macys-herald-square.jpg" alt="Macy’s Herald Square exterior"><figcaption data-editable>Macy’s: broad assortment</figcaption></figure>
            <figure><img src="../../assets/images/cases/tj-maxx-storefront.jpg" alt="TJ Maxx storefront"><figcaption data-editable>TJ Maxx: off-price focus</figcaption></figure>
          </div>
        </div>
        ${source("Sources: Macy’s, Inc. (2024); TJX 2025 Annual Report. Photos: Kidfly182, CC BY 4.0; Connor Williams, CC BY 2.0.")}
      `, "case-slide")
    },
    "6": {
      html: slide("Five Sources of Customer Heterogeneity: Part 1", `
        <div class="source-list">
          <section class="source-item"><h2 data-editable>1. Individual differences</h2><ul class="slide-list"><li data-editable><strong>Description:</strong> Customers differ in enduring personal characteristics and resources.</li><li data-editable><strong>Examples:</strong> Age, income, expertise, risk tolerance, and time available.</li></ul></section>
          <section class="source-item"><h2 data-editable>2. Life experiences</h2><ul class="slide-list"><li data-editable><strong>Description:</strong> Past events shape what customers notice, value, and avoid.</li><li data-editable><strong>Examples:</strong> Family stage, career history, culture, travel, and prior product experience.</li></ul></section>
        </div>
      `)
    },
    "7": {
      html: slide("Five Sources of Customer Heterogeneity: Part 2", `
        <div class="source-list source-list-three">
          <section class="source-item"><h2 data-editable>3. Functional needs</h2><ul class="slide-list"><li data-editable><strong>Description:</strong> Customers hire an offering to solve different practical problems.</li><li data-editable><strong>Examples:</strong> Convenience, reliability, speed, safety, and performance.</li></ul></section>
          <section class="source-item"><h2 data-editable>4. Self-identity and image</h2><ul class="slide-list"><li data-editable><strong>Description:</strong> Choices express identity or signal membership in a social group.</li><li data-editable><strong>Examples:</strong> Style, status, sustainability values, and professional identity.</li></ul></section>
          <section class="source-item"><h2 data-editable>5. Marketing activities</h2><ul class="slide-list"><li data-editable><strong>Description:</strong> Different exposures and relationship histories create different responses.</li><li data-editable><strong>Examples:</strong> Advertising, promotions, channels, loyalty programs, and sales contact.</li></ul></section>
        </div>
      `)
    },
    "8": {
      html: slide("Customer Heterogeneity: A Fundamental Assumption", `
        <div class="assumption-layout">
          <ul class="slide-list" data-editable>
            <li>Every market contains meaningful variation in customer needs, preferences, and response.</li>
            <li>Some differences are visible in behavior; others remain latent until technology, regulation, or competition makes them actionable.</li>
          </ul>
          <div class="blue-statement" data-editable>Effective marketing begins by recognizing which differences matter for the decision at hand.</div>
        </div>
      `)
    },
    "10": {
      html: slide("Example: The U.S. OTC Hearing-Aid Market", `
        <div class="case-grid hearing-case">
          <div class="case-copy">
            <div class="timeline">
              <div><strong data-editable>2022</strong><span data-editable>The FDA’s OTC category allowed adults with perceived mild-to-moderate hearing loss to buy eligible devices without a prescription or professional fitting.</span></div>
              <div><strong data-editable>2024</strong><span data-editable>The FDA authorized Apple’s Hearing Aid Feature for compatible AirPods Pro, bringing hearing support into a familiar consumer device.</span></div>
            </div>
            <p class="discussion-question" data-editable>How can a regulatory change reveal previously latent segments based on price, convenience, stigma, and technology preference?</p>
          </div>
          <figure class="hero-photo"><img src="../../assets/images/cases/airpods-hearing-aid.jpg" alt="Apple Hearing Aid Feature with AirPods Pro"><figcaption data-editable>Consumer electronics enter a regulated health category</figcaption></figure>
        </div>
        ${source("Sources: U.S. FDA OTC Hearing Aids rule (2022); FDA authorization of Apple Hearing Aid Feature (2024). Image: Apple Newsroom.")}
      `, "case-slide")
    },
    "15": {
      html: slide("Segmenting, Targeting, and Positioning (STP) Approach", `
        <div class="stp-layout">
          <div class="stp-flow" aria-label="STP process">
            <div class="stp-node"><strong data-editable>Segmenting</strong><span data-editable>Identify groups with similar needs</span></div>
            <div class="stp-arrow">↓</div>
            <div class="stp-node"><strong data-editable>Targeting</strong><span data-editable>Select segments where the firm can create value</span></div>
            <div class="stp-arrow">↓</div>
            <div class="stp-node"><strong data-editable>Positioning</strong><span data-editable>Build a distinct place in the target customer’s mind</span></div>
          </div>
          <div class="position-link"><div class="horizontal-arrow">→</div><div class="dark-output" data-editable>Clear value proposition for a defined target customer</div></div>
        </div>
      `)
    },
    "16": {
      html: slide("Segmenting", `
        <div class="segmenting-layout">
          <div>
            <p class="lead" data-editable>Divide the market so customers within a segment are similar on the needs that matter, while customers across segments are meaningfully different.</p>
            <ol class="numbered-steps" data-editable>
              <li>Define the market and potential customers.</li><li>Identify needs and useful descriptors.</li><li>Collect customer-level data.</li><li>Reduce and group the data.</li><li>Profile and name the segments.</li>
            </ol>
          </div>
          <div class="segment-output" data-editable><strong>Segment profile</strong><span>Needs</span><span>Size and value</span><span>Customer descriptors</span></div>
        </div>
      `)
    },
    "18": {
      html: slide("Three Methods Turn Survey Data into Segments", `
        <div class="method-pipeline">
          <section><span class="method-number">1</span><h2 data-editable>Factor analysis</h2><p data-editable>Condenses correlated need ratings into a smaller set of interpretable dimensions.</p></section>
          <div class="method-arrow">→</div>
          <section><span class="method-number">2</span><h2 data-editable>Cluster analysis</h2><p data-editable>Groups applicants with similar factor scores into internally coherent segments.</p></section>
          <div class="method-arrow">→</div>
          <section><span class="method-number">3</span><h2 data-editable>Discriminant and classification analyses</h2><p data-editable>Explain segment differences and classify future applicants.</p></section>
        </div>
      `)
    },
    "19": {
      html: slide("MBA Program Segmentation Case", `
        <div class="mba-case">
          <div><h2 data-editable>Business problem</h2><p data-editable>An MBA program wants to increase enrollment without relying on one generic message for all prospective students.</p><h2 data-editable>Available data</h2><ul class="slide-list" data-editable><li>Importance ratings for program attributes such as prestige, convenience, affordability, content, and networking</li><li>Applicant demographics, career stage, location, and stated interest</li></ul></div>
          <div class="research-question"><h2 data-editable>Analytical question</h2><p data-editable>Which applicant groups want different benefits, and how can the program identify and serve them?</p></div>
        </div>
      `)
    },
    "20": {
      html: slide("MBA Case: Factor Analysis", `
        <div class="input-output-layout">
          <div class="io-block"><h2 data-editable>Input</h2><p data-editable>Twelve correlated importance ratings from prospective MBA students</p></div>
          <div class="io-arrow">→</div>
          <div class="io-block io-process"><h2 data-editable>Core steps</h2><ol data-editable><li>Inspect correlations and sampling adequacy</li><li>Extract a small set of factors</li><li>Rotate and interpret factor loadings</li><li>Save factor scores for each respondent</li></ol></div>
          <div class="io-arrow">→</div>
          <div class="factor-output"><h2 data-editable>Output</h2><span data-editable>Convenience</span><span data-editable>Prestige</span><span data-editable>Affordability</span><span data-editable>Content fit</span><span data-editable>Networking</span></div>
        </div>
      `)
    },
    "21": {
      html: slide("MBA Case: Cluster Analysis", `
        <div class="input-output-layout cluster-layout">
          <div class="io-block"><h2 data-editable>Input</h2><p data-editable>Five factor scores for every respondent</p></div>
          <div class="io-arrow">→</div>
          <div class="io-block io-process"><h2 data-editable>Core steps</h2><ol data-editable><li>Standardize the inputs</li><li>Compare candidate cluster solutions</li><li>Assign applicants to clusters</li><li>Interpret means and segment size</li></ol></div>
          <div class="io-arrow">→</div>
          <div class="segment-cloud"><span data-editable>Mobility Minded</span><span data-editable>Easy Promotions</span><span data-editable>Young Status Seekers</span><span data-editable>New Career Networkers</span><span data-editable>Relevant Learners</span><span data-editable>Cheap and Easy</span></div>
        </div>
      `)
    },
    "22": {
      html: slide("MBA Case: Hierarchical Clustering", `
        <div class="hierarchical-layout">
          <div><p class="lead" data-editable>Hierarchical clustering helps reveal how smaller applicant groups combine as the permitted within-cluster dissimilarity increases.</p><ul class="slide-list" data-editable><li>Begin with each respondent as a separate cluster.</li><li>Merge the closest clusters step by step.</li><li>Inspect the dendrogram and the change in within-cluster variance.</li><li>Use the result to inform, rather than mechanically determine, the final number of segments.</li></ul></div>
          <div class="dendrogram" aria-label="Simplified hierarchical clustering dendrogram"><div class="leaf-row"><span>A</span><span>B</span><span>C</span><span>D</span><span>E</span><span>F</span></div><div class="merge-row merge-one"><i></i><i></i><i></i></div><div class="merge-row merge-two"><i></i><i></i></div><div class="merge-row merge-three"><i></i></div><p data-editable>Merge distance increases upward</p></div>
        </div>
      `)
    },
    "23": {
      html: slide("MBA Case: Discriminant and Classification Analyses", `
        <div class="classification-layout">
          <div><h2 data-editable>What the analysis does</h2><ul class="slide-list" data-editable><li>Identifies the descriptors that best distinguish the segments.</li><li>Builds a rule that assigns a new applicant to a segment.</li><li>Tests how accurately the rule reproduces the cluster solution.</li></ul></div>
          <div class="classification-example"><h2 data-editable>Example output</h2><div><span data-editable>Applicant profile</span><strong>→</strong><span data-editable>Predicted segment</span></div><p data-editable>Career stage, location, income, and program interest may help classify a new respondent as “Mobility Minded” or “New Career Networker.”</p></div>
        </div>
      `)
    },
    "24": { hidden: true },
    "25": { hidden: true },
    "26": { hidden: true },
    "27": { hidden: true },
    "33": {
      html: slide("A Positioning Statement Answers Three Questions", `
        <div class="positioning-questions">
          <ol data-editable><li><strong>Who</strong> is the target customer?</li><li><strong>What</strong> need does the offering fulfill?</li><li><strong>Why</strong> is this offering the best choice relative to alternatives?</li></ol>
          <div class="horizontal-arrow">→</div>
          <div class="dark-output" data-editable>For [target customer], our offering provides [benefit] because [credible reason to believe].</div>
        </div>
      `)
    },
    "35": {
      html: slide("MBA Case: From Segmentation to Targeting", `
        <div class="segment-summary"><p class="lead" data-editable>The segmentation analysis produced six applicant groups with distinct benefit priorities. The next decision is not whether every segment is interesting, but which segments the program should prioritize.</p><div class="segment-labels"><span>Young Status Seekers</span><span>New Career Networkers</span><span>Relevant Learners</span><span>Mobility Minded</span><span>Easy Promotions</span><span>Cheap and Easy</span></div></div>
      `)
    },
    "36": {
      html: slide("MBA Case: Targeting Criteria", `
        <div class="two-axis">
          <section><h2 data-editable>Market attractiveness</h2><ul class="slide-list" data-editable><li>Segment size and expected growth</li><li>Willingness to pay and price sensitivity</li><li>Strategic importance to the program</li></ul></section>
          <section><h2 data-editable>Competitive strength</h2><ul class="slide-list" data-editable><li>Likelihood of choosing the program</li><li>Needs met better than competing schools</li><li>Fit with the program’s brand and capabilities</li></ul></section>
        </div>
      `)
    },
    "37": {
      html: slide("MBA Case: Targeting with the GE Matrix", `
        <div class="ge-native" aria-label="Editable GE matrix for MBA applicant segments">
          <span class="axis-y" data-editable>Market attractiveness</span><span class="axis-x" data-editable>Competitive strength</span>
          <i class="grid-v one"></i><i class="grid-v two"></i><i class="grid-h one"></i><i class="grid-h two"></i>
          <div class="ge-bubble mobility" data-editable>Mobility<br>Minded</div><div class="ge-bubble easy" data-editable>Easy<br>Promotions</div><div class="ge-bubble network" data-editable>New Career<br>Networkers</div><div class="ge-bubble relevant" data-editable>Relevant<br>Learners</div><div class="ge-bubble status" data-editable>Young Status<br>Seekers</div><div class="ge-bubble cheap" data-editable>Cheap and<br>Easy</div>
        </div>
        ${source("Bubble size represents relative segment size. The upper-right region combines high attractiveness with high competitive strength.")}
      `, "chart-slide")
    },
    "38": {
      html: slide("MBA Case: Target Segment Decision", `
        <div class="decision-layout"><div class="target-bubble" data-editable>Primary target<br><strong>Mobility Minded</strong></div><div><ul class="slide-list" data-editable><li>Highest combined attractiveness and competitive strength in the GE matrix.</li><li>Values benefits the program can credibly deliver.</li><li>Large enough to justify a distinct message and channel plan.</li></ul><p class="discussion-question" data-editable>Should “Easy Promotions” become a secondary target, or would that dilute the program’s position?</p></div></div>
      `)
    },
    "39": {
      html: slide("MBA Case: Positioning Question", `
        <div class="positioning-brief"><h2 data-editable>Target customer</h2><p data-editable>Mobility-minded professionals seeking career advancement and a credible degree.</p><h2 data-editable>Competitive frame</h2><p data-editable>Regional MBA programs that differ in prestige, convenience, affordability, and career support.</p><h2 data-editable>Decision</h2><p data-editable>Which two dimensions best represent the target segment’s trade-offs?</p></div>
      `)
    },
    "40": {
      html: slide("MBA Case: Perceptual Map", `
        <div class="perceptual-native" aria-label="Editable perceptual map for the MBA case">
          <span class="perceptual-y" data-editable>More convenient</span><span class="perceptual-y low" data-editable>Less convenient</span><span class="perceptual-x" data-editable>More affordable</span><span class="perceptual-x low" data-editable>Less affordable</span>
          <i class="cross vertical"></i><i class="cross horizontal"></i>
          <span class="school uw" data-editable>UW Seattle</span><span class="school bothell" data-editable>UW Bothell</span><span class="school seattleu" data-editable>Seattle U</span><span class="school oregon" data-editable>U Oregon</span><span class="school cornell" data-editable>Cornell</span><span class="school berkeley" data-editable>Berkeley</span>
          <div class="ideal-segment" data-editable>Easy Promotions<br>ideal point</div><div class="position-vector">↗</div>
        </div>
        ${source("The map compares the program and competitors on convenience and affordability for the selected target segment.")}
      `, "chart-slide")
    },
    "41": {
      html: slide("MBA Case: Interpreting the Positioning Gap", `
        <div class="gap-layout"><div class="map-point current" data-editable>Current perception</div><div class="gap-arrow">→</div><div class="map-point desired" data-editable>Target preference</div><ul class="slide-list" data-editable><li>The distance between the program and the segment ideal identifies a positioning gap.</li><li>Communication can change perceptions only when the program has credible evidence.</li><li>Large operational gaps require changes to the offering, not only a new message.</li></ul></div>
      `)
    },
    "42": {
      html: slide("MBA Case: Positioning Statement", `
        <div class="position-statement" data-editable>For mobility-minded professionals who want career advancement without leaving work, the MBA program offers a flexible, credible path to a stronger professional network because its schedule, curriculum, and employer connections support working students.</div>
        <div class="statement-check"><span data-editable><strong>Target:</strong> mobility-minded professionals</span><span data-editable><strong>Need:</strong> advancement with flexibility</span><span data-editable><strong>Reason to believe:</strong> schedule, curriculum, and employer network</span></div>
      `)
    },
    "43": {
      html: slide("MBA Case: From Positioning to Action", `
        <div class="action-flow"><section><h2 data-editable>Offering</h2><p data-editable>Scheduling, curriculum, and career services must support the promise.</p></section><section><h2 data-editable>Message</h2><p data-editable>Show credible evidence of career mobility and flexible participation.</p></section><section><h2 data-editable>Channels</h2><p data-editable>Reach working professionals through employers, alumni, and targeted digital media.</p></section></div>
      `)
    },
    "44": {
      html: slide("Exercise: Describe Your Firm’s STP", `
        <div class="stp-exercise"><section><h2 data-editable>Segmenting</h2><p data-editable>How is the market divided?</p><div></div><div></div></section><section><h2 data-editable>Targeting</h2><p data-editable>Which segment receives priority?</p><div></div><div></div></section><section><h2 data-editable>Positioning</h2><p data-editable>What distinct value should the target perceive?</p><div></div><div></div></section></div>
      `)
    },
    "46": {
      html: slide("What Does It Mean for a Firm to Be Customer Centric?", `
        <p class="lead" data-editable>A customer-centric firm places customer needs at the center of its vision, decisions, processes, structure, culture, and metrics.</p>
        <div class="iop-grid"><section><h2 data-editable>Input</h2><p data-editable>Use customer needs and feedback to guide decisions.</p><ul class="slide-list" data-editable><li>Customer and channel councils</li><li>Managers listening in the call center</li></ul></section><section><h2 data-editable>Output</h2><p data-editable>Measure success from the customer’s perspective.</p><ul class="slide-list" data-editable><li>Customer satisfaction</li><li>Loyalty and Net Promoter Score</li></ul></section><section><h2 data-editable>Processes</h2><p data-editable>Link customer information to operating systems.</p><ul class="slide-list" data-editable><li>Compensation</li><li>Scorecards and dashboards</li></ul></section></div>
      `)
    },
    "52": {
      html: slide("Week 2 Recap and Next Week", `
        <div class="recap-layout"><section><h2 data-editable>Covered today</h2><ul class="slide-list" data-editable><li>Why all customers differ</li><li>Five sources of heterogeneity and latent demand</li><li>Evolution from mass marketing to STP and customer centricity</li><li>Factor analysis, clustering, classification, targeting, and positioning through the MBA case</li></ul></section><section><h2 data-editable>Next week</h2><ul class="slide-list" data-editable><li>The customer heterogeneity framework</li><li>AI Frontiers: embedding-based segmentation</li><li>Guided EMBA segmentation homework workshop</li></ul></section></div>
      `)
    },
    "53": { className: "framework-title-large" },
    "55": {
      html: slide("SWOT and 3C Analyses", `
        <div class="swot-intro"><section><h2 data-editable>SWOT</h2><p data-editable>Organizes internal strengths and weaknesses with external opportunities and threats that may affect a decision.</p></section><section><h2 data-editable>3C analysis</h2><p data-editable>Examines the company, customers, and competitors to identify where the firm can create distinctive value.</p></section><div class="analysis-inputs"><strong data-editable>Inputs</strong><span data-editable>Internal capabilities and constraints</span><span data-editable>Customer needs and market change</span><span data-editable>Competitor strengths and likely responses</span></div></div>
      `)
    },
    "56": {
      html: slide("SWOT Analysis", `
        <div class="swot-matrix"><section><h2 data-editable>Strengths</h2><p data-editable>Current internal advantages that the firm can use.</p></section><section><h2 data-editable>Weaknesses</h2><p data-editable>Current internal limitations that require improvement or mitigation.</p></section><section><h2 data-editable>Opportunities</h2><p data-editable>External developments that may create value.</p></section><section><h2 data-editable>Threats</h2><p data-editable>External developments that may reduce performance.</p></section></div>
        <p class="matrix-note" data-editable>Translate each observation into an implication for the segmentation, targeting, or positioning decision.</p>
      `)
    },
    "57": {
      html: slide("Example: Bakery SWOT Analysis", `
        <p class="lead" data-editable>A bakery is considering a new location in another neighborhood.</p><div class="swot-matrix example-matrix"><section><h2 data-editable>Strength</h2><p data-editable>Distinctive, well-known house-baked sourdough.</p></section><section><h2 data-editable>Weakness</h2><p data-editable>High production cost and limited parking at the proposed location.</p></section><section><h2 data-editable>Opportunity</h2><p data-editable>A nearby grocery store may bring new customer traffic.</p></section><section><h2 data-editable>Threat</h2><p data-editable>Established competitors already have loyal local customers.</p></section></div>
      `)
    },
    "58": {
      html: slide("Example: Bakery 3C Analysis", `
        <p class="lead" data-editable>The same decision looks different when managers organize the evidence around the three market actors.</p><div class="three-c"><section><h2 data-editable>Company</h2><p data-editable>Known for house-baked sourdough, but production costs are high.</p></section><section><h2 data-editable>Customers</h2><p data-editable>Neighborhood families may value quality, convenience, and products for children.</p></section><section><h2 data-editable>Competitors</h2><p data-editable>A donut shop and a café already offer convenient local alternatives.</p></section></div>
      `)
    },
    "69": {
      html: slide("Agenda", `
        <div class="vertical-agenda"><section class="completed"><span>01</span><div><h2 data-editable>Framework</h2><p data-editable>Inputs, outputs, and process for managing customer heterogeneity</p></div></section><section class="active"><span>02</span><div><h2 data-editable>AI Frontiers</h2><p data-editable>Embedding-based segmentation of unstructured customer data</p></div></section><section><span>03</span><div><h2 data-editable>Homework workshop</h2><p data-editable>Guided EMBA segmentation case from survey design to targeting</p></div></section></div>
      `)
    },
    "ai-intuition": {
      pageNumber: "AI 1",
      html: slide("AI Frontiers: The Intuition Behind Embeddings", `
        <div class="embedding-intuition"><div class="text-samples"><span data-editable>“I need a flexible schedule because I travel every week.”</span><span data-editable>“Career mobility matters more than campus amenities.”</span><span data-editable>“I want a strong peer network in my industry.”</span></div><div class="embedding-arrow">→</div><div class="vector-space"><i class="point p1"></i><i class="point p2"></i><i class="point p3"></i><span data-editable>Semantically similar responses are placed near one another in a numerical vector space.</span></div></div>
        ${source("Conceptual basis: Reimers and Gurevych, Sentence-BERT, EMNLP 2019.")}
      `)
    },
    "ai-advantages": {
      pageNumber: "AI 2",
      html: slide("Embedding-Based Segmentation Workflow", `
        <div class="embedding-workflow"><section><strong data-editable>1. Collect</strong><span data-editable>Open-ended responses, reviews, call transcripts, or product descriptions</span></section><b>→</b><section><strong data-editable>2. Embed</strong><span data-editable>Convert each customer’s text into a dense semantic vector</span></section><b>→</b><section><strong data-editable>3. Cluster</strong><span data-editable>Use k-means, hierarchical clustering, or a density-based method</span></section><b>→</b><section><strong data-editable>4. Interpret</strong><span data-editable>Name, profile, and validate the segments against business outcomes</span></section></div><div class="advantage-strip"><span data-editable>Captures meaning beyond exact keywords</span><span data-editable>Uses unstructured data at scale</span><span data-editable>Can complement survey variables</span></div>
      `)
    },
    "ai-example": {
      pageNumber: "AI 3",
      html: slide("Example: Embedding MBA Applicants’ Open-Ended Goals", `
        <div class="embedding-example"><div class="response-column"><h2 data-editable>Applicant responses</h2><p data-editable>“Move into management without leaving my job.”</p><p data-editable>“Change industry and build a new network.”</p><p data-editable>“Gain credibility for a promotion.”</p><p data-editable>“Learn analytics for my current role.”</p></div><div class="mini-map"><span class="cluster-label c1" data-editable>Career mobility</span><span class="cluster-label c2" data-editable>Network changers</span><span class="cluster-label c3" data-editable>Skill builders</span><i class="dot d1"></i><i class="dot d2"></i><i class="dot d3"></i><i class="dot d4"></i><i class="dot d5"></i><i class="dot d6"></i></div></div><p class="discussion-question" data-editable>The clusters reveal language and motives that a fixed survey may not anticipate. Managers still need to test whether the groups differ in behavior, value, or response.</p>
      `)
    },
    "ai-limitations": {
      pageNumber: "AI 4",
      html: slide("Limits and Validation of Embedding-Based Segmentation", `
        <div class="limitations"><section><h2 data-editable>Model dependence</h2><p data-editable>Different embedding models and prompts may change the geometry and the clusters.</p></section><section><h2 data-editable>Interpretability</h2><p data-editable>Cluster labels come from human judgment and can oversimplify mixed motives.</p></section><section><h2 data-editable>Bias and privacy</h2><p data-editable>Text can reveal sensitive attributes and reproduce patterns from the training data.</p></section><section><h2 data-editable>Business validity</h2><p data-editable>Semantic separation matters only if segments differ in size, value, needs, or response.</p></section></div><p class="validation-line" data-editable>Validate stability across models and samples, inspect representative responses, and link clusters to observable outcomes.</p>
      `)
    },
    "70": {
      html: slide("Homework Workshop: From Survey Data to STP", `
        <div class="homework-intro"><div class="homework-badge" data-editable>Guided in class<br>Completed as homework</div><ol class="numbered-steps" data-editable><li>Check the survey data and missing values.</li><li>Use factor analysis to reduce related need ratings.</li><li>Use cluster analysis to identify applicant segments.</li><li>Profile segments with discriminant or classification analysis.</li><li>Select a target with the GE matrix.</li><li>Use a perceptual map to support positioning.</li></ol></div>
      `, "homework-custom")
    },
    "71": {
      html: slide("Homework Case: EMBA Enrollment", `
        <div class="homework-case"><h2 data-editable>Business problem</h2><p data-editable>You have been asked to develop a marketing program that increases enrollment in an Executive MBA program.</p><h2 data-editable>Your task</h2><ul class="slide-list" data-editable><li>Identify applicant segments from the survey.</li><li>Choose a target segment using explicit criteria.</li><li>Recommend a positioning direction supported by the data.</li></ul><p class="discussion-question" data-editable>We will complete the workflow together in class. Your homework documents the decisions and interpretation at each step.</p></div>
      `, "homework-custom")
    },
    "72": { className: "homework-slide" },
    "73": { className: "homework-slide" },
    "74": { className: "homework-slide" },
    "75": { className: "homework-slide" },
    "76": { className: "homework-slide" },
    "77": { className: "homework-slide" },
    "78": { className: "homework-slide" },
    "79": { className: "homework-slide" }
  };
})();
