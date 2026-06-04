import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let currentSection = sections[0];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "pt-4" : "pt-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-center">
        <nav className="flex items-center justify-between px-6 py-3 w-full max-w-3xl bg-background/70 backdrop-blur-md border border-border rounded-full shadow-sm">
          <div className="font-bold text-lg tracking-tight mr-8 text-primary">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}>DevPort.</a>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === link.href.substring(1)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  data-testid={`nav-link-${link.name.toLowerCase().replace(" ", "-")}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 ml-auto md:ml-0">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full w-9 h-9"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              data-testid="button-theme-toggle"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Nav */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full w-9 h-9" data-testid="button-mobile-menu">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                  <SheetTitle className="text-left mb-6 text-primary">DevPort.</SheetTitle>
                  <nav className="flex flex-col gap-4">
                    {NAV_LINKS.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollTo(link.href);
                        }}
                        className={`text-lg font-medium transition-colors hover:text-primary ${
                          activeSection === link.href.substring(1)
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                        data-testid={`mobile-nav-link-${link.name.toLowerCase().replace(" ", "-")}`}
                      >
                        {link.name}
                      </a>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}