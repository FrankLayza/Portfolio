import { Button } from "@/components/ui/button";
import Project from "@/components/Project-card";
import { Github } from "lucide-react";
import Budget from "@/assets/images/budget.png";
import Nexus from "@/assets/images/nft-nexus.png";
import TechStack from "./TechStack";

const projects = [
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
  },
];

const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen pt-32 pb-16 text-white items-center">
        <div className="container mx-auto px-7 py-8 grid grid-cols-1 md:grid-cols-2 w-full gap-5">
          <div className="flex flex-col gap-5">
            <h2 className="text-5xl leading-snug font-bold">
              Building Web Apps & Dev Tools That Supercharge Productivity
            </h2>
            <p>
              Hi, I'm Anthony Frank - a Full Stack Developer with focus on
              building user-friendly interfaces, integrating API to web services
              and lately, I've been exploring how AI can make developers faster,
              smarter and more effective
            </p>
            <div>
              <a href="https://github.com/FrankLayza">
                <Button size="lg">
                  <Github /> Github
                </Button>
              </a>
            </div>
          </div>
        </div>

        <section className="container mx-auto px-7 py-16">
          <h2 className="text-4xl font-bold mt-8 pt-8">Notable Projects</h2>
          <div className="py-6">
            {projects.map((project, i) => (
              <div className="px-3" key={i}>
                <Project
                  image={project.image}
                  title={project.title}
                  link={project.link}
                  description={project.description}
                  details={project.details}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-7 py-16">
          <h2 className="text-4xl font-bold mt-8 pt-8">TECH STACK</h2>
          <div className="py-6">
            <TechStack />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
