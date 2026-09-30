#!/usr/bin/env python3
"""Build derivative exports from the canonical prompts.json source."""

from __future__ import annotations

import argparse
import csv
import io
import json
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "prompts.json"
IMPORT = ROOT / "chatgpt-image-prompt-library.import.json"
CSV = ROOT / "prompts.csv"
FIELDS = ["id", "phase", "category", "title", "prompt", "best_for", "framework", "tags"]


def load_source() -> dict:
    with SOURCE.open(encoding="utf-8") as handle:
        return json.load(handle)


def csv_rows(data: dict) -> list[dict[str, str]]:
    rows = []
    for prompt in data["prompts"]:
        row = {field: prompt[field] for field in FIELDS if field != "tags"}
        row["tags"] = ", ".join(prompt["tags"])
        rows.append(row)
    return rows


def expected_csv(data: dict) -> str:
    buffer = io.StringIO(newline="")
    writer = csv.DictWriter(buffer, fieldnames=FIELDS, lineterminator="\n")
    writer.writeheader()
    writer.writerows(csv_rows(data))
    return buffer.getvalue()


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="Fail if exports drift from prompts.json")
    args = parser.parse_args()
    data = load_source()
    import_text = json.dumps(data, indent=2, ensure_ascii=False) + "\n"
    csv_text = expected_csv(data)

    if args.check:
        failures = []
        if not IMPORT.exists() or json.loads(IMPORT.read_text(encoding="utf-8")) != data:
            failures.append(IMPORT.name)
        if not CSV.exists() or CSV.read_text(encoding="utf-8") != csv_text:
            failures.append(CSV.name)
        if failures:
            print("Out-of-date generated exports: " + ", ".join(failures), file=sys.stderr)
            print("Run: python3 scripts/build_exports.py", file=sys.stderr)
            return 1
        print("Generated exports match prompts.json.")
        return 0

    IMPORT.write_text(import_text, encoding="utf-8")
    CSV.write_text(csv_text, encoding="utf-8", newline="")
    print("Rebuilt chatgpt-image-prompt-library.import.json and prompts.csv.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
