import {Button} from "@/components/ui/button"
import Project from "@/components/Project-card"
import { Github } from "lucide-react";



const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen pt-32 pb-16 text-white items-center">
        <div className="container mx-auto px-7 py-8 grid grid-cols-1 md:grid-cols-2 w-full gap-5">
          <div className="flex flex-col gap-5">
              <h2 className="text-5xl leading-snug font-bold">
                Building Web Apps & Dev Tools That Supercharge Productivity
              </h2>
              <p>
                Hi, I'm Anthony Frank - a Full Stack Developer with focus on
                building user-friendly interfaces, integrating API to web services
                and lately, I've been exploring how AI can make developers faster,
                smarter and more effective
              </p>
              <div>
                <Button size="lg"><Github/> Github</Button>
              </div>
          </div>
        </div>

        <section className="container mx-auto px-7 py-16">
            <h2 className="text-4xl">Notable Projects</h2>
        </section>
      </div>
    </>
  );
};

export default Home;
