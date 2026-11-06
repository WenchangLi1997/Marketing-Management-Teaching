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
      <section class="${active === 2 ? "active" : ""}"><span>02</span><div><h2 data-editable>Case workshop</h2><p data-editable>Madrigal customer-base audit using four years of transactions</p></div></section>
      <section class="${active === 3 ? "active" : ""}"><span>03</span><div><h2 data-editable>Takeaways</h2><p data-editable>Customer dynamics as a source of sustainable growth decisions</p></div></section>
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
    "34": {
      html: slide("Blue Apron: Growth Versus Customer Economics", `
        <div class="blue-apron-context">
          <div class="blue-apron-story">
            <p class="lead" data-editable>Blue Apron led the U.S. meal kit market while the category grew quickly. Customer metrics, however, pointed to a weaker economic model.</p>
            <ul class="slide-list" data-editable>
              <li>The company kept adding customers as acquisition cost increased.</li>
              <li>Later customer cohorts generated less revenue on average than earlier cohorts.</li>
              <li>Sales growth could therefore coexist with declining value per acquired customer.</li>
            </ul>
          </div>
          <div class="case-facts">
            <section><strong data-editable>53%</strong><span data-editable>U.S. meal kit market share reported for 2016</span></section>
            <section><strong data-editable>Rising CAC</strong><span data-editable>Customer acquisition became more expensive</span></section>
            <section><strong data-editable>Lower cohort revenue</strong><span data-editable>Newer customers produced less revenue on average</span></section>
          </div>
          <p class="discussion-question" data-editable>Should management keep pursuing customer and revenue growth, or improve retention, acquisition quality, and CLV?</p>
        </div>
        ${source("Source: McCarthy and Schwartz, Blue Apron: Turning Around the Struggling Meal Kit Market Leader, WDI Publishing, 2018. Case product W73C09.")}
      `, "blue-apron-slide")
    },
    "35": {
      html: slide("Blue Apron: Retention Curves and Cohort Quality", `
        <div class="retention-case-layout">
          <div class="retention-chart" role="img" aria-label="Schematic retention curves showing stronger early cohorts and weaker later cohorts">
            <span class="retention-y" data-editable>Customers retained</span>
            <span class="retention-x" data-editable>Time since acquisition</span>
            <svg viewBox="0 0 430 245" aria-hidden="true">
              <line x1="42" y1="16" x2="42" y2="210" class="axis"/>
              <line x1="42" y1="210" x2="416" y2="210" class="axis"/>
              <path d="M42 25 C92 76 137 100 188 116 S302 143 416 151" class="cohort early"/>
              <path d="M42 25 C93 93 140 126 192 143 S304 169 416 176" class="cohort middle"/>
              <path d="M42 25 C90 113 139 150 194 167 S309 188 416 193" class="cohort late"/>
            </svg>
            <div class="cohort-legend"><span class="early-label" data-editable>Earlier cohort</span><span class="middle-label" data-editable>Middle cohort</span><span class="late-label" data-editable>Later cohort</span></div>
          </div>
          <div class="retention-questions">
            <h2 data-editable>What the curve reveals</h2>
            <ul class="slide-list" data-editable>
              <li>The initial drop shows how many acquired customers fail to form a relationship.</li>
              <li>The long tail determines how many future orders and margins remain.</li>
              <li>Cohort comparisons separate growth in customer count from improvement in customer quality.</li>
            </ul>
            <p class="case-data-note" data-editable>The curves are schematic. Use the case spreadsheet to reproduce the published estimates and compare segments.</p>
          </div>
        </div>
      `, "blue-apron-slide")
    },
    "36": {
      html: slide("Blue Apron: CLV, CAC, and Acquisition ROI", `
        <div class="blue-apron-economics">
          <div class="clv-chain">
            <section><strong data-editable>Retention curve</strong><span data-editable>Expected survival by period</span></section>
            <section><strong data-editable>Future contribution</strong><span data-editable>Orders × contribution margin</span></section>
            <section><strong data-editable>Customer value</strong><span data-editable>Discounted future contribution</span></section>
            <section><strong data-editable>Acquisition ROI</strong><span data-editable>Compare CLV with CAC</span></section>
          </div>
          <div class="acquisition-decisions">
            <section><h2 data-editable>CLV comfortably exceeds CAC</h2><p data-editable>Continue acquiring similar customers while monitoring cohort quality.</p></section>
            <section><h2 data-editable>CLV is close to CAC</h2><p data-editable>Improve targeting, offer design, and early retention before scaling.</p></section>
            <section><h2 data-editable>CLV falls below CAC</h2><p data-editable>Reduce acquisition spending for that segment or redesign the customer experience.</p></section>
          </div>
          <p class="case-access"><a href="https://store.hbr.org/product/blue-apron-turning-around-the-struggling-meal-kit-market-leader/W73C09" target="_blank" rel="noopener">Case, spreadsheet, and instructor-material access</a><span data-editable>Access depends on the distributor and educator account.</span></p>
        </div>
      `, "blue-apron-slide")
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
      html: slide("Madrigal: Why Audit the Customer Base?", `
        <div class="madrigal-opening"><div><p class="lead" data-editable>Madrigal is a U.S. retailer with roughly 20 years of operating history and a loyalty program. A new CEO discovers that the company lacks a systematic view of its customers.</p><ul class="slide-list" data-editable><li>Management reports describe products and total sales more clearly than customer behavior.</li><li>The company cannot explain whether growth comes from more customers, better customers, or temporary spending changes.</li><li>The CMO must turn transaction records into a diagnosis of customer-base health.</li></ul></div><p class="discussion-question" data-editable>What would you want to know before recommending a sustainable growth strategy?</p></div>
        ${source("Source: Ascarza, Hardie, Ross, and Fader, Madrigal: Conducting a Customer-Base Audit, Harvard Business School, 2024. Case product 524046.")}
      `, "madrigal-slide")
    },
    "56": {
      html: slide("Madrigal: Role, Data, and Unit of Analysis", `
        <div class="madrigal-data"><div class="role-column"><h2 data-editable>Your role</h2><p data-editable>You are the CMO preparing a customer-base audit for the new CEO.</p><h2 data-editable>Available evidence</h2><p data-editable>Four years of customer transaction records. Exact teaching data access should be confirmed with the case distributor.</p></div><div class="transaction-cube"><span data-editable>Customer</span><span data-editable>Time</span><span data-editable>Transaction and product</span><strong data-editable>One row per observed purchase</strong></div><div class="analysis-unit"><h2 data-editable>Shift in perspective</h2><p data-editable>Product reports aggregate over customers. The audit reorganizes the same records around customer histories, acquisition cohorts, and value distributions.</p></div></div>
      `, "madrigal-slide")
    },
    "57": {
      html: slide("Madrigal: Four Questions for the Audit", `
        <div class="audit-lenses"><section><span>01</span><h2 data-editable>Customer growth</h2><p data-editable>How have active, new, retained, and reactivated customer counts changed?</p></section><section><span>02</span><h2 data-editable>Customer heterogeneity</h2><p data-editable>How widely do purchase frequency, spend, and relationship length vary?</p></section><section><span>03</span><h2 data-editable>Customer value</h2><p data-editable>How concentrated is revenue or contribution, and which cohorts create durable value?</p></section><section><span>04</span><h2 data-editable>Customer segments</h2><p data-editable>Which behavioral groups describe the base, and how is their mix changing?</p></section></div>
      `, "madrigal-slide")
    },
    "58": {
      html: slide("Madrigal: Workshop Analysis Plan", `
        <div class="audit-plan"><section><span>1</span><div><h2 data-editable>Build annual customer summaries</h2><p data-editable>Classify each customer as new, retained, reactivated, or lapsed in each year.</p></div></section><section><span>2</span><div><h2 data-editable>Compare acquisition cohorts</h2><p data-editable>Track repeat purchasing, spend, and survival from the first purchase onward.</p></div></section><section><span>3</span><div><h2 data-editable>Measure concentration and value</h2><p data-editable>Examine customer deciles and estimate how much future value depends on a small part of the base.</p></div></section><section><span>4</span><div><h2 data-editable>Develop behavioral segments</h2><p data-editable>Translate recency, frequency, monetary value, and tenure into groups that support different actions.</p></div></section></div>
      `, "madrigal-slide")
    },
    "59": {
      html: slide("Madrigal: From Audit to Growth Strategy", `
        <div class="madrigal-deliverable"><div><h2 data-editable>Diagnostic</h2><ul class="slide-list" data-editable><li>Which customer metrics explain the firm’s recent growth?</li><li>Where does the customer base show weakening acquisition quality or retention?</li><li>Which customer groups account for current and future value?</li></ul></div><div><h2 data-editable>Recommendation</h2><ul class="slide-list" data-editable><li>Prioritize one acquisition, development, or retention problem.</li><li>Connect the proposed action to a measurable customer outcome.</li><li>State which analysis would confirm or reject the recommendation.</li></ul></div></div><p class="case-access"><a href="https://store.hbr.org/product/madrigal-conducting-a-customer-base-audit/524046" target="_blank" rel="noopener">Official case and teaching-material access</a><span data-editable>Confirm the teaching dataset and instructor resources with Harvard Business Publishing.</span></p>
      `, "madrigal-slide")
    },
    "60": { html: week5Agenda(3) },
    "61": {
      html: slide("Managing Customer Dynamics: Takeaways", `
        <div class="dynamics-takeaways"><section><strong data-editable>Observe customer histories</strong><p data-editable>Cross-sectional totals can hide changes in acquisition quality, retention, and customer mix.</p></section><section><strong data-editable>Compare cohorts and segments</strong><p data-editable>Customer averages become more useful when managers identify who changed and when.</p></section><section><strong data-editable>Connect analysis to action</strong><p data-editable>Customer value supports resource allocation only when the firm links metrics to acquisition, development, or retention decisions.</p></section></div>
      `)
    },
    "62": { hidden: true },
    "63": { hidden: true },
    "64": { hidden: true },
    "65": { hidden: true }
  };
})();
