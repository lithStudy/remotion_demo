from pathlib import Path


def load_prompt(prompt_name: str) -> str:
    prompt_dir = Path(__file__).resolve().parent.parent / "prompts" / "step1"
    prompt_path = prompt_dir / prompt_name
    with open(prompt_path, "r", encoding="utf-8") as f:
        return f.read()


def render_prompt(template: str, replacements: dict[str, str]) -> str:
    rendered = template
    for key, value in replacements.items():
        rendered = rendered.replace(f"__{key}__", value)
    return rendered
