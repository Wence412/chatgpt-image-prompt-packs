# Prompt Techniques Playbook

Ten practical patterns for commercial visuals. These are original WenceStudio examples, not benchmark results or copied OpenAI examples. No image-generation tests are claimed.

## Start here

Replace every bracketed variable. Supply the referenced assets before an edit. Pick one technique, generate or edit, and compare the result with the stated check.

Official OpenAI guidance recommends Flare when speed matters and Sunburst when demanding quality matters. Both support generation and editing. Keep API settings separate from prompt text. See the [production guide](gpt-image-2.5-production-guide.md) for model controls.

## 01. Outcome-first brief

**Use when:** The image looks attractive but does not fit its intended placement.

**Vague:** "Make a premium product image."

**Example prompt:**
```text
Create a website hero for [product] aimed at [audience]. Put the product on the right
third against matte black stone, with restrained warm-gold reflections. Leave the
left third free of objects for a headline added later. No visible text.
```

**Check:** Product reads clearly and the planned headline has usable space.

## 02. Reference role assignment

**Use when:** Several inputs contain competing design directions.

**Example prompt:**
```text
Use image 1 for the bottle shape and label only. Use image 2 for the blue-and-cream
palette only. Create a new studio scene with the bottle standing on a cream plinth.
Do not transfer image 2's objects or words.
```

**Check:** Each input contributes only its assigned role. Related card: GI25-003.

## 03. Protected-details contract

**Use when:** An edit must preserve an approved product or consenting subject.

**Example prompt:**
```text
Edit the supplied portrait by replacing the wall with a plain charcoal backdrop.
Retain the person's face, expression, skin tone, hairstyle, wardrobe, pose, and crop.
Do not smooth the skin or add jewelry.
```

**Check:** Compare the retained details with the input, not just overall similarity.
Consent and permitted use must be confirmed. Related card: GI25-001.

## 04. Single-target correction

**Use when:** One flaw needs correction without redesigning the asset.

**Example prompt:**
```text
Remove only the red cable visible in the lower-left corner. Reconstruct the desk
texture there. Keep the monitor, notebook, shadows, camera position, and all other
objects unchanged.
```

**Check:** Look beyond the edited area for drift. Related card: EDIT-002.

## 05. Copy-safe composition

**Use when:** A designer will add headlines and branding afterward.

**Example prompt:**
```text
Create an editorial illustration of a brass key beside an open black notebook.
Place both objects in the lower-right half. Keep the upper-left half a quiet,
even-toned charcoal area. Add no letters, logos, or interface elements.
```

**Check:** Test the actual headline overlay at mobile size, including its margins.

## 06. Exact-copy boundary

**Use when:** A visual needs a short approved phrase.

**Example prompt:**
```text
Design a square tile featuring a single ceramic cup. Display exactly once:
"Start with intention." Put the phrase above the cup in high-contrast cream type.
No other visible words, dates, badges, or watermarks.
```

**Check:** Verify every character and punctuation mark. For fixed typography or
long copy, add text in a layout editor instead. Related card: GI25-004.

## 07. Transparent asset contract

**Use when:** A cutout must work on multiple backgrounds.

**Example prompt:**
```text
Isolate the supplied desk lamp with transparent padding around every edge. Retain
its cable, switch, silhouette, and brushed-metal texture. Remove the table and
background. No painted backdrop, checkerboard pattern, or external shadow.
```

**Settings:** Explicitly request transparent background and PNG or WebP.

**Check:** Inspect the alpha channel and composite on light and dark surfaces.
Related card: GI25-005.

## 08. Approved-master iteration

**Use when:** Refinement should retain the last accepted result.

**Example prompt:**
```text
Starting from the attached approved version, reduce only the gold reflection on the
right edge of the bottle. Leave its shape, label, camera angle, background, and crop
unchanged. Do not introduce new props.
```

**Check:** Compare against the approved master before accepting the edit. Keep both
versions. Related card: GI25-006.

## 09. One-variable variant set

**Use when:** You want comparable creative alternatives.

**Example prompt:**
```text
Create one variation of the attached approved key visual. Change only the background
surface to [surface]. Retain the product, placement, scale, camera angle, lighting,
and copy-safe area.
```

**Method:** Run separately with black stone, cream paper, and brushed aluminum.
Record unintended changes. This is a creative comparison, not proof of ad performance.

**Check:** Reject variations that change more than the intended variable.

## 10. Evidence-bound explainer

**Use when:** A concept needs an instructional visual.

**Example prompt:**
```text
Create a three-panel concept illustration for new employees using only this approved
sequence: [steps]. Use one clearly distinct visual per step. Add no measurements,
statistics, or extra steps. Leave space for labels added in a layout editor.
```

**Check:** A subject-matter expert verifies the sequence and meaning. Use diagramming
or layout software for exact relationships, technical maps, or dense information.

## Reusable production brief

```text
Outcome and placement: [where the asset will be used]
Audience: [who should understand it]
Operation: [generate or edit]
Reference roles: [each supplied asset and its permitted role]
Subject and composition: [what appears and where]
Allowed change: [one change for an edit]
Protected details: [what must remain]
Visible copy: [approved exact text, or none]
Exclusions: [specific unwanted elements]
Review checks: [observable pass/fail requirements]
```

API size, quality, background, and format belong in request settings. In a chat UI,
state the desired result, but do not assume API options map directly to UI controls.

## Record evidence without inventing it

Record card ID/version, model, settings, input filenames and rights, original prompt,
returned revised prompt when available, output asset, review result, and observed
failure modes. Mark unrun recipes **untested**. Do not label them proven.

## When to use another tool

Use deterministic tools for exact tables, numerical charts, regulated labels, fixed
brand typography, or safety-critical instructions. Image generation can support
illustrations, but it does not replace factual verification or production layout.

## Sources and scope

Model guidance and general generation/editing practices were checked against
[OpenAI's image prompting documentation](https://developers.openai.com/api/docs/guides/image-prompting)
on September 29, 2026. The examples and review procedures here are WenceStudio
recommendations, not official OpenAI guarantees.

[Back to capability packs](capability-packs.md)
