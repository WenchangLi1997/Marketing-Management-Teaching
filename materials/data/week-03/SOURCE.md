# Week 3 Data Notes

## `wholesale_customers.csv`

This is the **Wholesale Customers** dataset from the UCI Machine Learning Repository. It contains annual spending for 440 customers of a wholesale distributor across six product categories, plus channel and region fields. UCI lists clustering as an associated task and reports no missing values.

Citation:

> Cardoso, M. (2013). Wholesale customers [Dataset]. UCI Machine Learning Repository. https://doi.org/10.24432/C5030X

License: Creative Commons Attribution 4.0 International (CC BY 4.0).

Original page: https://archive.ics.uci.edu/dataset/292/wholesale+customers

For this workshop, use the six spending variables to create clusters. Treat `Channel` and `Region` as descriptive variables rather than inputs to the clustering model.

## `customer_feedback.csv`

This is a small synthetic dataset created for the embedding-based segmentation exercise. It contains 40 fictional comments about choosing a management education program.

The comments were designed to contain overlapping themes such as convenience, value, reputation, curriculum fit, and professional community. The dataset contains no real people or customer information and should not be used to evaluate model performance in production.
