import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import FaiqPicture from "./images/faiq-picture.jpg";
import ADE from "./images/ADE.jpg";
import reactImage from "./images/react.png";
import CSSImage from "./images/CSS.png";
import nodeImage from "./images/node.png";

type Props = {};

function ExperienceCard2({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.div>
        <Image
          priority
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={ADE}
          alt="example"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Software Engineer</h4>
        <p className="font-bold text-2xl mt-1">Asia Digital Engineering (ADE)</p>
        <div className="flex space-x-2 my-2">
          <Image className="h-10 w-auto rounded-full" src={reactImage} alt="example" />
          <Image className="h-10 w-auto rounded-full" src={CSSImage} alt="example" />
          <Image className="h-10 w-auto rounded-full pl-3" src={nodeImage} alt="example" />
        </div>

        <p className="uppercase py-5 text-gray-300">17 October 2022 - Present</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Maintain ADE website.</li>
          <li>Enhance and improve website.</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard2;
