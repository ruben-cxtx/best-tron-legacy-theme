from __future__ import annotations

from dataclasses import dataclass
from typing import Literal, TypedDict

import pandas as pd


ProgramState = Literal["idle", "syncing", "complete", "error"]


class TelemetryRow(TypedDict):
    program_id: str
    cycles: int
    state: ProgramState


@dataclass(slots=True)
class GridModel:
    threshold: float = 0.82

    def __call__(self, row: TelemetryRow) -> float:
        return min(row["cycles"] / 128, 1.0)


def score_programs(rows: list[TelemetryRow]) -> pd.DataFrame:
    model = GridModel()
    frame = pd.DataFrame(rows)
    frame["score"] = [model(row) for row in rows]
    frame["label"] = frame["score"].map(lambda value: f"signal={value:.2%}")
    return frame.query("state != 'error'")


if __name__ == "__main__":
    print(score_programs([{"program_id": "encom-01", "cycles": 42, "state": "syncing"}]))
