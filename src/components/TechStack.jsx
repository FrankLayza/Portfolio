import { Card } from "@/components/ui/card";
import { FaReact, FaNodeJs, FaFigma, FaGitAlt } from "react-icons/fa";
import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiSupabaseFill,
  RiVercelFill,
} from "react-icons/ri";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiHuggingface,
  SiPostman,
  SiRender,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const technologies = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Supabase", "MongoDB", "HuggingFace"],
  },
  {
    category: "Dev Tools",
    skills: ["VS Code", "Postman", "Figma", "Git", "Vercel", "Render"],
  },
];

const iconMap = {
  React: FaReact,
  "Next.js": RiNextjsFill,
  TypeScript: SiTypescript,
  TailwindCSS: RiTailwindCssFill,
  "Node.js": FaNodeJs,
  Express: SiExpress,
  Supabase: RiSupabaseFill,
  MongoDB: SiMongodb,
  HuggingFace: SiHuggingface,
  "VS Code": VscVscode,
  Postman: SiPostman,
  Figma: FaFigma,
  Git: FaGitAlt,
  Vercel: RiVercelFill,
  Render: SiRender,
};

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2 cursor-pointer">
            {tech.skills.map((skill) => {
              const Icon = iconMap[skill];
              return (
                <span
                  key={skill}
                  className="inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-2 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
                >
                  {Icon ? <Icon className="w-4 h-4" /> : null}
                  {skill}
                </span>
              );
            })}
          </div>
        </Card>
      ))}
    </div>
  );
}
