import os
import re
import glob

directory = r"d:\code\study\remotion_test\src\components\templates"
# Regex to match "content": [ "text1", "text2" ] or content: [ 'text1', 'text2' ]
# It could also match across multiple lines
# We want to catch the array items that are strings and convert them to { "text": "..." }

def convert_to_object_array(match):
    content_key = match.group(1)
    array_content = match.group(2)
    
    # Extract all strings from the array content, considering both " and '
    # This matches string literals in the array
    # Note: we need to handle potential escaped quotes
    def get_strs(s):
        # Very simple string extractor, assumes no internal escaped quotes for common examples
        # Or reasonably handle them if they exist
        out = []
        # Match "..." or '...'
        matches = re.finditer(r'["\']([^"\']*)["\']', s)
        for m in matches:
            out.append(m.group(1))
        return out

    strings = get_strs(array_content)
    if not strings:
        # If no strings found, maybe it's already an object array or empty
        if '{' in array_content:
            return match.group(0) # Likely already objects
        return match.group(0)

    # Reconstruct the array
    new_items = [f'{{ "text": "{s}" }}' for s in strings]
    # Use double quotes for the key to be consistent with JSON-like structure in TSX
    new_key = content_key if '"' in content_key else f'"{content_key}"'
    return f'{new_key}: [{", ".join(new_items)}]'

for filepath in glob.glob(os.path.join(directory, "*.tsx")):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Pattern: "content": [ ... strings ... ]
    # Group 1: "content" or content
    # Group 2: strictly string elements inside []
    # Using negative lookahead to ensure we don't match if it already contains {
    pattern = r'(["\']?content["\']?)\s*:\s*\[\s*((?:["\'][^"\']*["\']\s*,?\s*)+)\]'
    
    new_content = re.sub(pattern, convert_to_object_array, content)

    if new_content != content:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Fixed {os.path.basename(filepath)}")

print("Done")
