import { projects } from "../lib/data";
import Card from "./Card/index";

const ProjectPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 my-6">
      {projects.map((project, i) => (
        <Card key={i} i={i} {...project} />
      ))}
    </div>
  );
};

export default ProjectPage;
