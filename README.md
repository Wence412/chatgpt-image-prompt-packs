# ChatGPT-Image Prompt Packs

A GitHub-ready prompt library for ChatGPT-Image 2.0. This repository combines Phase 1 visual prompt packs with Phase 2 production-ready business prompt packs.

## What is included

- 75 Phase 1 prompts for product mockups, product design, packaging, brand visuals, UI, social content, lifestyle scenes, explainers, and creative direction.
- 95 Phase 2 prompts for AI influencer systems, commercial asset bundles, print-on-demand, ad creative optimization, e-commerce, brand systems, and service packages.
- 170 total prompt entries.
- Markdown documentation for reading and publishing.
- JSON and CSV files for importing into tools, databases, Notion, Airtable, or prompt managers.

## Repository structure

```text
chatgpt-image-prompt-packs/
  README.md
  LICENSE
  CONTRIBUTING.md
  CHANGELOG.md
  docs/
    phase-1-visual-prompt-pack.md
    phase-2-production-prompt-pack.md
    combined-prompt-library.md
    seed-framework.md
    production-checklist.md
  data/
    prompts.json
    prompts.csv
    categories.json
  import/
    chatgpt-image-prompt-library.import.json
  templates/
    universal-product-mockup.md
    universal-packaging.md
    universal-ad-creative.md
    universal-ai-influencer.md
  examples/
    before-after-workflow.md
    ad-testing-matrix.md
```

## Quick start

1. Open `docs/combined-prompt-library.md` to browse the full prompt pack.
2. Use `data/prompts.json` or `data/prompts.csv` to import prompts into your preferred system.
3. Replace bracketed placeholders such as `[product]`, `[brand]`, `[audience]`, `[color palette]`, and `[campaign theme]`.
4. Keep a prompt log of winning outputs so the visual system can be repeated.

## Recommended production rule

For client work, do not sell random images. Sell consistent systems: product launch packs, ad variation packs, AI ambassador packs, e-commerce bundles, campaign kits, or print-on-demand collections.

## Import format

The JSON import file uses this schema:

```json
{
  "metadata": {
    "name": "...",
    "version": "1.0.0",
    "total_prompts": 170
  },
  "prompts": [
    {
      "id": "P1-001",
      "phase": "Phase 1",
      "category": "Product Mockups",
      "title": "Premium Studio Product Mockup",
      "prompt": "...",
      "best_for": "...",
      "framework": "...",
      "tags": []
    }
  ]
}
```

## Note

This repository is designed as a starting point. Before publishing publicly, update the license, ownership name, and any commercial terms that fit your business model.
