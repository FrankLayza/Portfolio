import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaGithub, FaTelegram, FaQuoteLeft } from "react-icons/fa";
import { FiMessageSquare, FiSearch } from "react-icons/fi";
import TechStack from "./TechStack";
import ProjectPage from "./ProjectPage";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const MotionButton = motion(Button);

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
      <main className="pt-24 pb-16">
        {/* ========================================================= */}
        {/* HERO SECTION: STRUCTURED REFERENCE LAYOUT */}
        {/* ========================================================= */}
        <section
          id="home"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* ------------------------------------------------------- */}
            {/* LEFT MAIN PROFILE CARD (LIGHT BG - #FFFFFF) */}
            {/* ------------------------------------------------------- */}
            <div className="lg:col-span-8 bg-white text-[#111111] rounded-[32px] p-6 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              {/* Card Header (Avatar + Contact Button) */}
              <div className="flex items-center justify-between gap-4">
                {/* Profile Avatar Frame */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#5E7A6B] p-1 flex items-center justify-center shadow-md">
                  <div className="w-full h-full rounded-full bg-[#729B7D] flex items-center justify-center text-white font-extrabold text-2xl sm:text-3xl tracking-wider">
                    AF
                  </div>
                </div>

                {/* Contact Me CTA Pill */}
                <Link to="contact" smooth={true} duration={500} offset={-50}>
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#729B7D] hover:bg-[#5d8267] text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer">
                    <FiMessageSquare className="text-sm" />
                    <span>Contact Me</span>
                  </button>
                </Link>
              </div>

              {/* Main Content Info */}
              <div className="my-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight">
                  Anthony Frank
                </h1>
                <p className="text-base sm:text-lg font-semibold text-neutral-600 mt-1">
                  Senior Full Stack Developer & Dev Tools Engineer
                </p>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mt-4 max-w-xl">
                  Minimalist developer and dev tools engineer blending form and function. I craft high-performance web applications, API integrations, and developer tools with a modern, simple touch.
                </p>
              </div>

              {/* Bottom Infinite Marquee / Skill Pills Row */}
              <div className="relative pt-4 border-t border-neutral-200/80 overflow-hidden">
                <div className="overflow-hidden no-scrollbar w-full pr-14">
                  <div className="animate-marquee flex items-center gap-2.5">
                    {[...skillPills, ...skillPills].map((pill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full border border-neutral-300 bg-neutral-50 text-xs font-semibold text-neutral-700 whitespace-nowrap shrink-0 shadow-2xs hover:border-[#729B7D] hover:bg-neutral-100 transition-colors"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Floating Action Button (Bottom Right) */}
                <Link to="projects" smooth={true} duration={500} offset={-50}>
                  <button className="absolute right-0 bottom-0 z-10 w-11 h-11 rounded-full bg-[#111111] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
                    <FiSearch className="text-lg" />
                  </button>
                </Link>
              </div>
            </div>

            {/* ------------------------------------------------------- */}
            {/* RIGHT TESTIMONIAL CARD (DARK BG - #181818) */}
            {/* ------------------------------------------------------- */}
            <div className="lg:col-span-4 bg-[#181818] border border-white/10 text-white rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
              <div>
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-2xl bg-[#729B7D]/15 border border-[#729B7D]/30 flex items-center justify-center text-[#729B7D] mb-6">
                  <FaQuoteLeft className="text-xl" />
                </div>

                {/* Testimonial Quote Text */}
                <p className="text-base sm:text-lg font-semibold leading-relaxed text-neutral-100 font-oxanium">
                  "{testimonials[activeTestimonial].quote}"
                </p>
              </div>

              {/* Author Info & Pagination Dots */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-end justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>

                {/* Interactive Carousel Dots */}
                <div className="flex items-center gap-1.5 pb-1">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        activeTestimonial === i
                          ? "w-6 bg-[#729B7D]"
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

        {/* ========================================================= */}
        {/* SECTION 01: NOTABLE PROJECTS */}
        {/* ========================================================= */}
        <section
          id="projects"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <div className="mb-10 text-left">
            <span className="text-xs font-mono font-semibold text-[#729B7D] tracking-wider">
              // WORK SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-1 text-white">
              Notable <span className="text-[#729B7D]">Projects</span>
            </h2>
          </div>

          <ProjectPage />
        </section>

        {/* ========================================================= */}
        {/* SECTION 02: TECH STACK */}
        {/* ========================================================= */}
        <section
          id="skills"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10"
        >
          <div className="mb-10 text-left">
            <span className="text-xs font-mono font-semibold text-[#729B7D] tracking-wider">
              // TECHNICAL MATRIX
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-1 text-white">
              Tech <span className="text-[#729B7D]">Stack</span>
            </h2>
          </div>

          <TechStack />
        </section>
      </main>

      {/* ========================================================= */}
      {/* FOOTER & CONTACT */}
      {/* ========================================================= */}
      <footer id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
        <h2 className="mb-6 text-3xl font-bold text-white">
          Contact <span className="text-[#729B7D]">Me</span>
        </h2>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border border-white/10 px-6 py-5 rounded-2xl bg-[#181818]">
          <p className="text-xs sm:text-sm text-neutral-300">
            Best way to reach me is through:{" "}
            <a
              href="mailto:frankez478@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:underline text-[#729B7D] font-semibold"
            >
              frankez478@gmail.com
            </a>
          </p>
          <a
            href="https://t.me/deeznutz_00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm"
          >
            <Button className="bg-[#729B7D] hover:bg-[#5d8267] text-white font-bold flex items-center gap-2 cursor-pointer rounded-full px-6">
              <FaTelegram className="size-4" />
              Telegram
            </Button>
          </a>
        </div>
        
        <Separator className="my-8 opacity-20" />
        
        <div className="text-center text-xs text-neutral-400">
          Built by{" "}
          <a
            href="https://github.com/FrankLayza"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-white font-semibold"
          >
            Anthony Frank
          </a>{" "}
          with React v19, Oxanium & TailwindCSS
        </div>
      </footer>
    </div>
  );
};

export default Home;
