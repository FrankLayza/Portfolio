import { Link } from "react-scroll";
import { useState } from "react";
import { IoMoonOutline, IoSunnyOutline, IoMenu, IoClose } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { useTheme } from "@/components/theme-provider";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-oxanium py-3.5 px-4 sm:px-8 bg-[#111111]/90 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center justify-between max-w-6xl mx-auto w-full">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="flex items-center gap-1">
            <span className="w-4 h-4 rounded-full bg-[#8BA898]" />
            <span className="w-5 h-5 rounded-full bg-[#8BA898]/70 -ml-2" />
          </div>
          <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white group-hover:text-[#8BA898] transition-colors">
            Anthony
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 px-6 py-2 rounded-full bg-[#1c1c1c]/80 border border-white/10 text-sm font-semibold">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-100}
              className="text-neutral-300 hover:text-[#8BA898] transition-colors cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-50}
              className="text-neutral-300 hover:text-[#8BA898] transition-colors cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-50}
              className="text-neutral-300 hover:text-[#8BA898] transition-colors cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-50}
              className="text-neutral-300 hover:text-[#8BA898] transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 sm:p-2.5 rounded-full bg-[#1c1c1c] border border-white/10 text-white hover:bg-[#282828] transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <IoSunnyOutline className="text-base sm:text-lg text-amber-300" />
            ) : (
              <IoMoonOutline className="text-base sm:text-lg text-neutral-200" />
            )}
          </button>

          <a
            href="https://github.com/FrankLayza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#222222] hover:bg-[#2c2c2c] text-white border border-white/10 text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
          >
            <span>My Resume</span>
            <FiDownload className="text-xs opacity-80" />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full bg-[#1c1c1c] border border-white/10 text-white hover:bg-[#282828] transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <IoClose className="text-xl" /> : <IoMenu className="text-xl" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-3 max-w-6xl mx-auto py-4 px-6 rounded-2xl border border-white/10 bg-[#1c1c1c] text-white shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-3 text-base font-semibold">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-100}
                onClick={closeMenu}
                className="block py-1 hover:text-[#8BA898] transition-colors cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-50}
                onClick={closeMenu}
                className="block py-1 hover:text-[#8BA898] transition-colors cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                offset={-50}
                onClick={closeMenu}
                className="block py-1 hover:text-[#8BA898] transition-colors cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-50}
                onClick={closeMenu}
                className="block py-1 hover:text-[#8BA898] transition-colors cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
