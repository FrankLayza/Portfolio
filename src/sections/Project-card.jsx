import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, CircleCheck } from "lucide-react";
import "../../global.css";

const Projects = ({ image, title, description, link, details, tags }) => {
  return (
    <div className="cardContainer">
        <Card className="card max-w-4xl overflow-hidden border-2 border-zinc-700 grid grid-cols-1 md:grid-cols-2">
          <CardContent className="px-6 py-1 md:py-4 order-last md:order-first mt-3 md:mt-0">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="mt-5 text-sm leading-tight text-gray-400">
              {description}
            </p>
            <ul className="my-5">
              {Array.isArray(details) &&
                details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-zinc-500 flex items-center my-2"
                  >
                    <CircleCheck className="shrink-0 mr-2" />
                    <span className="whitespace-break-spaces">{detail}</span>
                  </li>
                ))}
            </ul>

            <div className="flex flex-wrap">
              {Array.isArray(tags) &&
                tags.map((tag, tidx) => <div className="bg-primary/20 rounded ring-1 ring-inset ring-primary-foreground text-xs mr-2 p-2 border-zinc-500" key={tidx}>{tag}</div>)}
            </div>
            <CardFooter className="py-4">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:underline"
              >
                <Github className="-ml-6"/>
                View on Github
              </a>
            </CardFooter>
          </CardContent>
          <CardContent className="p-0 order-first md:order-last ">
            <div className="h-full relative overflow-hidden">
              <img
                src={image}
                className="object-contain w-full h-full"
                alt={title}
                loading="lazy"
              />
            </div>
          </CardContent>
        </Card>
 
    </div>
  );
};

export default Projects;
