# Image workflow capabilities

This library supports ChatGPT and API workflows without locking prompts to a
single model name. Check the current OpenAI image-generation documentation
before production use because model availability and parameters can change.

## Choose the workflow first

| Need | Prompt-card operation | Inputs to capture |
| --- | --- | --- |
| Create a net-new asset | `generate` | Brief, brand palette, target channel, aspect ratio |
| Make a precise change to an approved image | `edit` | Source image, exact protected elements, requested change |
| Extend a composition or canvas | `extend` | Source image, expansion direction, new content rules |
| Combine approved visual inputs | `compose` | Reference images and the role of each one |
| Refine an existing result over several passes | `iterate` | Previous image, accepted criteria, only the delta requested |

## Capabilities to specify when relevant

- Reference-image roles: product, subject, identity, brand style, composition,
  or mask. State what must remain unchanged.
- Output: channel and aspect ratio, file format, transparent or opaque
  background, and quality requirement.
- Text: provide exact copy, hierarchy, and placement. Always include a human
  review step for spelling, spacing, and legibility.
- Iteration: request one material change at a time and preserve approved
  elements explicitly.
- Structured visuals: use acceptance criteria to validate labels, sequence,
  and factual accuracy before publishing.

## Production rule

Do not mark a prompt as tested until its generated output, inputs, model
profile, review decision, and known limitations are recorded in the prompt's
`evidence` field or linked evaluation record.
