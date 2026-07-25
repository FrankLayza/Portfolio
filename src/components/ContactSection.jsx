import { CONTACTS } from "../data/portfolioData";
import { ArrowUpRightIcon } from "./ui/arrow-up-right";

export default function ContactSection() {
  return (
    <section id="contact" className="py-14 max-[560px]:py-10">
      <div className="text-[12px] tracking-[0.08em] uppercase text-grey mb-8">
        Contact
      </div>

      <div className="flex flex-col">
        {CONTACTS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            className="
              group/contact flex items-center justify-between
              py-4 border-b border-line last:border-b-0
              text-[15px]
              transition-[padding-left] duration-200 ease-in-out
              hover:pl-2
            "
            target={c.href.startsWith("mailto") ? undefined : "_blank"}
            rel={c.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
          >
            <span className="font-serif text-[17px]">{c.label}</span>
            <span
              aria-hidden="true"
              className="
                text-grey
                transition-[transform,color] duration-200 ease-in-out
                group-hover/contact:translate-x-[3px]
                group-hover/contact:-translate-y-[3px]
                group-hover/contact:text-ink
              "
            >
              <ArrowUpRightIcon />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
