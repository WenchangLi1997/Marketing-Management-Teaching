"""Outline for an embedding-based segmentation exercise.

This file intentionally leaves the embedding provider open. Replace
`create_embeddings` with the approved local or API-based model used in class.

Requirements for the clustering step:
    pip install pandas scikit-learn
"""

from pathlib import Path

import pandas as pd
from sklearn.cluster import KMeans


DATA_PATH = Path(__file__).parents[1] / "datasets" / "voice-of-customer-sample.csv"


def create_embeddings(texts: list[str]) -> list[list[float]]:
    """Return one embedding vector per text using the approved course model."""
    raise NotImplementedError("Connect the embedding model selected for the course.")


def main() -> None:
    responses = pd.read_csv(DATA_PATH)
    vectors = create_embeddings(responses["customer_text"].tolist())
    model = KMeans(n_clusters=3, random_state=42, n_init=20)
    responses["cluster"] = model.fit_predict(vectors)

    for cluster_id, rows in responses.groupby("cluster"):
        print(f"\nCluster {cluster_id}")
        for text in rows["customer_text"]:
            print(f"- {text}")


if __name__ == "__main__":
    main()
