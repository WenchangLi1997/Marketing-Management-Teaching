(() => {
  "use strict";

  const slide = (title, body, extraClass = "") => `
    <article class="custom-layout ${extraClass}">
      <h1 class="custom-title" data-editable>${title}</h1>
      <div class="custom-body">${body}</div>
    </article>`;

  const source = text => `<p class="slide-source" data-editable>${text}</p>`;

  const agenda = active => slide("Agenda", `
    <div class="vertical-agenda dynamics-agenda">
      <section class="${active === 1 ? "active" : ""}"><span>01</span><div><h2 data-editable>Introduction</h2><p data-editable>Why customer needs and behavior change over time</p></div></section>
      <section class="${active === 2 ? "active" : ""}"><span>02</span><div><h2 data-editable>Lifecycle and dynamic segmentation</h2><p data-editable>Lifecycle logic, AER, hidden states, and migration</p></div></section>
      <section class="${active === 3 ? "active" : ""}"><span>03</span><div><h2 data-editable>Customer value and choice</h2><p data-editable>CLV, RFM, lost customers, and choice models</p></div></section>
    </div>
  `, "agenda-slide");

  const week5Agenda = active => slide("Agenda", `
    <div class="vertical-agenda dynamics-agenda week-five-agenda">
      <section class="${active === 1 ? "active" : ""}"><span>01</span><div><h2 data-editable>Framework</h2><p data-editable>Inputs, outputs, and the process for managing customer dynamics</p></div></section>
      <section class="${active === 2 ? "active" : ""}"><span>02</span><div><h2 data-editable>Case workshop</h2><p data-editable>Hotel and Markstrat examples of changing customer segments</p></div></section>
      <section class="${active === 3 ? "active" : ""}"><span>03</span><div><h2 data-editable>Takeaways</h2><p data-editable>Core ideas linking AER, HMM, CLV, and choice models</p></div></section>
      <section class="${active === 4 ? "active" : ""}"><span>04</span><div><h2 data-editable>Analytics case</h2><p data-editable>Preempting and preventing customer churn at TKL</p></div></section>
    </div>
  `, "agenda-slide");

  window.chapter3Revisions = {
    "1": {
      html: `
        <article class="dynamics-cover">
          <p class="cover-school" data-editable>Lee Kong Chian School of Business, Singapore Management University</p>
          <h1 data-editable>Marketing Management</h1>
          <h2 data-editable>Week 4 · Managing Customer Dynamics</h2>
          <p class="cover-principle" data-editable>Marketing Principle #2: All Customers Change</p>
          <p class="cover-author" data-editable>Yixing Chen</p>
        </article>`,
      className: "full-bleed dynamics-cover-canvas",
      pageNumber: "1"
    },
    "2": { html: agenda(1) },
    "5": {
      html: slide("Five Sources of Customer Dynamics: Individual Level", `
        <div class="dynamics-source-table">
          <div class="source-heading"><span>Dimension</span><span>Rate of change</span><span>Example</span></div>
          <section><h2 data-editable>Discrete life events</h2><strong data-editable>Immediate</strong><p data-editable>Becoming a parent may change preferences for cars, travel, housing, and restaurants.</p></section>
          <section><h2 data-editable>Typical lifecycle or maturation</h2><strong data-editable>Slow</strong><p data-editable>As people age, they may seek more comfort and health while becoming less willing to switch.</p></section>
          <section><h2 data-editable>Product learning effects</h2><strong data-editable>Medium</strong><p data-editable>Experience can increase demand for specialized features or make customers more price sensitive.</p></section>
        </div>
      `)
    },
    "6": {
      html: slide("Five Sources of Customer Dynamics: Market and Environment", `
        <div class="dynamics-source-table market-sources">
          <div class="source-heading"><span>Dimension</span><span>Rate of change</span><span>Example</span></div>
          <section><h2 data-editable>Product market level<br><small>Product lifecycle</small></h2><strong data-editable>Medium</strong><p data-editable>Early buyers may value novelty and performance. Later buyers may focus more on price, reliability, and compatibility.</p></section>
          <section><h2 data-editable>Environmental level<br><small>Economy, government, industry, and culture</small></h2><strong data-editable>Slow to immediate</strong><p data-editable>Regulation, inflation, technology, or a cultural shift can rapidly change what customers value and how they buy.</p></section>
        </div>
      `)
    },
    "8": {
      html: slide("Example: Nike vs. HOKA", `
        <div class="nike-hoka-layout">
          <div class="brand-visual nike-visual"><img src="../../assets/images/cases/nike-pegasus-41.jpg" alt="Nike Pegasus 41 running shoe"><div><strong data-editable>NIKE, Inc.</strong><span data-editable>FY2025 revenue</span><b data-editable>−10%</b></div></div>
          <div class="brand-visual hoka-visual"><img src="../../assets/images/cases/hoka-japan-store.jpg" alt="HOKA running shoes in a specialty store"><div><strong data-editable>HOKA</strong><span data-editable>FY2025 brand net sales</span><b data-editable>+23.6%</b></div></div>
          <div class="case-narrative">
            <ul class="slide-list" data-editable>
              <li>Some runners increasingly seek cushioning, specialized performance, comfort, and distinctive design.</li>
              <li>Nike faced product and channel execution challenges as the running market became more specialized.</li>
              <li>HOKA built a clear position around enhanced cushioning, stability, and specialty running.</li>
            </ul>
            <p class="discussion-question" data-editable>How should an incumbent respond when customer preferences fragment faster than its product portfolio and channels?</p>
          </div>
        </div>
        ${source("Sources: NIKE FY2025 full-year results; Deckers FY2025 results and Form 10-K. The revenue comparison does not establish that preference changes caused Nike’s decline.")}
      `, "case-slide nike-hoka-slide")
    },
    "9": { html: agenda(2) },
    "18": {
      html: slide("Hidden Markov Models and Dynamic Segmentation", `
        <div class="hmm-intuition">
          <div><p class="lead" data-editable>A customer’s relationship with a firm can occupy an unobserved state that changes over time. Purchases, engagement, and marketing responses provide signals about that state.</p><ul class="slide-list" data-editable><li>Customers in the same state display similar behavior.</li><li>Each customer has a probability of moving to another state.</li><li>Marketing actions may influence those transition probabilities.</li></ul></div>
          <div class="state-flow"><span data-editable>Observed behavior</span><i>→</i><span data-editable>Hidden relationship state</span><i>→</i><span data-editable>Next-period behavior</span></div>
        </div>
      `)
    },
    "19": {
      html: slide("B2B Relationship Case", `
        <div class="hmm-case">
          <div><h2 data-editable>Business problem</h2><p data-editable>A supplier wants to understand why apparently stable customers strengthen, weaken, or damage their relationships over time.</p><h2 data-editable>Longitudinal data</h2><p data-editable>346 B2B customers observed over six years, including trust, commitment, dependence, relational norms, cooperation, and profit.</p></div>
          <div class="research-question"><h2 data-editable>Analytical questions</h2><ul class="slide-list" data-editable><li>Which hidden relationship states exist?</li><li>How do customers migrate among them?</li><li>Which actions encourage favorable migration?</li></ul></div>
        </div>
      `)
    },
    "20": {
      html: slide("Hidden Markov Model Workflow", `
        <div class="hmm-workflow">
          <section><span>1</span><h2 data-editable>Organize panel data</h2><p data-editable>Build a customer-by-period record of behavior, outcomes, and marketing actions.</p></section>
          <section><span>2</span><h2 data-editable>Estimate hidden states</h2><p data-editable>Compare solutions with different numbers of states and interpret the behavioral profile of each state.</p></section>
          <section><span>3</span><h2 data-editable>Estimate migration</h2><p data-editable>Calculate initial and transition probabilities for moving from one state to another.</p></section>
          <section><span>4</span><h2 data-editable>Connect actions to change</h2><p data-editable>Test whether marketing activity changes the probability of favorable or unfavorable transitions.</p></section>
        </div>
      `)
    },
    "21": {
      html: slide("What the Hidden Markov Model Estimates", `
        <ol class="hmm-outputs" data-editable>
          <li><strong>Number of states</strong><span>How many distinct relationship patterns the data support</span></li>
          <li><strong>Initial state probabilities</strong><span>Where a customer is likely to begin</span></li>
          <li><strong>Transition probabilities</strong><span>How likely customers are to move between states</span></li>
          <li><strong>Behavior within each state</strong><span>The expected purchases, engagement, or outcomes conditional on state</span></li>
          <li><strong>Marketing effects</strong><span>How firm actions change the likelihood of migration</span></li>
        </ol>
      `)
    },
    "22": {
      html: slide("Results: Four Relationship States", `
        <div class="relationship-states">
          <section><h2 data-editable>Transactional</h2><p data-editable>Low trust, commitment, dependence, and relational norms.</p></section>
          <section><h2 data-editable>Transitional</h2><p data-editable>A short-lived bridge as customers explore a stronger relationship.</p></section>
          <section><h2 data-editable>Communal</h2><p data-editable>High trust and commitment, strong cooperation, and the highest profit.</p></section>
          <section><h2 data-editable>Damaged</h2><p data-editable>Low trust and cooperation, but customer dependence can remain high.</p></section>
        </div>
      `)
    },
    "23": {
      html: slide("Results: Relationship States and Migration Paths", `
        <div class="migration-result"><img src="../../assets/images/chapter-03-elements/slide-23-object-00.png" alt="Relationship states and migration paths"><div><h2 data-editable>What the paths reveal</h2><ul class="slide-list" data-editable><li>Customers can move in either direction between strong and weak relationships.</li><li>Positive migration often passes briefly through the transitional state.</li><li>Dependence alone does not prevent a relationship from becoming damaged.</li></ul></div></div>
      `, "image-analysis-slide")
    },
    "24": {
      html: slide("Insights from the B2B Hidden Markov Model", `
        <div class="insight-layout">
          <ul class="slide-list" data-editable>
            <li>A state describes behavior at one point in a relationship. It does not permanently label the customer.</li>
            <li>Migration probabilities make customer dynamics measurable rather than anecdotal.</li>
            <li>Brief transitional states can provide an early window for relationship building.</li>
            <li>High dependence may coexist with low trust, so retained revenue can hide relationship risk.</li>
          </ul>
          <p class="discussion-question" data-editable>Which customer signals would tell a manager that a relationship is moving toward a communal or damaged state?</p>
        </div>
      `)
    },
    "29": {
      html: slide("Customer Lifetime Value Analysis", `
        <div class="clv-analysis"><div><p class="lead" data-editable>Customer lifetime value measures the present value of expected customer cash flows over the relationship.</p><div class="formula" data-editable>CLVᵢ = Σₜ₌₀ᵀ CFᵢ,ₜ / (1 + d)ᵗ</div></div><ul class="slide-list" data-editable><li><strong>CFᵢ,ₜ</strong> is the net cash flow generated by customer i in period t.</li><li><strong>T</strong> is the time horizon.</li><li><strong>d</strong> is the discount rate.</li><li>Firm value can be viewed as the sum of customer lifetime values.</li></ul></div>
      `)
    },
    "30": {
      html: slide("Simplified Customer Lifetime Value", `
        <div class="simple-clv"><div class="formula large" data-editable>CLVᵢ = (Mᵢ − Cᵢ) / (1 − rᵢ + d) − Aᵢ</div><div class="clv-definitions"><p data-editable><strong>Mᵢ</strong> Annual margin</p><p data-editable><strong>Cᵢ</strong> Annual marketing cost</p><p data-editable><strong>rᵢ</strong> Retention rate</p><p data-editable><strong>d</strong> Discount rate</p><p data-editable><strong>Aᵢ</strong> Acquisition cost</p></div><p class="assumption-note" data-editable>Assumes stable annual margin, marketing cost, and retention over a long horizon.</p></div>
      `)
    },
    "31": {
      html: slide("Customer Lifetime Value: Purpose and Use", `
        <div class="method-summary"><section><h2 data-editable>Description</h2><p data-editable>CLV converts expected future customer profit into a present value at the customer or cohort level.</p></section><section><h2 data-editable>When to use it</h2><ul class="slide-list" data-editable><li>Identify customers worth acquiring, expanding, or retaining.</li><li>Compare marketing investments with expected customer value.</li><li>Support customer-centered resource allocation.</li></ul></section><section class="wide"><h2 data-editable>How it works</h2><p data-editable>Estimate the relationship horizon, forecast net cash flows, discount future values, and subtract acquisition cost.</p></section></div>
      `)
    },
    "32": {
      html: slide("Interpreting the Simplified CLV Formula", `
        <div class="formula-interpretation"><div class="formula large" data-editable>CLVᵢ = (Mᵢ − Cᵢ) / (1 − rᵢ + d) − Aᵢ</div><div class="sensitivity-row"><section><strong data-editable>Higher margin</strong><span data-editable>raises CLV</span></section><section><strong data-editable>Higher retention</strong><span data-editable>raises the expected relationship value</span></section><section><strong data-editable>Higher discount rate</strong><span data-editable>reduces the value of future cash flows</span></section><section><strong data-editable>Higher acquisition cost</strong><span data-editable>reduces CLV directly</span></section></div></div>
      `)
    },
    "33": {
      html: slide("CLV Example: The Brett Family", `
        <div class="clv-example"><div><h2 data-editable>Inputs</h2><table><tbody><tr><th>Annual margin</th><td data-editable>$100</td></tr><tr><th>Annual marketing cost</th><td data-editable>$10</td></tr><tr><th>Retention rate</th><td data-editable>65%</td></tr><tr><th>Discount rate</th><td data-editable>5%</td></tr><tr><th>Acquisition cost</th><td data-editable>$65</td></tr></tbody></table></div><div class="calculation"><h2 data-editable>Calculation</h2><p data-editable>($100 − $10) / (1 − 0.65 + 0.05) − $65</p><strong data-editable>CLV = $160</strong><span data-editable>The positive value supports acquisition, subject to uncertainty and comparison with alternative customers.</span></div></div>
      `)
    },
    "38": {
      html: slide("RFM Code Construction", `
        <div class="rfm-flow"><div class="database" data-editable>Customer database</div><i>→</i><div class="rfm-dimensions"><section><strong>R</strong><span data-editable>Recency</span></section><section><strong>F</strong><span data-editable>Frequency</span></section><section><strong>M</strong><span data-editable>Monetary value</span></section></div><i>→</i><div class="rfm-code" data-editable><strong>535</strong><span>High recency score<br>Medium frequency score<br>High monetary score</span></div></div><p class="discussion-question" data-editable>Higher scores indicate more recent, frequent, and valuable purchasing behavior.</p>
      `)
    },
    "42": {
      html: slide("Choice Models and Diminishing Sensitivity", `
        <div class="choice-curve-layout"><div class="choice-curve"><span class="axis-y" data-editable>Marginal effect of marketing</span><span class="axis-x" data-editable>Probability of choosing the alternative</span><i class="curve-line"></i><b class="midpoint" data-editable>0.5</b></div><div><ul class="slide-list" data-editable><li>Choice models assume that customers select the option with the highest individual utility.</li><li>Marketing has the greatest marginal effect for customers who are close to indifferent.</li><li>Additional effort has less effect when the choice probability is already near zero or one.</li></ul></div></div>
      `)
    },
    "44": {
      html: slide("Choice Model Example: MBA Program Inputs", `
        <div class="choice-inputs"><div><h2 data-editable>Observed choice</h2><p data-editable>Whether an applicant enrolled in the program.</p><h2 data-editable>Predictors</h2><ul class="slide-list" data-editable><li>Family income</li><li>Intensity of contact with the EMBA office</li><li>Distance from home to campus</li><li>Coworkers already in the program</li></ul></div><table><thead><tr><th>Applicant</th><th>Enroll</th><th>Income</th><th>Contact</th><th>Distance</th></tr></thead><tbody><tr><td>1</td><td>1</td><td>3</td><td>7</td><td>1</td></tr><tr><td>2</td><td>0</td><td>6</td><td>4</td><td>7</td></tr><tr><td>3</td><td>0</td><td>6</td><td>4</td><td>7</td></tr><tr><td>4</td><td>1</td><td>7</td><td>7</td><td>1</td></tr></tbody></table></div>
      `)
    },
    "45": {
      html: slide("Choice Model Outputs", `
        <div class="choice-outputs"><section><h2 data-editable>Coefficient estimates</h2><p data-editable>Direction and strength of each predictor’s association with enrollment.</p></section><section><h2 data-editable>Predicted probabilities</h2><p data-editable>Enrollment likelihood for each applicant under observed or simulated conditions.</p></section><section><h2 data-editable>Elasticities</h2><p data-editable>Expected percentage change in choice probability for a percentage change in an input.</p></section></div><p class="discussion-question" data-editable>Use holdout accuracy and managerial plausibility to judge whether the model is useful.</p>
      `)
    },
    "46": {
      html: slide("Choice Model Analysis: Purpose and Use", `
        <div class="method-summary choice-summary"><section><h2 data-editable>Description</h2><p data-editable>A choice model estimates how customer attributes and marketing actions influence the probability of an observed choice.</p></section><section><h2 data-editable>When to use it</h2><ul class="slide-list" data-editable><li>Predict which option a customer will choose.</li><li>Estimate the importance of price, promotion, and customer characteristics.</li><li>Segment or target customers by response.</li></ul></section></div>
      `)
    },
    "47": {
      html: slide("How Choice Models Work", `
        <div class="choice-steps"><section><span>1</span><p data-editable>Represent each option with a customer-specific utility.</p></section><section><span>2</span><p data-editable>Link the observed choice to option attributes and customer characteristics.</p></section><section><span>3</span><p data-editable>Estimate coefficients and convert utilities into choice probabilities.</p></section><section><span>4</span><p data-editable>Use probabilities to predict behavior and simulate market share under alternative actions.</p></section></div>
      `)
    },
    "48": {
      html: slide("Choice Model Example: Store-Brand Bleach", `
        <div class="bleach-example"><div><h2 data-editable>Problem</h2><p data-editable>A retailer considers introducing Brand C into a category dominated by Brands A and B.</p><h2 data-editable>Data</h2><p data-editable>Transactions record sales, prices, and promotional intensity for the two incumbent brands.</p></div><div><h2 data-editable>Model insights</h2><ul class="slide-list" data-editable><li>Lower price increases a brand’s share but can shift demand across all alternatives.</li><li>More frequent promotion raises sales, although the effect differs by brand.</li><li>The retailer introduces Brand C as a lower-price option supported by frequent promotions.</li></ul><p class="caveat" data-editable>Full data and model diagnostics are required before treating these elasticities as precise forecasts.</p></div></div>
      `)
    },
    "49": { html: week5Agenda(1) },
    "50": {
      html: slide("Framework for Managing Customer Dynamics", `
        <div class="dynamics-framework"><div class="framework-column inputs"><h2 data-editable>Inputs</h2><section><strong data-editable>Your customers</strong><span data-editable>Sales, margins, costs, behavior, and needs over time</span></section><section><strong data-editable>Past marketing programs</strong><span data-editable>Customer responses linked to actions and cost</span></section><section><strong data-editable>Lost customers</strong><span data-editable>Cause of defection and recovery evidence</span></section></div><div class="framework-arrow">→</div><div class="framework-engine"><h2 data-editable>Approaches and analyses</h2><p data-editable>Lifecycle and AER · Dynamic segmentation · Lost customer analysis</p><p data-editable>CLV · HMM · Choice models · Factor, cluster, and classification analyses</p></div><div class="framework-arrow">→</div><div class="framework-column outputs"><h2 data-editable>Outputs</h2><section><strong data-editable>Dynamic segmentation</strong><span data-editable>Personas, value, and migration paths</span></section><section><strong data-editable>AER positioning</strong><span data-editable>How to position the firm for each stage</span></section><section><strong data-editable>AER strategies</strong><span data-editable>Actions that best fit each persona and stage</span></section></div></div>
      `, "framework-slide")
    },
    "54": { html: week5Agenda(2) },
    "55": {
      html: slide("Case Workshop: Hotel Dynamic Segmentation", `<div class="workshop-image"><img src="../../assets/images/chapter-03-elements/slide-55-object-00.png" alt="Hotel dynamic segmentation and migration paths"><p data-editable>Identify personas in each AER stage, trace migration paths, locate triggers, and connect each persona to a positioning statement and strategy.</p></div>`, "workshop-slide")
    },
    "56": {
      html: slide("Case Workshop: Markstrat Customer Dynamics", `<div class="workshop-image"><img src="../../assets/images/chapter-03-elements/slide-56-object-00.png" alt="Markstrat customer segments changing over time"><p data-editable>Customer needs change within established segments while new segments emerge. The team must update products, prices, and targeting before the market moves.</p></div>`, "workshop-slide")
    },
    "57": { html: week5Agenda(3) },
    "62": { html: week5Agenda(4) },
    "63": {
      html: slide("Case Workshop: Preempting Customer Churn at TKL", `
        <div class="tkl-case"><div><h2 data-editable>Company and problem</h2><p data-editable>TKL distributes electrical components to construction, industrial, and OEM customers. Market share and sales are falling while churn is rising.</p><h2 data-editable>Customer signals</h2><p data-editable>Ratings declined for warranty, sales support, and delivery speed as the fragmented industry matured.</p></div><div><h2 data-editable>Data</h2><ul class="slide-list" data-editable><li>1,000 acquired and 1,000 non-acquired customers</li><li>1,000 retained and 1,000 non-retained customers</li><li>Price, warranty, delivery time, sales support, industry, firm size, and buying-center structure</li></ul><p class="discussion-question" data-editable>Which customers should TKL acquire, expand, or retain, and which benefits should it emphasize?</p></div></div>
      `)
    },
    "64": {
      html: slide("Case Workshop: TKL Results and Decisions", `
        <div class="tkl-results"><section><h2 data-editable>Acquisition</h2><ul class="slide-list" data-editable><li>Higher prices reduce acquisition probability.</li><li>Longer warranty and stronger sales support increase acquisition.</li><li>Larger construction and industrial firms are more attractive targets.</li></ul></section><section><h2 data-editable>Expansion and retention</h2><ul class="slide-list" data-editable><li>Expansion is more likely among construction and OEM customers.</li><li>Larger firms and centralized buying centers show higher potential.</li><li>Sales support and delivery speed become central to the value proposition.</li></ul></section></div>
      `)
    }
  };
})();
