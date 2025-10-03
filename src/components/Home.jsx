import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaGithub, FaTelegram } from "react-icons/fa";
import TechStack from "./TechStack";
import ProjectPage from "./ProjectPage";
import { motion } from "framer-motion";

const MotionButton = motion(Button);
const Home = () => {
  return (
    <div className="w-full font-fira">
      <main className="pt-10 pb-16 text-foreground">
        <section
          id="home"
          className="mx-auto -mb-8 md:mb-0 px-4 sm:px-6 lg:px-8 min-h-screen grid grid-cols-1 md:grid-cols-2 w-full gap-5 items-center bg-background"
        >
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-bold">
              Building <span className="text-colioorange">Web Apps</span> &{" "}
              <span className="text-colioorange">Dev Tools</span> That
              Supercharge Productivity
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
                <MotionButton
                  whileHover={{ left: "100%", scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  size="lg"
                  className="bg-colioorange text-foreground hover:bg-[#ffb703]"
                >
                  <FaGithub /> Github
                </MotionButton>
              </a>
            </div>
          </div>
        </section>

        {/* Project display section */}
        <section
          id="projects"
          className="container mx-auto px-4 pt-3 sm:px-6 lg:px-8
         
            bg-[linear-gradient(98.032deg,#4444440f,#80008005_27%,#aaaaaa1c_42%,#6666661a)]"
        >
          <h2 className="text-3xl font-bold mt-8">
            Notable <span className="text-colioorange">Projects</span>
          </h2>

          <ProjectPage />
        </section>

        {/* test project section */}
        {/* Skills section */}
        <section id="skills" className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mt-8 pt-8">
            Tech <span className="text-colioorange">Stack</span>
          </h2>
          <div className="py-6">
            <TechStack />
          </div>
        </section>
      </main>
      <footer id="contact" className="mx-auto px-4 sm:px-6 lg:px-8 mb-5">
        <h2 className="mb-4 text-3xl font-bold">Contact</h2>

        <div className="flex justify-between items-center border shadow-sm px-5 py-3 rounded-xl bg-card">
          <p className="text-[10px] md:text-sm">
            Best way to reach me is through:{" "}
            <a
              href="mailto:frankez478@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              frankez478@gmail.com
            </a>
          </p>
          <a
            href="https://t.me/deeznutz_00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm "
          >
            <Button className="bg-colioorange hover:bg-colioorange/80 text-foreground flex items-center gap-2">
              <FaTelegram className="size-5" />
              Telegram
            </Button>
          </a>
        </div>
        <Separator className="my-6" />
        <div className="text-center text-sm my-5 text-zinc-400">
          Built by{" "}
          <span>
            <a href="" className="hover:underline">
              Frank Anthony
            </a>
          </span>{" "}
          with React v19, Shadcn UI(TailwindCSS v4.1.13)
        </div>
      </footer>
    </div>
  );
};

export default Home;
