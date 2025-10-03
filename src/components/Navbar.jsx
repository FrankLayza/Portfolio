import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import {ModeToggle} from "@/components/toggle-mode"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggler = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 font-bold font-fira">
        <div className="flex items-center justify-between max-w-2xl w-full mx-auto px-5 border bg-card py-1.5 my-5 text-foreground rounded-4xl">
          <p className="text-xl">Frank Anthony</p>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 px-5">
            <li className="cursor-pointer hover:underline">
              <Link to="home" smooth={true} duration={500} offset={0} >
                Home
              </Link>
            </li>
            <li className="cursor-pointer px-4 hover:underline rounded-2xl">
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li className="cursor-pointer hover:underline">
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
          </ul>
          <div className="flex justify-between items-center">
            <ModeToggle />
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button className="p-1.5 cursor-pointer" onClick={toggler}>
                <IoMenu className="text-3xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {open && (
          <div className="md:hidden py-6 px-5 rounded-2xl mx-5 border bg-card text-foreground animate-slideDown">
            <ul className="flex flex-col gap-4 text-lg">
              <li className="cursor-pointer hover:underline">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li className="cursor-pointer hover:underline">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>
              <li className="cursor-pointer hover:underline">
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  onClick={closeMenu}
                >
                  Skill
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
