import { motion } from "framer-motion";

const colors = [
  ["from-[#edec16]", "via-[#635a33]", "to-[#aa7519]"],
  ["from-[#53ab9c]", "via-[#a6d78a]", "to-[#7ab078]"],
  ["from-[#93be4a]", "via-[#9fbf41]", "to-[#d7c011]"],
  ["from-[#111928]", "via-[#3e566a]", "to-[#9cb8ca]"],
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
          {colors.map((colorSet, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className={`cursor-pointer w-full aspect-[16/10] border-none rounded-2xl bg-gradient-to-br ${colorSet.join(
                " "
              )} transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
