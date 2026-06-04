import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { TechStack } from "@/components/tech-stack";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}