import { FiArrowUpRight } from "react-icons/fi";

const Index = ({ title, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full h-[270px] sm:h-[285px] rounded-[32px] bg-[#E3E6E4] border-[3px] border-transparent hover:border-[#8BA898] transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer shadow-xs hover:shadow-2xl"
    >
      {/* Upper Screenshot Area - Perfectly Centered, Static Image */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-7 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-[175px] sm:max-h-[190px] w-auto h-auto object-contain mx-auto my-auto rounded-xl drop-shadow-md"
        />
      </div>

      {/* Bottom Area (Fixed height container) */}
      <div className="w-full relative min-h-[68px] sm:min-h-[72px] flex items-center">
        {/* Full-width Green Hover Banner (Slides UP from bottom on Hover) */}
        <div className="absolute inset-0 bg-[#8BA898] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex items-center justify-center px-6 pr-20 rounded-b-[28px] z-10">
          <span className="font-bold text-lg sm:text-xl text-[#111111] font-oxanium tracking-tight truncate text-center w-full">
            {title}
          </span>
        </div>

        {/* Circular Arrow Button (Anchored in bottom-right corner; background & icon color shift on hover) */}
        <div className="absolute right-4 bottom-3 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#8BA898] text-[#111111] group-hover:bg-[#111111] group-hover:text-white flex items-center justify-center shadow-md transition-colors duration-300">
          <FiArrowUpRight className="text-xl sm:text-2xl" />
        </div>
      </div>
    </a>
  );
};

export default Index;
