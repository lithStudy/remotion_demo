from ast import main
import re

from narrator_pipeline.common.llm_utils import generate_with_retry, parse_json_from_response
from .prompt_loader import load_prompt, render_prompt



def analyze_scenes(client, model: str, text: str, append_ai_log=None) -> dict:
    prompt_template = load_prompt("scene_step.md")
    prompt = render_prompt(prompt_template, {"TEXT": text})
    print("   正在拆解场景 (Scenes)...")
    resp = generate_with_retry(client, model, prompt, append_ai_log=append_ai_log)
    result = parse_json_from_response(resp.text)

    return result

