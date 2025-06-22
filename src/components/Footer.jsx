import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/MarufAnan' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/maruf-halder/' },
    { name: 'Email', icon: Mail, url: 'marufhalder999@gmail.com' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Maruf Halder
            </h3>
            <p className="text-muted-foreground">
              Building amazing digital experiences with modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-secondary rounded-full text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Maruf Halder. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="/privacy"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

