import { FiArrowUpRight } from "react-icons/fi";

const Index = ({ title, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full h-[260px] sm:h-[275px] rounded-[28px] bg-[#E3E6E4] border-[3px] border-transparent hover:border-[#8BA898] transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer shadow-xs hover:shadow-2xl"
    >
      {/* Upper Screenshot Area - Perfectly Centered */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-5 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-full object-contain mx-auto my-auto rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Bottom Area (Proportional 64px-70px height) */}
      <div className="w-full relative min-h-[64px] sm:min-h-[70px] flex items-center">
        {/* Full-width Green Hover Banner (Fades in on Hover) */}
        <div className="absolute inset-0 bg-[#8BA898] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-5 pr-16">
          <span className="font-bold text-lg sm:text-xl text-[#111111] font-oxanium tracking-tight truncate text-center w-full">
            {title}
          </span>
        </div>

        {/* Circular Arrow Button (Anchored at exact right-4 bottom-3 position) */}
        <div className="absolute right-4 bottom-3 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#8BA898] text-[#111111] group-hover:bg-[#111111] group-hover:text-white flex items-center justify-center shadow-md transition-colors duration-300">
          <FiArrowUpRight className="text-xl sm:text-2xl transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </a>
  );
};

export default Index;
