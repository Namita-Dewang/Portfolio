import React from 'react';
import { motion } from 'framer-motion';

function Home({ hideHome, homeScale, homeOpacity, isTransitioning, homeRef, theme, profilePhoto, linkedinIcon, githubIcon, instaIcon }) {
  if (hideHome) return null;
  return (
    <motion.section
      id="home"
      className="home"
      ref={homeRef}
      style={{
        scale: homeScale,
        opacity: homeOpacity,
        zIndex: 30,
        position: isTransitioning ? "fixed" : "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: theme === 'light' ? '#fff' : '#111',
        overflow: "hidden",
        pointerEvents: isTransitioning ? "auto" : "none",
      }}
      initial={false}
      animate={false}
    >
      {/* Social Media Icons */}
      <motion.div 
        className="social-links-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="social-links">
          <a href="https://www.linkedin.com/in/namita-dewang-49639425b" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/Namita-Dewang" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
            <img src={instaIcon} alt="Instagram" className="social-icon" />
          </a>
        </div>
      </motion.div>
      <div className="home-content">
        <motion.div 
          className="text-content"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Hello, I'm <span>Namita Dewang</span></h1>
          <p className="tagline">Cloud engineer | React Enthusiast | Problem Solver | JAVA Developer</p>
        </motion.div>
        <motion.div 
          className="profile-container"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="background-animation"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="profile-image"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={profilePhoto} alt="Namita Dewang" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Home; 