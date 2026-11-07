(() => {
  "use strict";

  const slide = (title, body, extraClass = "") => `
    <article class="custom-layout ${extraClass}">
      <h1 class="custom-title" data-editable>${title}</h1>
      <div class="custom-body">${body}</div>
    </article>`;

  const source = text => `<p class="slide-source" data-editable>${text}</p>`;

  const week6Agenda = active => slide("Agenda", `
    <div class="vertical-agenda advantage-agenda">
      <section class="${active === 1 ? "active" : ""}"><span>01</span><div><h2 data-editable>Introduction</h2><p data-editable>Why competitive reactions make sustainable advantage essential</p></div></section>
      <section class="${active === 2 ? "active" : ""}"><span>02</span><div><h2 data-editable>Approaches</h2><p data-editable>Brand, offering, and relationship equity—and how to measure them</p></div></section>
    </div>
  `, "agenda-slide");

  const week7Agenda = active => slide("Agenda", `
    <div class="vertical-agenda advantage-agenda week-seven-agenda">
      <section class="${active === 1 ? "active" : ""}"><span>01</span><div><h2 data-editable>Framework</h2><p data-editable>Inputs, outputs, and the process for managing sustainable advantage</p></div></section>
      <section class="${active === 2 ? "active" : ""}"><span>02</span><div><h2 data-editable>AI Frontier</h2><p data-editable>Inferring dynamic market structure from social-engagement embeddings</p></div></section>
      <section class="${active === 3 ? "active" : ""}"><span>03</span><div><h2 data-editable>Takeaways</h2><p data-editable>Connecting customer value, competitive response, and defensibility</p></div></section>
    </div>
  `, "agenda-slide");

  window.chapter4Revisions = {
    "1": {
      html: `
        <article class="advantage-cover">
          <p class="cover-school" data-editable>Lee Kong Chian School of Business, Singapore Management University</p>
          <h1 data-editable>Marketing Management</h1>
          <h2 data-editable>Week 6 · Managing Sustainable Competitive Advantage</h2>
          <p class="cover-principle" data-editable>Marketing Principle #3: All Competitors React</p>
          <p class="cover-author" data-editable>Yixing Chen</p>
        </article>`,
      className: "full-bleed advantage-cover-canvas",
      pageNumber: "1"
    },
    "2": { html: week6Agenda(1) },
    "13": { html: week6Agenda(2) },

    "24": {
      html: slide("Marketing Experiments", `
        <div class="experiment-overview">
          <div>
            <p class="lead" data-editable>Experiments isolate the causal effect of a marketing action by comparing outcomes for treated and untreated units.</p>
            <ul class="slide-list" data-editable>
              <li>Change one focal marketing input while holding the decision context stable.</li>
              <li>Assign comparable customers, stores, or markets to treatment and control conditions.</li>
              <li>Measure incremental customer or financial outcomes—not merely correlation.</li>
            </ul>
          </div>
          <div class="experiment-contrast">
            <section><strong data-editable>Treatment</strong><span data-editable>Marketing action</span><b data-editable>Outcome Y₁</b></section>
            <i>−</i>
            <section><strong data-editable>Control</strong><span data-editable>Business as usual</span><b data-editable>Outcome Y₀</b></section>
            <p data-editable>Incremental effect = Y₁ − Y₀</p>
          </div>
        </div>
      `, "experiment-slide")
    },
    "25": {
      html: slide("Three Requirements for a Causal Claim", `
        <div class="causal-requirements">
          <section><span>01</span><h2 data-editable>Covariation</h2><p data-editable>The marketing action and the outcome move together.</p></section>
          <section><span>02</span><h2 data-editable>Temporal order</h2><p data-editable>The treatment occurs before the measured response.</p></section>
          <section><span>03</span><h2 data-editable>Alternative causes ruled out</h2><p data-editable>Random assignment or a credible control condition makes the groups comparable.</p></section>
        </div>
        <p class="evidence-note" data-editable>Randomization is powerful because, on average, observed and unobserved differences are balanced before treatment.</p>
      `, "experiment-slide")
    },
    "26": {
      html: slide("Estimating the Treatment Effect", `
        <div class="treatment-estimate">
          <div class="effect-equation" data-editable>Outcomeᵢ = β₀ + β₁ Treatmentᵢ + εᵢ</div>
          <div class="coefficient-reading">
            <section><strong data-editable>β₀</strong><span data-editable>Expected outcome in the control condition</span></section>
            <section><strong data-editable>β₁</strong><span data-editable>Average incremental effect of the marketing treatment</span></section>
            <section><strong data-editable>εᵢ</strong><span data-editable>Unexplained individual or market-level variation</span></section>
          </div>
          <p class="evidence-note" data-editable>With repeated observations, analyze the change from before to after treatment and compare that change with the control group.</p>
        </div>
      `, "experiment-slide")
    },
    "27": {
      html: slide("Example: DFG Local TV Advertising Experiment", `
        <div class="dfg-design">
          <div class="dfg-story">
            <h2 data-editable>Decision problem</h2>
            <p data-editable>DFG, a floral-delivery firm, wants to know whether increasing local TV advertising produces incremental awareness and sales.</p>
            <h2 data-editable>Field design</h2>
            <ul class="slide-list" data-editable>
              <li>Randomly select 50 regional markets for a 10% increase in local TV spending.</li>
              <li>Keep 50 comparable regional markets at the existing spending level.</li>
              <li>Measure brand awareness, recall, and sales before and after the intervention.</li>
            </ul>
          </div>
          <div class="market-design">
            <section class="treated"><strong data-editable>50 markets</strong><span data-editable>+10% local TV</span></section>
            <section><strong data-editable>50 markets</strong><span data-editable>Business as usual</span></section>
            <p data-editable>Random assignment creates a credible counterfactual.</p>
          </div>
        </div>
      `, "experiment-slide")
    },
    "28": {
      html: slide("Experiment Results and the Managerial Decision", `
        <div class="experiment-results">
          <div class="result-metrics">
            <section><strong data-editable>+3.2%</strong><span data-editable>Brand awareness</span></section>
            <section><strong data-editable>+3.0%</strong><span data-editable>Brand recall</span></section>
            <section><strong data-editable>+1.5%</strong><span data-editable>Sales</span></section>
          </div>
          <div class="decision-test">
            <h2 data-editable>From statistical lift to business value</h2>
            <ol data-editable>
              <li>Translate the incremental sales lift into contribution profit.</li>
              <li>Compare incremental profit with the extra media cost.</li>
              <li>Scale only if the expected return exceeds the hurdle rate and the result travels to other markets.</li>
            </ol>
            <p class="evidence-note" data-editable>The experiment answers “Did the advertising cause lift?” The profit calculation answers “Should we invest?”</p>
          </div>
        </div>
      `, "experiment-slide")
    },

    "33": { html: week7Agenda(1) },
    "44": { html: week7Agenda(3) },
    "49": { html: week7Agenda(2) },
    "50": {
      html: slide("AI Frontier: Identifying Market Structure from Social Engagement", `
        <div class="ai-opening">
          <div>
            <p class="lead" data-editable>Traditional market maps begin with predefined categories. An embedding approach lets observed consumer engagement reveal which brands occupy nearby competitive positions—even across category boundaries.</p>
            <ul class="slide-list" data-editable>
              <li>Which brands attract overlapping audiences?</li>
              <li>Which rivals or complements sit outside the manager’s existing category definition?</li>
              <li>How does proximity change after a major strategic event?</li>
            </ul>
          </div>
          <div class="boundary-contrast">
            <section><strong data-editable>Category view</strong><span data-editable>Competitors are defined first</span></section>
            <b>→</b>
            <section class="accent"><strong data-editable>Embedding view</strong><span data-editable>Competitors emerge from behavior</span></section>
          </div>
        </div>
        ${source("Yang, Zhang, and Kannan (2021), Journal of Marketing, 86(4), 37–56.")}
      `, "ai-frontier-slide")
    },
    "51": {
      html: slide("Data: A Brand–User Engagement Network", `
        <div class="network-data">
          <div class="network-visual" aria-label="Editable brand-user network diagram">
            <span class="brand b1" data-editable>Brand A</span><span class="brand b2" data-editable>Brand B</span><span class="brand b3" data-editable>Brand C</span>
            <i class="edge e1"></i><i class="edge e2"></i><i class="edge e3"></i><i class="edge e4"></i><i class="edge e5"></i>
            <span class="user u1" data-editable>U1</span><span class="user u2" data-editable>U2</span><span class="user u3" data-editable>U3</span><span class="user u4" data-editable>U4</span>
          </div>
          <div class="network-facts">
            <section><strong data-editable>5,478</strong><span data-editable>brands</span></section>
            <section><strong data-editable>25</strong><span data-editable>categories</span></section>
            <section><strong data-editable>106.6M</strong><span data-editable>public engagement activities</span></section>
            <section><strong data-editable>26.0M</strong><span data-editable>unique users</span></section>
          </div>
        </div>
        <p class="evidence-note" data-editable>Facebook public fan-page engagement observed from January 2017 to January 2018; the study uses user identifiers and public engagement, not personal-profile content.</p>
        ${source("Source: Yang, Zhang, and Kannan (2021). Counts rounded from the published study.")}
      `, "ai-frontier-slide")
    },
    "52": {
      html: slide("Method: From Engagement to a Market Map", `
        <div class="embedding-pipeline">
          <section><span>01</span><h2 data-editable>Build network</h2><p data-editable>Represent brands and users as nodes connected by public engagement.</p></section>
          <b>→</b>
          <section><span>02</span><h2 data-editable>Learn embeddings</h2><p data-editable>A deep autoencoder compresses the sparse network into a 300-dimensional vector for each brand.</p></section>
          <b>→</b>
          <section><span>03</span><h2 data-editable>Measure proximity</h2><p data-editable>Cosine similarity reveals brands with comparable engagement neighborhoods.</p></section>
          <b>→</b>
          <section><span>04</span><h2 data-editable>Visualize structure</h2><p data-editable>t-SNE projects brand vectors into two dimensions for managerial interpretation.</p></section>
        </div>
        <div class="method-outputs"><span data-editable>Market boundaries</span><span data-editable>Proximal brands</span><span data-editable>Substitutes and complements</span><span data-editable>Change over time</span></div>
        ${source("Source: Yang, Zhang, and Kannan (2021). The 2D map is a visualization of the 300-dimensional representation.")}
      `, "ai-frontier-slide")
    },
    "53": {
      html: slide("What the Embedding Reveals", `
        <div class="market-map-layout">
          <div class="market-map" aria-label="Editable illustrative market structure map">
            <span class="zone z1" data-editable>Major airlines</span><span class="zone z2" data-editable>Low-cost airlines</span><span class="zone z3" data-editable>Travel information</span>
            <i class="dot d1"></i><i class="dot d2"></i><i class="dot d3"></i><i class="dot d4"></i><i class="dot d5"></i><i class="dot d6"></i>
            <span class="label l1" data-editable>United</span><span class="label l2" data-editable>Southwest</span><span class="label l3" data-editable>JetBlue</span><span class="label l4" data-editable>Frontier</span><span class="label l5" data-editable>Airfarewatchdog</span>
          </div>
          <div class="map-insights">
            <section><h2 data-editable>Within-category structure</h2><p data-editable>Southwest sits near JetBlue, Frontier, and Allegiant; United aligns more closely with major domestic and international carriers.</p></section>
            <section><h2 data-editable>Cross-category adjacency</h2><p data-editable>Airfarewatchdog appears near airlines even though a conventional industry taxonomy may place it elsewhere.</p></section>
            <section><h2 data-editable>Managerial interpretation</h2><p data-editable>Proximity indicates shared engagement neighborhoods—not automatically direct substitution or causality.</p></section>
          </div>
        </div>
        ${source("Illustrative editable map based on examples reported by Yang, Zhang, and Kannan (2021); positions are schematic, not the paper’s original coordinates.")}
      `, "ai-frontier-slide")
    },
    "54": {
      html: slide("Dynamic Market Structure: Two Strategic Events", `
        <div class="event-studies">
          <section>
            <h2 data-editable>Amazon acquires Whole Foods</h2>
            <div class="change-row positive"><span data-editable>Amazon ↔ Whole Foods</span><b data-editable>+0.202</b></div>
            <div class="change-row positive small"><span data-editable>Amazon ↔ Kroger</span><b data-editable>+0.165</b></div>
            <div class="change-row negative"><span data-editable>Amazon ↔ Lowe’s</span><b data-editable>−0.184</b></div>
            <p data-editable>The event draws Amazon closer to grocery brands and away from a home-improvement retailer in the learned representation.</p>
          </section>
          <section>
            <h2 data-editable>Tesla launches Model 3</h2>
            <div class="change-row negative"><span data-editable>Tesla ↔ Maserati</span><b data-editable>−0.209</b></div>
            <div class="position-shift"><span data-editable>Premium niche</span><b>→</b><span data-editable>Broader auto set</span></div>
            <p data-editable>Tesla moves closer to more mainstream brands such as Kia and Mazda after the mass-market launch.</p>
          </section>
        </div>
        <p class="evidence-note" data-editable>Event-study changes are descriptive shifts in embedding similarity. They do not, by themselves, establish a causal effect.</p>
        ${source("Source: Yang, Zhang, and Kannan (2021), reported similarity changes around the two events.")}
      `, "ai-frontier-slide")
    },
    "55": {
      html: slide("Managerial Value—and Important Limits", `
        <div class="ai-implications">
          <div>
            <h2 data-editable>Use the method to…</h2>
            <ul class="slide-list" data-editable>
              <li>scan for emerging competitors beyond predefined categories;</li>
              <li>track how launches, acquisitions, or campaigns shift brand neighborhoods;</li>
              <li>combine behavioral structure with customer surveys and search data.</li>
            </ul>
          </div>
          <div>
            <h2 data-editable>Interpret with care</h2>
            <ul class="slide-list" data-editable>
              <li>one platform may not represent the full market;</li>
              <li>platform demographics and algorithms shape observed engagement;</li>
              <li>similarity is descriptive and must be validated before strategic action;</li>
              <li>privacy and governance remain central.</li>
            </ul>
          </div>
        </div>
        <p class="closing-question" data-editable>What managerial decision would change if a newly proximal brand were treated as a competitor rather than an adjacent brand?</p>
        ${source("Source: Yang, Zhang, and Kannan (2021).")}
      `, "ai-frontier-slide")
    }
  };
})();
