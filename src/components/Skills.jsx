import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const SkillCard = ({ skill, index }) => {
    return (
      <motion.div
        variants={cardVariants}
        whileHover={{ 
          scale: 1.05,
          rotateY: 10,
          z: 50,
        }}
        whileTap={{ scale: 0.95 }}
        className="group relative bg-card border border-border rounded-xl p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Skill Icon */}
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="text-4xl mb-4 relative z-10"
        >
          {skill.icon}
        </motion.div>

        {/* Skill Name */}
        <h3 className="text-lg font-semibold text-foreground mb-3 relative z-10">
          {skill.name}
        </h3>

        {/* Progress Bar */}
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Proficiency</span>
            <span className="text-sm font-medium text-primary">{skill.level}%</span>
          </div>
          
          <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
            >
              {/* Animated shine effect */}
              <motion.div
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.div>
          </div>
        </div>

        {/* Hover Glow Border */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={cardVariants}
                className="space-y-8"
              >
                {/* Category Title */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {category.category}
                  </h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto" />
                </div>

                {/* Skills Grid */}
                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {category.items.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={categoryIndex * category.items.length + index}
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={cardVariants}
            className="mt-16 text-center bg-card/50 rounded-2xl p-8 border border-border"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Always Learning
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to continuous learning. 
              I regularly explore new frameworks, tools, and best practices to stay 
              current with industry trends and deliver cutting-edge solutions.
            </p>
            
            {/* Learning Progress */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">---</div>
                <div className="text-sm text-muted-foreground">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">---</div>
                <div className="text-sm text-muted-foreground">Hours of Learning/Month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">---</div>
                <div className="text-sm text-muted-foreground">Certifications Earned</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

