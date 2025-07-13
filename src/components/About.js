import React from 'react';
import { motion } from 'framer-motion';

function About({ aboutRef, aboutContentOpacity, aboutContentY, aboutContentColor }) {
  return (
    <section
      id="about"
      className="about"
      ref={aboutRef}
      style={{ position: "relative", minHeight: "100vh" }}
    >
      <motion.div
        className="about-content"
        style={{
          opacity: aboutContentOpacity,
          y: aboutContentY,
          pointerEvents: aboutContentOpacity ? "auto" : "none",
          zIndex: 1,
          marginTop: '700px'
        }}
      >
        <div className="about-text">
          <motion.p style={{ color: aboutContentColor }}>
            I'm Namita Dewang, a Computer Engineer with a passion for cloud computing and full-stack development. 
            With expertise in cloud technologies and a strong foundation in Java, I bring ideas to life through code. 
            My technical toolkit includes MySQL, C++, Linux, Red Hat, Node.js, and React, allowing me to build 
            robust and scalable solutions.
          </motion.p>
          <motion.p style={{ color: aboutContentColor }}>
            What drives me is the opportunity to solve complex problems and create efficient, user-centric 
            applications. I'm constantly exploring new technologies and best practices to enhance my skills 
            and deliver innovative solutions that make a difference.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

export default About; 