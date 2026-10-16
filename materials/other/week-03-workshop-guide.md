# Week 3 Workshop Guide

## Part A: SPSS clustering

Files:

- `materials/data/week-03/wholesale_customers.csv`
- `materials/code/week-03-clustering.sps`

### Setup

SPSS resolves relative file paths from its current working directory. Either copy the CSV into the working directory used by SPSS or replace the `FILE=` value in the syntax with the complete path to the CSV.

### Tasks

1. Inspect the spending distributions and identify skew.
2. Log-transform and standardize the six spending variables.
3. Use hierarchical clustering to compare plausible values of *k*.
4. Run three-cluster and four-cluster k-means solutions.
5. Compare cluster size, interpretability, and stability.
6. Profile the selected solution using original spending variables, channel, and region.
7. Give every cluster a descriptive working name.

### Questions

- Which preprocessing choice has the largest effect on the solution?
- What evidence supports your chosen value of *k*?
- Which cluster should the distributor prioritize?
- What marketing or service decision should change for that cluster?

## Part B: Embedding-based segmentation

Files:

- `materials/data/week-03/customer_feedback.csv`
- `materials/code/week-03-embedding-segmentation.py`

### Setup

```bash
pip install pandas numpy scikit-learn sentence-transformers
python materials/code/week-03-embedding-segmentation.py
```

The first run downloads `sentence-transformers/all-MiniLM-L6-v2`. An instructor can select another approved model by setting the `EMBEDDING_MODEL` environment variable.

### Tasks

1. Compare silhouette scores across candidate values of *k*.
2. Read at least five comments from every cluster.
3. Decide whether each cluster represents a need, sentiment, context, or writing pattern.
4. Name clusters only after reading the original comments.
5. Propose one action for a priority cluster.
6. Identify one privacy, validity, or implementation risk.

## Submission

Submit a two-page memo containing:

- the selected number of clusters for each dataset;
- a short profile of every segment;
- one recommended target and marketing action;
- the evidence supporting the recommendation;
- one limitation for each method.
