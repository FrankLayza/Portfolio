export const PROJECTS = [
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

export const SKILLS = [
  {
    group: "Frontend",
    items: ["React + TypeScript", "Vite, Tailwind v4", "React Native"],
  },
  {
    group: "Backend",
    items: ["Node.js, Express", "PostgreSQL, Prisma", "JWT-based auth"],
  },
  { group: "Web3", items: ["Solana, Monad", "Zama FHE", "Solidity"] },
  {
    group: "Tooling",
    items: [
      "Git, Docker basics",
      "CI/CD (GitHub Actions)",
      "pnpm, ESLint, Prettier",
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
