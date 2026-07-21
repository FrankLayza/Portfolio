import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaGithub, FaTelegram, FaTwitter, FaLinkedin, FaQuoteLeft } from "react-icons/fa";
import { FiMessageSquare, FiSearch } from "react-icons/fi";
import TechStack from "./TechStack";
import ProjectPage from "./ProjectPage";
import { Link } from "react-scroll";

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "Working with Anthony felt like having an in-house senior developer. He listened, understood, and brought our vision to life better than we imagined.",
      name: "Ronald Gutierrez",
      role: "Engineering Director @ TechVentures",
    },
    {
      quote:
        "Anthony delivered our VS Code extension and Web3 integration ahead of schedule. Unmatched code quality and attention to user experience.",
      name: "Marcus Vance",
      role: "Product Lead @ NexaLabs",
    },
    {
      quote:
        "Sub-second responsiveness, immaculate typography hierarchy, and a clean engineering mindset. Truly an exceptional developer.",
      name: "Elena Rostova",
      role: "Design Lead @ StudioZero",
    },
  ];

  const skillPills = [
    "Clean Code",
    "Web Apps",
    "Dev Tools",
    "React 19",
    "TypeScript",
    "TailwindCSS",
    "AI Integration",
    "Optimization",
    "Node.js",
    "VS Code API",
  ];

  return (
    <div className="w-full font-oxanium bg-[#111111] text-white min-h-screen">
      <main className="pt-20 sm:pt-24 pb-16">
        <section
          id="home"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-8 bg-white text-[#111111] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between gap-4">
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-[#5E7A6B] p-1 flex items-center justify-center shadow-md shrink-0">
                  <div className="w-full h-full rounded-full bg-[#8BA898] flex items-center justify-center text-white font-extrabold text-xl sm:text-3xl tracking-wider">
                    AF
                  </div>
                </div>

                <Link to="contact" smooth={true} duration={500} offset={-50}>
                  <button className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#8BA898] hover:bg-[#729B7D] text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer">
                    <FiMessageSquare className="text-xs sm:text-sm" />
                    <span>Contact Me</span>
                  </button>
                </Link>
              </div>

              <div className="my-5 sm:my-6">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
                  Anthony Frank
                </h1>
                <p className="text-sm sm:text-lg font-semibold text-neutral-600 mt-1">
                  Full Stack Developer
                </p>
                <p className="text-neutral-600 text-xs sm:text-base leading-relaxed mt-3 sm:mt-4 max-w-xl">
                  Minimalist developer and dev tools engineer blending form and function. I craft high-performance web applications, API integrations, and developer tools with a modern, simple touch.
                </p>
              </div>

              <div className="relative pt-4 border-t border-neutral-200/80 overflow-hidden">
                <div className="overflow-hidden no-scrollbar w-full pr-12 sm:pr-14">
                  <div className="animate-marquee flex items-center gap-2.5">
                    {[...skillPills, ...skillPills].map((pill, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-neutral-300 bg-neutral-50 text-[11px] sm:text-xs font-semibold text-neutral-700 whitespace-nowrap shrink-0 shadow-2xs hover:border-[#8BA898] hover:bg-neutral-100 transition-colors"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to="projects" smooth={true} duration={500} offset={-50}>
                  <button className="absolute right-0 bottom-0 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#111111] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
                    <FiSearch className="text-base sm:text-lg" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#181818] border border-white/10 text-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative min-h-[280px]">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#8BA898]/15 border border-[#8BA898]/30 flex items-center justify-center text-[#8BA898] mb-5 sm:mb-6">
                  <FaQuoteLeft className="text-lg sm:text-xl" />
                </div>

                <p className="text-sm sm:text-lg font-semibold leading-relaxed text-neutral-100 font-oxanium">
                  "{testimonials[activeTestimonial].quote}"
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 flex items-end justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 pb-1">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        activeTestimonial === i
                          ? "w-6 bg-[#8BA898]"
                          : "w-2 bg-neutral-600 hover:bg-neutral-400"
                      }`}
                      aria-label={`Testimonial slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16"
        >
          <div className="mb-6 sm:mb-8 text-left">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-oxanium">
              Selected Work
            </h2>
          </div>

          <ProjectPage />
        </section>

        <section
          id="skills"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 border-t border-white/10"
        >
          <div className="mb-8 text-left">
            <span className="text-xs font-mono font-semibold text-[#8BA898] tracking-wider">
              // TECHNICAL MATRIX
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mt-1 text-white">
              Tech <span className="text-[#8BA898]">Stack</span>
            </h2>
          </div>

          <TechStack />
        </section>
      </main>

      <footer id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 border-t border-white/10">
        <h2 className="mb-6 text-2xl sm:text-3xl font-bold text-white">
          Contact <span className="text-[#8BA898]">Me</span>
        </h2>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border border-white/10 px-5 sm:px-6 py-4 sm:py-5 rounded-2xl bg-[#181818]">
          <p className="text-xs sm:text-sm text-neutral-300 text-center sm:text-left">
            Best way to reach me is through:{" "}
            <a
              href="mailto:frankez478@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:underline text-[#8BA898] font-semibold"
            >
              frankez478@gmail.com
            </a>
          </p>
          <a
            href="https://t.me/deeznutz_00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm w-full sm:w-auto justify-center"
          >
            <Button className="bg-[#8BA898] hover:bg-[#729B7D] text-white font-bold flex items-center justify-center gap-2 cursor-pointer rounded-full px-6 w-full sm:w-auto">
              <FaTelegram className="size-4" />
              Telegram
            </Button>
          </a>
        </div>

        <Separator className="my-8 opacity-20" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2 font-oxanium">
          <div className="text-left text-xs sm:text-sm text-neutral-400">
            <p className="text-neutral-400">All rights reserved.</p>
            <p className="font-semibold text-white mt-0.5">
              Anthony Frank © {new Date().getFullYear()}
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/FrankLayza"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1c1c1c] border border-white/10 hover:bg-[#282828] hover:border-[#8BA898]/40 text-neutral-300 hover:text-white flex items-center justify-center transition-all shadow-sm cursor-pointer"
              aria-label="GitHub"
            >
              <FaGithub className="text-base" />
            </a>
            <a
              href="https://t.me/deeznutz_00"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1c1c1c] border border-white/10 hover:bg-[#282828] hover:border-[#8BA898]/40 text-neutral-300 hover:text-white flex items-center justify-center transition-all shadow-sm cursor-pointer"
              aria-label="Telegram"
            >
              <FaTelegram className="text-base" />
            </a>
            <a
              href="https://github.com/FrankLayza"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1c1c1c] border border-white/10 hover:bg-[#282828] hover:border-[#8BA898]/40 text-neutral-300 hover:text-white flex items-center justify-center transition-all shadow-sm cursor-pointer"
              aria-label="Portfolio Web"
            >
              <FaTwitter className="text-base" />
            </a>
            <a
              href="https://github.com/FrankLayza"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1c1c1c] border border-white/10 hover:bg-[#282828] hover:border-[#8BA898]/40 text-neutral-300 hover:text-white flex items-center justify-center transition-all shadow-sm cursor-pointer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-base" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
