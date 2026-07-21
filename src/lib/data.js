import Budget from "@/assets/images/budget.png";
import Nexus from "@/assets/images/nft-nexus.png";
import Lazy from "@/assets/images/lazydoocs.png";

export const projects = [
  {
    title: "BudgetWise",
    description:
      "A replica of a budget tracking UI design, meant to help users track their spendings",
    link: "https://github.com/FrankLayza/BudgetWise",
    image: Budget,
    details: [
      "A responsive sidebar + layout with Tailwind CSS.",
      "A dashboard to track expenses/income",
      "Simplifies personal budgeting and financial insights",
    ],
    tags: ["React", "Tailwind CSS"],
    color: "#023047",
  },
  {
    title: "NFT-NEXUS",
    description:
      "An AI-Powered NFT analyzer, fetches NFTs from NFT Alchemy, analyses the NFT based on certain attributes",
    link: "https://github.com/FrankLayza/nft-nexus",
    image: Nexus,
    details: [
      "Modular filtering by rarity, collection, and blockchain",
      "Provides insights for NFT collectors & investors",
      "Scalable design for easy integration of new blockchains",
    ],
    tags: ["React", "Tailwind CSS", "Express", "HuggingFace"],
    color: "#006d77",
  },
  {
    title: "LAZYDOCS",
    description:
      "A VS Code extension that auto-generates clean and structured documentation by scanning the workspace.",
    link: "https://github.com/FrankLayza/lazydocs",
    image: Lazy,
    details: [
      "Scans workspace files and generates README documentation automatically",
      "Highlights integrated web APIs with Baseline categorization (widely available, limited, or experimental)",
      "Streamlines developer workflow by reducing manual documentation effort",
    ],
    tags: ["JavaScript", "VS Code API", "Node.js", "Baseline API"],
    color: "#ffb703",
  },
  {
    title: "TON KAMI",
    description:
      "A Telegram Mini App that integrates with the TON blockchain, enabling users to connect wallets, view balances, and send TON seamlessly.",
    link: "https://github.com/FrankLayza/ton-kami",
    image: Nexus,
    details: [
      "Wallet connection via TonConnect for secure authentication",
      "Displays real-time balance and transaction history",
      "Supports on-chain transactions directly within Telegram",
    ],
    tags: [
      "React",
      "Telegram Mini App",
      "TON Blockchain",
      "TonConnect",
      "TONAPI",
    ],
    color: "#0088cc",
  },
];
