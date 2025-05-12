import React from 'react'
import { TabsDemo } from "@/components/Tabss";
import { SparklesCore } from "./ui/sparkles";

const Project = () => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-transparent overflow-hidden mt-4 ">
  <SparklesCore
    id="tsparticlesfullpage"
    background="transparent"
    minSize={0.6}
    maxSize={1.4}
    particleDensity={100}
    className="absolute inset-0 w-full h-full -z-10"
    particleColor="#FFFFFF"
  />
  <div className='flex flex-col items-center justify-center overflow-hidden rounded-md'>
    <h1 className="md:text-7xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">Projects</h1>
    <div className="w-[35rem] h-20 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
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
