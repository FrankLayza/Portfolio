import { SKILLS } from "../data/portfolioData";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-14 border-b border-line max-[560px]:py-10">
      <div className="text-[12px] tracking-[0.08em] uppercase text-grey mb-8">
        Skills
      </div>

      <div className="grid grid-cols-2 gap-8 max-[560px]:grid-cols-1 max-[560px]:gap-6">
        {SKILLS.map((s) => (
          <div key={s.group}>
            <h3 className="font-serif font-medium text-[15px] mb-3">{s.group}</h3>
            <ul className="list-none">
              {s.items.map((item) => (
                <li key={item} className="text-[13px] text-grey py-1">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
