import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import pocNoamanLanding from "@/assets/images/pocNoaman-landing.png";
import nmcLanding from "@/assets/images/nmc-landing.png";
import siwesLanding from "@/assets/images/siwes-landing.png"
import philipsLanding from "@/assets/images/philips-luxury.png"

const PROJECTS = [
  {
    title: "Poc&Noaman Kitchen & Interior Solutions",
    description: "A professional business website for a kitchen and interior solutions brand, showcasing kitchen utensils, cabinets, doors, and home improvement products with a modern design and optimized user experience.",
    image: pocNoamanLanding,
    tech: ["Wordpress", "SEO"],
    demoLink: "https://www.pocnoaman.com/",
    githubLink: "#",
  },
  {
    title: "Departmental Management System",
    description: "A modern departmental website designed for staff management, showcasing team members, providing contact information, and featuring a gallery for departmental activities and events with a clean and accessible interface.",
    image: nmcLanding,
    tech: ["React.js", "Tailwind.css", "Daisy UI"],
    demoLink: "https://departmental-site.vercel.app/",
    githubLink: "https://github.com/Favskid/departmental-site",
  },
  {
  title: "SIWES Logbook Web App",
  description: "A role-based web application for SIWES management, allowing students to submit weekly log entries while supervisors review, approve, or reject submissions with a structured workflow system.",
    image: siwesLanding,
    tech: ["React.js", "Tailwind.css", "Node.js", "Express.js"],
    demoLink: "https://siwes-elogbook.vercel.app/login",
    githubLink: "https://github.com/Favskid/siwes-elogbook",
  },
  {
    title: "Philips Luxury Perfume Store",
    description: "A luxury fragrance e-commerce platform with WhatsApp-based ordering, allowing users to browse premium perfumes and place orders directly via WhatsApp for fast and seamless purchase flow.",
    image: philipsLanding,
    tech: ["React.js", "Tailwind CSS"],
    demoLink: "https://philip-s-luxury.vercel.app/",
    githubLink: "https://github.com/Favskid/Philip-s-Luxury",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            A selection of my recent work. I build scalable applications with a focus on performance, accessibility, and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover-elevate transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              data-testid={`project-card-${index}`}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 md:group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-100 pointer-events-auto md:opacity-0 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button variant="secondary" size="sm" className="rounded-full" asChild>
                    <a href={project.demoLink} target="_blank" rel="noreferrer" data-testid={`project-demo-${index}`}>
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                  <Button variant="secondary" size="sm" className="rounded-full" asChild>
                    <a href={project.githubLink} target="_blank" rel="noreferrer" data-testid={`project-github-${index}`}>
                      <FaGithub className="mr-2 h-4 w-4" /> Source
                    </a>
                  </Button>
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="bg-secondary/50 text-secondary-foreground hover:bg-secondary">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
