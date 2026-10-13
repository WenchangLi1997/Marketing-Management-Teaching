"""Starter code for the Week 2 clustering workshop.

Requirements:
    pip install pandas scikit-learn

The sample dataset is synthetic and intended only for classroom demonstration.
"""

from pathlib import Path

import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler


DATA_PATH = Path(__file__).parents[1] / "datasets" / "customer-segmentation-sample.csv"
SEGMENTATION_COLUMNS = [
    "convenience",
    "prestige",
    "affordability",
    "networking",
    "content_fit",
]


def main() -> None:
    customers = pd.read_csv(DATA_PATH)
    features = customers[SEGMENTATION_COLUMNS]
    scaled_features = StandardScaler().fit_transform(features)
    model = KMeans(n_clusters=3, random_state=42, n_init=20)
    customers["cluster"] = model.fit_predict(scaled_features)

    profiles = customers.groupby("cluster")[SEGMENTATION_COLUMNS].mean().round(2)
    descriptors = customers.groupby("cluster")[["age", "income_k", "work_experience"]].mean().round(1)

    print("Needs-based cluster profiles")
    print(profiles)
    print("\nCustomer descriptors by cluster")
    print(descriptors)
    print("\nDiscussion: Which cluster solution is managerially useful, and why?")


if __name__ == "__main__":
    main()
