import json
import sys
import os

def calculate_highlight_delays(script_path):
    if not os.path.exists(script_path):
        print(f"Error: File '{script_path}' not found.")
        sys.exit(1)

    try:
        with open(script_path, 'r', encoding='utf-8') as f:
            script = json.load(f)
    except Exception as e:
        print(f"Error reading JSON file: {e}")
        sys.exit(1)

    updated_count = 0

    if 'scenes' in script:
        for scene in script['scenes']:
            if 'items' in scene:
                for item in scene['items']:
                    if 'highlight' in item and isinstance(item['highlight'], list) and 'text' in item and 'audioDuration' in item:
                        text = item['text']
                        total_duration = item['audioDuration']
                        text_length = len(text)
                        
                        delays = []
                        last_index = 0
                        
                        if text_length == 0:
                            print(f"Warning: Text is empty in scene {scene.get('sceneId', 'unknown')}")
                            item['highlightDelays'] = [0] * len(item['highlight'])
                            continue

                        for h_text in item['highlight']:
                            # Find the highlight text starting from the last found position
                            index = text.find(h_text, last_index)
                            
                            if index != -1:
                                # Calculate delay based on character position ratio
                                delay = (index / text_length) * total_duration
                                # Round to 3 decimal places
                                delays.append(round(delay, 3))
                                
                                # Update last_index to search for next occurrence
                                # Using index + 1 to find distinct occurrences (even if they overlap by one char, though unlikely for words)
                                last_index = index + 1
                            else:
                                print(f"Warning: Highlight text '{h_text}' not found in item text: '{text[:20]}...' in scene {scene.get('sceneId', 'unknown')}")
                                delays.append(0)
                        
                        item['highlightDelays'] = delays
                        updated_count += 1

    try:
        with open(script_path, 'w', encoding='utf-8') as f:
            json.dump(script, f, indent=2, ensure_ascii=False)
        print(f"Successfully updated highlight delays for {updated_count} items.")
    except Exception as e:
        print(f"Error writing to file: {e}")
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python calculate_highlight_delays.py <path-to-scene-scripts.json>")
        sys.exit(1)
        
    script_file_path = sys.argv[1]
    calculate_highlight_delays(script_file_path)
