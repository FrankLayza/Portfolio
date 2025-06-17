import { motion } from "framer-motion";
import Budget from "../assets/images/budget.png";

const projects = [
  {
    title: "BudgetWise",
    image: Budget,
    repo: "https://github.com/FrankLayza/BudgetWise",
    gradient: ["from-[#53ab9c]", "via-[#a6d78a]", "to-[#7ab078]"],
  },
  {
    title: "Coming Soon",
    image: null,
    repo: "#",
    gradient: ["from-[#93be4a]", "via-[#9fbf41]", "to-[#d7c011]"],
  },
  {
    title: "Coming Soon",
    image: null,
    repo: "#",
    gradient: ["from-[#111928]", "via-[#3e566a]", "to-[#9cb8ca]"],
  },
  {
    title: "Coming Soon",
    image: null,
    repo: "#",
    gradient: ["from-[#edec16]", "via-[#635a33]", "to-[#aa7519]"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="bg-[#262626] py-10">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="text-4xl sm:text-5xl text-white font-semibold mb-2 mt-24">
          Projects
        </h2>
        <p className="text-[#9fa1a3] font-semibold tracking-normal mt-4 text-base sm:text-lg">
          Some of the projects that I have done before
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className={`relative group cursor-pointer w-full aspect-[16/10] rounded-2xl bg-gradient-to-br ${project.gradient.join(
                " "
              )} transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl`}
            >
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex flex-col justify-end p-4 z-10"
              >
                <h3 className="text-stone-800 text-lg font-semibold drop-shadow-md">
                  {project.title}
                </h3>
                <span className="text-white text-sm opacity-75 underline mt-1">
                  View Repo →
                </span>
              </a>

              {project.image ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-[90%] max-h-[90%] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  />
                </div>
              ) : (
                <div className="absolute inset-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
