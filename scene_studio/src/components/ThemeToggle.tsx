import { useState } from "react";
import { getStoredTheme, toggleTheme, type Theme } from "../theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme());

  return (
    <button
      type="button"
      className="ghost theme-toggle"
      title={theme === "dark" ? "切换到浅色模式" : "切换到深色模式"}
      aria-label={theme === "dark" ? "切换到浅色模式" : "切换到深色模式"}
      onClick={() => setTheme(toggleTheme())}
    >
      {theme === "dark" ? "浅色" : "深色"}
    </button>
  );
}
