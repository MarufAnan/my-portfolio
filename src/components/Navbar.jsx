import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, Mail, Sun, Moon } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', to: 'hero', icon: Home },
    { name: 'About', to: 'about', icon: User },
    { name: 'Skills', to: 'skills', icon: Code },
    { name: 'Projects', to: 'projects', icon: Briefcase },
    { name: 'Contact', to: 'contact', icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent cursor-pointer"
            >
              MH
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer flex items-center gap-2"
                >
                  <item.icon size={16} />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-foreground hover:text-primary transition-colors duration-200"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:text-primary p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2 border border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 cursor-pointer  items-center gap-2"
                >
                  <item.icon size={16} />
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;

