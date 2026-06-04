import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold tracking-tight text-primary mb-2">DevPort.</h3>
          <p className="text-sm text-muted-foreground">
            Crafting premium digital experiences.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-muted hover:bg-primary/20 hover:text-primary transition-colors text-muted-foreground"
            aria-label="GitHub"
            data-testid="footer-github"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-muted hover:bg-primary/20 hover:text-primary transition-colors text-muted-foreground"
            aria-label="LinkedIn"
            data-testid="footer-linkedin"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-muted hover:bg-primary/20 hover:text-primary transition-colors text-muted-foreground"
            aria-label="Twitter"
            data-testid="footer-twitter"
          >
            <FaTwitter className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-border/50 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© {currentYear} DevPort. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}