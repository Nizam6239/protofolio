"use client"
import React, { useState, useEffect, useRef } from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TextRevealCard } from "./ui/text-reveal-card";
import { FaLocationDot } from "react-icons/fa6";
import { Vortex } from "./ui/vortex";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiVercel,
  SiPostman,
  SiGit,
  SiGithub,
  SiCplusplus,
  SiFigma,
} from "react-icons/si";
import Image from "next/image";

const techIcons = {
  HTML: <SiHtml5 className="text-orange-500" />,
  CSS: <SiCss3 className="text-blue-500" />,
  JavaScript: <SiJavascript className="text-yellow-500" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
  ReactJS: <SiReact className="text-blue-400" />,
  NextJS: <SiNextdotjs className="text-gray-300" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  "Framer Motion": <SiFramer className="text-pink-400" />,
  NodeJS: <SiNodedotjs className="text-green-600" />,
  ExpressJS: <SiExpress className="text-gray-300" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  "Redux Toolkit": <SiRedux className="text-purple-600" />,
  Vercel: <SiVercel className="text-white" />,
  Postman: <SiPostman className="text-orange-600" />,
  Git: <SiGit className="text-red-600" />,
  GitHub: <SiGithub className="text-gray-300" />,
  "C++": <SiCplusplus className="text-blue-500" />,
  Figma: <SiFigma className="text-pink-600" />,
};

const words =
  "I'm a passionate Full-Stack Developer who loves building dynamic, user-friendly applications. I thrive on solving problems, creating seamless experiences, and continuously expanding my skills.";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const techStackRef = useRef(null);

  useEffect(() => {
    const currentRef = techStackRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2, // Adjust visibility trigger percentage
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Vortex
      backgroundColor="black"
      rangeY={800}
      particleCount={500}
      baseHue={120}
      className="flex items-center flex-col justify-center px-2 md:px-10 w-full h-full"
    >
      <div className="flex flex-col items-center mb-4 min-h-screen text-white p-8">
        <TextHoverEffect text="GET TO KNOW ME" />
        <TextRevealCard text="About Me" revealText="Tech Enthusiast" />
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="flex flex-col justify-center items-center md:items-start max-w-[400px]">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/Nizam_Image.jpeg"
                width={100}
                height={100}
                alt="Picture of the author"
                className="rounded-full h-60 w-60"
              />
              <div className="text-center md:text-justify mb-4">
                <TextGenerateEffect words={words} />
              </div>
            </div>

            <div className="flex gap-4 text-gray-400">
              <FaLocationDot className="mt-1" />
              Greater Noida, India
            </div>
          </div>

          <div className="hidden md:block h-[520px] w-px bg-amber-50"></div>

          <div className="flex-1 flex flex-col gap-8">
            <div>
              <h2 className="text-xl font-bold mb-2 text-pink-400">
                Education
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Galgotias University</span>
                  <span className="text-gray-400">2021 - 2025</span>
                </div>
                <div className="flex justify-between">
                  <p>Bachelor of Technology</p>
                  <span className="text-gray-400">CGPA: 8.4</span>
                </div>
              </div>
            </div>

            <hr className="bg-amber-50 w-[480px]" />

            <div ref={techStackRef}>
              <h2 className="text-xl font-bold mb-2 text-pink-400">Tech Stack</h2>
              <div className="grid grid-cols-3 gap-y-2 gap-x-0">
  {isVisible &&
    Object.entries(techIcons).map(([tech, icon], index) => (
      <button
        key={tech}
        className=" no-underline group cursor-pointer relative  rounded-full p-[1px] text-[10px] sm:text-xs md:text-sm font-semibold leading-5 text-white w-20 md:w-24 lg:w-28 hover:bg-gradient-to-r from-pink-500 to-purple-500 hover:text-white transition-all duration-300 ease-in-out ring-1 ring-white/10"
        style={{
          animation: `fadeIn 0.2s ease ${index * 0.2}s forwards`,
          opacity: 0,
        }}
      >
        <div className="flex items-center justify-center space-x-1 bg-zinc-950 py-1 px-2 rounded-full ring-1 ">
          {icon}
          <span className="truncate">{tech}</span>
        </div>
      </button>
    ))}
</div>


              <style jsx>{`
                @keyframes fadeIn {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </Vortex>
  );
};

export default AboutMe;
