import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github } from "lucide-react";
const Projects = ({ image, title, description, link, }) => {
  return (
    <>
      <div>
        <Card className=" w-full overflow-hidden border-2 px-5 border-zinc-700 grid grid-cols-1 md:grid-cols-2 gap-3">
          <CardContent>
            <h2 className="text-xl">{title}</h2>
            <p>{description}</p>
            <CardFooter className="pt-0 p-4">
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
          <CardContent>
            <img src={image} alt={title} />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Projects;
