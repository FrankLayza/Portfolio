import { Link } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 font-bold">
        <div className="flex items-center justify-between max-w-2xl w-full mx-auto px-5 border border-[#313131] py-3 my-5 bg-[#262626] text-white rounded-4xl">
          <p className="text-xl">Frank Anthony</p>
          <ul className="flex gap-6 px-5">
            <li className="cursor-pointer">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer px-4 hover:bg-gray-700 rounded-2xl">
              <Link className='cursor-pointer text-white' to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="services" smooth={true} duration={500}>
                Services
              </Link>
            </li>
          </ul>
          <div className="flex gap-3 items-center">
            <button className="border rounded-3xl py-2 px-4 cursor-pointer">Let's chat</button>
            <FaMoon className="bg-[#e85b2a] p-3 text-white text-4xl rounded-full cursor-pointer" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
