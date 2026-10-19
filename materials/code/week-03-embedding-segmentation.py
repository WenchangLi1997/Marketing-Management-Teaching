"""Week 3: embedding-based customer segmentation.

Install:
    pip install pandas numpy scikit-learn sentence-transformers

Run from the project root:
    python materials/code/week-03-embedding-segmentation.py

The first run downloads the selected sentence-transformer model. Use only an
institutionally approved model and environment for real customer data.
"""

from pathlib import Path
import os

import numpy as np
import pandas as pd
from sentence_transformers import SentenceTransformer
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score
from sklearn.preprocessing import normalize


PROJECT_ROOT = Path(__file__).resolve().parents[2]
DATA_PATH = PROJECT_ROOT / "materials" / "data" / "week-03" / "customer_feedback.csv"
OUTPUT_PATH = PROJECT_ROOT / "materials" / "data" / "week-03" / "embedding_segments_output.csv"
MODEL_NAME = os.getenv("EMBEDDING_MODEL", "sentence-transformers/all-MiniLM-L6-v2")
RANDOM_STATE = 42


def choose_cluster_count(embeddings: np.ndarray, minimum: int = 2, maximum: int = 6) -> tuple[int, dict[int, float]]:
    """Select k using silhouette score across a small, interpretable range."""
    scores: dict[int, float] = {}
    upper = min(maximum, len(embeddings) - 1)
    for k in range(minimum, upper + 1):
        labels = KMeans(n_clusters=k, n_init=30, random_state=RANDOM_STATE).fit_predict(embeddings)
        scores[k] = silhouette_score(embeddings, labels, metric="cosine")
    best_k = max(scores, key=scores.get)
    return best_k, scores


def representative_rows(frame: pd.DataFrame, embeddings: np.ndarray, labels: np.ndarray, centers: np.ndarray) -> pd.DataFrame:
    """Return the customer comment nearest to each normalized cluster center."""
    rows = []
    for cluster_id in sorted(np.unique(labels)):
        member_indices = np.where(labels == cluster_id)[0]
        similarities = embeddings[member_indices] @ centers[cluster_id]
        representative_index = member_indices[int(np.argmax(similarities))]
        rows.append(
            {
                "cluster": int(cluster_id),
                "size": int(len(member_indices)),
                "representative_text": frame.iloc[representative_index]["feedback_text"],
            }
        )
    return pd.DataFrame(rows)


def main() -> None:
    feedback = pd.read_csv(DATA_PATH)
    if feedback["feedback_text"].isna().any():
        raise ValueError("feedback_text contains missing values")

    model = SentenceTransformer(MODEL_NAME)
    embeddings = model.encode(
        feedback["feedback_text"].tolist(),
        normalize_embeddings=True,
        show_progress_bar=True,
    )
    embeddings = normalize(np.asarray(embeddings))

    best_k, scores = choose_cluster_count(embeddings)
    print("Silhouette scores")
    for k, score in scores.items():
        print(f"  k={k}: {score:.3f}")
    print(f"\nSelected k={best_k}. Treat this as evidence, not an automatic strategic decision.\n")

    clusterer = KMeans(n_clusters=best_k, n_init=50, random_state=RANDOM_STATE)
    feedback["cluster"] = clusterer.fit_predict(embeddings)
    centers = normalize(clusterer.cluster_centers_)

    profiles = representative_rows(feedback, embeddings, feedback["cluster"].to_numpy(), centers)
    print(profiles.to_string(index=False))

    feedback.to_csv(OUTPUT_PATH, index=False)
    print(f"\nAssignments saved to {OUTPUT_PATH}")
    print("Next step: read multiple comments per cluster before naming or targeting any segment.")


if __name__ == "__main__":
    main()
