import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { useTheme } from "@/components/theme-provider";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-oxanium py-4 px-4 sm:px-8 bg-[#111111]/90 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center justify-between max-w-6xl mx-auto w-full">
        {/* Brand / Logo (Left) */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          {/* Custom Nunio-like Dual Circle Icon */}
          <div className="flex items-center gap-1">
            <span className="w-4 h-4 rounded-full bg-[#729B7D]" />
            <span className="w-5 h-5 rounded-full bg-[#729B7D]/70 -ml-2" />
          </div>
          <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white group-hover:text-[#729B7D] transition-colors">
            Anthony
          </span>
        </Link>

        {/* Center Metadata Badges (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-3">
          <span className="px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-white/10 text-xs font-semibold text-neutral-300">
            Lagos / Remote
          </span>
          <span className="px-4 py-1.5 rounded-full bg-[#1c1c1c] border border-white/10 text-xs font-mono font-semibold text-white tracking-wide min-w-[95px] text-center">
            {timeStr || "12:00:00 PM"}
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-white/10 text-xs font-semibold text-neutral-300 flex items-center gap-1">
            <span>72°F</span>
            <span className="text-amber-400">☀️</span>
          </span>
        </div>

        {/* Right Action Items */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-full bg-[#1c1c1c] border border-white/10 text-white hover:bg-[#282828] transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <IoSunnyOutline className="text-lg text-amber-300" />
            ) : (
              <IoMoonOutline className="text-lg text-neutral-200" />
            )}
          </button>

          {/* My Resume CTA */}
          <a
            href="https://github.com/FrankLayza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#222222] hover:bg-[#2c2c2c] text-white border border-white/10 text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
          >
            <span>My Resume</span>
            <FiDownload className="text-xs opacity-80" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
