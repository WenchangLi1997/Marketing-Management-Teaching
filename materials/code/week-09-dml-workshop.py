"""Week 9 workshop: Double Machine Learning for marketing resource allocation.

The script implements the partially linear DML estimator directly so students can
see each step. It requires pandas, numpy, and scikit-learn.
"""

from pathlib import Path

import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import KFold


DATA_PATH = Path(__file__).resolve().parents[1] / "data" / "week-09-dml-marketing-allocation.csv"
OUTCOME = "contribution_profit"
TREATMENT = "paid_search_spend"
CONTROLS = [
    "demand_index",
    "fare_index",
    "competitor_fare_index",
    "seat_capacity",
    "fuel_cost_index",
    "promotion",
    "holiday",
    "prior_bookings",
    "week_sin",
    "week_cos",
]


def dml_partialling_out(frame: pd.DataFrame, folds: int = 5, seed: int = 2026) -> dict:
    """Estimate a constant causal effect using cross-fitted residualization."""
    y = frame[OUTCOME].to_numpy(float)
    d = frame[TREATMENT].to_numpy(float)
    x = frame[CONTROLS].to_numpy(float)
    y_hat = np.empty_like(y)
    d_hat = np.empty_like(d)

    splitter = KFold(n_splits=folds, shuffle=True, random_state=seed)
    for train, test in splitter.split(x):
        outcome_model = RandomForestRegressor(
            n_estimators=300,
            min_samples_leaf=8,
            max_features=0.8,
            random_state=seed,
            n_jobs=-1,
        )
        treatment_model = RandomForestRegressor(
            n_estimators=300,
            min_samples_leaf=8,
            max_features=0.8,
            random_state=seed + 1,
            n_jobs=-1,
        )
        outcome_model.fit(x[train], y[train])
        treatment_model.fit(x[train], d[train])
        y_hat[test] = outcome_model.predict(x[test])
        d_hat[test] = treatment_model.predict(x[test])

    y_residual = y - y_hat
    d_residual = d - d_hat
    theta = float(np.dot(d_residual, y_residual) / np.dot(d_residual, d_residual))
    score = d_residual * (y_residual - theta * d_residual)
    jacobian = float(np.mean(d_residual**2))
    standard_error = float(np.sqrt(np.mean(score**2) / (len(frame) * jacobian**2)))
    return {
        "effect": theta,
        "standard_error": standard_error,
        "ci_low": theta - 1.96 * standard_error,
        "ci_high": theta + 1.96 * standard_error,
        "n": len(frame),
    }


def naive_slope(frame: pd.DataFrame) -> float:
    """Unadjusted association between spend and contribution profit."""
    d = frame[TREATMENT].to_numpy(float)
    y = frame[OUTCOME].to_numpy(float)
    return float(np.cov(d, y, ddof=0)[0, 1] / np.var(d))


def main() -> None:
    data = pd.read_csv(DATA_PATH)
    print(f"Rows: {len(data):,}; markets: {data['market_id'].nunique()}")
    print(f"Naive spend-profit slope: {naive_slope(data):.3f}")

    overall = dml_partialling_out(data)
    print(
        "DML overall effect: "
        f"{overall['effect']:.3f} "
        f"(95% CI {overall['ci_low']:.3f}, {overall['ci_high']:.3f})"
    )

    results = []
    for tier, frame in data.groupby("market_tier", sort=False):
        estimate = dml_partialling_out(frame, seed=2026)
        results.append({"market_tier": tier, **estimate})
    result_table = pd.DataFrame(results).sort_values("effect", ascending=False)
    print("\nEstimated causal contribution profit per $1 of paid-search spend")
    print(result_table[["market_tier", "effect", "ci_low", "ci_high", "n"]].to_string(index=False))

    print("\nAllocation discussion")
    print("1. Rank market tiers by estimated incremental contribution per dollar.")
    print("2. Apply capacity, minimum-presence, and risk constraints.")
    print("3. Test the recommended reallocation in a randomized field experiment.")


if __name__ == "__main__":
    main()
