import "../Card/card.css";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, CircleCheck } from "lucide-react";

const Index = ({ title, description, color, image, link, details, tags }) => {
  return (
    <div className="cardContainer overflow-hidden">
      <Card
        style={{ backgroundColor: color }}
        className="card border-zinc-700 border overflow-hidden"
      >
        <div className="grid grid-cols-1 gap-0">
          <CardContent className="p-6 flex flex-col justify-between">
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
                tags.map((tag, tidx) => (
                  <div
                    className="bg-primary/20 rounded ring-1 ring-inset ring-primary-foreground text-xs mr-2 p-2 border-zinc-500"
                    key={tidx}
                  >
                    {tag}
                  </div>
                ))}
            </div>
            <CardFooter className="py-4">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:underline"
              >
                <Github className="-ml-6" />
                View on Github
              </a>
            </CardFooter>
          </CardContent>
          {/* the right side of the grid */}

          <div className="relative aspect-video md:aspect-square">
            <img src={image} alt={title} className="object-cover" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;
