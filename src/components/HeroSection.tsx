import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Download, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-20 relative">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 md:mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium bg-primary/10 border border-primary/30 text-primary">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse" />
            Data Analyst
          </span>
        </motion.div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 md:mb-8"
        >
          <span className="status-badge text-xs md:text-sm">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 animate-pulse" />
            Open to Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 md:mb-6 gradient-text glow-primary"
        >
          Sarthak Bora
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2"
        >
          Transforming raw data into actionable insights through{' '}
          <span className="text-primary font-semibold">advanced analytics</span>,{' '}
          <span className="text-secondary font-semibold">visualization</span>, and{' '}
          <span className="text-accent font-semibold">machine learning</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12"
        >
          <a 
            href="#contact"
            className="btn-hero-primary inline-flex items-center justify-center gap-2 text-sm md:text-base px-6 md:px-8 py-3 md:py-4"
          >
            Get In Touch
            <ArrowRight size={16} className="md:w-[18px] md:h-[18px]" />
          </a>
          <a 
            href="#projects"
            className="btn-hero-outline inline-flex items-center justify-center gap-2 text-sm md:text-base px-6 md:px-8 py-3 md:py-4"
          >
            View Projects
          </a>
          <a 
            href="https://github.com/Dev-SarthakBora"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-outline inline-flex items-center justify-center gap-2 text-sm md:text-base px-6 md:px-8 py-3 md:py-4"
          >
            <Download size={16} className="md:w-[18px] md:h-[18px]" />
            Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-3 md:gap-4"
        >
          <a
            href="https://github.com/Dev-SarthakBora"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon w-10 h-10 md:w-12 md:h-12"
            aria-label="GitHub Profile"
          >
            <Github size={18} className="md:w-[22px] md:h-[22px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/sarthak-bora"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon w-10 h-10 md:w-12 md:h-12"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} className="md:w-[22px] md:h-[22px]" />
          </a>
          <a
            href="mailto:borasarthak275@gmail.com"
            className="social-icon w-10 h-10 md:w-12 md:h-12"
            aria-label="Send Email"
          >
            <Mail size={18} className="md:w-[22px] md:h-[22px]" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 scroll-indicator"
        >
          <ChevronDown size={28} className="md:w-8 md:h-8 text-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
