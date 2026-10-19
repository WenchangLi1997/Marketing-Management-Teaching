import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const output = path.resolve(here, "../materials/data/week-03/customer_segmentation_workshop.csv");

let seed = 20261019;
function random() {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return seed / 4294967296;
}

function normal(mean = 0, sd = 1) {
  const u1 = Math.max(random(), 1e-9);
  const u2 = random();
  return mean + sd * Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
}

function clamp(value, low, high) {
  return Math.min(high, Math.max(low, value));
}

function int(value, low, high) {
  return Math.round(clamp(value, low, high));
}

function likert(latent) {
  return int(normal(latent, 0.48), 1, 7);
}

function pick(items) {
  return items[Math.floor(random() * items.length)];
}

const profiles = [
  {
    code: 1,
    label: "Convenience First",
    n: 82,
    latent: [5.9, 4.4, 4.0, 4.6],
    age: 35,
    income: 82000,
    spend: 205,
    frequency: 10,
    digital: 0.84,
    discount: 0.28,
    tenure: 30,
    satisfaction: 5.6,
    comments: [
      "Fast delivery and a simple mobile checkout matter most to me.",
      "I want reliable same-day pickup and fewer steps in the app.",
      "Convenient ordering saves time, especially during busy workweeks.",
      "Please keep stock information accurate and make returns easy online.",
      "I value speed, clear delivery windows, and one-click repeat orders.",
    ],
  },
  {
    code: 2,
    label: "Quality Loyalists",
    n: 80,
    latent: [4.5, 6.1, 3.7, 4.5],
    age: 44,
    income: 118000,
    spend: 330,
    frequency: 7,
    digital: 0.56,
    discount: 0.14,
    tenure: 48,
    satisfaction: 6.0,
    comments: [
      "I will pay more when product quality and service are consistently high.",
      "Durability, trustworthy brands, and knowledgeable staff keep me loyal.",
      "I prefer dependable products and responsive help after the purchase.",
      "Quality matters more than promotions, and I expect problems to be resolved well.",
      "I return because the products last and the service team knows the category.",
    ],
  },
  {
    code: 3,
    label: "Value Hunters",
    n: 82,
    latent: [4.3, 4.0, 6.2, 3.6],
    age: 39,
    income: 65000,
    spend: 155,
    frequency: 11,
    digital: 0.63,
    discount: 0.72,
    tenure: 26,
    satisfaction: 5.1,
    comments: [
      "I compare prices carefully and usually buy when there is a strong promotion.",
      "Clear savings and useful loyalty rewards matter more than premium extras.",
      "I want good everyday prices without having to search for complicated coupons.",
      "Bundle discounts and points help me stretch my monthly budget.",
      "I switch stores when another retailer offers the same product for less.",
    ],
  },
  {
    code: 4,
    label: "Innovation Explorers",
    n: 76,
    latent: [4.8, 4.9, 3.5, 6.2],
    age: 30,
    income: 96000,
    spend: 270,
    frequency: 8,
    digital: 0.91,
    discount: 0.20,
    tenure: 18,
    satisfaction: 5.5,
    comments: [
      "I like discovering new products and personalized recommendations in the app.",
      "Early access and smart product suggestions make shopping more interesting.",
      "I enjoy trying new features, digital services, and unusual product launches.",
      "Show me products that match my interests before they become mainstream.",
      "Personalized discovery and new technology are worth paying a little more for.",
    ],
  },
];

const headers = [
  "customer_id", "age", "income_sgd", "monthly_spend_sgd", "purchase_frequency",
  "digital_purchase_share", "discount_purchase_share", "tenure_months", "satisfaction",
  "convenience_1", "convenience_2", "convenience_3", "quality_1", "quality_2", "quality_3",
  "value_1", "value_2", "value_3", "innovation_1", "innovation_2", "innovation_3",
  "feedback_text", "segment_code", "segment_label",
];

const rows = [];
let id = 1001;
for (const profile of profiles) {
  for (let i = 0; i < profile.n; i += 1) {
    const [convenience, quality, value, innovation] = profile.latent.map((x) => normal(x, 0.42));
    rows.push([
      id++, int(normal(profile.age, 7.5), 19, 68),
      int(normal(profile.income, profile.income * 0.2), 28000, 220000),
      int(normal(profile.spend, profile.spend * 0.22), 45, 650),
      int(normal(profile.frequency, 2.1), 2, 18),
      clamp(normal(profile.digital, 0.09), 0.05, 0.99).toFixed(2),
      clamp(normal(profile.discount, 0.10), 0.01, 0.98).toFixed(2),
      int(normal(profile.tenure, 11), 3, 84), clamp(normal(profile.satisfaction, 0.65), 1, 7).toFixed(1),
      likert(convenience), likert(convenience), likert(convenience),
      likert(quality), likert(quality), likert(quality),
      likert(value), likert(value), likert(value),
      likert(innovation), likert(innovation), likert(innovation),
      pick(profile.comments), profile.code, profile.label,
    ]);
  }
}

for (let i = rows.length - 1; i > 0; i -= 1) {
  const j = Math.floor(random() * (i + 1));
  [rows[i], rows[j]] = [rows[j], rows[i]];
}

function csvCell(value) {
  const text = String(value);
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

const csv = [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\n") + "\n";
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, csv, "utf8");
console.log(`Wrote ${rows.length} rows to ${output}`);
