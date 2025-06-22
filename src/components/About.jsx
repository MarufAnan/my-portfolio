import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, experience } from '../data/portfolioData';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my journey, experience, and passion for creating digital solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {personalInfo.bio}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My journey started with a curiosity about how 
                  websites work, and it has evolved into a passion for creating seamless user experiences 
                  and robust backend systems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in writing clean, maintainable code and staying up-to-date with the latest 
                  industry trends. When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">---</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">---</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">---</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">---</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-8">Experience</h3>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
                
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className="relative flex items-start space-x-6 pb-8"
                  >
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center relative z-10">
                      <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-lg font-semibold text-foreground">
                            {exp.position}
                          </h4>
                          <span className="text-sm text-primary font-medium">
                            {exp.duration}
                          </span>
                        </div>
                        <p className="text-accent-foreground font-medium mb-3">
                          {exp.company}
                        </p>
                        <p className="text-muted-foreground mb-4">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

