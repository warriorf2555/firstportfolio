import React from "react";
import FaiqPicture from "./images/faiq-background.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row 
      max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

      <motion.div initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
        <Image
          className="md:mb-0 mt-30 flex-shrink-0 w-56 h-56 round-full rounded-[50%] object-cover
          md:rounded-lg md:w-[1000px] md:h-[600px] xl:w-[1400px] xl:h-[600px]"
          src={FaiqPicture}
          alt="Faiq"
          priority
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background.
        </h4>
        <p className="text-justify">
          I am a student graduated in Electronic Engineering Majoring in Telecommunications. However, I decided to explore to
          the Software Engineer&apos;s path. Currenctly, I am a software engineer in Air Asia. Here, I am responsible for
          designing, developing, and maintaining the company&apos;s websites and applications.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
