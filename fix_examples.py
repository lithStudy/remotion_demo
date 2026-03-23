import os
import re
import glob

directory = r"d:\code\study\remotion_test\src\components\templates"
for filepath in glob.glob(os.path.join(directory, "*.tsx")):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Match "content": ["text1", "text2"]
    # We use a pattern to match the list array elements
    def replacer(match):
        arr_str = match.group(1)
        # Parse the strings, this implies JSON array without the brackets
        # Let's cleanly just match "something" and replace with { "text": "something" }
        elements = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"', arr_str)
        if not elements:
            return match.group(0)
        
        objs = [f'{{ "text": "{el}" }}' for el in elements]
        return f'"content": [{", ".join(objs)}]'

    # match "content": ["xxx", "yyy"]
    new_content = re.sub(r'"content"\s*:\s*\[([^\]]+)\]', replacer, content)

    # Some templates might use `content: ["xxx"]` without quotes on `content`
    new_content = re.sub(r'content\s*:\s*\[([^\]]+)\]', replacer, new_content)

    if new_content != content:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated {os.path.basename(filepath)}")

print("Done")
