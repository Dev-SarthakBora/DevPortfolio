import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border/50 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-display font-bold gradient-text inline-block mb-2">
              SB
            </a>
            <p className="text-muted-foreground text-sm">
              © {currentYear} Sarthak Bora. Transforming Data into Insights.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Dev-SarthakBora"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/sarthak-bora"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:borasarthak275@gmail.com"
              className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Made with love */}
        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground/70 flex items-center justify-center gap-1">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
