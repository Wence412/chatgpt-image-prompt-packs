#!/usr/bin/env python3
"""Validate prompt data, catalogs, and repository-local Markdown links."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
REQUIRED_FIELDS = {"id", "phase", "category", "title", "prompt", "best_for", "framework", "tags"}
CATALOGS = [
    ROOT / "combined-prompt-library.md",
    ROOT / "phase-1-visual-prompt-pack.md",
    ROOT / "phase-2-production-prompt-pack.md",
]


def error(errors: list[str], message: str) -> None:
    errors.append(message)


def check_local_links(errors: list[str]) -> None:
    link_pattern = re.compile(r"!?(?:\[[^\]]*\])\(([^)]+)\)")
    for document in ROOT.rglob("*.md"):
        for destination in link_pattern.findall(document.read_text(encoding="utf-8")):
            target = destination.split()[0].split("#")[0]
            if not target or target.startswith(("http://", "https://", "mailto:")):
                continue
            if not (document.parent / target).resolve().exists():
                error(errors, f"Broken local link in {document.relative_to(ROOT)}: {destination}")


def main() -> int:
    errors: list[str] = []
    data = json.loads((ROOT / "prompts.json").read_text(encoding="utf-8"))
    prompts = data.get("prompts", [])
    metadata = data.get("metadata", {})
    ids: set[str] = set()
    phase_counts: dict[str, int] = {"Phase 1": 0, "Phase 2": 0}

    for index, prompt in enumerate(prompts, start=1):
        missing = REQUIRED_FIELDS - prompt.keys()
        if missing:
            error(errors, f"Prompt #{index} is missing: {', '.join(sorted(missing))}")
            continue
        identifier = prompt["id"]
        if not re.fullmatch(r"P[12]-\d{3}(?:-[a-z0-9-]+)?", identifier):
            error(errors, f"Invalid prompt ID: {identifier}")
        if identifier in ids:
            error(errors, f"Duplicate prompt ID: {identifier}")
        ids.add(identifier)
        if prompt["phase"] not in phase_counts:
            error(errors, f"Invalid phase for {identifier}: {prompt['phase']}")
        else:
            phase_counts[prompt["phase"]] += 1
        if not isinstance(prompt["tags"], list) or len(prompt["tags"]) < 3:
            error(errors, f"{identifier} must contain at least three tags")
        for field in REQUIRED_FIELDS - {"tags"}:
            if not isinstance(prompt[field], str) or not prompt[field].strip():
                error(errors, f"{identifier}.{field} must be a non-empty string")

    if metadata.get("total_prompts") != len(prompts):
        error(errors, "metadata.total_prompts does not match the prompt list")
    if metadata.get("phase_1_prompts") != phase_counts["Phase 1"]:
        error(errors, "metadata.phase_1_prompts does not match Phase 1")
    if metadata.get("phase_2_prompts") != phase_counts["Phase 2"]:
        error(errors, "metadata.phase_2_prompts does not match Phase 2")

    categories = json.loads((ROOT / "categories.json").read_text(encoding="utf-8"))
    mapped: set[str] = set()
    for phase, category_map in categories.items():
        for category, category_ids in category_map.items():
            for identifier in category_ids:
                if identifier in mapped:
                    error(errors, f"Category mapping repeats ID: {identifier}")
                mapped.add(identifier)
                matching = next((p for p in prompts if p["id"] == identifier), None)
                if matching is None:
                    error(errors, f"Category mapping references unknown ID: {identifier}")
                elif matching["phase"] != phase or matching["category"] != category:
                    error(errors, f"Category mapping disagrees with {identifier}")
    if mapped != ids:
        error(errors, "Category mapping does not cover exactly the prompt IDs")

    combined = CATALOGS[0].read_text(encoding="utf-8")
    for identifier in ids:
        if identifier not in combined:
            error(errors, f"Combined catalog does not contain {identifier}")
    for catalog, phase in zip(CATALOGS[1:], ("P1-", "P2-")):
        text = catalog.read_text(encoding="utf-8")
        for identifier in ids:
            if identifier.startswith(phase) and identifier not in text:
                error(errors, f"{catalog.name} does not contain {identifier}")

    check_local_links(errors)
    if errors:
        print("Validation failed:", file=sys.stderr)
        print("\n".join(f"- {item}" for item in errors), file=sys.stderr)
        return 1
    print(f"Validated {len(prompts)} prompts, categories, catalogs, and local links.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
