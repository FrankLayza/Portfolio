import Budget from "@/assets/images/budget.png";
import Nexus from "@/assets/images/nft-nexus.png";
import Lazy from "@/assets/images/lazydoocs.png";

export const projects = [
  {
    title: "LazyDocs Extension",
    description:
      "A VS Code extension powered by DeepSeek AI that scans workspace projects to generate clean, structured READMEs and smart commit messages.",
    link: "https://github.com/FrankLayza/lazydocs",
    image: Lazy,
    details: [
      "Automates workspace documentation scanning & markdown generation using DeepSeek AI models",
      "Highlights integrated web APIs with Web Baseline categorization",
      "Reduces manual documentation effort and streamlines developer workflows",
    ],
    tags: ["VS Code API", "DeepSeek AI", "Node.js"],
    color: "#ffb703",
  },
  {
    title: "NFT-NEXUS Platform",
    description:
      "A decentralized, AI-powered analytics platform for NFT collections featuring real-time Alchemy API indexing and trait rarity evaluation.",
    link: "https://github.com/FrankLayza/nft-nexus",
    image: Nexus,
    details: [
      "AI-driven buy/sell recommendations based on trait rarity and historical volume",
      "Full-stack architecture with JuliaOS backend and React + TypeScript frontend",
      "Modular multi-chain filtering with Alchemy NFT API integration",
    ],
    tags: ["React 19", "JuliaOS", "Alchemy API"],
    color: "#006d77",
  },
  {
    title: "TON KAMI Mini App",
    description:
      "A Telegram Mini App integrating directly with the TON blockchain to provide seamless wallet auth, real-time balances, and on-chain transactions.",
    link: "https://github.com/FrankLayza/ton-kami",
    image: Nexus,
    details: [
      "TonConnect protocol integration for instant, secure Telegram wallet authentication",
      "Real-time balance polling & transaction history via TONAPI integration",
      "Native Telegram Mini App responsive design optimized for mobile viewports",
    ],
    tags: ["React", "TON Blockchain", "TonConnect"],
    color: "#0088cc",
  },
  {
    title: "BudgetWise App",
    description:
      "A modern, responsive financial dashboard UI engineered for intuitive expense tracking and interactive budget breakdown visualizations.",
    link: "https://github.com/FrankLayza/BudgetWise",
    image: Budget,
    details: [
      "Responsive layout with atomic Tailwind CSS utilities and custom chart widgets",
      "Real-time expense & income tracking dashboard with categorized spending insights",
      "Simplifies personal budgeting workflows with high-contrast data visualization",
    ],
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    color: "#023047",
  },
  {
    title: "AGA Switcher",
    description:
      "Multi-account developer utility for seamless environment switching, wallet management, and API proxy key rotation.",
    link: "https://github.com/FrankLayza",
    image: Lazy,
    details: [
      "Lightweight RPC connection switcher for multi-environment testing",
      "Encrypted local storage for developer API secrets",
      "Instant hotkey toggling within active dev sessions",
    ],
    tags: ["TypeScript", "Electron", "Node.js"],
    color: "#729B7D",
  },
  {
    title: "Visual Noire UI",
    description:
      "A minimal dark-mode design system & component library built with TailwindCSS v4 and Oxanium typography.",
    link: "https://github.com/FrankLayza",
    image: Budget,
    details: [
      "Awwwards-level design tokens with high-contrast neutral scales",
      "Built for extreme performance and smooth sub-second interactions",
      "Fully accessible ARIA compliant primitives",
    ],
    tags: ["React 19", "Tailwind v4", "Design System"],
    color: "#111111",
  },
];
