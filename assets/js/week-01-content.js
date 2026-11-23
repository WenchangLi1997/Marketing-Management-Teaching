(() => {
  "use strict";

  const slide = (section, title, subtitle, body, className = "") => ({
    section,
    title,
    subtitle,
    body,
    className
  });

  const fourPrinciples = `
    <div class="principle-grid four-up">
      <section><b>01</b><h2>ALL CUSTOMERS DIFFER</h2><p>Sports-car driver vs. pilot</p></section>
      <section><b>02</b><h2>ALL CUSTOMERS CHANGE</h2><p>New generations, evolving powertrains</p></section>
      <section><b>03</b><h2>ALL COMPETITORS REACT</h2><p>Luxury rivals and new electric challengers</p></section>
      <section><b>04</b><h2>ALL RESOURCES ARE LIMITED</h2><p>Capacity, design, R&amp;D, and attention</p></section>
    </div>`;

  window.week1Slides = [
    slide(
      "WELCOME",
      "An Evidence-Based Approach<br>to Better Marketing Decisions",
      "PROBLEM-DRIVEN. &nbsp;&nbsp; FRAMEWORK-GUIDED. &nbsp;&nbsp; ANALYTICS-INFORMED.",
      `<div class="cover-content">
        <div class="cover-meta">
          <p>Yixing Chen &nbsp;|&nbsp; Associate Professor of Marketing</p>
        </div>
        <img src="../../assets/images/week-01/ferrari-comparison.png" alt="Two Ferrari models shown side by side">
      </div>`,
      "cover-slide"
    ),
    slide(
      "TODAY · 170-MINUTE DEFAULT, FLEXIBLE",
      "First: experience marketing. Then: learn how we will work.",
      "An opening case, your first course framework, syllabus discussion, and optional data warm-up.",
      `<div class="session-plan">
        <section><time>00–90</time><div><h2>FERRARI BOARDROOM</h2><p>Real dilemma · teams · evidence · framework</p></div></section>
        <section><time>90–110</time><div><h2>BREAK</h2><p>20 minutes</p></div></section>
        <section><time>110–150</time><div><h2>OUR COURSE</h2><p>Syllabus · expectations · how to succeed</p></div></section>
        <section><time>150–170</time><div><h2>OPTIONAL SPSS</h2><p>A small survey, a business question, a first analytical result</p></div></section>
      </div><p class="bottom-note">If discussion runs long, SPSS is a bonus. We can finish before the three-hour limit.</p>`
    ),
    slide(
      "YOU ARE ON THE BOARD",
      "Would Ferrari be more valuable if it sold twice as many cars?",
      "YES or NO? There is no perfect answer without specifying whose value, and over what horizon.",
      `<div class="decision-pair">
        <section class="yes"><h2>YES</h2><p>More customers. More sales. Bigger reach.</p></section>
        <section class="no"><h2>NO</h2><p>Scarcity. Exclusivity. Greater willingness to pay.</p></section>
      </div><p class="discussion-line">30 seconds: vote. 30 seconds: tell a neighbor why.</p>`
    ),
    slide(
      "THE 2025 DECISION",
      "Ferrari wants growth. But not growth at any cost.",
      "It calls its approach controlled growth—and faces three simultaneous opportunities.",
      `<div class="numbered-grid three-up">
        <section><b>01</b><h2>NEW CLIENTS</h2><p>Younger buyers, growth markets</p><em>Whom do we serve?</em></section>
        <section><b>02</b><h2>NEW OFFERINGS</h2><p>New models, hybrid and electric cars</p><em>What should we build?</em></section>
        <section><b>03</b><h2>OLD ADVANTAGE</h2><p>Heritage, scarcity, existing owners</p><em>What must not be lost?</em></section>
      </div>`
    ),
    slide(
      "A COUNTERINTUITIVE MARKETING MOVE",
      "Sometimes Ferrari tells eager buyers “no.”",
      "For a highly limited model, the company decides who gets an invitation.",
      `<div class="metric-grid three-up">
        <section><strong>200</strong><h2>invitations</h2><p>Sent to selected clients</p></section>
        <section><strong>199</strong><h2>said yes</h2><p>For a car not yet in production</p></section>
        <section><strong>81%</strong><h2>to existing clients</h2><p>Share of 2024 new-car sales</p></section>
      </div><p class="discussion-line">DISCUSS: Is Ferrari selling a car—or managing membership in a desirable club?</p>`
    ),
    slide(
      "WHO ARE THE CUSTOMERS?",
      "Two people can both want a Ferrari—and want very different things.",
      "Ferrari describes distinct customer archetypes; these are not yet statistically estimated clusters.",
      `<div class="archetype-grid">
        <section><h2>THE SPORTS-CAR DRIVER</h2><p>Elegant design. Versatility. Enjoyable long drives. Daily usability.</p></section>
        <section><h2>THE PILOT</h2><p>Extreme performance. Track driving. Excitement on challenging roads.</p></section>
      </div><p class="discussion-line accent">Would the same electric Ferrari appeal equally to both?</p>`
    ),
    slide(
      "PRODUCTS ARE STRATEGIC CHOICES",
      "“Different Ferrari for different Ferraristi.”",
      "A portfolio can serve different needs without treating every buyer identically.",
      `<figure class="portfolio-figure"><img src="../../assets/images/week-01/ferrari-portfolio.png" alt="Ferrari range models, special series, Icona, and supercar portfolio"></figure>
       <p class="business-question"><strong>BUSINESS QUESTION</strong> If capacity is limited, what mix of models should Ferrari develop?</p>`,
      "portfolio-slide"
    ),
    slide(
      "BOARDROOM ROUND 1",
      "You have 100 strategic points. Where would you invest?",
      "Allocate across four opportunities. You cannot simply choose everything.",
      `<div class="option-grid four-up">
        <section><b>A</b><h2>DEEPEN LOYALTY</h2><p>Premium experiences for existing collectors</p></section>
        <section><b>B</b><h2>REACH NEW BUYERS</h2><p>Younger and new-market clients</p></section>
        <section><b>C</b><h2>ACCELERATE INNOVATION</h2><p>Hybrid / EV product development</p></section>
        <section><b>D</b><h2>PERSONALIZE &amp; MIX</h2><p>More targeted models and customization</p></section>
      </div><p class="constraint-line">Constraint: your allocations must add to 100. Be ready to explain what you sacrifice.</p>`
    ),
    slide(
      "TEAM HUDDLE · 8 MINUTES",
      "Build one recommendation—not four preferences.",
      "One speaker, one counterargument, one missing fact.",
      `<div class="role-list">
        <section><strong>CUSTOMER LEAD</strong><span>Which buyer segment gains value?</span></section>
        <section><strong>BRAND LEAD</strong><span>What happens to exclusivity?</span></section>
        <section><strong>INNOVATION LEAD</strong><span>How fast could preferences change?</span></section>
        <section><strong>FINANCE LEAD</strong><span>What makes this economically attractive?</span></section>
      </div><p class="recommendation-strip">“We recommend ___, because ___. Our biggest risk is ___.”</p>`
    ),
    slide(
      "LIVE DEBATE",
      "Your classmates are the board. Convince them.",
      "60 seconds per team, then one respectful challenge from a rival group.",
      `<div class="debate-grid">
        <section><h2>THE ADVOCATE</h2><p>What should Ferrari do, and why would it create value?</p></section>
        <section><h2>THE CHALLENGER</h2><p>What assumption might make the recommendation fail?</p></section>
      </div><p class="discussion-line">The goal is not to win. It is to make your reasoning stronger.</p>`
    ),
    slide(
      "EVIDENCE REVEAL · EXHIBIT 1",
      "Ferrari grew revenue faster than unit shipments.",
      "2015 = 100 · Both series derived from the original “F financial summary” exhibit.",
      `<div class="index-chart" aria-label="Indexed Ferrari revenue and shipment growth from 2015 to 2024">
        <svg viewBox="0 0 700 230" role="img" aria-label="Revenue index rises to 228 while shipment index rises to 179">
          <g class="chart-grid"><line x1="50" y1="190" x2="650" y2="190"/><line x1="50" y1="130" x2="650" y2="130"/><line x1="50" y1="70" x2="650" y2="70"/></g>
          <g class="chart-y"><text x="36" y="195">100</text><text x="36" y="151">150</text><text x="36" y="106">200</text><text x="36" y="70">240</text></g>
          <polyline class="revenue-line" points="50,190 150,180 250,160 350,145 450,105 550,76 650,48"/>
          <polyline class="shipment-line" points="50,190 150,182 250,165 350,151 450,138 550,121 650,104"/>
          <g class="chart-years"><text x="50" y="218">2015</text><text x="180" y="218">2017</text><text x="310" y="218">2019</text><text x="440" y="218">2021</text><text x="570" y="218">2023</text><text x="640" y="218">2024</text></g>
        </svg>
        <div class="chart-endpoints"><section><strong>228</strong><span>Revenue index, 2024</span></section><section><strong>179</strong><span>Shipment index, 2024</span></section></div>
      </div><p class="discussion-line">What could explain the gap? What would you need to know?</p>`,
      "chart-slide"
    ),
    slide(
      "EVIDENCE REVEAL · EXHIBIT 2",
      "Luxury buyers consider more than price—and not all value the same things.",
      "Top purchase criteria in a broader luxury-car survey, NOT Ferrari-specific research.",
      `<div class="bar-chart">
        <section><span>Driving performance</span><i style="--value:52%"></i><strong>52%</strong></section>
        <section><span>Interior design &amp; materials</span><i style="--value:48%"></i><strong>48%</strong></section>
        <section><span>Exterior style</span><i style="--value:47%"></i><strong>47%</strong></section>
        <section><span>Brand</span><i style="--value:42%"></i><strong>42%</strong></section>
        <section><span>Sustainable powertrain</span><i style="--value:42%"></i><strong>42%</strong></section>
        <section><span>Engine sound / feel</span><i style="--value:39%"></i><strong>39%</strong></section>
      </div><p class="warning-line">What this DOES NOT tell us: willingness to pay, Ferrari-specific preferences, or what causes a purchase.</p>`
    ),
    slide(
      "ANALYTICS-INFORMED ≠ ANALYTICS-DETERMINED",
      "What can the evidence really support?",
      "Learn to distinguish what we observe from what we still need to decide.",
      `<div class="evidence-list">
        <section><strong>OBSERVED</strong><p>81% of new Ferrari cars in 2024 went to existing clients.</p></section>
        <section><strong>NOT ESTABLISHED</strong><p>Retention programs caused Ferrari’s financial growth.</p></section>
        <section><strong>NEXT EVIDENCE</strong><p>Who is likely to buy next, what do they value, and how profitable are the options?</p></section>
      </div>`
    ),
    slide(
      "FRAMEWORK-GUIDED",
      "You have already encountered four timeless marketing problems.",
      "The Four First Principles from Palmatier &amp; Sridhar organize the complexity.",
      fourPrinciples
    ),
    slide(
      "OUR COURSE PHILOSOPHY",
      "One way of thinking for every marketing decision.",
      "This will recur in cases, team projects, class discussions, and exams.",
      `<div class="philosophy-grid three-up">
        <section><b>01</b><h2>PROBLEM-DRIVEN</h2><p>What decision must we make?</p><em>Ferrari: where to grow?</em></section>
        <section><b>02</b><h2>FRAMEWORK-GUIDED</h2><p>Which structure helps?</p><em>Customers, dynamics, rivalry, resources</em></section>
        <section><b>03</b><h2>ANALYTICS-INFORMED</h2><p>What does credible evidence say?</p><em>Sales trends, buyer needs, profitability</em></section>
      </div><p class="output-strip"><strong>OUTPUT</strong> A clear, evidence-supported recommendation that acknowledges trade-offs.</p>`
    ),
    slide(
      "BOARDROOM ROUND 2",
      "Would you change your recommendation now?",
      "One-minute executive memo. You can also keep your original position—but justify it better.",
      `<div class="memo-box"><p>I recommend __________ for __________ because __________.</p><p>Before committing, I would need to learn __________.</p></div>
       <p class="warning-line">Two volunteers: one who changed their mind, and one who did not.</p>`
    ),
    slide(
      "BREAK",
      "20-MINUTE BREAK",
      "Next: how the course works, what is expected, and how to succeed.",
      "",
      "section-slide"
    ),
    slide(
      "SYLLABUS",
      "How we will learn marketing",
      "The syllabus is a learning contract—not a list of rules.",
      "",
      "section-slide"
    ),
    slide(
      "WHAT MARKETING MEANS HERE",
      "Marketing is about creating and capturing value through better choices.",
      "Not just advertisements. Not just a collection of formulas.",
      `<div class="meaning-grid four-up">
        <section><b>01</b><h2>CUSTOMERS</h2><p>Whose needs will we serve?</p></section>
        <section><b>02</b><h2>VALUE</h2><p>What difference will we create?</p></section>
        <section><b>03</b><h2>COMPETITION</h2><p>Why will people choose us?</p></section>
        <section><b>04</b><h2>RESOURCES</h2><p>Where should we invest?</p></section>
      </div><p class="bottom-note accent">This same logic applies to luxury cars, e-commerce, healthcare, B2B markets—and more.</p>`
    ),
    slide(
      "WHAT YOU WILL BE ABLE TO DO",
      "Four things you should feel more confident doing by the end.",
      "",
      `<div class="capability-list">
        <section><strong>DEFINE</strong><p>Translate vague business situations into answerable marketing decisions</p></section>
        <section><strong>STRUCTURE</strong><p>Apply the Four Principles and associated strategic frameworks</p></section>
        <section><strong>INTERPRET</strong><p>Use accessible analysis and judge what evidence can support</p></section>
        <section><strong>RECOMMEND</strong><p>Communicate decisions, assumptions, trade-offs, and potential outcomes</p></section>
      </div>`
    ),
    slide(
      "TEN SESSIONS · FOUR PRINCIPLES",
      "One major managerial problem and one accessible tool at a time.",
      "Week numbers follow the provisional January–March 2027 10-session plan.",
      `<div class="schedule-list">
        <section><b>1</b><strong>FOUNDATIONS</strong><span>Ferrari, frameworks, evidence, SPSS</span></section>
        <section><b>2–3</b><strong>FP1 · CUSTOMERS DIFFER</strong><span>STP + cluster analysis</span></section>
        <section><b>4–5</b><strong>FP2 · CUSTOMERS CHANGE</strong><span>Acquisition / expansion / retention + cohorts</span></section>
        <section><b>6–7</b><strong>FP3 · COMPETITORS REACT</strong><span>Competitive advantage + perceptual mapping</span></section>
        <section><b>8–9</b><strong>FP4 · RESOURCES LIMITED</strong><span>Allocation decisions + linear regression</span></section>
        <section><b>10</b><strong>EVALUATE AND REFLECT</strong><span>A/B tests + marketing and society</span></section>
      </div>`
    ),
    slide(
      "WHAT A TYPICAL CLASS FEELS LIKE",
      "A case is an invitation to think—not an exercise in guessing the professor’s answer.",
      "",
      `<div class="class-flow three-up">
        <section><h2>BEFORE</h2><p>Read the case. Form a tentative position. Bring one question.</p></section>
        <section><h2>DURING</h2><p>Debate. Challenge assumptions respectfully. Look for evidence.</p></section>
        <section><h2>AFTER</h2><p>Refine your recommendation. Explain the trade-offs and uncertainties.</p></section>
      </div><p class="discussion-line">Changing your mind because of better reasoning is a success.</p>`
    ),
    slide(
      "ASSESSMENT PHILOSOPHY",
      "We will reward evidence-supported reasoning—not just technical outputs.",
      "Assessment categories are provisional until the final 2027 syllabus is approved.",
      `<div class="assessment-list">
        <section><strong>GROUP CASE WORK</strong><span>Structured managerial recommendations</span></section>
        <section><strong>MIDTERM</strong><span>Frameworks + interpretation of evidence</span></section>
        <section><strong>FINAL EXAM</strong><span>Cumulative marketing decision-making</span></section>
        <section><strong>PARTICIPATION</strong><span>Thoughtful preparation and constructive discussion</span></section>
      </div><p class="pending-strip">FINAL WEIGHTS / DEADLINES: TO CONFIRM</p>`
    ),
    slide(
      "THE CLASSROOM CONTRACT",
      "Disagree openly. Argue precisely. Respect people.",
      "",
      `<div class="contract-list">
        <section><b>1</b><strong>Come with a position</strong><span>It can change during the discussion.</span></section>
        <section><b>2</b><strong>Support claims with evidence</strong><span>Distinguish a number from an interpretation.</span></section>
        <section><b>3</b><strong>Help others think</strong><span>Ask clarifying questions; build on ideas.</span></section>
        <section><b>4</b><strong>Be willing to revise</strong><span>A good leader updates beliefs when learning.</span></section>
      </div>`
    ),
    slide(
      "SPSS AND AI",
      "Tools are useful only when they help answer the managerial question.",
      "",
      `<div class="tool-grid">
        <section><h2>SPSS</h2><p>Beginner-friendly, guided analyses. No coding prerequisite.</p></section>
        <section><h2>AI / ML</h2><p>See what new tools enable; challenge their reliability and decision value.</p></section>
      </div><p class="discussion-line">Always ask: Does this analysis change what the manager should do?</p>`
    ),
    slide(
      "BEFORE WEEK 2",
      "What students need to know before they leave today.",
      "Please replace the bracketed items with confirmed administrative details.",
      `<div class="admin-list">
        <section><strong>READINGS</strong><span>Case and textbook material posted in the LMS</span></section>
        <section><strong>TEAMS</strong><span>[Team formation and case submission instructions]</span></section>
        <section><strong>SOFTWARE</strong><span>[SMU SPSS access / installation details]</span></section>
        <section><strong>ASSESSMENTS</strong><span>[Final grading weights, deadlines, exam policies]</span></section>
        <section><strong>COMMUNICATION</strong><span>[LMS, office hours, instructor contact]</span></section>
      </div><p class="warning-line">Do not distribute as a final syllabus slide until placeholders are confirmed.</p>`
    ),
    slide(
      "OPTIONAL · 20-MINUTE LAB",
      "SPSS: your first evidence-based marketing question.",
      "If syllabus questions take longer, end here and use this as Week 2 prework.",
      `<div class="lab-question"><p>A B2B supplier has 575 customer survey responses.</p><strong>Which experience dimension should management investigate first?</strong></div>`
    ),
    slide(
      "SPSS · STEP 1",
      "Import Excel. First, understand what you are opening.",
      "File → Import Data → Excel · Select the Data worksheet.",
      `<div class="spss-import-layout">
        <ol>
          <li><span>1</span>Choose the survey workbook</li>
          <li><span>2</span>Select the “Data” worksheet</li>
          <li><span>3</span>Read variable names from the first row</li>
          <li><span>4</span>Click OK; inspect Data View</li>
        </ol>
        <figure><img src="../../assets/images/week-01/spss-import.png" alt="SPSS Read Excel File dialog with variable names highlighted"><figcaption>Screenshot: your original MBA SPSS demonstration; menu layout may vary.</figcaption></figure>
      </div>`
    ),
    slide(
      "SPSS · STEP 2",
      "Run descriptive statistics. What stands out?",
      "Analyze → Descriptive Statistics → Descriptives",
      `<div class="score-bars">
        <section><span>Product/service quality</span><i><b style="--score:75.7%"></b></i><strong>5.30 / 7</strong></section>
        <section><span>Sales/bidding process</span><i><b style="--score:74.9%"></b></i><strong>5.24 / 7</strong></section>
        <section class="lowest"><span>Price/billing</span><i><b style="--score:70.4%"></b></i><strong>4.93 / 7</strong></section>
      </div><p class="discussion-line">Does the lowest score automatically imply “cut prices”?</p>`
    ),
    slide(
      "SPSS · STEP 3",
      "Turning an output into a recommendation.",
      "",
      `<div class="recommendation-list">
        <section><strong>OBSERVATION</strong><p>Price/billing is rated lower than two other experience dimensions.</p></section>
        <section><strong>HYPOTHESIS</strong><p>Something in pricing, billing, or perceived fairness warrants investigation.</p></section>
        <section><strong>NEXT EVIDENCE</strong><p>Importance, segment differences, customer comments, economic impact.</p></section>
        <section><strong>ACTION</strong><p>Investigate before choosing an intervention.</p></section>
      </div>`
    ),
    slide(
      "CLOSING",
      "Your job: better questions, stronger reasoning, clearer decisions.",
      "PROBLEM-DRIVEN. &nbsp;&nbsp; FRAMEWORK-GUIDED. &nbsp;&nbsp; ANALYTICS-INFORMED.",
      `<p class="closing-next">See you in FP1: All Customers Differ.</p>`,
      "closing-slide"
    )
  ];
})();
