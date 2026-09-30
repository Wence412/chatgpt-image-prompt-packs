# Validation

Run the repository checks before opening a pull request:

```bash
python3 scripts/build_exports.py --check
python3 scripts/validate.py
```

`prompts.json` is the canonical structured source. The CSV and import JSON are
generated exports and must not be edited by hand. The validator checks prompt
counts, IDs, categories, exports, documentation coverage, and local Markdown
links.
