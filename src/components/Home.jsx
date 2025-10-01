import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
// import Project from "@/components/Project-card";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { Link } from "react-scroll";
import TechStack from "./TechStack";
import ProjectPage from "./ProjectPage";

const Home = () => {
  return (
    <div className="w-full font-fira">
      <main className="pt-10 pb-16 text-foreground">
        <section
          id="home"
          className="mx-auto px-4 sm:px-6 lg:px-8 min-h-screen grid grid-cols-1 md:grid-cols-2 w-full gap-5 items-center bg-background"
        >
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-bold">
              Building <span className="text-colioorange">Web Apps</span> & <span className="text-colioorange">Dev Tools</span> That Supercharge Productivity
            </h2>
            <p className="text-muted-foreground text-base md:text-sm md:leading-relaxed">
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
                <Button size="lg" className='bg-[#ffb703] hover:bg-[#ffb703]'>
                  <FaGithub /> Github
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Project display section */}
        <section
          id="projects"
          className="mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20
         
            bg-[linear-gradient(98.032deg,#4444440f,#80008005_27%,#aaaaaa1c_42%,#6666661a)]"
        >
          <h2 className="text-4xl font-bold pt-3 mb-8">Notable <span className="text-colioorange">Projects</span></h2>

          <ProjectPage />
        </section>

        {/* test project section */}
        {/* Skills section */}
        <section id="skills" className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mt-8 pt-8">TECH STACK</h2>
          <div className="py-6">
            <TechStack />
          </div>
        </section>
      </main>
      <footer
        id="contact"
        className="mx-auto px-4 sm:px-6 lg:px-8 mb-5"
      >
        <h2 className="mb-4">Contact</h2>

        <div className="flex justify-between items-center border shadow-2xl px-5 py-3 rounded-xl">
          <p>Best way to reach me is through:</p>
          <Button className='bg-colioorange text-foreground'>
            <FaTelegram/> Telegram
          </Button>
        </div>
      
      </footer>
    </div>
  );
};

export default Home;
