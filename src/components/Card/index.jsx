import { FiArrowUpRight } from "react-icons/fi";

const Index = ({ title, description, image, link, tags }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-[28px] bg-[#E3E6E4] hover:bg-[#D7DDD7] transition-all duration-300 overflow-hidden h-[340px] flex flex-col justify-between p-6 border border-neutral-300/40 shadow-xs hover:shadow-2xl cursor-pointer"
    >
      {/* Center Screenshot Container */}
      <div className="flex-1 flex items-center justify-center relative p-3 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-contain max-h-[200px] w-auto rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Bottom Row / Hover Banner Area */}
      <div className="relative w-full mt-auto pt-2">
        <div className="flex items-center justify-between w-full relative z-10">
          {/* Project Title Banner (Reveals on Hover) */}
          <div className="flex-1 mr-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-[#729B7D] text-[#111111] font-bold px-5 py-3 rounded-2xl text-sm sm:text-base font-oxanium shadow-sm truncate">
            {title}
          </div>

          {/* Circular Arrow Button */}
          <div className="w-12 h-12 shrink-0 rounded-full bg-[#729B7D] text-[#111111] group-hover:bg-[#111111] group-hover:text-[#729B7D] flex items-center justify-center transition-all duration-300 shadow-md ml-auto">
            <FiArrowUpRight className="text-2xl transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default Index;
