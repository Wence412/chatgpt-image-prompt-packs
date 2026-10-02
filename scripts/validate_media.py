#!/usr/bin/env python3
"""Check card associations, metadata and repository-hosted media assets."""
import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / 'site'


def validate():
    ids = set()
    for path, key in [('prompts.json', 'prompts'), ('capability-packs-v2.json', 'packs'), ('vph-import.json', 'prompts')]:
        ids.update(card['id'] for card in json.loads((ROOT / path).read_text())[key])
    assets = json.loads((SITE / 'media-library.json').read_text())['assets']
    errors, seen = [], set()
    for asset in assets:
        name = asset.get('id', '<missing>')
        if name in seen:
            errors.append(f'Duplicate media ID: {name}')
        seen.add(name)
        for field in ['id', 'kind', 'title', 'path', 'engine', 'relationship', 'review_status', 'credit', 'source']:
            if not asset.get(field):
                errors.append(f'{name}: missing {field}')
        linked = asset.get('prompt_ids', [])
        if not linked or len(linked) != len(set(linked)) or set(linked) - ids:
            errors.append(f'{name}: invalid card associations')
        kind = asset.get('kind')
        if kind not in {'image', 'pdf'}:
            errors.append(f'{name}: invalid kind')
        if kind == 'image':
            for field in ['alt', 'original_prompt', 'review_note', 'preview_path']:
                if not asset.get(field):
                    errors.append(f'{name}: missing {field}')
            if asset.get('tested') is not False:
                errors.append(f'{name}: related references must not certify linked recipes')
            if any(not isinstance(asset.get(x), int) or asset[x] <= 0 for x in ['width', 'height']):
                errors.append(f'{name}: invalid dimensions')
        for field in ['path', 'preview_path']:
            path = asset.get(field)
            if not path:
                continue
            pattern = r'assets/images/[a-z0-9-]+\.webp' if kind == 'image' else r'assets/pdfs/[a-z0-9-]+\.pdf'
            if not re.fullmatch(pattern, path):
                errors.append(f'{name}: unsafe or unsupported {field}')
                continue
            file = SITE / path
            if not file.is_file():
                errors.append(f'{name}: missing {path}')
                continue
            data = file.read_bytes()
            if kind == 'pdf' and not data.startswith(b'%PDF-'):
                errors.append(f'{name}: invalid PDF signature')
            if kind == 'image' and not (data[:4] == b'RIFF' and data[8:12] == b'WEBP'):
                errors.append(f'{name}: invalid WebP signature')
            expected = asset.get('asset_hashes', {}).get(field)
            if expected != hashlib.sha256(data).hexdigest():
                errors.append(f'{name}: asset checksum mismatch for {field}')
    return errors, assets


if __name__ == '__main__':
    errors, assets = validate()
    if errors:
        print('\n'.join(errors), file=sys.stderr)
        sys.exit(1)
    print(f"Validated {sum(a['kind'] == 'image' for a in assets)} images, {sum(a['kind'] == 'pdf' for a in assets)} PDFs, card associations, provenance labels and asset checksums.")
