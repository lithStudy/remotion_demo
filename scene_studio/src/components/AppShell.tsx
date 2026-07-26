import type { ReactNode } from "react";
import { ThemeToggle } from "./ThemeToggle";

type Props = {
  title?: string;
  subtitle?: string;
  onBack?: () => void;
  backLabel?: string;
  actions?: ReactNode;
  children: ReactNode;
  error?: string | null;
};

export function AppShell({
  title = "Scene Studio",
  subtitle,
  onBack,
  backLabel = "返回",
  actions,
  children,
  error,
}: Props) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-main">
          {onBack ? (
            <button type="button" className="topbar-back" onClick={onBack}>
              ← {backLabel}
            </button>
          ) : null}
          <div className="topbar-titles">
            <h1 className="topbar-title">{title}</h1>
            {subtitle ? <p className="topbar-sub">{subtitle}</p> : null}
          </div>
        </div>
        <div className="topbar-actions">
          <ThemeToggle />
          {actions}
        </div>
      </header>
      {error ? <div className="banner-error">{error}</div> : null}
      <main className="app-main">{children}</main>
    </div>
  );
}
