"use client";

import { useEffect, useState } from "react";
import { Sun, MoonStar } from "lucide-react";

type Theme = "light" | "dark";

export function ToggleModeColor() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";

    return (localStorage.getItem("theme") as Theme) ?? "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema"
      className="
        fixed bottom-3 left-1/2 -translate-x-1/2
        z-50

        w-16 h-12
        rounded-xl

        bg-white/10 dark:bg-zinc-900/30
        backdrop-blur-xs
        border border-white/30 dark:border-white/10

        shadow-lg shadow-black/20
        flex items-center justify-center

        transition-all duration-300
        hover:scale-105 active:scale-95

      "
    >
      {theme === "light" ? (
        <Sun className="rotate-0 scale-100 dark:-rotate-90 dark:scale-0 transition-all text-yellow-500" />
      ) : (
        <MoonStar className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all text-indigo-900" />
      )}
    </button>
  );
}
