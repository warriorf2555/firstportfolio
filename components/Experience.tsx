import React from "react";
import { motion } from "framer-motion";
import ExperienceCard1 from "./ExperienceCard1";
import ExperienceCard2 from "./ExperienceCard2";

type Props = {};

function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
  max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">Experiences</h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory h-[658px] xl:h-[700px]
      scrollbar-thin scroll-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        <ExperienceCard1 />
        <ExperienceCard2 />
      </div>
    </motion.div>
  );
}

export default Experience;
