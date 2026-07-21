import "../Card/card.css";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Github, CircleCheck } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MotionCard = motion(Card);

const Index = ({
  progress,
  range,
  targetScale,
  i,
  title,
  description,
  color,
  image,
  link,
  details,
  tags,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="cardContainer overflow-hidden">
      <MotionCard
        style={{
          scale,
          top: `calc(-10% + ${i * 30}px)`,
        }}
        className={`card max-w-3xl border-zinc-700 border overflow-hidden`}
      >
        <div className="flex flex-col md:grid md:grid-cols-2 gap-0">
          <CardContent
            className={`p-6 flex flex-col justify-between order-2 md:order-1`}
          >
            <div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="my-4 text-sm leading-tight">{description}</p>
              <ul className="my-5">
                {Array.isArray(details) &&
                  details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground flex items-center my-2"
                    >
                      <FaRegCircleCheck className="shrink-0 mr-2" />
                      <span className="whitespace-break-spaces">{detail}</span>
                    </li>
                  ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(tags) &&
                  tags.map((tag, tidx) => (
                    <div
                      className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
                      key={tidx}
                    >
                      {tag}
                    </div>
                  ))}
              </div>
            </div>
            <CardFooter className="pt-4 text-foreground">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:underline"
              >
                <FaGithub className="-ml-6 size-4" />
                View on Github
              </a>
            </CardFooter>
          </CardContent>
          {/* Image Section */}
          <div className="imageContainer relative w-full h-full order-1 md:order-2">
            <motion.div
              style={{ opacity: scrollYProgress, scale: imageScale }}
              className="w-full h-full"
            >
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full rounded"
              />
            </motion.div>
          </div>
        </div>
      </MotionCard>
    </div>
  );
};

export default Index;
