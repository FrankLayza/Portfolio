import { projects } from "../lib/data";
import "../global.css";
import Card from "./Card/index"
const ProjectPage = () => {
  return (
    <main className="mt-[5vh] mb-[100vh]">
      {projects.map((project, i) => {
        return <Card key={i} {...project} />;
      })}
    </main>
  );
};

export default ProjectPage;
