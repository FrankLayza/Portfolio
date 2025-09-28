import "../Card/card.css";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, CircleCheck } from "lucide-react";
import {motion, useScroll, useTransform} from 'framer-motion'
import { useRef } from "react";

const Index = ({progress, range, targetScale, i, title, description, color, image, link, details, tags }) => {
    const container = useRef(null)
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })
    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
    const scale = useTransform(progress, range, [1, targetScale])
  return (
    <div ref={container} className="cardContainer overflow-hidden">
      <Card
        style={{scale, backgroundColor: color, top:  `calc(-10% + ${i * 25}px)` }}
        className="card border-zinc-700 border overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <CardContent className="p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="my-4 text-sm leading-tight text-gray-400">
                {description}
              </p>
              <ul className="my-5">
                {Array.isArray(details) &&
                  details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-zinc-500 flex items-center my-2"
                    >
                      <CircleCheck className="shrink-0 mr-2" />
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
            <CardFooter className="py-4">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:underline"
              >
                <Github className="-ml-6 size-4" />
                View on Github
              </a>
            </CardFooter>
          </CardContent>
          {/* the right side of the grid */}

          <div className="imageContainer">
            <motion.div style={{opacity: scrollYProgress, scale: imageScale}} className="inner">
                <img
                  src={image}
                  alt={title}
                  className="absolute bottom-0 right-0 rounded w-full h-full"
                />
            </motion.div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;
