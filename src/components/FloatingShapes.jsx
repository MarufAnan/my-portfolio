import React from 'react';
import { motion } from 'framer-motion';

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Floating Blobs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-2xl"
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, -100, -20],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
          className="absolute w-2 h-2 bg-primary/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
    </div>
  );
};

export default FloatingShapes;

