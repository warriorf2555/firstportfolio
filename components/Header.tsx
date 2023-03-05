import React from "react";
import { SocialIcon } from "react-social-icons";
import { EnvelopeIcon, DocumentTextIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {/* Social icons */}
        <SocialIcon url="https://www.linkedin.com/in/muhammad-faiq-muhamad-fisol/" fgColor="gray" bgColor="transparent" />

        <SocialIcon url="https://discordapp.com/users/353173653870870528" style={{ height: "40px" }} />

        <a download="Resume_Faiq.pdf" href="Resume_Faiq.pdf">
          <DocumentTextIcon className="h-[40px] ml-2" />
        </a>
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        {/* Contact me */}
        <Link href="#contact">
          <EnvelopeIcon className="text-white h-7 w-7 mr-2 animate-pulse" />
        </Link>
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch</p>
      </motion.div>
    </header>
  );
}

export default Header;
