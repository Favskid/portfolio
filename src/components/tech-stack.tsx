import { motion } from "framer-motion";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiWordpress,
  SiTypescript,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

function Css3Icon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
    </svg>
  );
}

const TECHS = [
  { name: "HTML5", icon: SiHtml5, color: "hover:text-[#E34F26]" },
  { name: "CSS3", icon: Css3Icon, color: "hover:text-[#1572B6]" },
  { name: "JavaScript", icon: SiJavascript, color: "hover:text-[#F7DF1E]" },
  { name: "TypeScript", icon: SiTypescript, color: "hover:text-[#3178C6]" },
  { name: "React", icon: SiReact, color: "hover:text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "hover:text-black dark:hover:text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:text-[#06B6D4]" },
  { name: "Node.js", icon: SiNodedotjs, color: "hover:text-[#339933]" },
  { name: "Express", icon: SiExpress, color: "hover:text-black dark:hover:text-white" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "hover:text-[#4169E1]" },
  { name: "WordPress", icon: SiWordpress, color: "hover:text-[#21759B]" },
  { name: "Git", icon: SiGit, color: "hover:text-[#F05032]" },
];

export function TechStack() {
  // Duplicate arrays for seamless scrolling
  const firstRow = [...TECHS, ...TECHS];
  const secondRow = [...TECHS].reverse();
  const doubledSecondRow = [...secondRow, ...secondRow];

  return (
    <section id="tech-stack" className="py-24 bg-background overflow-hidden border-y border-border/50">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">Technologies & Tools</h2>
          <p className="text-2xl font-medium text-foreground">The stack that powers my builds</p>
        </motion.div>
      </div>

      <div className="group relative w-full flex flex-col gap-8 select-none mask-image-linear">
        {/* Row 1 */}
        <div className="flex w-[200%] md:w-[150%]">
          <div className="flex w-full animate-marquee gap-8 md:gap-16 items-center">
            {firstRow.map((tech, i) => (
              <div 
                key={`${tech.name}-1-${i}`}
                className={`flex flex-col items-center justify-center gap-3 min-w-[100px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${tech.color}`}
              >
                <tech.icon className="w-12 h-12" />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Reverse) */}
        <div className="flex w-[200%] md:w-[150%] relative left-[-50%]">
          <div className="flex w-full animate-marquee-reverse gap-8 md:gap-16 items-center">
            {doubledSecondRow.map((tech, i) => (
              <div 
                key={`${tech.name}-2-${i}`}
                className={`flex flex-col items-center justify-center gap-3 min-w-[100px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${tech.color}`}
              >
                <tech.icon className="w-12 h-12" />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .mask-image-linear {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}