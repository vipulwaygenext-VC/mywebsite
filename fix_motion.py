"""Remove opacity:0 from Framer Motion initial props across all components."""
import re, os, glob

files = glob.glob("src/**/*.tsx", recursive=True)
total = 0

for path in files:
    with open(path, encoding="utf-8") as f:
        src = f.read()

    original = src

    # Remove opacity: 0 from initial props (keep other props like y, x, scale)
    # Pattern: opacity: 0, followed by other props -> remove just the opacity part
    src = re.sub(r'opacity:\s*0,\s*', '', src)
    # Pattern: opacity: 0 as only prop -> remove entirely or keep empty
    src = re.sub(r'\{\s*opacity:\s*0\s*\}', '{}', src)

    # Remove opacity: 1 from animate/whileInView when it's the only change
    # (if opacity was removed from initial, no need to animate it)
    src = re.sub(r'opacity:\s*1,\s*', '', src)
    src = re.sub(r',\s*opacity:\s*1', '', src)
    src = re.sub(r'\{\s*opacity:\s*1\s*\}', '{}', src)

    # Clean up empty initial/animate/whileInView props
    src = re.sub(r'\s*initial=\{\{\s*\}\}', '', src)
    src = re.sub(r'\s*animate=\{\{\s*\}\}', '', src)
    src = re.sub(r'\s*whileInView=\{\{\s*\}\}', '', src)

    if src != original:
        with open(path, "w", encoding="utf-8") as f:
            f.write(src)
        total += 1
        print(f"Fixed: {path}")

print(f"\nDone! Fixed {total} files.")
