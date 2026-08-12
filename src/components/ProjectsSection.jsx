import { PROJECTS } from "../data/portfolioData";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card";

import { useState, useEffect } from "react";

const isGitHub = (url) => url?.includes("github.com");

function ProjectLink({ href, label, ogImage }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!ogImage) return;
    setLoaded(false);
    const img = new Image();
    img.src = ogImage;
    img.onload = () => setLoaded(true);
  }, [ogImage]);

  return (
    <HoverCard openDelay={50} closeDelay={100}>
      <HoverCardTrigger asChild>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-[12.5px] text-grey hover:text-ink transition-colors duration-150 
            flex items-center gap-[3px]
            data-[state=open]:text-ink data-[state=open]:underline data-[state=open]:underline-offset-4
          "
          onClick={(e) => e.stopPropagation()}
        >
          {label}
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M3.5 3H9M9 3V8.5M9 3L3 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </HoverCardTrigger>

      {ogImage && (
        <HoverCardContent
          side="bottom"
          align="end"
          sideOffset={8}
          collisionPadding={16}
          className="w-[calc(100vw-2rem)] max-w-[320px] aspect-[1200/630] p-0 overflow-hidden rounded-xl bg-[#141416] border border-white/10 shadow-2xl shadow-black/80 relative"
        >
          {/* Skeleton loading state */}
          {!loaded && (
            <div className="absolute inset-0 w-full h-full bg-[#1c1c1f] animate-pulse rounded-xl border border-white/5" />
          )}
          <img
            src={ogImage}
            alt={`${label} preview`}
            className={`w-full h-full object-cover rounded-xl transition-opacity duration-300 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setLoaded(true)}
          />
        </HoverCardContent>
      )}
    </HoverCard>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-10 sm:py-14 border-b border-line">
      <div className="text-xs tracking-[0.08em] uppercase text-grey mb-6 sm:mb-8">
        Selected Projects
      </div>

      <div className="group/list">
        {PROJECTS.map((p) => {
          const websiteHref = !isGitHub(p.href) ? p.href : null;
          const githubHref = p.github ?? (isGitHub(p.href) ? p.href : null);

          return (
            <div
              key={p.title}
              className="
                group/project
                py-5 sm:py-6 first:pt-0 last:pb-0
                border-b border-line last:border-b-0
                transition-[padding-left,opacity] duration-[250ms] ease-in-out
                hover:pl-2
                group-hover/list:opacity-35
                hover:!opacity-100
              "
            >
              {/* Title row */}
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <a
                  href={websiteHref ?? githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif font-medium text-lg sm:text-[20px] tracking-[-0.005em] hover:underline underline-offset-2"
                >
                  {p.title}
                </a>

                {/* Website / GitHub links — always visible on mobile, hover-revealed on desktop */}
                <div
                  className="
                    flex items-center gap-4 shrink-0
                    opacity-100 sm:opacity-0 sm:group-hover/project:opacity-100
                    transition-opacity duration-200
                  "
                >
                  {websiteHref && (
                    <ProjectLink href={websiteHref} label="Website" ogImage={p.ogImage} />
                  )}
                  {githubHref && (
                    <ProjectLink
                      href={githubHref}
                      label="GitHub"
                      ogImage={
                        isGitHub(githubHref)
                          ? `https://opengraph.githubassets.com/1/${githubHref.replace("https://github.com/", "")}`
                          : p.ogImage
                      }
                    />
                  )}
                </div>
              </div>

              <p className="text-xs sm:text-[13.5px] text-grey max-w-[52ch] leading-relaxed">
                {p.desc}
              </p>

              <span className="inline-block text-[11px] text-grey mt-2 sm:mt-[10px] tracking-[0.03em]">
                {p.tag}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
