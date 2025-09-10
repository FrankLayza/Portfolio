import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useCallback } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const effectiveTheme = theme === "system" ? (prefersDark ? "dark" : "light") : theme;

  const toggleTheme = useCallback(() => {
    try {
      const next = effectiveTheme === "light" ? "dark" : "light";
      setTheme(next);
    } catch {
      setTheme(theme === "light" ? "dark" : "light");
    }
  }, [effectiveTheme, theme, setTheme]);

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full cursor-pointer relative"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          effectiveTheme === "light" ? "scale-100 rotate-0" : "scale-0 rotate-90"
        }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
          effectiveTheme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
