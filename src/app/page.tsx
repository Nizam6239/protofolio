import AboutMe from "@/components/AboutMe";
import { HeroSection } from "@/components/HeroSection";
import { NavbarDemo } from '../components/Navbar';
import Project from "@/components/Project";
import Contact from "@/components/ContactUs";


export default function Home() {
  return (
    <>
    <NavbarDemo />
    <HeroSection />
    <AboutMe />
    <Project />
    <Contact />
    </>
  );
}
