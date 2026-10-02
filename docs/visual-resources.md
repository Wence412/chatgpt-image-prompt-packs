# Visual resources and production companion

The browser supports repository-hosted image previews, full images, and optional PDF view and download links. Seven visual references were selected from the WenceStudio Drive source collection. Each preserves its full composition; previews are resized WebP copies rather than cropped illustrations.

Use **Resources** to show cards with image previews or PDF guides. Click a preview for the full image. **View PDF** opens the supporting guide and **Download PDF** saves it.

## Evidence labels

- **Linked template** identifies the relevant repository prompt. Association reflects the visual use case, not a verified generation history.
- **Original prompt** is `Not recorded` for this selection.
- **Engine** is `Not recorded`; appearance or filename is not model evidence.
- **Review** records visual inspection and the remaining provenance gap. Related references do not change a card's `evidence.tested` status.
- Reference notes explain why the asset is relevant and what still needs human review, such as lettering, geometry or historical palette differences.

These references are illustrative assets, not validated real-product photographs or proof of a repeatable recipe. Existing headlines, swatches and labels belong to the historical source image.

## PDF editorial scope

The [Visual Production Companion](../site/assets/pdfs/visual-production-companion.pdf) is a public adaptation of selected practical guidance from two WenceStudio documents: `WenceStudio-Campaign Image-Anatomy Professional.pdf` and `Prompt to Pixel Issue 25 Blueprint Package.pdf`. It covers reference roles, composition, lighting coherence, material fidelity, one-change edits and approval records.

The private source PDFs are not republished. Internal vault sections, unsupported metrics, commercial performance promises and historical model comparisons are excluded. Source files and their Drive sharing settings are unchanged.

## Add or refresh media

1. Inspect the asset and confirm it is intended for public publication. Record the original prompt and engine only when documented.
2. Put full and preview WebP files in `site/assets/images/`; put public PDFs in `site/assets/pdfs/`. Use lowercase filenames with hyphens.
3. Add a record to [media-library.json](../site/media-library.json) with a unique ID, valid `prompt_ids`, title, engine, review status, relationship, credit and source information. Images also need alt text, dimensions, original-prompt availability, review notes and a preview path.
4. Record SHA-256 checksums under `asset_hashes.path` and, for images, `asset_hashes.preview_path`. Source checksum refers to the original image before preview conversion.
5. Run `python scripts/validate_media.py` along with the existing repository checks. Inspect desktop and mobile rendering, image failure behavior, and PDF links.

The browser loads the manifest relative to its deployed Pages URL. Files do not require Drive sign-in. Only local `assets/images/*.webp` and `assets/pdfs/*.pdf` paths are supported; authenticated download links are excluded. If the optional manifest fails, prompt browsing remains available.

## Free PDF collection

Three user-supplied free PDFs are published unchanged and available in the site's Free PDF guides section and on relevant prompt cards:

- [Image-Editing Prompts That Make Photos Look Intentional](../site/assets/pdfs/image-editing-prompts.pdf): 11 pages, nine actual prompt pages. The source title says ten; site descriptions use the inspected count.
- [Presence by Design: Universal Prompt](../site/assets/pdfs/presence-by-design-universal-prompt.pdf): six-page prompt framework.
- [Presence by Design](../site/assets/pdfs/presence-by-design.pdf): six-page visual guide.

The user identified these files as free PDFs for the website. Content and layouts were inspected; engine versions and generation provenance are not documented. Illustrations do not certify linked templates. Source and published SHA-256 checksums match.
