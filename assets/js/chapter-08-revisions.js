(() => {
  "use strict";

  const slide = (title, body, extraClass = "") => `
    <article class="custom-layout ${extraClass}">
      <h1 class="custom-title" data-editable>${title}</h1>
      <div class="custom-body">${body}</div>
    </article>`;

  const source = text => `<p class="slide-source" data-editable>${text}</p>`;

  const week8Agenda = active => slide("Agenda", `
    <div class="vertical-agenda allocation-agenda">
      <section class="${active === 1 ? "active" : ""}"><span>01</span><div><h2 data-editable>Introduction</h2><p data-editable>Why limited and interdependent resources create recurring trade-offs</p></div></section>
      <section class="${active === 2 ? "active" : ""}"><span>02</span><div><h2 data-editable>Attribution and response models</h2><p data-editable>Heuristics, experiments, response functions, calibration, and optimization</p></div></section>
      <section class="${active === 3 ? "active" : ""}"><span>03</span><div><h2 data-editable>Marketing metrics</h2><p data-editable>Intermediate measures, financial metrics, and dashboards</p></div></section>
    </div>
  `, "agenda-slide");

  const week9Agenda = active => slide("Agenda", `
    <div class="vertical-agenda allocation-agenda week-nine-agenda">
      <section class="${active === 1 ? "active" : ""}"><span>01</span><div><h2 data-editable>Framework</h2><p data-editable>Inputs, outputs, and the resource-allocation process</p></div></section>
      <section class="${active === 2 ? "active" : ""}"><span>02</span><div><h2 data-editable>Classic response-model example</h2><p data-editable>CallPlan allocation and field validation</p></div></section>
      <section class="${active === 3 ? "active" : ""}"><span>03</span><div><h2 data-editable>AI Frontier case workshop</h2><p data-editable>Double Machine Learning for causal marketing allocation</p></div></section>
      <section class="${active === 4 ? "active" : ""}"><span>04</span><div><h2 data-editable>Takeaways</h2><p data-editable>Attribution, optimization, metrics, and validation</p></div></section>
    </div>
  `, "agenda-slide");

  window.chapter8Revisions = {
    "1": {
      html: `
        <article class="allocation-cover">
          <p class="cover-school" data-editable>Lee Kong Chian School of Business, Singapore Management University</p>
          <h1 data-editable>Marketing Management</h1>
          <h2 data-editable>Week 8 · Managing Resource Trade-Offs</h2>
          <p class="cover-principle" data-editable>Marketing Principle #4: All Resources Are Limited</p>
          <p class="cover-author" data-editable>Yixing Chen</p>
        </article>`,
      className: "full-bleed allocation-cover-canvas",
      pageNumber: "1"
    },
    "2": { html: week8Agenda(1) },
    "13": { html: week8Agenda(2) },

    "26": {
      html: slide("Response Models", `
        <div class="response-overview">
          <div>
            <p class="lead" data-editable>A response model estimates how marketing inputs relate to customer or financial outcomes. Managers use the estimated response function to compare investments and improve resource allocation.</p>
          </div>
          <div class="response-uses">
            <h2 data-editable>When to use it</h2>
            <ul class="slide-list" data-editable>
              <li>Estimate the shape of the relationship between marketing effort and performance.</li>
              <li>Compare the impact of alternative marketing-mix investments.</li>
              <li>Account for competitor actions and other market conditions.</li>
            </ul>
          </div>
        </div>
        <div class="response-sequence" data-editable><span>Marketing inputs</span><b>→</b><span>Response function</span><b>→</b><span>Expected outcomes</span><b>→</b><span>Allocation decision</span></div>
      `, "response-technique-slide")
    },
    "27": {
      html: slide("How Response Models Work", `
        <div class="response-method">
          <div class="response-principles">
            <section><span>01</span><p data-editable>Historical variation reveals how outcomes change when marketing inputs change.</p></section>
            <section><span>02</span><p data-editable>Functional form captures diminishing returns, delays, or saturation.</p></section>
            <section><span>03</span><p data-editable>Elasticities put different marketing activities on a comparable scale.</p></section>
            <section><span>04</span><p data-editable>Competitor spending and market conditions enter as controls.</p></section>
          </div>
          <div class="response-equation">
            <h2 data-editable>Illustrative log-log model</h2>
            <p class="equation" data-editable>ln(Y) = β₀ + β₁ln(X₁) + β₂ln(X₂) + β₃ln(Z₁) + ε</p>
            <p data-editable><strong>Y</strong> is the outcome, <strong>X₁ and X₂</strong> are the firm’s marketing inputs, and <strong>Z₁</strong> captures competitive effort.</p>
            <p data-editable>Each β coefficient is an elasticity: the expected percentage change in Y for a 1% change in the corresponding input.</p>
          </div>
        </div>
      `, "response-technique-slide")
    },
    "28": {
      html: slide("Example: XYZ Newspaper", `
        <div class="newspaper-case">
          <div>
            <h2 data-editable>Decision problem</h2>
            <p data-editable>XYZ must divide a limited budget between newsroom quality and the advertising sales force during a difficult economic period.</p>
            <h2 data-editable>Data</h2>
            <p data-editable>Ten years of monthly revenue, newsroom investment, sales-force investment, and competitor investment.</p>
            <h2 data-editable>Model</h2>
            <p data-editable>A log-log response model estimates the elasticity of revenue with respect to each investment.</p>
          </div>
          <table class="elasticity-table">
            <thead><tr><th>Variable</th><th>Elasticity</th><th>p-value</th></tr></thead>
            <tbody>
              <tr><td data-editable>Newsroom investment</td><td data-editable>0.36</td><td data-editable>0.03</td></tr>
              <tr><td data-editable>Sales-force investment</td><td data-editable>0.24</td><td data-editable>0.02</td></tr>
              <tr><td data-editable>Competitor newsroom investment</td><td data-editable>−0.12</td><td data-editable>0.01</td></tr>
              <tr><td data-editable>Competitor sales-force investment</td><td data-editable>−0.08</td><td data-editable>0.02</td></tr>
            </tbody>
          </table>
        </div>
      `, "response-technique-slide")
    },
    "29": {
      html: slide("XYZ Newspaper: Interpretation and Decision", `
        <div class="newspaper-decision">
          <div class="elasticity-comparison">
            <section><strong data-editable>0.36</strong><span data-editable>Newsroom elasticity</span></section>
            <b data-editable>1.5×</b>
            <section><strong data-editable>0.24</strong><span data-editable>Sales-force elasticity</span></section>
          </div>
          <div class="decision-rationale">
            <h2 data-editable>Recommended reallocation</h2>
            <ul class="slide-list" data-editable>
              <li>Shift part of the budget toward newsroom quality because its estimated revenue elasticity is higher.</li>
              <li>Retain sales-force investment because its estimated effect remains positive and statistically significant.</li>
              <li>Monitor competitor newsroom investment, which has the larger negative association with XYZ revenue.</li>
            </ul>
            <p class="evidence-note" data-editable>The model supports a reallocation decision. A field experiment should test whether the predicted lift is causal and transferable.</p>
          </div>
        </div>
      `, "response-technique-slide")
    },

    "49": { html: week9Agenda(1) },
    "58": { html: week9Agenda(2) },
    "62": { html: week9Agenda(4) },
    "69": { html: week9Agenda(3), pageNumber: "69" },
    "70": {
      html: slide("AI Frontier: Double Machine Learning for Resource Allocation", `
        <div class="dml-opening">
          <div>
            <p class="lead" data-editable>Chapter 8 asks how much each marketing resource contributes to performance. Double Machine Learning combines flexible prediction with causal estimation so that complex controls do not dominate the effect of interest.</p>
            <ul class="slide-list" data-editable>
              <li><strong>Target:</strong> the incremental effect of a marketing input on contribution profit.</li>
              <li><strong>Nuisance functions:</strong> how observed conditions predict both spending and outcomes.</li>
              <li><strong>Decision:</strong> use causal marginal returns as inputs to a constrained allocation model.</li>
            </ul>
          </div>
          <div class="classic-dml-contrast">
            <section><h2 data-editable>Classic response model</h2><p data-editable>Models outcome as a function of spending and controls.</p></section>
            <b>→</b>
            <section class="accent"><h2 data-editable>DML extension</h2><p data-editable>Uses cross-fitting and an orthogonal score to reduce bias from flexible nuisance models.</p></section>
          </div>
        </div>
        ${source("Sources: Chernozhukov et al. (2018), The Econometrics Journal; DoubleML documentation.")}
      `, "dml-slide")
    },
    "71": {
      html: slide("Case Workshop: SkyLink Airlines", `
        <div class="skylink-case">
          <div>
            <h2 data-editable>Managerial question</h2>
            <p class="lead" data-editable>SkyLink wants to reallocate paid-search spending across regional markets without increasing its total budget.</p>
            <h2 data-editable>Why the historical pattern is difficult to interpret</h2>
            <p data-editable>Managers spend more in markets where demand, capacity, and promotions are already high. These same factors also increase contribution profit.</p>
          </div>
          <div class="case-facts dml-case-facts">
            <section><strong data-editable>36</strong><span data-editable>regional markets</span></section>
            <section><strong data-editable>52</strong><span data-editable>weeks</span></section>
            <section><strong data-editable>1,872</strong><span data-editable>market-week observations</span></section>
            <section><strong data-editable>3</strong><span data-editable>market tiers</span></section>
          </div>
        </div>
        <p class="case-data-note" data-editable>The supplied teaching dataset is synthetic. It reproduces a realistic confounding problem without representing any actual airline.</p>
      `, "dml-slide")
    },
    "72": {
      html: slide("Why Prediction Is Not Attribution", `
        <div class="confounding-layout">
          <div class="causal-structure" aria-label="Editable causal structure">
            <span class="node controls" data-editable>Market conditions X</span>
            <span class="node spend" data-editable>Paid-search spend D</span>
            <span class="node profit" data-editable>Contribution profit Y</span>
            <b class="arrow x-d">→</b><b class="arrow x-y">→</b><b class="arrow d-y">➜</b>
          </div>
          <div>
            <h2 data-editable>Observed association</h2>
            <p data-editable>Markets with high demand receive more advertising and generate more profit. A predictive model may attribute part of the demand effect to advertising.</p>
            <h2 data-editable>Causal target</h2>
            <p data-editable>Estimate how profit would change if paid-search spend changed while comparable market conditions remained fixed.</p>
            <p class="evidence-note" data-editable>In the workshop data, the unadjusted spend-profit slope is 9.07. That number is far too large to use as an incremental return.</p>
          </div>
        </div>
      `, "dml-slide")
    },
    "73": {
      html: slide("The Partially Linear Model", `
        <div class="plr-layout">
          <div class="plr-equations">
            <p data-editable>Y = θD + g(X) + ε</p>
            <p data-editable>D = m(X) + v</p>
          </div>
          <div class="plr-definitions">
            <section><strong data-editable>Y</strong><span data-editable>Contribution profit</span></section>
            <section><strong data-editable>D</strong><span data-editable>Paid-search spending</span></section>
            <section><strong data-editable>X</strong><span data-editable>Demand, fares, capacity, promotions, competition, seasonality, and prior bookings</span></section>
            <section><strong data-editable>θ</strong><span data-editable>Causal contribution profit per additional dollar of paid-search spending</span></section>
          </div>
        </div>
        <p class="evidence-note" data-editable>Machine-learning models estimate g(X) and m(X). DML protects the estimate of θ from first-order nuisance-model errors through orthogonalization and cross-fitting.</p>
        ${source("Model and notation follow Chernozhukov et al. (2018) and the DoubleML PLR documentation.")}
      `, "dml-slide")
    },
    "74": {
      html: slide("Cross-Fitting and Orthogonalization", `
        <div class="dml-steps">
          <section><span>01</span><h2 data-editable>Split the sample</h2><p data-editable>Divide market-week observations into five folds.</p></section>
          <section><span>02</span><h2 data-editable>Learn nuisance functions</h2><p data-editable>On the training folds, predict profit from X and spending from X.</p></section>
          <section><span>03</span><h2 data-editable>Residualize held-out data</h2><p data-editable>Remove the predicted components from Y and D in the held-out fold.</p></section>
          <section><span>04</span><h2 data-editable>Estimate the focal effect</h2><p data-editable>Regress residualized profit on residualized spend and combine results across folds.</p></section>
        </div>
        <p class="orthogonal-score" data-editable>[Y − ℓ(X) − θ(D − m(X))] × [D − m(X)] = 0</p>
        ${source("DoubleML uses Neyman-orthogonal scores and cross-fitting to reduce regularization and overfitting bias.")}
      `, "dml-slide")
    },
    "75": {
      html: slide("Workshop Data and Analysis", `
        <div class="workshop-analysis">
          <div>
            <h2 data-editable>Files</h2>
            <p data-editable><strong>Dataset:</strong> 1,872 market-week observations</p>
            <p data-editable><strong>Python:</strong> transparent five-fold DML implementation using random forests</p>
            <h2 data-editable>Analysis sequence</h2>
            <ol data-editable>
              <li>Describe spending and profit by market tier.</li>
              <li>Estimate the naive spend-profit slope.</li>
              <li>Estimate the overall DML effect.</li>
              <li>Repeat DML within Core, Growth, and Emerging markets.</li>
            </ol>
          </div>
          <div class="variable-map">
            <section><strong data-editable>Outcome Y</strong><span data-editable>Contribution profit</span></section>
            <section><strong data-editable>Treatment D</strong><span data-editable>Paid-search spend</span></section>
            <section><strong data-editable>Controls X</strong><span data-editable>Market demand, price, capacity, promotions, competition, fuel cost, seasonality, and prior bookings</span></section>
          </div>
        </div>
      `, "dml-slide")
    },
    "76": {
      html: slide("Workshop Results", `
        <div class="dml-results">
          <div class="overall-result">
            <span data-editable>Unadjusted slope</span><strong data-editable>9.07</strong>
            <b>→</b>
            <span data-editable>DML estimate</span><strong data-editable>1.36</strong>
            <small data-editable>95% CI: 1.16 to 1.57</small>
          </div>
          <table class="tier-results">
            <thead><tr><th>Market tier</th><th>DML effect</th><th>95% confidence interval</th><th>Allocation implication</th></tr></thead>
            <tbody>
              <tr><td data-editable>Growth</td><td data-editable>1.84</td><td data-editable>1.49 to 2.20</td><td data-editable>Highest priority for incremental budget</td></tr>
              <tr><td data-editable>Core</td><td data-editable>1.51</td><td data-editable>1.16 to 1.87</td><td data-editable>Positive return, subject to saturation</td></tr>
              <tr><td data-editable>Emerging</td><td data-editable>1.18</td><td data-editable>0.82 to 1.54</td><td data-editable>Lower priority and greater uncertainty</td></tr>
            </tbody>
          </table>
        </div>
        <p class="case-data-note" data-editable>Illustrative results produced by the supplied synthetic dataset and Python script. Effects represent contribution-profit dollars per additional dollar of paid-search spending.</p>
      `, "dml-slide")
    },
    "77": {
      html: slide("From Causal Response to Budget Allocation", `
        <div class="allocation-bridge">
          <section><span>1</span><h2 data-editable>Estimate</h2><p data-editable>DML estimates causal marginal returns overall and by market tier.</p></section>
          <section><span>2</span><h2 data-editable>Optimize</h2><p data-editable>Allocate the fixed budget toward higher-return markets while respecting capacity, minimum-presence, and risk constraints.</p></section>
          <section><span>3</span><h2 data-editable>Validate</h2><p data-editable>Randomly implement the recommended reallocation in selected markets and measure incremental contribution profit.</p></section>
        </div>
        <div class="framework-connection">
          <h2 data-editable>Connection to the Chapter 8 framework</h2>
          <p data-editable><strong>Inputs:</strong> positioning, lifecycle, and competitive priorities determine which controls and constraints matter.</p>
          <p data-editable><strong>Outputs:</strong> activity budgets, allocation across markets, time horizon, and the metrics used for evaluation.</p>
        </div>
      `, "dml-slide")
    },
    "78": {
      html: slide("Case Workshop Deliverable", `
        <div class="dml-deliverable">
          <div>
            <h2 data-editable>Team recommendation</h2>
            <ul class="slide-list" data-editable>
              <li>State which market tier should receive the first incremental budget and why.</li>
              <li>Specify at least two business constraints for the allocation model.</li>
              <li>Design a field experiment that tests the recommended shift.</li>
            </ul>
          </div>
          <div>
            <h2 data-editable>Required caveats</h2>
            <ul class="slide-list" data-editable>
              <li>DML requires observed controls that make treatment assignment conditionally independent of potential outcomes.</li>
              <li>Poor overlap limits what the data can identify.</li>
              <li>A historical causal estimate may change when the market or allocation policy changes.</li>
            </ul>
          </div>
        </div>
        <p class="closing-question" data-editable>What evidence would make you comfortable moving from the DML recommendation to a permanent budget change?</p>
      `, "dml-slide")
    }
  };
})();
