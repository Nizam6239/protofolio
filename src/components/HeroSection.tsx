"use client";
import React from 'react';
import { Button } from './ui/moving-border';

export function HeroSection () {
  return (
    <div 
      className="min-h-screen flex flex-col justify-center items-center text-white px-8 mt-0 bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514897575457-c4db467cf78e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <div className="mb-4">
        <Button
         borderRadius="1.75rem"
         className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
         Open for Collaborations
        </Button>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        Building Impactful & Scalable Web Solutions
      </h1>
      <p className="text-lg md:text-xl mb-8 text-center">
        Hi, I'm Nizam, a Full Stack Developer focused on creating user-centric, efficient, and powerful web applications.
      </p>
      <div className="flex space-x-4 justify-center">
        <button type='button' className="bg-transparent border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black">
          🤝 Let's Connect
        </button>
        <a
          href="/NIZAM_Resume.pdf"
          download="Nizam_Resume.pdf"
        >
          <button type='button' className="bg-transparent border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black">
            View Resume ↗️
          </button>
        </a>
      </div>
    </div>
  );
};
