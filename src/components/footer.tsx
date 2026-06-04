import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const NAV_LINKS = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const SOCIAL_LINKS = [
    { name: "GitHub", href: "https://github.com/Favskid", icon: FaGithub, testId: "footer-github" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/oloda-oladipupo/", icon: FaLinkedin, testId: "footer-linkedin" },
    { name: "Twitter", href: "https://twitter.com", icon: FaTwitter, testId: "footer-twitter" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#home");
              }}
              className="inline-flex items-center text-xl font-bold tracking-tight text-primary"
              data-testid="footer-brand"
            >
              Favskid
            </a>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Crafting premium digital experiences with modern UI, performance, and clean engineering.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                const isExternal = link.href.startsWith("http");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary/20 hover:text-primary"
                    aria-label={link.name}
                    data-testid={link.testId}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-tight text-foreground">Explore</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    data-testid={`footer-nav-${link.name.toLowerCase().replaceAll(" ", "-")}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-tight text-foreground">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:favouroloda24@gmail.com"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="footer-email"
                >
                  <FaEnvelope className="h-4 w-4" />
                  <span>favouroloda24@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2349037354335"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="footer-whatsapp"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("#contact");
                  }}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="footer-cta"
                >
                  Send a message →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-sm text-muted-foreground">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p>© {currentYear} Favskid. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a href="#" className="transition-colors hover:text-foreground" data-testid="footer-privacy">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-foreground" data-testid="footer-terms">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
