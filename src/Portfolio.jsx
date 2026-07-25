// Frank Anthony — Minimal Portfolio
// All styles expressed as Tailwind v4 utility classes.
// Named groups: group/list (project dim), group/project (arrow), group/contact (contact arrow)
import { ArrowUpRightIcon } from "./components/ui/arrow-up-right";
export default function Portfolio() {
  const projects = [
    {
      title: "Herald",
      href: "https://useherald.xyz",
      desc: "A privacy-preserving DeFi notification layer built on Solana. Alerts users to on-chain events without exposing wallet activity.",
      tag: "Solana · TypeScript",
    },
    {
      title: "Enveil",
      href: "https://github.com/FrankLayza",
      desc: "A confidential airdrop dApp using Zama's fully homomorphic encryption. Built for the Zama Developer Program bounty.",
      tag: "Zama FHE · Solidity",
    },
    {
      title: "Gravity Switch",
      href: "https://github.com/FrankLayza",
      desc: "A VS Code / Antigravity IDE extension that swaps Google account sessions in seconds, with switch events logged to Monad testnet.",
      tag: "Monad · VS Code Extension",
    },
    {
      title: "LazyDocs",
      href: "https://github.com/FrankLayza",
      desc: "A published VS Code extension for generating documentation on the fly. Actively used and maintained on the marketplace.",
      tag: "VS Code Extension · TypeScript",
    },
    {
      title: "TON-KAMI",
      href: "https://github.com/FrankLayza",
      desc: "A Telegram bot enabling peer-to-peer transfers on TON. Built for a TON ecosystem competition.",
      tag: "TON · Telegram Bot",
    },
  ];

  const skills = [
    { group: "Frontend", items: ["React + TypeScript", "Vite, Tailwind v4", "React Native"] },
    { group: "Backend",  items: ["Node.js, Express", "PostgreSQL, Prisma", "JWT-based auth"] },
    { group: "Web3",     items: ["Solana, Monad", "Zama FHE", "Solidity"] },
    { group: "Tooling",  items: ["Git, Docker basics", "CI/CD (GitHub Actions)", "pnpm, ESLint, Prettier"] },
  ];

  const contacts = [
    { label: "Email",      href: "mailto:frankanthony@example.com" },
    { label: "GitHub",     href: "https://github.com/FrankLayza" },
    { label: "X / Twitter", href: "#" },
    { label: "LinkedIn",   href: "#" },
  ];

  return (
    // ===== Wrapper =====
    <div className="max-w-[640px] mx-auto px-6">

      {/* ===== Header ===== */}
      <header className="
        pt-24 pb-[72px] border-b border-line
        max-[560px]:pt-16 max-[560px]:pb-12
      ">
        <div className="text-[12px] tracking-[0.08em] uppercase text-grey mb-5">
          Frank Anthony
        </div>

        <h1 className="
          font-serif font-medium
          text-[clamp(36px,7vw,52px)]
          tracking-[-0.01em] leading-[1.1] mb-5
        ">
          Fullstack developer,<br />
          frontend-heavy.
        </h1>

        <p className="text-[15px] text-grey max-w-[46ch]">
          Building on{" "}
          <strong className="text-ink font-medium">Solana</strong>,{" "}
          <strong className="text-ink font-medium">Monad</strong>, and{" "}
          <strong className="text-ink font-medium">Zama FHE</strong>.
          {" "}Based in Lagos, Nigeria. Currently finishing a B.Tech in Computer Science.
        </p>
      </header>

      {/* ===== Projects ===== */}
      <section
        id="projects"
        className="py-14 border-b border-line max-[560px]:py-10"
      >
        <div className="text-[12px] tracking-[0.08em] uppercase text-grey mb-8">
          Selected Projects
        </div>

        {/* group/list — drives the sibling-dim: hover dims all, hovered child overrides */}
        <div className="group/list">
          {projects.map((p) => (
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
              {/* Title row */}
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

      {/* ===== Skills ===== */}
      <section
        id="skills"
        className="py-14 border-b border-line max-[560px]:py-10"
      >
        <div className="text-[12px] tracking-[0.08em] uppercase text-grey mb-8">
          Skills
        </div>

        <div className="grid grid-cols-2 gap-8 max-[560px]:grid-cols-1 max-[560px]:gap-6">
          {skills.map((s) => (
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

      {/* ===== Contact ===== */}
      <section id="contact" className="py-14 max-[560px]:py-10">
        <div className="text-[12px] tracking-[0.08em] uppercase text-grey mb-8">
          Contact
        </div>

        <div className="flex flex-col">
          {contacts.map((c) => (
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

      {/* ===== Footer ===== */}
      <footer
        className="
          pt-12 pb-16 text-[12px] text-grey
          flex justify-between
          max-[560px]:flex-col max-[560px]:gap-2
        "
      >
        <span>Lagos, Nigeria</span>
        <span>Built 2026</span>
      </footer>

    </div>
  );
}
