"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import Link from 'next/link';
import { FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  value: string;
  image: string;
  link: string;
}

const PROJECTS: Project[] = [
  {
    title: "Smart Home App",
    value: "Smart Home App",
    image: "/SmartHomeImage.png",
    link: "https://smart-home-integration-website.onrender.com"
  },
  {
    title: "Text App",
    value: "TextApp",
    image: "/TextUserApp.png",
    link: "https://textuserapp.netlify.app"
  },
  {
    title: "Fashion Things",
    value: "Fashion Things",
    image: "/FashionThings.png",
    link: "https://fashionwebsitenext.netlify.app"
  },
  {
    title: "Shop App",
    value: "Shop App",
    image: "/ShopApp.png",
    link: "https://shopwebsite1.netlify.app"
  },
  {
    title: "Gemini clone",
    value: "Gemini clone",
    image: "/GeminiClone.png",
    link: "https://geminicloneapp1.netlify.app"
  }
];

const ProjectContent: React.FC<{ image: string }> = ({ image }) => (
  <Image
    src={image}
    alt="Project screenshot"
    width="1000"
    height="1000"
    className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[100%] rounded-xl mx-auto"
  />
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    <div className="flex flex-row justify-between">
      <p>{project.title}</p>
      <Link 
        href={project.link}
        target="_blank" 
        rel="noopener noreferrer" 
        className="border-4 border-amber-50 rounded-full flex items-center justify-center w-12 h-12"
      >
        <FaExternalLinkAlt size={25} />
      </Link>
    </div>
    <ProjectContent image={project.image} />
  </div>
);

export function TabsDemo() {
  const tabs = PROJECTS.map(project => ({
    title: project.title,
    value: project.value,
    content: <ProjectCard project={project} />
  }));

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative max-w-5xl mx-auto w-full items-center justify-center mt-10 mb-28">
      <Tabs tabs={tabs} />
    </div>
  );
}
