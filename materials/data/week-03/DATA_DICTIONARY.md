# UrbanCart customer segmentation workshop data

`customer_segmentation_workshop.csv` is a synthetic teaching dataset. It contains 320 fictional customers and no personal or real customer information.

## Business context

UrbanCart is an omnichannel retailer redesigning its loyalty program. Management wants to understand the needs that organize customer preferences, identify actionable customer segments, and develop a simple method for assigning new customers to those segments.

## Variables

| Variable | Description |
| --- | --- |
| `customer_id` | Synthetic customer identifier |
| `age` | Age in years |
| `income_sgd` | Annual household income in Singapore dollars |
| `monthly_spend_sgd` | Average monthly spend in Singapore dollars |
| `purchase_frequency` | Average purchases per month |
| `digital_purchase_share` | Share of purchases made through digital channels, from 0 to 1 |
| `discount_purchase_share` | Share of purchases made with a promotion or discount, from 0 to 1 |
| `tenure_months` | Months since joining the loyalty program |
| `satisfaction` | Overall satisfaction, measured from 1 to 7 |
| `convenience_1` to `convenience_3` | Convenience preference items, measured from 1 to 7 |
| `quality_1` to `quality_3` | Quality and service preference items, measured from 1 to 7 |
| `value_1` to `value_3` | Price and value preference items, measured from 1 to 7 |
| `innovation_1` to `innovation_3` | Innovation and discovery preference items, measured from 1 to 7 |
| `feedback_text` | Open-ended comment written for the teaching scenario |
| `segment_code` | Synthetic validation label from 1 to 4 |
| `segment_label` | Human-readable synthetic validation label |

## Intended classroom use

- Factor analysis uses the 12 preference items.
- Cluster analysis uses saved factor scores.
- Discriminant and classification analysis predicts `segment_code` from observable customer characteristics.
- The Python workshop compares structured clustering, text-embedding clustering, and a fused representation.

The validation labels make it possible to compare classroom solutions with the data-generating structure. Real segmentation projects normally do not contain a known correct segment label.
