* WEEK 3 WORKSHOP: CLUSTER ANALYSIS.
* Run week-03-factor-analysis.sps first.

GET FILE='urbancart_with_factor_scores.sav'.

DESCRIPTIVES VARIABLES=FAC1_1 FAC2_1 FAC3_1 FAC4_1
  /STATISTICS=MEAN STDDEV MIN MAX.

CLUSTER FAC1_1 FAC2_1 FAC3_1 FAC4_1
  /METHOD WARD
  /MEASURE=SEUCLID
  /PRINT SCHEDULE
  /PLOT DENDROGRAM
  /MISSING LISTWISE.

QUICK CLUSTER FAC1_1 FAC2_1 FAC3_1 FAC4_1
  /CRITERIA=CLUSTER(4) MXITER(50) CONVERGE(.0001)
  /METHOD=KMEANS(NOUPDATE)
  /PRINT INITIAL FINAL DISTANCE ANOVA
  /SAVE CLUSTER(cluster_4) DISTANCE(distance_4).

MEANS TABLES=age income_sgd monthly_spend_sgd purchase_frequency
  digital_purchase_share discount_purchase_share tenure_months satisfaction BY cluster_4
  /CELLS=MEAN COUNT STDDEV.

CROSSTABS
  /TABLES=cluster_4 BY segment_code
  /CELLS=COUNT ROW COLUMN.

SAVE OUTFILE='urbancart_clustered.sav'.
