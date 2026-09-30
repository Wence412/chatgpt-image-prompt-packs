# GPT Image 2.5 production guide

> **Status:** Current OpenAI API guidance, reviewed September 2026. Validate behavior, latency, and cost on representative inputs before changing a production workflow.

GPT Image 2.5 has two API model choices:

| Use case | Model |
|---|---|
| Fast, high-quality everyday image generation | `gpt-image-2.5-flare` |
| Demanding quality requirements and precision editing | `gpt-image-2.5-sunburst` |

For new work, begin with the model that fits the workload, then test the other model using the same prompts, reference images, dimensions, and acceptance criteria. Do not assume that a speed or quality result carries across different image tasks.

## Choose the right workflow

- Use the **Image API** for a single generation or edit.
- Use the **Responses API** for conversational or multi-turn editing, image File IDs, and iterative review.
- Specify API controls separately from the natural-language prompt: `model`, `size`, `quality`, `background`, `output_format`, and, for JPEG/WebP, `output_compression`.
- Use `gpt-image-2.5-sunburst` when the retained image details are the priority. Use `gpt-image-2.5-flare` when iteration speed is the priority and its output meets the same review gate.

## Prompt construction techniques

### 1. Give each reference image a role

State whether a supplied image is the source of product identity, subject identity, composition, palette, style, or a protected starting canvas. Describe the new subject or scene separately.

```text
Edit the supplied product image. Use it as the source of truth for product geometry,
label placement, and material finish. Replace only the environment with [scene].
Keep the product, crop, lighting direction, and contact shadow unchanged.
```

### 2. State what changes and what must not

For an edit, name one intended change and explicitly lock everything else that matters. Review the result for unintended drift before applying another change.

```text
Remove [object] from the supplied image. Do not alter the person, pose, facial features,
wardrobe, lighting, crop, or any other object.
```

### 3. Treat sketch-to-render work like a specification

Preserve layout, proportions, and perspective first. Then specify only the materials, light, and level of realism the completed image needs.

```text
Turn this sketch into a photorealistic image. Preserve the exact layout, proportions,
and perspective. Use [materials] and [lighting]. Do not add new elements or text.
```

### 4. Constrain visible text and review it

Use the exact approved copy, say where it belongs, and disallow any additional visible words. Image text still requires a human spelling, legibility, and alignment check.

```text
Create a 4:5 launch tile. Display this exact text once: "[approved copy]".
Set it [placement] in [type treatment]. Do not add any other text, logo, watermark,
or pseudo-text. A human reviewer will verify every character before publishing.
```

### 5. Request transparency as an output control

For transparent assets, use `background: "transparent"` and PNG or WebP. The prompt should also call for a clean alpha edge, no painted backdrop, and no checkerboard pattern.

### 6. Refine one thing at a time

In multi-turn work, use the previous image as the starting point and make one constrained correction per turn. Retain the original output and the human pass/fail decision in the evidence record.

## Output controls

| Control | Recommended practice |
|---|---|
| `quality` | Start with `low` for drafts. Compare `high`, `xhigh`, or `max` for final deliverables. |
| `size` | Use a channel-fit size. Custom dimensions must meet the model's documented resolution constraints. |
| `background` | Use `transparent` only when a genuine alpha channel is required. |
| `output_format` | Use PNG for lossless or transparent assets. Use JPEG or WebP when a smaller output is appropriate. |
| `output_compression` | Apply only to JPEG or WebP, never PNG. |

## Review gate before release

- Is required text accurate, legible, and placed correctly?
- Are identities, product shapes, labels, and reference details intact?
- Did the edit change only what was requested?
- Does a transparent asset contain genuine alpha transparency?
- Are claims, diagrams, and annotations verified by a qualified human?
- Do you have the prompt version, input assets, model, settings, and final decision recorded?

## Source

- [OpenAI Image prompting guide](https://developers.openai.com/api/docs/guides/image-prompting)
- [OpenAI Image generation guide](https://developers.openai.com/api/docs/guides/image-generation)
