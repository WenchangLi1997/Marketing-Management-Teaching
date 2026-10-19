# Week 3: Clustering, Case Workshop, and AI Frontier

## Analytical workflow

1. Translate customer needs into measurable variables.
2. Reduce redundant questions when several items measure the same need.
3. Use hierarchical clustering and k-means to identify candidate groups.
4. Profile the groups and evaluate their managerial value.
5. Extend the logic to open-ended customer language with embeddings.

## Measurement design

Needs, purchase benefits, use situations, and preferences can define segments. Demographics, firm characteristics, channel, geography, prior purchases, and customer value can describe or identify the resulting groups.

## Factor analysis

Factor analysis summarizes correlated questions with a smaller number of latent dimensions. Factor scores can become clustering inputs when a survey contains many redundant items.

## Three analytical questions

- Factor analysis: Which questions measure the same underlying need?
- Cluster analysis: Which customers have similar need or behavior patterns?
- Classification: Which observable characteristics predict membership for a new customer?

## Cluster analysis

Cluster analysis searches for groups with small differences within groups and larger differences between groups. Each row represents a customer, each selected column represents a segmentation variable, and the distance measure defines similarity.

## Distance and preprocessing

- Check missing values, impossible values, duplicate records, and influential outliers.
- Transform strongly skewed variables where appropriate.
- Standardize variables measured on different scales.
- Document clustering variables separately from profiling variables.

For standardization: `z = (x - mean) / standard deviation`.

## Hierarchical clustering

Ward’s method repeatedly merges groups while limiting the increase in within-cluster variation. A dendrogram records the merge sequence. Large jumps in merger distance suggest candidate cluster counts, but do not determine the final answer.

## K-means

K-means begins with a chosen value of *k*, assigns customers to the nearest center, updates the centers, and repeats until assignments stabilize. Results can depend on initialization.

## Choosing the number of clusters

Evaluate statistical separation, stability, simplicity, managerial value, and identifiability. The silhouette score helps compare candidate values of *k*, but it does not measure whether the groups support different marketing actions.

## Cluster profiling

1. Compare means on the variables used to create the groups.
2. Use holdout variables to describe demographics, channels, economics, or behavior.
3. Read representative observations.
4. Identify the need pattern that distinguishes each group.
5. Name groups only after their meaning is clear.

## Wholesale Customers workshop

The dataset contains annual spending for 440 customers.

### Clustering variables

Fresh, Milk, Grocery, Frozen, Detergents and Paper, and Delicatessen.

### Profiling variables

Channel, Region, and the original untransformed spending values.

Source: Cardoso, M. (2013). *Wholesale customers*. UCI Machine Learning Repository. DOI: 10.24432/C5030X. License: CC BY 4.0.

## SPSS workflow

1. Import and inspect the data.
2. Log-transform and standardize spending variables.
3. Run hierarchical clustering with Ward’s method.
4. Compare three-cluster and four-cluster solutions.
5. Run k-means for the selected value of *k*.
6. Save memberships and profile the groups.

## SPSS interpretation questions

- Which categories contribute most to separation?
- Does a group mainly capture extreme spending rather than a distinct pattern?
- How different are the group sizes?
- Do Channel and Region help identify the groups?
- What business explanation could produce each profile?

## DentMax analytics

DentMax combined trade-show behavior, customer needs, media trust, and past purchases. Cluster analysis produced Loyalists, Switchables, Generalists, and Apathetics. Targeting required a separate assessment of attractiveness and DentMax’s relative strength.

## Embedding-based segmentation

A language model converts each customer comment into a numeric vector. Comments with similar patterns of meaning tend to be closer together, but the analyst must return to the original language to interpret and validate the groups.

## Structured versus text-based segmentation

| Decision | Structured data | Customer language |
|---|---|---|
| Representation | Selected variables | Embedding vectors |
| Similarity | Distance across standardized variables | Semantic proximity across normalized vectors |
| Interpretation | Cluster means and descriptors | Representative comments and themes |
| Main risk | Variables omit important needs | Groups reflect style, sentiment, or model choice |

## Embedding workflow

1. Define the customer-level text unit and remove identifiers.
2. Create embeddings with a consistent model.
3. Normalize vectors where appropriate.
4. Compare candidate values of *k*.
5. Read representative comments and assign provisional labels.
6. Test whether the groups differ on outcomes or feasible actions.

## Python script

The starter script loads anonymized feedback, creates sentence embeddings, normalizes vectors, compares silhouette scores, fits k-means, and exports memberships plus representative comments.

## Risks and safeguards

- Model choice changes the geometry.
- Short comments may lack context.
- Small clusters may be unstable.
- Coherent themes may have no economic value.
- Remove sensitive information, document the model, review representative comments, and test stability.

## Workshop deliverable

Submit a short memo with the recommended cluster count, segment profiles and names, one marketing action for a priority group, a method for identifying similar customers later, and one limitation that could change the recommendation.

## Recap

- Measurement and preprocessing determine the meaning of similarity.
- Hierarchical clustering explores candidate structures; k-means refines a selected solution.
- Profiling and targeting require evidence beyond the clustering inputs.
- Embeddings extend segmentation to customer language, but interpretation remains a managerial task.
