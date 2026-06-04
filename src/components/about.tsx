import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import avatarImg from "@/assets/images/avatar.png";

export function About() {
  const stats = [
    { value: "25+", label: "Projects Completed" },
    { value: "15+", label: "Technologies Used" },
    { value: "20+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={avatarImg}
                alt="Abstract Developer Avatar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl pointer-events-none" />
            </div>
            {/* Decorative background element */}
            <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl rounded-[3rem] opacity-50" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                I'm a passionate frontend developer dedicated to building exceptional digital experiences. 
                With a deep understanding of modern web technologies, I transform complex requirements into 
                elegant, high-performance applications.
              </p>
              <p>
                My approach combines technical expertise with a keen eye for design, ensuring that every 
                project not only works flawlessly but looks incredible. I specialize in the React ecosystem, 
                creating responsive, accessible, and scalable interfaces.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {[
                "Pixel-perfect design implementation",
                "Performance optimization & SEO",
                "Clean, maintainable code architecture",
                "Seamless user experiences"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <CircleCheck className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="bg-card border-border hover:border-primary/30 transition-colors text-center py-6">
                <CardContent className="p-0">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}