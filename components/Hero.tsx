import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import FaiqPicture from "./images/faiq-picture.jpg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text] = useTypewriter({
    words: ["Hello, I am Muhammad Faiq", "Loves Coffee", "<LearningToCode>"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-fill rounded-full h-40 w-40 mx-auto object-cover"
        priority
        src={FaiqPicture}
        alt="Faiq"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-white-500 pb-2 tracking-[15px]">Software Engineer</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          {/* <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link> */}
          {/* <Link href="#projects">
            <button className="heroButton">Project</button>
          </Link> */}
          <Link href="#resume">
            <button className="heroButton invisible md:visible">Resume</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
