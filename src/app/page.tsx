import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Image from "next/image";
import Hero from "./components/hero";
import AboutMe from "./components/aboutme";
import Projects from "./components/projects";

// tis is the homepage
export default function Home() {
  return (
    <Theme>
      <div className="items-center justify-items-center min-h-screen   font-[family-name:var(--font-space-grotesk)]">
     <Hero />
     <AboutMe/>
     <Projects/>
    </div>
    </Theme>
    
  );
}
