import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-primary font-medium text-lg mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                {personalInfo.name}
              </h1>
            </motion.div>

            {/* Typing Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl md:text-3xl font-semibold text-muted-foreground"
            >
              <ReactTyped
                strings={[
                  personalInfo.title,
                  "React Developer",
                  "UI/UX Enthusiast",
                  "Problem Solver"
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={2000}
                loop
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                {personalInfo.email}
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                {personalInfo.phone}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                Download Resume
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                <Mail size={20} />
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex gap-4"
            >
              <motion.a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-secondary rounded-full text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-secondary rounded-full text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-secondary rounded-full text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 scale-110" />
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320' viewBox='0 0 320 320'%3E%3Crect width='320' height='320' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%236b7280'%3EProfile Image%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
              >
                ⚛️
              </motion.div>

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              >
                💻
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

