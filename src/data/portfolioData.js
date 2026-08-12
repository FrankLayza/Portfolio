export const PROJECTS = [
  {
    title: "Herald — Landing Page",
    href: "https://useherald.xyz",
    desc: "Contributed to the landing page and developer dashboard of Herald — a privacy-preserving DeFi notification layer built on Solana.",
    tag: "Solana · TypeScript · Contributor",
    ogImage: "https://www.useherald.xyz/api/og?title=Privacy-Preserving&subtitle=DeFi+Notifications&desc=Send+alerts+to+your+users+without+ever+storing+their+contact+info.+Built+on+Solana.",
  },
  {
    title: "Enveil",
    href: "https://enveil.vercel.app",
    github: "https://github.com/FrankLayza/enveil",
    desc: "A confidential airdrop dApp using Zama's fully homomorphic encryption. Built for the Zama Developer Program bounty.",
    tag: "Zama FHE · Solidity",
    ogImage: "https://enveil.vercel.app/og-image.jpg",
  },
  {
    title: "The Beast Within",
    href: "https://thebeastwithin.online/",
    github: "https://github.com/creatordrakon/the-beast-within-website",
    desc: "A comic book website built for a client. Collaborated with another developer to design and ship the full experience.",
    tag: "Next.js · Collaboration",
    ogImage: "https://thebeastwithin.online/api/og",
  },
  {
    title: "LazyDocs",
    href: "https://github.com/FrankLayza/lazydocs",
    desc: "A published VS Code extension for generating documentation on the fly. Actively used and maintained on the marketplace.",
    tag: "VS Code Extension · TypeScript",
    ogImage: "https://opengraph.githubassets.com/1/FrankLayza/lazydocs",
  },
  {
    title: "Solana Stablecoin Standard",
    href: "https://github.com/unnamed-lab/solana-stablecoin-standard",
    desc: "An open-source standard for stablecoin implementations on Solana. Contributed in developing the cli and tui.",
    tag: "Solana · Rust · Open Source",
    ogImage: "https://opengraph.githubassets.com/1/unnamed-lab/solana-stablecoin-standard",
  },
];

export const SKILLS = [
  {
    group: "Frontend",
    items: ["React + TypeScript", "Vite, Tailwind v4", "React Native"],
  },
  {
    group: "Backend",
    items: ["Node.js, Express", "PostgreSQL, Prisma", "Supabase"],
  },
  { group: "Web3", items: ["Solana", "Zama FHE", "Solidity"] },
  {
    group: "Tooling",
    items: [
      "Git",
      "GitHub Actions",
      "pnpm",
      "ESLint",
      "Prettier",
    ],
  },
];

export const CONTACTS = [
  { label: "Email", href: "mailto:hello.frankanthony@gmail.com" },
  { label: "GitHub", href: "https://github.com/FrankLayza" },
  { label: "X / Twitter", href: "https://x.com/FrankLayza" },
  { label: "LinkedIn", href: "#" },
];

export const NAV_LINKS = [
  { label: "home", href: "#", id: null },
  { label: "projects", href: "#projects", id: "projects" },
  { label: "skills", href: "#skills", id: "skills" },
  { label: "contact", href: "#contact", id: "contact" },
];

export const MORE_LINKS = [
  { label: "X / Twitter", href: "https://x.com/FrankLayza", external: true },
  { label: "LinkedIn", href: "#", external: true },
  { label: "Resume", href: "#", external: false },
];
