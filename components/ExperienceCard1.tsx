import React from "react";
import FaiqPicture from "./images/faiq-sukma.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard1({}: Props) {
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
          src={FaiqPicture}
          alt="example"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">SUKMA Malaysia 2022</h4>
        <p className="font-bold text-2xl mt-1">DOTA-2 ESPORTS</p>

        {/* <p className="uppercase py-5 text-gray-300">Started work... - Ended...</p> */}

        <ul className="list-disc space-y-4 ml-5 text-lg mt-5">
          <li>Communication with team members.</li>
          <li>Help plan strategy with team.</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard1;
