import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useCallback } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Determine actual theme
  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const effectiveTheme =
    theme === "system" ? (prefersDark ? "dark" : "light") : theme;

  const toggleTheme = useCallback(() => {
    const next = effectiveTheme === "light" ? "dark" : "light";
    setTheme(next);
  }, [effectiveTheme, setTheme]);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
      className="relative rounded-full cursor-pointer overflow-hidden"
    >
      {/* Sun */}
      <Sun
        className={`h-[1.0rem] w-[1.0rem] transition-all text-black duration-300 ${
          effectiveTheme === "light"
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 rotate-90 scale-0"
        }`}
      />

      {/* Moon */}
      <Moon
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1.0rem] w-[1.0rem] transition-all duration-300 ${
          effectiveTheme === "dark"
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 rotate-90 scale-0"
        }`}
      />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
