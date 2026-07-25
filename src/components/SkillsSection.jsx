import { SKILLS } from "../data/portfolioData";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-10 sm:py-14 border-b border-line">
      <div className="text-xs tracking-[0.08em] uppercase text-grey mb-6 sm:mb-8">
        Skills
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {SKILLS.map((s) => (
          <div key={s.group}>
            <h3 className="font-serif font-medium text-[15px] mb-2 sm:mb-3">{s.group}</h3>
            <ul className="list-none">
              {s.items.map((item) => (
                <li key={item} className="text-xs sm:text-[13px] text-grey py-0.5 sm:py-1">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
