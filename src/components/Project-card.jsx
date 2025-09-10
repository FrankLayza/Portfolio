import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, CircleCheck } from "lucide-react";
const Projects = ({ image, title, description, link, details, tags }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Card className="max-w-4xl overflow-hidden border-2 border-zinc-700 grid grid-cols-1 md:grid-cols-2">
          <CardContent className="px-6">
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
                    <span className="whitespace-nowrap">{detail}</span>
                  </li>
                ))}
            </ul>

            <div>
              {Array.isArray(tags) &&
                tags.map((tag, tidx) => <div key={tidx}>{tag}</div>)}
            </div>
            <CardFooter className="py-4">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:underline"
              >
                <Github />
                View on Github
              </a>
            </CardFooter>
          </CardContent>
          <CardContent className="p-0">
            <div className="w-full h-full relative">
              <img
                src={image}
                className="object-contain w-full h-full"
                alt={title}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Projects;
