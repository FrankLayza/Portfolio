import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
// import Project from "@/components/Project-card";
import { Github, ArrowUpRight } from "lucide-react";
import { Link } from "react-scroll";
import TechStack from "./TechStack";
import ProjectPage from "./ProjectPage";
import { GithubIcon } from "lucide-react";



const Home = () => {
  return (
    <div className="w-full font-fira">
      <main className="pt-10 pb-16 text-foreground">
        <section
          id="home"
          className="mx-auto px-4 sm:px-6 lg:px-8 min-h-screen grid grid-cols-1 md:grid-cols-2 w-full gap-5 items-center bg-background"
        >
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight md:leading-snug font-bold">
              Building Web Apps & Dev Tools That Supercharge Productivity
            </h2>
            <p className="text-muted-foreground text-base md:text-sm">
              Hi, I'm Anthony Frank - a Full Stack Developer with focus on
              building user-friendly interfaces, integrating API to web services
              and lately, I've been exploring how AI can make developers faster,
              smarter and more effective
            </p>
            <div>
              <a
                href="https://github.com/FrankLayza"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">
                  <Github /> Github
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Project display section */}
        {/* <section
          id="projects"
          className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen py-16 scroll-mt-20 
         
            bg-[linear-gradient(98.032deg,#4444440f,#80008005_27%,#aaaaaa1c_42%,#6666661a)]"
        >
         
          <h2 className="text-4xl font-bold mb-8">Notable Projects</h2>

          <div className="space-y-12">
            {projects.map((project, i) => (
              <div key={i} className="px-0 sm:px-3">
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
        </section> */}

        {/* test project section */}
          <ProjectPage />
        {/* Skills section */}
        {/* <section
          id="skills"
          className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen py-16 scroll-mt-28 "
        >
          <h2 className="text-4xl font-bold mt-8 pt-8">TECH STACK</h2>
          <div className="py-6">
            <TechStack />
          </div>
        </section> */}
      </main>
      {/* <footer
        id="contact"
        className="mt-auto px-4 bg-[#030711] py-12 sm:px-6 lg:px-8 text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12.5">
            <h2 className="text-xl font-semibold">Contact</h2>
            <div>
              <h3 className="text-xl mb-2 font-semibold">Quick Links</h3>
              <div className="flex flex-col">
                <Link
                  to="home"
                  smooth={true}
                  duration={1000}
                  offset={0}
                  className="cursor-pointer hover:underline flex items-center pb-3"
                >
                  <ArrowUpRight className="mr-0.5 size-5" />
                  Home
                </Link>
                <Link
                  to="skills"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer hover:underline flex items-center pb-3"
                >
                  <ArrowUpRight className="mr-0.5 size-5" />
                  Skills
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer hover:underline flex items-center pb-3"
                >
                  <ArrowUpRight className="mr-0.5 size-5" />
                  Projects
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer hover:underline flex items-center pb-3"
                >
                  <ArrowUpRight className="mr-0.5 size-5" />
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Social Links</h3>
              <ul className="py-2">
                <li className="flex pb-3">
                  <ArrowUpRight className="mr-0.5 size-5" />
                  <a
                    href="https://github.com/FrankLayza"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="size-5" />
                  </a>
                </li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <div className="text-center text-sm my-5 text-zinc-400">
          Built by <span>Frank Anthony</span> With React v19, Shadcn
          UI(TailwindCSS v4.1.13)
        </div>
      </footer> */}
    </div>
  );
};

export default Home;
