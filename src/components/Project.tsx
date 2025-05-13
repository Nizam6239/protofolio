import React from 'react'
import { TabsDemo } from "@/components/Tabss";
import { SparklesCore } from "./ui/sparkles";

const SPARKLES_CONFIG = {
  main: {
    minSize: 0.6,
    maxSize: 1.4,
    particleDensity: 100,
    particleColor: "#FFFFFF"
  },
  title: {
    minSize: 0.4,
    maxSize: 1,
    particleDensity: 1200,
    particleColor: "#FFFFFF"
  }
};

const GRADIENT_STYLES = {
  indigo: {
    baseClass: "absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent",
    blurClass: "h-[2px] w-3/4 blur-sm",
    normalClass: "h-px w-3/4"
  },
  sky: {
    baseClass: "absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent",
    blurClass: "h-[5px] w-1/4 blur-sm",
    normalClass: "h-px w-1/4"
  }
};

const GradientLine: React.FC<{
  baseClass: string;
  blurClass: string;
  normalClass: string;
}> = ({ baseClass, blurClass, normalClass }) => (
  <>
    <div className={`${baseClass} ${blurClass}`} />
    <div className={`${baseClass} ${normalClass}`} />
  </>
);

const Project = () => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-transparent overflow-hidden mt-4 ">
  <SparklesCore
    id="tsparticlesfullpage"
    background="transparent"
    minSize={SPARKLES_CONFIG.main.minSize}
    maxSize={SPARKLES_CONFIG.main.maxSize}
    particleDensity={SPARKLES_CONFIG.main.particleDensity}
    className="absolute inset-0 w-full h-full -z-10"
    particleColor={SPARKLES_CONFIG.main.particleColor}
  />
  <div className='flex flex-col items-center justify-center overflow-hidden rounded-md'>
    <h1 className="md:text-7xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">Projects</h1>
    <div className="w-[35rem] h-20 relative">
        <GradientLine {...GRADIENT_STYLES.indigo} />
        <GradientLine {...GRADIENT_STYLES.sky} />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={SPARKLES_CONFIG.title.minSize}
          maxSize={SPARKLES_CONFIG.title.maxSize}
          particleDensity={SPARKLES_CONFIG.title.particleDensity}
          className="w-full h-full"
          particleColor={SPARKLES_CONFIG.title.particleColor}
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
  </div>
  <TabsDemo/>
</div>
  )
}

export default Project
