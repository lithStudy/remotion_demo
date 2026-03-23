import os
import re

dir_path = r"d:\code\study\remotion_test\src\components\templates"
files = [f for f in os.listdir(dir_path) if f.endswith('.tsx')]

for f in files:
    if f == "TemplateContentRenderer.tsx":
        continue
    p = os.path.join(dir_path, f)
    with open(p, 'r', encoding='utf-8') as file:
        text = file.read()
    
    # Regex for "content": [ "string1", "string2" ]
    # Handles both single quotes and double quotes if they appear consistently
    # But mostly double quotes in our project.
    
    pattern = r'("content"|content)\s*:\s*\[\s*("[^"]+"(?:\s*,\s*"[^"]+")*)\s*\]'
    
    def repl(m):
        key = m.group(1)
        items = m.group(2).split(",")
        new_items = []
        for item in items:
            clean_item = item.strip()
            new_items.append(f'{{ "text": {clean_item} }}')
        return f'{key}: [{", ".join(new_items)}]'

    new_text = re.sub(pattern, repl, text)
    
    if new_text != text:
        with open(p, 'w', encoding='utf-8') as file:
            file.write(new_text)
        print(f"Fixed {f}")
    else:
        # Try a version for multi-line if any
        pattern_multiline = r'("content"|content)\s*:\s*\[\s*([^\]]+)\]'
        def repl_ml(m):
            key = m.group(1)
            raw_items = m.group(2)
            # Find all double quoted strings
            matches = re.findall(r'"([^"]*)"', raw_items)
            if not matches:
                return m.group(0)
            # If any match already looks like an object, skip
            if "{" in raw_items:
                return m.group(0)
            
            new_items = [f'{{ "text": "{item}" }}' for item in matches]
            return f'{key}: [{", ".join(new_items)}]'
        
        new_text_ml = re.sub(pattern_multiline, repl_ml, text, flags=re.DOTALL)
        if new_text_ml != text:
            with open(p, 'w', encoding='utf-8') as file:
                file.write(new_text_ml)
            print(f"Fixed {f} (multi-line)")

print("Script execution finished.")
