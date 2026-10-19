* WEEK 3 WORKSHOP: DISCRIMINANT AND CLASSIFICATION ANALYSES.
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

VALUE LABELS segment_code
  1 'Convenience First' 2 'Quality Loyalists'
  3 'Value Hunters' 4 'Innovation Explorers'.

DISCRIMINANT
  /GROUPS=segment_code(1 4)
  /VARIABLES=age income_sgd monthly_spend_sgd purchase_frequency
    digital_purchase_share discount_purchase_share tenure_months satisfaction
  /ANALYSIS ALL
  /PRIORS EQUAL
  /STATISTICS=MEAN STDDEV UNIVF BOXM COEFF RAW CORR
  /CLASSIFY=NONMISSING POOLED CROSSVALIDATE
  /PLOT=COMBINED MAP
  /SAVE=CLASS PROBS.

* Review the cross-validated confusion matrix in the output.
* A real project should use a separate holdout sample for final evaluation.
