"""Week 3 workshop: embedding-enhanced customer segmentation.

Install once:
    pip install pandas scikit-learn sentence-transformers

Run from any directory:
    python materials/code/week-03-embedding-segmentation.py
"""

from pathlib import Path

import numpy as np
import pandas as pd
from sentence_transformers import SentenceTransformer
from sklearn.cluster import KMeans
from sklearn.metrics import adjusted_rand_score, silhouette_score
from sklearn.preprocessing import StandardScaler, normalize


ROOT = Path(__file__).resolve().parents[2]
DATA_FILE = ROOT / "materials" / "data" / "week-03" / "customer_segmentation_workshop.csv"
OUTPUT_FILE = ROOT / "materials" / "data" / "week-03" / "embedding_cluster_results.csv"
MODEL_NAME = "sentence-transformers/all-MiniLM-L6-v2"
N_CLUSTERS = 4
TEXT_WEIGHT = 1.0


df = pd.read_csv(DATA_FILE)

structured_columns = [
    "convenience_1",
    "convenience_2",
    "convenience_3",
    "quality_1",
    "quality_2",
    "quality_3",
    "value_1",
    "value_2",
    "value_3",
    "innovation_1",
    "innovation_2",
    "innovation_3",
    "monthly_spend_sgd",
    "purchase_frequency",
    "digital_purchase_share",
    "discount_purchase_share",
]

structured = StandardScaler().fit_transform(df[structured_columns])

model = SentenceTransformer(MODEL_NAME)
text_embeddings = model.encode(
    df["feedback_text"].tolist(),
    normalize_embeddings=True,
    show_progress_bar=True,
)

representations = {
    "structured_only": structured,
    "text_only": text_embeddings,
    "structured_plus_text": np.hstack(
        [normalize(structured), text_embeddings * TEXT_WEIGHT]
    ),
}

print("Representation comparison")
print("-" * 72)
for name, matrix in representations.items():
    labels = KMeans(n_clusters=N_CLUSTERS, n_init=50, random_state=42).fit_predict(matrix)
    df[f"cluster_{name}"] = labels + 1
    silhouette = silhouette_score(matrix, labels)
    agreement = adjusted_rand_score(df["segment_code"], labels + 1)
    print(f"{name:24s} silhouette={silhouette:6.3f}  adjusted_rand={agreement:6.3f}")

final_labels = df["cluster_structured_plus_text"]
print("\nRepresentative comments from the fused solution")
print("-" * 72)
for cluster_id in sorted(final_labels.unique()):
    subset = df.loc[final_labels == cluster_id]
    print(f"\nCluster {cluster_id} (n={len(subset)})")
    for comment in subset["feedback_text"].drop_duplicates().head(3):
        print(f"  - {comment}")

df.to_csv(OUTPUT_FILE, index=False)
print(f"\nSaved customer-level results to {OUTPUT_FILE}")
