# Image Production Briefs

Ten editable templates adapted from the Image Production Brief Template supplied by WenceStudio. Each retains its six sections and adds task-specific reference roles, continuity controls, composition decisions and review tips.

## How to use

1. Choose a brief, replace every bracket, and attach every named reference. Write `None` for unused references or later edits.
2. Assign each reference one clear role. Name the authoritative reference for conflicts.
3. Confirm desired output controls in your chosen engine. Ratios, resolution, quality and camera descriptions are creative or delivery targets, not universal API parameters.
4. Generate or edit, inspect the acceptance criteria, and record evidence before approving the image. All ten templates are currently **untested recipes**.

Select **Image Production Briefs** under Collection in the [public browser](https://wence412.github.io/chatgpt-image-prompt-packs/). Use **View full brief and review checks** to read the complete template or **Copy prompt** to copy all six sections. Canonical structured records are in [capability-packs-v2.json](../capability-packs-v2.json).

## Templates

### BRIEF-001. Website hero with copy space

```text
Copy this brief, complete every bracket, and attach every reference image mentioned. If a required reference is missing or instructions conflict, identify the gap before producing the image.

1. Objective
Image type: website hero.
Purpose and platform: [offer or service] on [landing page].
Core visual idea: [single customer benefit expressed visually].
Target audience: [specific viewer and intended response].

2. References
Reference 1: [filename or None]. Use: [exact role and details to preserve].
Reference 2: [filename or None]. Use: [separate role, such as composition or lighting only].
Priority: [source to follow if references conflict]. Do not transfer unrelated faces, text or logos between references.

3. Art Direction
Subject or product: [hero subject, visible attributes and one supporting object].
Scene and background: [simple architectural or studio setting]. Keep competing objects out of the copy zone.
Composition: Place the subject in [left or right third]; reserve [percentage and side] as low-detail negative space for later headline placement. Protect [mobile crop focal point].
Action and expression: [quiet purposeful action or still pose].
Visual style: [restrained editorial style].
Color and lighting: [palette], [key-light direction], soft controlled shadows; no bright hotspot in the copy area.
Camera direction: [wide or normal lens feel], level viewpoint, moderate depth; keep the subject recognizable in a smaller crop. Camera terms describe the visual result, not guaranteed physical capture metadata.

4. Brand and Continuity Lock
Brand elements to preserve: [palette, materials, mood and approved logo-safe area].
Subject or product invariants: [visible traits, proportions, label details or scene elements that must remain consistent]. Do not claim an exact identity match based on prompting alone.

5. Constraints
Must include: [required elements and priority order].
Must avoid: unrequested people, duplicate objects, malformed anatomy, watermarks, invented logos and [scene-specific exclusions]. Preserve approved details; flag a conflict rather than silently substituting them.

6. Output and Finishing
Image engine: [engine or unspecified].
Aspect ratio and resolution: [desired ratio and pixel dimensions; verify engine support; if unsupported, state an alternative]. Suggested composition: 16:9.
Text in image: No text. Headline and approved logo will be added later.
Finishing requirements: [retouching level, natural surface detail, grain, sharpness and export format].
Later edits I will make: [crop, headline, approved logo, color adjustment or None].
Review before approval: Preserve space for headline across desktop and mobile crops.
```

Production tip: Design the mobile composition separately if cropping removes the subject or copy zone.

Review checks:

- Preserve space for headline across desktop and mobile crops
- References influence only their assigned roles
- All requested invariants and exclusions have been visually inspected
- Final crop, copy space and any supplied text are reviewed at delivery size

### BRIEF-002. Editorial portrait with identity continuity

```text
Copy this brief, complete every bracket, and attach every reference image mentioned. If a required reference is missing or instructions conflict, identify the gap before producing the image.

1. Objective
Image type: editorial portrait.
Purpose and platform: [profile, interview or publication].
Core visual idea: [one personality trait expressed through pose and light].
Target audience: [specific viewer and intended response].

2. References
Reference 1: [filename or None]. Use: [exact role and details to preserve].
Reference 2: [filename or None]. Use: [separate role, such as composition or lighting only].
Priority: [source to follow if references conflict]. Do not transfer unrelated faces, text or logos between references.

3. Art Direction
Subject or product: [person from attached identity reference, visible features, grooming and wardrobe].
Scene and background: [uncluttered studio or location].
Composition: [head-and-shoulders or seated framing], eyes near [position], breathing room above the head; reserve [copy zone].
Action and expression: [pose, gaze direction and expression].
Visual style: [editorial realism].
Color and lighting: [key direction and softness], [fill strength], natural skin tones and coherent catchlights.
Camera direction: [portrait lens feel], eye-level viewpoint, enough depth to keep both eyes readable. Camera terms describe the visual result, not guaranteed physical capture metadata.

4. Brand and Continuity Lock
Brand elements to preserve: [palette, materials, mood and approved logo-safe area].
Subject or product invariants: [visible traits, proportions, label details or scene elements that must remain consistent]. Do not claim an exact identity match based on prompting alone.

5. Constraints
Must include: [required elements and priority order].
Must avoid: unrequested people, duplicate objects, malformed anatomy, watermarks, invented logos and [scene-specific exclusions]. Preserve approved details; flag a conflict rather than silently substituting them.

6. Output and Finishing
Image engine: [engine or unspecified].
Aspect ratio and resolution: [desired ratio and pixel dimensions; verify engine support; if unsupported, state an alternative]. Suggested composition: 4:5.
Text in image: [exact approved words or No text].
Finishing requirements: [retouching level, natural surface detail, grain, sharpness and export format].
Later edits I will make: [crop, headline, approved logo, color adjustment or None].
Review before approval: Inspect visible reference traits, hands, eyes and natural skin texture.
```

Production tip: Use the identity reference for appearance only. Lighting and wardrobe references must not introduce another face.

Review checks:

- Inspect visible reference traits, hands, eyes and natural skin texture
- References influence only their assigned roles
- All requested invariants and exclusions have been visually inspected
- Final crop, copy space and any supplied text are reviewed at delivery size

### BRIEF-003. Catalog product shot with geometry lock

```text
Copy this brief, complete every bracket, and attach every reference image mentioned. If a required reference is missing or instructions conflict, identify the gap before producing the image.

1. Objective
Image type: catalog product shot.
Purpose and platform: [product listing or catalog].
Core visual idea: [clear faithful view of the actual item].
Target audience: [specific viewer and intended response].

2. References
Reference 1: [filename or None]. Use: [exact role and details to preserve].
Reference 2: [filename or None]. Use: [separate role, such as composition or lighting only].
Priority: [source to follow if references conflict]. Do not transfer unrelated faces, text or logos between references.

3. Art Direction
Subject or product: [product from attached reference, dimensions or relative proportions, materials and label details].
Scene and background: [plain backdrop and surface]. Show only the supplied product and [approved accessory or None].
Composition: [front or three-quarter view], centered within [margin]; full silhouette visible.
Action and expression: [static upright or approved display orientation].
Visual style: [clean commercial photography].
Color and lighting: [neutral soft light], controlled reflections; contact shadow consistent with the supporting surface.
Camera direction: [normal-to-telephoto lens feel], sufficient depth for all essential features, no exaggerated wide-angle perspective. Camera terms describe the visual result, not guaranteed physical capture metadata.

4. Brand and Continuity Lock
Brand elements to preserve: [palette, materials, mood and approved logo-safe area].
Subject or product invariants: [visible traits, proportions, label details or scene elements that must remain consistent]. Do not claim an exact identity match based on prompting alone.

5. Constraints
Must include: [required elements and priority order].
Must avoid: unrequested people, duplicate objects, malformed anatomy, watermarks, invented logos and [scene-specific exclusions]. Preserve approved details; flag a conflict rather than silently substituting them.

6. Output and Finishing
Image engine: [engine or unspecified].
Aspect ratio and resolution: [desired ratio and pixel dimensions; verify engine support; if unsupported, state an alternative]. Suggested composition: 1:1.
Text in image: [preserve supplied label wording; add no new text, or No text].
Finishing requirements: [retouching level, natural surface detail, grain, sharpness and export format].
Later edits I will make: [crop, headline, approved logo, color adjustment or None].
Review before approval: Compare silhouette, part count, label placement and colors against the source.
```

Production tip: Use real product photography when exact specifications must be demonstrated. Prompt constraints alone cannot certify accuracy.

Review checks:

- Compare silhouette, part count, label placement and colors against the source
- References influence only their assigned roles
- All requested invariants and exclusions have been visually inspected
- Final crop, copy space and any supplied text are reviewed at delivery size

### BRIEF-004. Lifestyle product scene with scale control

```text
Copy this brief, complete every bracket, and attach every reference image mentioned. If a required reference is missing or instructions conflict, identify the gap before producing the image.

1. Objective
Image type: lifestyle product image.
Purpose and platform: [campaign or product story].
Core visual idea: [realistic use moment and customer benefit].
Target audience: [specific viewer and intended response].

2. References
Reference 1: [filename or None]. Use: [exact role and details to preserve].
Reference 2: [filename or None]. Use: [separate role, such as composition or lighting only].
Priority: [source to follow if references conflict]. Do not transfer unrelated faces, text or logos between references.

3. Art Direction
Subject or product: [reference product] with [person or hands, appearance and styling].
Scene and background: [credible environment, supporting surface and no more than two useful props].
Composition: [product placement and interaction], clear focal priority, [copy zone]; preserve a believable size relative to [known object].
Action and expression: [specific interaction with plausible grip, contact and body mechanics].
Visual style: [natural lifestyle editorial].
Color and lighting: [motivated window or practical key], shared shadow direction and matched color temperature.
Camera direction: [normal lens feel], [viewpoint], enough focus to show product use clearly. Camera terms describe the visual result, not guaranteed physical capture metadata.

4. Brand and Continuity Lock
Brand elements to preserve: [palette, materials, mood and approved logo-safe area].
Subject or product invariants: [visible traits, proportions, label details or scene elements that must remain consistent]. Do not claim an exact identity match based on prompting alone.

5. Constraints
Must include: [required elements and priority order].
Must avoid: unrequested people, duplicate objects, malformed anatomy, watermarks, invented logos and [scene-specific exclusions]. Preserve approved details; flag a conflict rather than silently substituting them.

6. Output and Finishing
Image engine: [engine or unspecified].
Aspect ratio and resolution: [desired ratio and pixel dimensions; verify engine support; if unsupported, state an alternative]. Suggested composition: 4:5.
Text in image: [exact approved wording or No text].
Finishing requirements: [retouching level, natural surface detail, grain, sharpness and export format].
Later edits I will make: [crop, headline, approved logo, color adjustment or None].
Review before approval: Check grip, product scale, contact points and lighting consistency.
```

Production tip: Specify one familiar scale anchor. Reject floating contact points or hands that obscure the product feature.

Review checks:

- Check grip, product scale, contact points and lighting consistency
- References influence only their assigned roles
- All requested invariants and exclusions have been visually inspected
- Final crop, copy space and any supplied text are reviewed at delivery size

### BRIEF-005. Material macro with surface fidelity

```text
Copy this brief, complete every bracket, and attach every reference image mentioned. If a required reference is missing or instructions conflict, identify the gap before producing the image.

1. Objective
Image type: material detail macro.
Purpose and platform: [product detail page or craft story].
Core visual idea: [one authentic material feature].
Target audience: [specific viewer and intended response].

2. References
Reference 1: [filename or None]. Use: [exact role and details to preserve].
Reference 2: [filename or None]. Use: [separate role, such as composition or lighting only].
Priority: [source to follow if references conflict]. Do not transfer unrelated faces, text or logos between references.

3. Art Direction
Subject or product: [specific seam, clasp, texture or surface from the reference].
Scene and background: [neutral support and minimal background].
Composition: One detail at [frame position]; preserve adjacent edges that explain its scale; avoid invented cutaways.
Action and expression: [static detail view].
Visual style: [tactile commercial macro photography].
Color and lighting: [raking light direction], restrained specular highlights; retain texture in bright and dark areas.
Camera direction: [macro lens feel], focus plane on [critical detail], shallow but useful depth of field. Camera terms describe the visual result, not guaranteed physical capture metadata.

4. Brand and Continuity Lock
Brand elements to preserve: [palette, materials, mood and approved logo-safe area].
Subject or product invariants: [visible traits, proportions, label details or scene elements that must remain consistent]. Do not claim an exact identity match based on prompting alone.

5. Constraints
Must include: [required elements and priority order].
Must avoid: unrequested people, duplicate objects, malformed anatomy, watermarks, invented logos and [scene-specific exclusions]. Preserve approved details; flag a conflict rather than silently substituting them.

6. Output and Finishing
Image engine: [engine or unspecified].
Aspect ratio and resolution: [desired ratio and pixel dimensions; verify engine support; if unsupported, state an alternative]. Suggested composition: 1:1.
Text in image: No text.
Finishing requirements: [retouching level, natural surface detail, grain, sharpness and export format].
Later edits I will make: [crop, headline, approved logo, color adjustment or None].
Review before approval: Inspect material grain, edges and physical construction against the reference.
```

Production tip: Choose the focus plane before requesting blur. Texture should not become invented engraving or exaggerated wear.

Review checks:

- Inspect material grain, edges and physical construction against the reference
- References influence only their assigned roles
- All requested invariants and exclusions have been visually inspected
- Final crop, copy space and any supplied text are reviewed at delivery size

### BRIEF-006. Newsletter cover with visual metaphor

```text
Copy this brief, complete every bracket, and attach every reference image mentioned. If a required reference is missing or instructions conflict, identify the gap before producing the image.

1. Objective
Image type: editorial newsletter cover.
Purpose and platform: [issue title and publication].
Core visual idea: [one metaphor for the issue argument].
Target audience: [specific viewer and intended response].

2. References
Reference 1: [filename or None]. Use: [exact role and details to preserve].
Reference 2: [filename or None]. Use: [separate role, such as composition or lighting only].
Priority: [source to follow if references conflict]. Do not transfer unrelated faces, text or logos between references.

3. Art Direction
Subject or product: [single metaphor object or scene, such as a doorway, bridge or workbench].
Scene and background: [simple setting supporting the metaphor].
Composition: [frame-within-frame or directional composition]; reserve [side and percentage] for headline; one clear focal point.
Action and expression: [stillness or one meaningful action].
Visual style: [cinematic editorial restraint].
Color and lighting: [brand palette], [one key-light source], readable subject separation and controlled contrast.
Camera direction: [wide or normal lens feel], [low or eye-level viewpoint], purposeful depth. Camera terms describe the visual result, not guaranteed physical capture metadata.

4. Brand and Continuity Lock
Brand elements to preserve: [palette, materials, mood and approved logo-safe area].
Subject or product invariants: [visible traits, proportions, label details or scene elements that must remain consistent]. Do not claim an exact identity match based on prompting alone.

5. Constraints
Must include: [required elements and priority order].
Must avoid: unrequested people, duplicate objects, malformed anatomy, watermarks, invented logos and [scene-specific exclusions]. Preserve approved details; flag a conflict rather than silently substituting them.

6. Output and Finishing
Image engine: [engine or unspecified].
Aspect ratio and resolution: [desired ratio and pixel dimensions; verify engine support; if unsupported, state an alternative]. Suggested composition: 16:9.
Text in image: No text. Add the headline and publication mark later.
Finishing requirements: [retouching level, natural surface detail, grain, sharpness and export format].
Later edits I will make: [crop, headline, approved logo, color adjustment or None].
Review before approval: Confirm the metaphor reads at thumbnail size without creating a false factual claim.
```

Production tip: Use symbolism for commentary. Avoid presenting synthetic scenes as documentary evidence of a real event.

Review checks:

- Confirm the metaphor reads at thumbnail size without creating a false factual claim
- References influence only their assigned roles
- All requested invariants and exclusions have been visually inspected
- Final crop, copy space and any supplied text are reviewed at delivery size

### BRIEF-007. Social quote background with readable hierarchy

```text
Copy this brief, complete every bracket, and attach every reference image mentioned. If a required reference is missing or instructions conflict, identify the gap before producing the image.

1. Objective
Image type: background for social quote card.
Purpose and platform: [social channel and topic].
Core visual idea: [one emotion supporting the supplied quote].
Target audience: [specific viewer and intended response].

2. References
Reference 1: [filename or None]. Use: [exact role and details to preserve].
Reference 2: [filename or None]. Use: [separate role, such as composition or lighting only].
Priority: [source to follow if references conflict]. Do not transfer unrelated faces, text or logos between references.

3. Art Direction
Subject or product: [minimal object, abstract form or restrained scene].
Scene and background: [simple low-detail background].
Composition: Reserve [percentage and position] for the quote, [credit zone] for attribution, and [margin] around both; no busy edges behind text.
Action and expression: [still composition].
Visual style: [premium minimal editorial].
Color and lighting: [limited palette], soft light and even luminance in the text zone.
Camera direction: [flat graphic or normal lens feel], avoid excessive perspective. Camera terms describe the visual result, not guaranteed physical capture metadata.

4. Brand and Continuity Lock
Brand elements to preserve: [palette, materials, mood and approved logo-safe area].
Subject or product invariants: [visible traits, proportions, label details or scene elements that must remain consistent]. Do not claim an exact identity match based on prompting alone.

5. Constraints
Must include: [required elements and priority order].
Must avoid: unrequested people, duplicate objects, malformed anatomy, watermarks, invented logos and [scene-specific exclusions]. Preserve approved details; flag a conflict rather than silently substituting them.

6. Output and Finishing
Image engine: [engine or unspecified].
Aspect ratio and resolution: [desired ratio and pixel dimensions; verify engine support; if unsupported, state an alternative]. Suggested composition: 4:5.
Text in image: No text. I will add [exact quote] and [approved attribution] in a layout editor.
Finishing requirements: [retouching level, natural surface detail, grain, sharpness and export format].
Later edits I will make: [crop, headline, approved logo, color adjustment or None].
Review before approval: Check copy-zone contrast and final quote attribution in the finished layout.
```

Production tip: Use a layout editor for reliable typography. Test the final composition at phone size after placing the actual quote.

Review checks:

- Check copy-zone contrast and final quote attribution in the finished layout
- References influence only their assigned roles
- All requested invariants and exclusions have been visually inspected
- Final crop, copy space and any supplied text are reviewed at delivery size

### BRIEF-008. Video thumbnail with one focal story

```text
Copy this brief, complete every bracket, and attach every reference image mentioned. If a required reference is missing or instructions conflict, identify the gap before producing the image.

1. Objective
Image type: video thumbnail image.
Purpose and platform: [video title, audience and channel].
Core visual idea: [one truthful tension or question from the video].
Target audience: [specific viewer and intended response].

2. References
Reference 1: [filename or None]. Use: [exact role and details to preserve].
Reference 2: [filename or None]. Use: [separate role, such as composition or lighting only].
Priority: [source to follow if references conflict]. Do not transfer unrelated faces, text or logos between references.

3. Art Direction
Subject or product: [one face, object or tool tied to the video content].
Scene and background: [simple context, no distracting props].
Composition: [dominant subject position], strong separation, reserve [short headline zone]; keep essential content clear of [platform overlay zone].
Action and expression: [one readable expression or action, no exaggerated misleading reaction].
Visual style: [bold but credible editorial].
Color and lighting: [controlled high contrast and limited palette], highlights support the focal subject.
Camera direction: [close or medium framing], clear silhouette, minimal depth clutter. Camera terms describe the visual result, not guaranteed physical capture metadata.

4. Brand and Continuity Lock
Brand elements to preserve: [palette, materials, mood and approved logo-safe area].
Subject or product invariants: [visible traits, proportions, label details or scene elements that must remain consistent]. Do not claim an exact identity match based on prompting alone.

5. Constraints
Must include: [required elements and priority order].
Must avoid: unrequested people, duplicate objects, malformed anatomy, watermarks, invented logos and [scene-specific exclusions]. Preserve approved details; flag a conflict rather than silently substituting them.

6. Output and Finishing
Image engine: [engine or unspecified].
Aspect ratio and resolution: [desired ratio and pixel dimensions; verify engine support; if unsupported, state an alternative]. Suggested composition: 16:9.
Text in image: No text. Add [short approved headline] later.
Finishing requirements: [retouching level, natural surface detail, grain, sharpness and export format].
Later edits I will make: [crop, headline, approved logo, color adjustment or None].
Review before approval: Check the story remains readable when reduced to a small preview.
```

Production tip: Test the preview with the final title. Avoid false before-and-after results or content the video does not show.

Review checks:

- Check the story remains readable when reduced to a small preview
- References influence only their assigned roles
- All requested invariants and exclusions have been visually inspected
- Final crop, copy space and any supplied text are reviewed at delivery size

### BRIEF-009. Training scenario illustration from approved process

```text
Copy this brief, complete every bracket, and attach every reference image mentioned. If a required reference is missing or instructions conflict, identify the gap before producing the image.

1. Objective
Image type: training scenario illustration.
Purpose and platform: [learning objective and module].
Core visual idea: [one approved action learners must recognize].
Target audience: [specific viewer and intended response].

2. References
Reference 1: [filename or None]. Use: [exact role and details to preserve].
Reference 2: [filename or None]. Use: [separate role, such as composition or lighting only].
Priority: [source to follow if references conflict]. Do not transfer unrelated faces, text or logos between references.

3. Art Direction
Subject or product: [role, approved equipment, PPE and visible objects from the supplied procedure].
Scene and background: [work area and approved layout]. Do not invent controls, labels or hazards.
Composition: [single scenario and viewing angle], unobstructed view of [critical action]; reserve [callout zone].
Action and expression: [one procedure step copied from the approved source, not inferred].
Visual style: [clear instructional illustration with simplified background].
Color and lighting: [neutral palette with specified emphasis color], even lighting and clear object separation.
Camera direction: [straightforward viewpoint], sufficient depth to show relevant interactions. Camera terms describe the visual result, not guaranteed physical capture metadata.

4. Brand and Continuity Lock
Brand elements to preserve: [palette, materials, mood and approved logo-safe area].
Subject or product invariants: [visible traits, proportions, label details or scene elements that must remain consistent]. Do not claim an exact identity match based on prompting alone.

5. Constraints
Must include: [required elements and priority order].
Must avoid: unrequested people, duplicate objects, malformed anatomy, watermarks, invented logos and [scene-specific exclusions]. Preserve approved details; flag a conflict rather than silently substituting them.

6. Output and Finishing
Image engine: [engine or unspecified].
Aspect ratio and resolution: [desired ratio and pixel dimensions; verify engine support; if unsupported, state an alternative]. Suggested composition: 16:9.
Text in image: No text. Add reviewed labels and step numbers in the training layout.
Finishing requirements: [retouching level, natural surface detail, grain, sharpness and export format].
Later edits I will make: [crop, headline, approved logo, color adjustment or None].
Review before approval: A subject-matter expert must verify equipment, PPE, action and sequence against the approved procedure.
```

Production tip: Use this for supporting illustrations. Create exact technical diagrams and safety instructions with controlled source assets and expert review.

Review checks:

- A subject-matter expert must verify equipment, PPE, action and sequence against the approved procedure
- References influence only their assigned roles
- All requested invariants and exclusions have been visually inspected
- Final crop, copy space and any supplied text are reviewed at delivery size

### BRIEF-010. Single-change edit with protected details

```text
Copy this brief, complete every bracket, and attach every reference image mentioned. If a required reference is missing or instructions conflict, identify the gap before producing the image.

1. Objective
Image type: controlled edit of an approved image.
Purpose and platform: [asset and requested correction].
Core visual idea: [one improvement while preserving the approved composition].
Target audience: [specific viewer and intended response].

2. References
Reference 1: [filename or None]. Use: [exact role and details to preserve].
Reference 2: [filename or None]. Use: [separate role, such as composition or lighting only].
Priority: [source to follow if references conflict]. Do not transfer unrelated faces, text or logos between references.

3. Art Direction
Subject or product: [subject or product in the attached base image].
Scene and background: Keep the existing scene; change only [named region or element].
Composition: Keep original framing, subject position, scale and copy space. Apply [change] only inside [region].
Action and expression: Preserve the original pose and expression unless they are the named change.
Visual style: Match the existing style.
Color and lighting: Match the existing key direction, shadow softness and reflections; preserve color outside the edit region.
Camera direction: Preserve existing viewpoint, perspective and depth of field. Camera terms describe the visual result, not guaranteed physical capture metadata.

4. Brand and Continuity Lock
Brand elements to preserve: [palette, materials, mood and approved logo-safe area].
Subject or product invariants: [visible traits, proportions, label details or scene elements that must remain consistent]. Do not claim an exact identity match based on prompting alone.

5. Constraints
Must include: [required elements and priority order].
Must avoid: unrequested people, duplicate objects, malformed anatomy, watermarks, invented logos and [scene-specific exclusions]. Preserve approved details; flag a conflict rather than silently substituting them.

6. Output and Finishing
Image engine: [engine or unspecified].
Aspect ratio and resolution: [desired ratio and pixel dimensions; verify engine support; if unsupported, state an alternative]. Suggested composition: match the base image.
Text in image: [preserve existing text exactly, or No text].
Finishing requirements: [retouching level, natural surface detail, grain, sharpness and export format].
Later edits I will make: [crop, headline, approved logo, color adjustment or None].
Review before approval: Compare before and after at full size for unintended changes outside the requested region.
```

Production tip: Change one variable per iteration. If a mask is supported, use it as an additional control and still inspect the entire result.

Review checks:

- Compare before and after at full size for unintended changes outside the requested region
- References influence only their assigned roles
- All requested invariants and exclusions have been visually inspected
- Final crop, copy space and any supplied text are reviewed at delivery size

