import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import LiquidEther from "./LiquidEther";

export function Hero() {
  const { theme } = useTheme();
  const [interactionMode, setInteractionMode] = useState<"mouse" | "touch">("mouse");

  useEffect(() => {
    const hoverMq = window.matchMedia("(hover: hover)");
    const pointerMq = window.matchMedia("(pointer: fine)");

    const update = () => {
      setInteractionMode(hoverMq.matches && pointerMq.matches ? "mouse" : "touch");
    };

    update();

    const onChange = () => update();

    if ("addEventListener" in hoverMq) {
      hoverMq.addEventListener("change", onChange);
      pointerMq.addEventListener("change", onChange);
      return () => {
        hoverMq.removeEventListener("change", onChange);
        pointerMq.removeEventListener("change", onChange);
      };
    }

    hoverMq.addListener(onChange);
    pointerMq.addListener(onChange);
    return () => {
      hoverMq.removeListener(onChange);
      pointerMq.removeListener(onChange);
    };
  }, []);

  const scrollTo = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      {/* Liquid Ether Background */}
      <div className="absolute inset-0 z-0 opacity-60 dark:opacity-80 mix-blend-multiply dark:mix-blend-screen pointer-events-none">
        <LiquidEther
          colors={theme === "dark" ? ["#5227FF", "#FF9FFC", "#B497CF"] : ["#5227FF", "#FF9FFC", "#B497CF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={true}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium tracking-wide">
                Available for new projects
              </span>
              {/* <span className="text-xs text-muted-foreground">
                {interactionMode === "mouse" ? "Move your mouse to interact" : "Tap & drag to interact"}
              </span> */}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground"
          >
            Building Modern Websites That Help Businesses Grow
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Full-Stack Developer creating fast, responsive, and scalable web applications from frontend interfaces to backend systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto h-14 px-8 rounded-full text-base font-semibold shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all hover:-translate-y-1"
              onClick={() => scrollTo("#contact")}
              data-testid="hero-hire-me"
            >
              Hire Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-14 px-8 rounded-full text-base font-semibold border-border hover:bg-accent transition-all"
              onClick={() => scrollTo("#projects")}
              data-testid="hero-view-projects"
            >
              View Projects
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
