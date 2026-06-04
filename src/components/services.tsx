import { motion } from "framer-motion";
import { Code, Layout, Paintbrush, MonitorSmartphone } from "lucide-react";

const SERVICES = [
  {
    title: "Website Development",
    description: "Fast, secure, and highly scalable custom websites tailored to your specific business needs and objectives.",
    icon: MonitorSmartphone,
  },
  {
    title: "Frontend Development",
    description: "Translating complex design systems into robust, accessible, and performant user interfaces using modern frameworks.",
    icon: Code,
  },
  {
    title: "Website Redesign",
    description: "Revitalizing outdated platforms with modern aesthetics, improved user experience, and optimized performance metrics.",
    icon: Paintbrush,
  },
  {
    title: "Landing Page Development",
    description: "High-converting, visually striking landing pages engineered for maximum engagement and lead generation.",
    icon: Layout,
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive frontend solutions designed to elevate your digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] hover:-translate-y-1"
              data-testid={`service-card-${index}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}