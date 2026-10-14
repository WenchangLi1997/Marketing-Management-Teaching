# Week 3: Clustering, Case Workshop, and AI Frontier

## Two analytical pathways

1. Cluster customers using numeric purchase variables in SPSS.
2. Embed customer language and cluster the resulting vectors in Python.

Both methods produce groups. Neither method decides whether the groups are strategically useful.

## Cluster analysis

Cluster analysis creates groups with small differences within each group and large differences between groups. Each row represents a customer, each selected column represents a segmentation variable, and the distance measure defines what “similar” means.

## Data preparation

- Use log transformations when spending distributions are highly skewed.
- Standardize variables before calculating distances.
- Inspect outliers and missing values.
- Document every variable included in the clustering step.

## Choosing the number of clusters

Use three forms of evidence:

1. Statistical separation
2. Stability
3. Managerial value

## SPSS workflow

1. Import and inspect the data.
2. Log-transform and standardize spending variables.
3. Use hierarchical clustering to inspect plausible values of *k*.
4. Run k-means for selected values of *k*.
5. Profile, name, and evaluate the clusters.

## Wholesale Customers dataset

The dataset contains annual spending for 440 customers of a wholesale distributor. The six spending categories are Fresh, Milk, Grocery, Frozen, Detergents and Paper, and Delicatessen.

Source: Cardoso, M. (2013). *Wholesale customers*. UCI Machine Learning Repository. DOI: 10.24432/C5030X. License: CC BY 4.0.

## Cluster profiling

1. Compare means on the clustering variables.
2. Use variables not included in clustering to describe groups.
3. Read representative records.
4. Name clusters only after the business meaning is clear.

## AI Frontier 1: Embedding-based segmentation

An embedding converts customer language into a numeric vector that represents patterns of meaning. The vectors can be clustered, but the analyst must return to the original text to interpret the groups.

### Workflow

1. Embed each response.
2. Normalize and cluster the vectors.
3. Read representative comments from every group.
4. Name and validate the segments.

## Interpretation risks

- Clusters may reflect sentiment or writing style rather than needs.
- Short comments may lack decision context.
- Model choice changes the geometry.
- Text may contain personal information.
- Small clusters may be unstable.
- A coherent theme may still be impossible to target.

## Workshop deliverable

Submit a short segmentation memo with:

- the recommended number of clusters;
- a profile and name for each cluster;
- one marketing action for the priority cluster;
- one limitation of the analysis.

## Takeaways

- Preprocessing and distance choices shape every solution.
- The best value of *k* balances separation, stability, and actionability.
- Embeddings extend segmentation to unstructured language.
- Managers must decide whether the groups support different decisions.
