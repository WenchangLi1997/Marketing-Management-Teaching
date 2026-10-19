# Week 3 Workshop Guide

All four analyses use `materials/data/week-03/customer_segmentation_workshop.csv`, a synthetic UrbanCart customer dataset. Read `DATA_DICTIONARY.md` before class.

## SPSS setup

SPSS resolves relative paths from its current working directory. Copy the CSV into the SPSS working directory or replace the `FILE=` value in each syntax file with the complete path.

Run the files in this order:

1. `week-03-factor-analysis.sps`
2. `week-03-cluster-analysis.sps`
3. `week-03-discriminant-classification.sps`

## Part A: Factor analysis

1. Inspect the 12 preference items and their correlation matrix.
2. Evaluate KMO and Bartlett's test.
3. Extract four factors with principal-axis factoring and Varimax rotation.
4. Name each factor from its strongest item loadings.
5. Save customer-level factor scores.

Questions:

- Which items have weak communalities or important cross-loadings?
- Do the four factors have a clear managerial interpretation?
- What information is lost when 12 items become four scores?

## Part B: Cluster analysis

1. Use Ward's method to inspect candidate cluster solutions.
2. Compare the agglomeration schedule and dendrogram.
3. Run the four-cluster k-means solution.
4. Profile the groups with customer behavior and economics.
5. Give each cluster an evidence-based working name.

Questions:

- Which evidence supports four clusters?
- Does any cluster mainly capture outliers?
- Which group deserves a different loyalty benefit?

## Part C: Discriminant and classification analyses

1. Predict the synthetic segment label from observable customer characteristics.
2. Interpret the canonical functions and structure correlations.
3. Compare original and leave-one-out cross-validated accuracy.
4. Read the confusion matrix by segment.

Questions:

- Which segments are easiest and hardest to classify?
- Which variables provide the strongest separation?
- What is the business cost of a wrong classification?

## Part D: Embedding-enhanced segmentation

Install the required Python packages once:

```bash
pip install pandas scikit-learn sentence-transformers
python materials/code/week-03-embedding-segmentation.py
```

The script compares structured-only, text-only, and fused representations. The first run downloads `sentence-transformers/all-MiniLM-L6-v2`.

Questions:

- Does customer language improve separation or agreement with the synthetic validation labels?
- Do the clusters reflect needs, sentiment, vocabulary, or writing style?
- Which comments best explain each fused cluster?
- Which privacy and governance checks are required before using real customer text?

## Workshop deliverable

Prepare a short segmentation memo containing:

- the interpretation of the four factors;
- the selected cluster solution and segment profiles;
- the cross-validated classification result;
- a comparison of structured and embedding-enhanced segmentation;
- one recommended target and one marketing action;
- one limitation that could change the recommendation.
