* WEEK 3 WORKSHOP: FACTOR ANALYSIS.
* UrbanCart synthetic teaching data.
* Update the FILE path below if the CSV is not in your SPSS working directory.

GET DATA
  /TYPE=TXT
  /FILE='customer_segmentation_workshop.csv'
  /ENCODING='UTF8'
  /DELCASE=LINE
  /DELIMITERS=","
  /QUALIFIER='"'
  /ARRANGEMENT=DELIMITED
  /FIRSTCASE=2
  /VARIABLES=
    customer_id F8.0 age F3.0 income_sgd F10.0 monthly_spend_sgd F8.0
    purchase_frequency F3.0 digital_purchase_share F4.2 discount_purchase_share F4.2
    tenure_months F3.0 satisfaction F3.1
    convenience_1 F1.0 convenience_2 F1.0 convenience_3 F1.0
    quality_1 F1.0 quality_2 F1.0 quality_3 F1.0
    value_1 F1.0 value_2 F1.0 value_3 F1.0
    innovation_1 F1.0 innovation_2 F1.0 innovation_3 F1.0
    feedback_text A140 segment_code F1.0 segment_label A24.
CACHE.
EXECUTE.

DESCRIPTIVES VARIABLES=convenience_1 TO innovation_3
  /STATISTICS=MEAN STDDEV MIN MAX.

CORRELATIONS
  /VARIABLES=convenience_1 TO innovation_3
  /PRINT=TWOTAIL NOSIG
  /MISSING=PAIRWISE.

FACTOR
  /VARIABLES convenience_1 TO innovation_3
  /MISSING LISTWISE
  /ANALYSIS convenience_1 TO innovation_3
  /PRINT INITIAL EXTRACTION KMO ROTATION
  /FORMAT SORT BLANK(.35)
  /CRITERIA FACTORS(4) ITERATE(50)
  /EXTRACTION PAF
  /ROTATION VARIMAX
  /SAVE REG(ALL)
  /METHOD=CORRELATION.

* SPSS normally names the saved scores FAC1_1 to FAC4_1.
SAVE OUTFILE='urbancart_with_factor_scores.sav'.
