import { Link } from "react-scroll";
import { FaMoon } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggler = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 font-bold">
        <div className="flex items-center justify-between max-w-2xl w-full mx-auto px-5 border border-[#313131] py-3 my-5 bg-[#262626] text-white rounded-4xl">
          <p className="text-xl">Frank Anthony</p>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 px-5">
            <li className="cursor-pointer">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer px-4 hover:bg-gray-700 rounded-2xl">
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="services" smooth={true} duration={500}>
                Services
              </Link>
            </li>
          </ul>

          <div className="hidden md:flex gap-3 items-center">
            <button className="border rounded-3xl py-2 px-4 cursor-pointer">
              Let's chat
            </button>
            <FaMoon className="bg-[#e85b2a] p-3 text-white text-4xl rounded-full cursor-pointer" />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button className="p-1.5 cursor-pointer" onClick={toggler}>
              <BiMenu className="text-3xl" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {open && (
          <div className="md:hidden bg-[#262626] text-white py-6 px-5 rounded-2xl mx-5 border border-[#313131] animate-slideDown">
            <ul className="flex flex-col gap-4 text-lg">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  onClick={closeMenu}
                >
                  Services
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
