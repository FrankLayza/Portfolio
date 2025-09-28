import { projects } from "../lib/data";
import "../global.css";
import Card from "./Card/index";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Lenis from "lenis";
import { useEffect } from "react";
const ProjectPage = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main ref={container} className="mt-[5vh] mb-[100vh]">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={i}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

export default ProjectPage;
