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
      html: slide("Five Sources of Customer Heterogeneity<br><span class=\"title-part\">Part 1</span>", `
        <div class="source-list">
          <section class="source-item"><h2 data-editable>1. Individual differences</h2><ul class="slide-list"><li data-editable><strong>Description:</strong> Customers differ in enduring personal characteristics and resources.</li><li data-editable><strong>Examples:</strong> Age, income, expertise, risk tolerance, and time available.</li></ul></section>
          <section class="source-item"><h2 data-editable>2. Life experiences</h2><ul class="slide-list"><li data-editable><strong>Description:</strong> Past events shape what customers notice, value, and avoid.</li><li data-editable><strong>Examples:</strong> Family stage, career history, culture, travel, and prior product experience.</li></ul></section>
        </div>
      `, "split-title-slide")
    },
    "7": {
      html: slide("Five Sources of Customer Heterogeneity<br><span class=\"title-part\">Part 2</span>", `
        <div class="source-list source-list-three">
          <section class="source-item"><h2 data-editable>3. Functional needs</h2><ul class="slide-list"><li data-editable><strong>Description:</strong> Customers hire an offering to solve different practical problems.</li><li data-editable><strong>Examples:</strong> Convenience, reliability, speed, safety, and performance.</li></ul></section>
          <section class="source-item"><h2 data-editable>4. Self-identity and image</h2><ul class="slide-list"><li data-editable><strong>Description:</strong> Choices express identity or signal membership in a social group.</li><li data-editable><strong>Examples:</strong> Style, status, sustainability values, and professional identity.</li></ul></section>
          <section class="source-item"><h2 data-editable>5. Marketing activities</h2><ul class="slide-list"><li data-editable><strong>Description:</strong> Different exposures and relationship histories create different responses.</li><li data-editable><strong>Examples:</strong> Advertising, promotions, channels, loyalty programs, and sales contact.</li></ul></section>
        </div>
      `, "split-title-slide")
    },
    "8": {
      html: slide("Customer Heterogeneity: A Fundamental Assumption of Marketing Strategy", `
        <div class="assumption-source-layout">
          <ul class="slide-list assumption-source-list" data-editable>
            <li>Customer heterogeneity is a fundamental “problem” that all firms must address when developing an effective marketing strategy.</li>
            <li>Customer heterogeneity may be latent or hidden.
              <ul>
                <li>Customers vary on some underlying preferences, but no firms are supplying offerings that fit their desires, so those preferences are not evident.</li>
                <li>Customers might not even know of their diverse preferences because they have no options to evaluate.</li>
              </ul>
            </li>
            <li>Assuming all customers are the same is a recipe for failure, at least in the long term, as competitors will better satisfy subsegments with more aligned offerings, leading to a downward spiral in which the firm has fewer, less profitable customers that are more costly to serve.</li>
          </ul>
          <div class="marketing-principle"><span data-editable><strong>Marketing principle #1:</strong> all customers differ and an effective marketing strategy must manage ever-present customer heterogeneity.</span></div>
        </div>
      `, "assumption-source-slide")
    },
    "12": {
      html: slide("Evolution of Approaches for Managing Customer Heterogeneity", `
        <img class="source-figure source-evolution-figure" src="../../assets/images/chapter-02-elements/slide-12-object-03.png" alt="Original Chapt 2 diagram showing the evolution from mass marketing to niche marketing and one-to-one marketing">
      `, "source-image-slide")
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
        <div class="stp-source-layout">
          <ul class="slide-list stp-source-copy" data-editable>
            <li>In order to better match heterogeneous customer needs, firms focus their efforts on small “homogenous” customer groups.</li>
            <li><strong>Segmenting:</strong> Dividing the market into groups of similar customers, or slicing the pie into pieces.</li>
            <li><strong>Targeting:</strong> Selecting the best customer group to sell to, or picking the slice to eat.</li>
            <li><strong>Positioning:</strong> Improve your relative advantage in the minds of your targeted customers. This also addresses Marketing Principle #3 by building sustainable competitive advantage.</li>
          </ul>
          <div class="stp-visual-process" aria-label="Illustrated segmenting, targeting, and positioning process">
            <img src="../../assets/images/cases/week2-stp-process-v2.png" alt="A diverse customer group separated into segments, one segment selected as a target, and a distinctive marker placed in the customer’s mind">
            <div class="stp-visual-labels"><span data-editable>Segmenting</span><span data-editable>Targeting</span><span data-editable>Positioning</span></div>
          </div>
        </div>
      `, "stp-source-slide")
    },
    "16": {
      html: slide("Segmenting", `
        <div class="segmenting-source-layout">
          <ul class="slide-list segmenting-source-list" data-editable>
            <li>Consists of dividing the market into groups of customers where:
              <ul>
                <li>Customers within a group have very similar needs.</li>
                <li>Customers across groups have different needs.</li>
              </ul>
            </li>
            <li><strong>Needs:</strong> Needs and benefits desired by customers for your offering.
              <ul>
                <li>Segment on needs and benefits, not descriptors.</li>
                <li>Uses one of the “Cs” as input: <strong>customers</strong>.</li>
              </ul>
            </li>
            <li><strong>Descriptors:</strong> Observable customer characteristics that help you find and classify customers, such as gender, age, income, size, and education.</li>
          </ul>
        </div>
      `, "segmenting-source-slide")
    },
    "18": {
      html: slide("MBA Program Segmentation Case", `
        <div class="case-method-intro">
          <div class="case-method-background">
            <h2 data-editable>Business setting</h2>
            <p data-editable>A regional MBA program wants to increase enrollment in a market where prospective students differ in career goals, time constraints, willingness to pay, and interest in the school’s network.</p>
            <h2 data-editable>The survey</h2>
            <p data-editable>Prospects rated 12 statements about the benefits they wanted from an MBA on a 1–7 scale. One item asked whether “MBA program ranking is very important to my decision.” The items covered prestige, convenience, affordability, content fit, and networking.</p>
            <h2 data-editable>Information for later action</h2>
            <p data-editable>The survey also captured age, income, career stage, distance from campus, family status, degree timing, and likelihood of attending. These descriptors help the program find new applicants after the segments have been identified.</p>
            <h2 data-editable>Management question</h2>
            <p data-editable>Which groups seek different benefits, which groups should the program prioritize, and what should the program promise them?</p>
          </div>
          <div class="case-method-plan">
            <h2 data-editable>Three-step solution</h2>
            <section><span>1</span><div><strong data-editable>Factor analysis</strong><p data-editable>Condense related survey questions.</p></div></section>
            <section><span>2</span><div><strong data-editable>Cluster analysis</strong><p data-editable>Group applicants with similar needs.</p></div></section>
            <section><span>3</span><div><strong data-editable>Classification</strong><p data-editable>Recognize similar applicants later.</p></div></section>
          </div>
        </div>
      `, "case-method-intro-slide")
    },
    "19": {
      html: slide("Factor Analysis: Method Intuition", `
        <div class="factor-intuition-layout">
          <div class="factor-intuition-main">
            <div class="theory-copy factor-explanation">
              <h2 data-editable>Factor analysis groups questions, not people</h2>
              <p data-editable>When several survey answers rise and fall together, they may reflect the same underlying need. For example, applicants who care about rankings may also care about reputation and selectivity. Factor analysis summarizes those related answers as a common “prestige” factor.</p>
              <p class="concept-key" data-editable>The method replaces many overlapping questions with a smaller set of benefit dimensions while preserving most of the useful variation.</p>
            </div>
            <div class="factor-plain-steps">
              <section><strong data-editable>1. Find questions that move together</strong><span data-editable>Inspect correlations across the 12 importance ratings. Strongly related items contain overlapping information.</span></section>
              <section><strong data-editable>2. Interpret the shared need</strong><span data-editable>A factor loading shows how strongly an item belongs to a factor. The pattern of high loadings helps the analyst name that factor.</span></section>
              <section><strong data-editable>3. Score every applicant</strong><span data-editable>Each respondent receives a score on every retained factor. Those scores become the inputs to cluster analysis.</span></section>
            </div>
          </div>
          <div class="method-equation single-line-equation" data-editable>x<sub>j</sub> = λ<sub>j1</sub>F<sub>1</sub> + … + λ<sub>jm</sub>F<sub>m</sub> + ε<sub>j</sub></div>
        </div>
      `, "method-theory-slide factor-intuition-slide")
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
      html: slide("Cluster Analysis: Method Intuition", `
        <div class="cluster-intuition-layout">
          <div class="cluster-intuition-copy">
            <h2 data-editable>Cluster analysis groups people, not questions</h2>
            <p data-editable>After factor analysis, each applicant becomes a point described by five factor scores. Applicants with similar combinations of prestige, convenience, affordability, content, and networking needs appear close together.</p>
            <p class="concept-key" data-editable>The objective is simple: keep applicants within a group close to one another while keeping different groups clearly separated.</p>
          </div>
          <div class="cluster-intuition-steps">
            <p data-editable><strong>Distance:</strong> after standardizing the factor scores, nearby points represent applicants with similar benefit priorities.</p>
            <p data-editable><strong>Cluster center:</strong> the center is the average profile of the applicants currently assigned to that group.</p>
            <p data-editable><strong>Choosing the number of groups:</strong> compare several solutions, then check separation, stability, group size, and whether managers can act on the result.</p>
          </div>
          <figure class="cluster-intuition-figure"><img src="../../assets/images/cases/week2-cluster-intuition-v1.png" alt="Scattered customer points moving into three compact clusters around group centers"><figcaption data-editable>Points move toward the closest group center. The centers update until assignments stop changing.</figcaption></figure>
        </div>
      `, "method-theory-slide cluster-intuition-slide")
    },
    "22": {
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
    "23": {
      html: slide("MBA Case: Hierarchical Clustering", `
        <div class="hierarchical-layout mba-hierarchical-layout">
          <div><p class="lead" data-editable>The MBA team uses hierarchical clustering as a diagnostic before settling on the final segmentation.</p><ul class="slide-list" data-editable><li>Represent every applicant with the five factor scores produced on Page 20.</li><li>Begin with each applicant as a separate group, then merge the most similar groups step by step.</li><li>Inspect the dendrogram for large jumps in merge distance. A large jump suggests that the next merger would combine meaningfully different applicants.</li><li>Compare several candidate solutions and reject groups that are too small, unstable, or difficult to interpret.</li></ul><p class="mba-cluster-callout" data-editable>For the MBA case, this diagnostic supports the decision to retain six interpretable applicant segments for profiling and targeting.</p></div>
          <div class="dendrogram" aria-label="Simplified hierarchical clustering dendrogram"><div class="leaf-row"><span>A</span><span>B</span><span>C</span><span>D</span><span>E</span><span>F</span></div><div class="merge-row merge-one"><i></i><i></i><i></i></div><div class="merge-row merge-two"><i></i><i></i></div><div class="merge-row merge-three"><i></i></div><p data-editable>Merge distance increases upward</p></div>
        </div>
      `)
    },
    "24": {
      html: slide("Discriminant and Classification Analyses: Method Intuition", `
        <div class="classification-intuition-layout">
          <div class="theory-copy classification-explanation">
            <h2 data-editable>Classification learns how to recognize the segments</h2>
            <p data-editable>Cluster analysis has already assigned the surveyed applicants to segments. Discriminant analysis now asks which observable descriptors best separate those known groups.</p>
            <p class="concept-key" data-editable>The method does not create new segments. It learns a practical assignment rule from applicants whose segment membership is already known.</p>
          </div>
          <div class="classification-plain-steps">
            <section><strong data-editable>Learn from known members</strong><span data-editable>Use age, income, career stage, distance, family status, and other descriptors from applicants already assigned by clustering.</span></section>
            <section><strong data-editable>Build a segment score</strong><span data-editable>The model gives more weight to descriptors that clearly distinguish one segment from the others.</span></section>
            <section><strong data-editable>Classify and check</strong><span data-editable>Assign a new prospect to the segment with the strongest score, then test accuracy on applicants the model did not use for estimation.</span></section>
          </div>
          <div class="method-equation single-line-equation classification-equation" data-editable>Score<sub>g</sub> = a<sub>g</sub> + b<sub>g1</sub>x<sub>1</sub> + … + b<sub>gp</sub>x<sub>p</sub></div>
        </div>
      `, "method-theory-slide classification-intuition-slide")
    },
    "25": {
      html: slide("MBA Case: Discriminant and Classification Analyses", `
        <div class="classification-layout">
          <div><h2 data-editable>What the analysis does</h2><ul class="slide-list" data-editable><li>Identifies the descriptors that best distinguish the segments.</li><li>Builds a rule that assigns a new applicant to a segment.</li><li>Tests how accurately the rule reproduces the cluster solution.</li></ul></div>
          <div class="classification-example"><h2 data-editable>Example output</h2><div><span data-editable>Applicant profile</span><strong>→</strong><span data-editable>Predicted segment</span></div><p data-editable>Career stage, location, income, and program interest may help classify a new respondent as “Mobility Minded” or “New Career Networker.”</p></div>
        </div>
      `)
    },
    "26": {
      html: slide("MBA Case: What Each Method Delivers", `
        <div class="method-deliverables">
          <section><span>1</span><h2 data-editable>Factor analysis</h2><p data-editable><strong>Question:</strong> What underlying benefits explain the survey ratings?</p><p data-editable><strong>Output:</strong> Interpretable factor scores for each applicant.</p></section>
          <section><span>2</span><h2 data-editable>Cluster analysis</h2><p data-editable><strong>Question:</strong> Which applicants share similar benefit profiles?</p><p data-editable><strong>Output:</strong> Distinct segments and their average need profiles.</p></section>
          <section><span>3</span><h2 data-editable>Classification</h2><p data-editable><strong>Question:</strong> How can the program identify a segment member later?</p><p data-editable><strong>Output:</strong> A validated assignment rule based on observable descriptors.</p></section>
        </div>
      `, "method-deliverables-slide")
    },
    "27": {
      html: slide("From Segmentation to Targeting", `
        <div class="segmentation-complete">
          <div><h2 data-editable>A usable segmentation has four properties</h2><ul class="slide-list" data-editable><li>Members within a segment share a clear benefit profile.</li><li>Segments differ enough to justify different marketing actions.</li><li>The firm can identify or reach the members of each segment.</li><li>Segment size and value can support a business decision.</li></ul></div>
          <div class="next-decision" data-editable><strong>Next decision</strong><span>Which segments should the MBA program prioritize?</span></div>
        </div>
      `, "segmentation-targeting-transition")
    },
    "28": {
      html: slide("Targeting", `
        <p class="lead targeting-definition" data-editable>Targeting selects the segment or segments that the firm will serve. The decision should combine the value of the opportunity with the firm’s ability to win.</p>
        <div class="two-axis targeting-concept">
          <section><h2 data-editable>Market attractiveness</h2><ul class="slide-list" data-editable><li>How large is the segment, and is it growing?</li><li>Will members pay enough to support the offering?</li><li>Can the firm reach and retain these customers?</li></ul></section>
          <section><h2 data-editable>Competitive strength</h2><ul class="slide-list" data-editable><li>Does the firm meet this segment’s needs better than alternatives?</li><li>Do its brand, capabilities, and channels fit the segment?</li><li>Can competitors copy the advantage easily?</li></ul></section>
        </div>
        <p class="targeting-principle" data-editable>A useful target has clear needs, meaningful economic value, and a strong fit with what the firm can credibly deliver.</p>
      `, "targeting-concept-slide")
    },
    "29": {
      html: slide("MBA Case: Moving from Segments to Targets", `
        <div class="segment-summary"><p class="lead" data-editable>The analysis produced six applicant groups with distinct benefit priorities. The program now evaluates which groups are attractive and where it has enough competitive strength to earn enrollment.</p><div class="segment-labels"><span>Young Status Seekers</span><span>New Career Networkers</span><span>Relevant Learners</span><span>Mobility Minded</span><span>Easy Promotions</span><span>Cheap and Easy</span></div></div>
      `)
    },
    "30": {
      html: slide("MBA Case: Targeting Criteria", `
        <div class="two-axis">
          <section><h2 data-editable>Market attractiveness</h2><ul class="slide-list" data-editable><li>Relative segment size and expected growth</li><li>Willingness to pay and sensitivity to affordability</li><li>Timing and seriousness of degree interest</li></ul></section>
          <section><h2 data-editable>Competitive strength</h2><ul class="slide-list" data-editable><li>Self-reported likelihood of attending the program</li><li>Needs the program meets better than competing schools</li><li>Fit between segment preferences and current offerings</li></ul></section>
        </div>
      `)
    },
    "31": {
      html: slide("MBA Targeting: GE Matrix", `
        <div class="ge-native" aria-label="Editable GE matrix for MBA applicant segments">
          <span class="axis-y" data-editable>Market attractiveness</span><span class="axis-x" data-editable>Competitive strength</span>
          <i class="grid-v one"></i><i class="grid-v two"></i><i class="grid-h one"></i><i class="grid-h two"></i>
          <div class="ge-bubble mobility" data-editable>Mobility<br>Minded</div><div class="ge-bubble easy" data-editable>Easy<br>Promotions</div><div class="ge-bubble network" data-editable>New Career<br>Networkers</div><div class="ge-bubble relevant" data-editable>Relevant<br>Learners</div><div class="ge-bubble status" data-editable>Young Status<br>Seekers</div><div class="ge-bubble cheap" data-editable>Cheap and<br>Easy</div>
        </div>
        ${source("Bubble size represents relative segment size. The upper-right region combines high attractiveness with high competitive strength.")}
      `, "chart-slide compact-title-slide")
    },
    "32": {
      html: slide("MBA Case: Target Segment Decision", `
        <div class="decision-layout"><div class="target-bubble" data-editable>Selected for the positioning exercise<br><strong>Easy Promotions</strong></div><div><ul class="slide-list" data-editable><li>This is one of the two largest segments and has a clear, interpretable need profile.</li><li>Its members want a convenient and affordable MBA that supports promotion within their current firm.</li><li>The program can evaluate concrete changes in scheduling, price, location, and employer relevance.</li></ul><p class="discussion-question" data-editable>What would justify prioritizing “Mobility Minded” instead? Targeting requires a managerial choice, not only a mechanical reading of the matrix.</p></div></div>
      `)
    },
    "33": {
      html: slide("Positioning", `
        <div class="positioning-concept-layout">
          <div class="positioning-definition"><h2 data-editable>A relative place in the customer’s mind</h2><p data-editable>Positioning describes how the target segment understands an offering compared with alternatives. A strong position connects a benefit the segment values with a reason to believe the firm can deliver it.</p><p data-editable>Managers can change the actual offering through product, service, price, and channel decisions. They can change perceptions through communication and customer experience. The two must remain consistent.</p></div>
          <div class="positioning-questions-simple"><h2 data-editable>A positioning decision answers</h2><ol data-editable><li><strong>Who</strong> is the target customer?</li><li><strong>What</strong> need should the offering own?</li><li><strong>Why</strong> should the customer believe this program is the better choice?</li></ol></div>
        </div>
        <p class="positioning-template" data-editable>For [target customer], our offering provides [valued benefit] because [credible evidence].</p>
      `, "positioning-concept-slide")
    },
    "34": {
      html: slide("MBA Case: Positioning Question", `
        <div class="positioning-brief"><h2 data-editable>Target customer</h2><p data-editable>Experienced working professionals who want a convenient and affordable MBA to support promotion within their current firm.</p><h2 data-editable>Competitive frame</h2><p data-editable>Regional MBA programs that differ in convenience, affordability, prestige, and career support.</p><h2 data-editable>Decision</h2><p data-editable>How do these applicants perceive the program and its competitors on convenience and affordability?</p></div>
      `)
    },
    "35": {
      html: slide("MBA Positioning: Perceptual Map", `
        <div class="perceptual-native" aria-label="Editable perceptual map for the MBA case">
          <span class="perceptual-y" data-editable>More convenient</span><span class="perceptual-y low" data-editable>Less convenient</span><span class="perceptual-x" data-editable>More affordable</span><span class="perceptual-x low" data-editable>Less affordable</span>
          <i class="cross vertical"></i><i class="cross horizontal"></i>
          <span class="school uw" data-editable>UW Seattle</span><span class="school bothell" data-editable>UW Bothell</span><span class="school seattleu" data-editable>Seattle U</span><span class="school oregon" data-editable>U Oregon</span><span class="school cornell" data-editable>Cornell</span><span class="school berkeley" data-editable>Berkeley</span>
          <div class="ideal-segment" data-editable>Easy Promotions<br>ideal point</div><div class="position-vector">↗</div>
        </div>
        ${source("The map compares the program and competitors on convenience and affordability, two dimensions emphasized by Easy Promotions applicants.")}
      `, "chart-slide compact-title-slide")
    },
    "36": {
      html: slide("MBA Case: Interpreting the Positioning Gap", `
        <div class="gap-layout"><div class="map-point current" data-editable>Current program perception</div><div class="gap-arrow">→</div><div class="map-point desired" data-editable>Target segment preference</div><ul class="slide-list" data-editable><li>The distance between the program and the target’s ideal point identifies a positioning gap.</li><li>Communication can change perceptions only when the program has credible evidence.</li><li>Large operational gaps require changes to the offering, not only a new message.</li></ul></div>
      `, "compact-title-slide")
    },
    "37": {
      html: slide("Positioning Statement", `
        <div class="position-statement" data-editable>For experienced professionals who want promotion without disrupting work, the MBA program offers a convenient and affordable path to advancement because its schedule, local access, and employer-relevant curriculum support working students.</div>
        <div class="statement-check"><span data-editable><strong>Target:</strong> experienced working professionals</span><span data-editable><strong>Need:</strong> promotion with convenience and affordability</span><span data-editable><strong>Reason to believe:</strong> schedule, access, and employer-relevant curriculum</span></div>
      `)
    },
    "38": {
      html: slide("MBA Case: From Positioning to Action", `
        <div class="action-flow"><section><h2 data-editable>Offering</h2><p data-editable>Flexible scheduling, transparent total cost, local access, and employer-relevant coursework must support the promise.</p></section><section><h2 data-editable>Message</h2><p data-editable>Show how working students can earn the degree while preparing for promotion at their current firm.</p></section><section><h2 data-editable>Channels</h2><p data-editable>Reach experienced professionals through employers, alumni, and targeted digital media.</p></section></div>
      `)
    },
    "39": {
      html: slide("MBA Case: Complete STP Process", `
        <div class="mba-stp-summary">
          <section><span>1</span><h2 data-editable>Segmenting</h2><p data-editable>Twelve survey questions were condensed into five need factors. Applicants with similar factor profiles formed six segments.</p><strong data-editable>Output: interpretable applicant groups</strong></section>
          <section><span>2</span><h2 data-editable>Targeting</h2><p data-editable>The GE matrix compared market attractiveness with the program’s competitive strength in each segment.</p><strong data-editable>Exercise decision: select Easy Promotions</strong></section>
          <section><span>3</span><h2 data-editable>Positioning</h2><p data-editable>The program translated the target’s needs into a promise of promotion, convenience, and affordability.</p><strong data-editable>Result: a focused value proposition</strong></section>
        </div>
      `, "mba-stp-summary-slide compact-title-slide")
    },
    "40": {
      html: slide("Exercise: Describe Your Firm’s STP", `
        <div class="stp-exercise"><section><h2 data-editable>Segmenting</h2><p data-editable>How is the market divided?</p><div></div><div></div></section><section><h2 data-editable>Targeting</h2><p data-editable>Which segment receives priority?</p><div></div><div></div></section><section><h2 data-editable>Positioning</h2><p data-editable>What distinct value should the target perceive?</p><div></div><div></div></section></div>
      `)
    },
    "45": { pageNumber: "41" },
    "46": {
      pageNumber: "42",
      html: slide("What Does It Mean for a Firm to Be Customer Centric?", `
        <p class="lead" data-editable>A customer-centric firm places customer needs at the center of its vision, decisions, processes, structure, culture, and metrics.</p>
        <div class="iop-grid"><section><h2 data-editable>Input</h2><p data-editable>Use customer needs and feedback to guide decisions.</p><ul class="slide-list" data-editable><li>Customer and channel councils</li><li>Managers listening in the call center</li></ul></section><section><h2 data-editable>Output</h2><p data-editable>Measure success from the customer’s perspective.</p><ul class="slide-list" data-editable><li>Customer satisfaction</li><li>Loyalty and Net Promoter Score</li></ul></section><section><h2 data-editable>Processes</h2><p data-editable>Link customer information to operating systems.</p><ul class="slide-list" data-editable><li>Compensation</li><li>Scorecards and dashboards</li></ul></section></div>
      `)
    },
    "47": { pageNumber: "43" },
    "48": { pageNumber: "44" },
    "49": { pageNumber: "45" },
    "50": { pageNumber: "46" },
    "51": { pageNumber: "47" },
    "52": {
      pageNumber: "48",
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
