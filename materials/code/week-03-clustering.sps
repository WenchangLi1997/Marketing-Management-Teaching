* Week 3: Wholesale Customers clustering workshop.
* Keep this syntax file in the same directory as wholesale_customers.csv,
* or replace the FILE path below with the full path to the CSV.

GET DATA
  /TYPE=TXT
  /FILE='wholesale_customers.csv'
  /ENCODING='UTF8'
  /DELCASE=LINE
  /DELIMITERS=","
  /QUALIFIER='"'
  /ARRANGEMENT=DELIMITED
  /FIRSTCASE=2
  /IMPORTCASE=ALL
  /VARIABLES=
    Channel F1.0
    Region F1.0
    Fresh F12.0
    Milk F12.0
    Grocery F12.0
    Frozen F12.0
    Detergents_Paper F12.0
    Delicassen F12.0.
EXECUTE.

* Inspect distributions and missing values.
FREQUENCIES VARIABLES=Channel Region.
DESCRIPTIVES VARIABLES=Fresh Milk Grocery Frozen Detergents_Paper Delicassen
  /STATISTICS=MEAN STDDEV MIN MAX.

* Spending variables are right-skewed. Log-transform before clustering.
COMPUTE ln_Fresh=LN(Fresh+1).
COMPUTE ln_Milk=LN(Milk+1).
COMPUTE ln_Grocery=LN(Grocery+1).
COMPUTE ln_Frozen=LN(Frozen+1).
COMPUTE ln_Detergents=LN(Detergents_Paper+1).
COMPUTE ln_Delicassen=LN(Delicassen+1).
EXECUTE.

* Save standardized versions of the transformed variables.
DESCRIPTIVES VARIABLES=ln_Fresh ln_Milk ln_Grocery ln_Frozen ln_Detergents ln_Delicassen
  /SAVE.

* Hierarchical exploration with Ward's method and squared Euclidean distance.
CLUSTER Zln_Fresh Zln_Milk Zln_Grocery Zln_Frozen Zln_Detergents Zln_Delicassen
  /METHOD=WARD
  /MEASURE=SEUCLID
  /PRINT=SCHEDULE
  /PLOT=DENDROGRAM
  /SAVE=CLUSTER(3,4).

* K-means solution with three clusters.
QUICK CLUSTER Zln_Fresh Zln_Milk Zln_Grocery Zln_Frozen Zln_Detergents Zln_Delicassen
  /CRITERIA=CLUSTERS(3) MXITER(100) CONVERGE(.0001)
  /METHOD=KMEANS(UPDATE)
  /PRINT=INITIAL FINAL ANOVA
  /SAVE=CLUSTER(cluster3) DISTANCE(distance3).

* Profile the three-cluster solution using original spending variables.
MEANS TABLES=Fresh Milk Grocery Frozen Detergents_Paper Delicassen BY cluster3
  /CELLS=MEAN COUNT STDDEV.

* Use Channel and Region as descriptors, not clustering variables.
CROSSTABS
  /TABLES=cluster3 BY Channel cluster3 BY Region
  /CELLS=COUNT ROW.

* Compare a four-cluster solution as a robustness check.
QUICK CLUSTER Zln_Fresh Zln_Milk Zln_Grocery Zln_Frozen Zln_Detergents Zln_Delicassen
  /CRITERIA=CLUSTERS(4) MXITER(100) CONVERGE(.0001)
  /METHOD=KMEANS(UPDATE)
  /PRINT=FINAL ANOVA
  /SAVE=CLUSTER(cluster4).

MEANS TABLES=Fresh Milk Grocery Frozen Detergents_Paper Delicassen BY cluster4
  /CELLS=MEAN COUNT STDDEV.
