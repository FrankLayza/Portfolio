import { PROJECTS } from "../data/portfolioData";
import { ArrowUpRightIcon } from "./ui/arrow-up-right";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-14 border-b border-line max-[560px]:py-10">
      <div className="text-[12px] tracking-[0.08em] uppercase text-grey mb-8">
        Selected Projects
      </div>

      <div className="group/list">
        {PROJECTS.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/project block
              py-6 first:pt-0 last:pb-0
              border-b border-line last:border-b-0
              transition-[padding-left,opacity] duration-[250ms] ease-in-out
              hover:pl-2
              group-hover/list:opacity-35
              hover:!opacity-100
            "
          >
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <span className="font-serif font-medium text-[20px] tracking-[-0.005em]">
                {p.title}
              </span>
              <span
                aria-hidden="true"
                className="
                  text-[18px] text-grey shrink-0
                  transition-[transform,color] duration-200 ease-in-out
                  group-hover/project:translate-x-[3px]
                  group-hover/project:-translate-y-[3px]
                  group-hover/project:text-ink
                "
              >
                <ArrowUpRightIcon />
              </span>
            </div>

            <p className="text-[13.5px] text-grey max-w-[52ch]">{p.desc}</p>

            <span className="inline-block text-[11px] text-grey mt-[10px] tracking-[0.03em]">
              {p.tag}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
