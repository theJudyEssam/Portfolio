import "@radix-ui/themes/styles.css";
import { Theme, Separator } from "@radix-ui/themes";
import Hero from "./components/hero";
import AboutMe from "./components/aboutme";
import Projects from "./components/projects";
import Achievements from "./components/achievements";

// tis is the homepage
export default function Home() {
  return (
    <Theme>
      <div className="items-center justify-items-center min-h-screen   font-[family-name:var(--font-space-grotesk)]">
     <Hero />
     <AboutMe/>
     <Separator my="3" size="4" />
     <Projects/>
     <Separator my="3" size="4" />
     <Achievements/>
     <Separator my="3" size="4" />
    </div>
    </Theme>
    
  );
}
