import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Github, ExternalLink, Star, Eye } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = React.useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
    ? projects.filter(project => project.featured)
    : projects.filter(project => !project.featured);

  const ProjectCard = ({ project, index }) => {
    return (
      <motion.div
        variants={cardVariants}
        className="group"
      >
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.02}
          transitionSpeed={2000}
          className="h-full"
        >
          <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  // Fallback to a placeholder if image doesn't exist
                  e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%236b7280'%3E${project.title}%3C/text%3E%3C/svg%3E`;
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star size={14} />
                  Featured
                </div>
              )}

              {/* Hover Actions */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-background/90 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-background/90 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 flex-1 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
                
                {/* Project Stats (mock data) */}
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <div className="flex items-center gap-1">
                    <Star size={14} />
                    {Math.floor(Math.random() * 50) + 10}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye size={14} />
                    {Math.floor(Math.random() * 200) + 50}
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Effect Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                 style={{ transform: 'translateZ(-1px)' }} />
          </div>
        </Tilt>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-card/30">
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
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience in web development.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={cardVariants} className="flex justify-center mb-12">
            <div className="flex gap-2 p-1 bg-secondary rounded-lg">
              {['all', 'featured', 'other'].map((filterType) => (
                <button
                  key={filterType}
                  onClick={() => setFilter(filterType)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
                    filter === filterType
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {filterType === 'other' ? 'More Projects' : filterType}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={cardVariants}
            className="mt-16 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's create something amazing together!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Get In Touch
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

