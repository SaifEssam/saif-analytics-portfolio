"use client";

import { Icon } from "./icon";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const current = root.dataset.theme || "dark";
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
  }

  return (
    <button className="icon-button theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle color theme">
      <span className="theme-icon theme-icon-dark"><Icon name="sun" size={18} /></span>
      <span className="theme-icon theme-icon-light"><Icon name="moon" size={18} /></span>
    </button>
  );
}
