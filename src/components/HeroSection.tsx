"use client";
import React from "react";
import { Button } from "./ui/moving-border";

const HERO_CONTENT = {
  title: "Building Impactful & Scalable Web Solutions",
  description:
    "Hi, I'm Nizam, a Full Stack Developer focused on creating user-centric, efficient, and powerful web applications.",
  connectText: "🤝 Let's Connect",
  resumeText: "View Resume ↗️",
  backgroundImage:
    "https://images.unsplash.com/photo-1514897575457-c4db467cf78e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const SOCIAL_LINKS = {
  github: "https://github.com/Nizam6239",
  linkedin: "https://www.linkedin.com/in/nizam-906242226",
};

const handleExternalLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export function HeroSection() {
  return (
    <div
      className="w-full min-h-screen overflow-x-hidden bg-cover bg-center text-white flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-10"
      style={{
        backgroundImage: `url('${HERO_CONTENT.backgroundImage}')`,
      }}
    >
      {/* Collaboration Button */}
      <div className="flex justify-center mt-20 mb-8">
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm sm:text-base"
          onClick={() => handleExternalLink(SOCIAL_LINKS.github)}
        >
          Open for Collaborations
        </Button>
      </div>

      {/* Heading */}
      <h1 className="text-center font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 px-2">
        <span className="block animate-revealText">
          {HERO_CONTENT.title}
        </span>
      </h1>

      {/* Description */}
      <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl mb-8 max-w-2xl px-2">
        {HERO_CONTENT.description}
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {/* Connect Button */}
        <button
          className="relative flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={() => handleExternalLink(SOCIAL_LINKS.linkedin)}
        >
          <span className="absolute -inset-[300%] sm:-inset-[1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="relative flex items-center justify-center rounded-full bg-slate-950 px-5 sm:px-6 py-1.5 text-sm sm:text-base font-medium text-white backdrop-blur-3xl">
            {HERO_CONTENT.connectText}
          </span>
        </button>

        {/* Resume Button */}
        <a href="/NIZAM_Resume.pdf" download="Nizam_Resume.pdf">
          <button
            className="relative flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            type="button"
          >
            <span className="absolute -inset-[300%] sm:-inset-[1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="relative flex items-center justify-center rounded-full bg-slate-950 px-5 sm:px-6 py-1.5 text-sm sm:text-base font-medium text-white backdrop-blur-3xl">
              {HERO_CONTENT.resumeText}
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}
