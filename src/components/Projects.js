import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.9, type: 'spring', stiffness: 80, damping: 12 }}
        viewport={{ once: false, amount: 0.7 }}
        style={{ textAlign: 'center', fontSize: 50, fontWeight: 800, letterSpacing: '0.04em' }}
      >
        Projects
      </motion.h2>
      <div className="project-list">
        {/* Move last three cards to the top */}
        {/* Market Sentiment Analyzer */}
        <a
          href="https://github.com/Namita-Dewang/Market-Sentiment-Analyzer-From-Twitter-news"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <motion.div 
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="project-icon">📊</div>
            <h3>Market-Sentiment-Analyzer-From-Twitter-news</h3>
            <p>The Market Sentiment Analyzer is designed to give investors, analysts and researchers a quick snapshot of public sentiment around financial assets based on recent tweets and news headlines.</p>
            <div className="project-tech-stack">
              <span>Python</span>
              <span>Flask</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JS</span>
              <span>NLP/ML (BERT)</span>
              <span>Twitter API</span>
              <span>News API</span>
              <span>Chart.js</span>
              <span>Matplotlib</span>
              <span>Pandas</span>
              <span>Requests</span>
            </div>
          </motion.div>
        </a>
        {/* CRM Web Application */}
        <a
          href="https://github.com/Namita-Dewang/CRM-Dashboard-"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <motion.div 
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="project-icon">🗂️</div>
            <h3>CRM Web Application</h3>
            <p>This is a CRM (Customer Relationship Management) Web Application built using React.js, Redux, and Redux Toolkit. It demonstrates key functionalities such as authentication, dashboard analytics, and product management (CRUD operations).</p>
            <div className="project-tech-stack">
              <span>React.js</span>
              <span>Redux & Redux Toolkit</span>
              <span>React Router DOM</span>
              <span>Axios (or Fetch API)</span>
              <span>Chart.js or Recharts</span>
              <span>DummyJSON API</span>
            </div>
          </motion.div>
        </a>
        {/* Club Website */}
        <motion.div 
          className="project-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="project-icon">🌐</div>
          <h3>Club Website</h3>
          <p>This is the official club website where various club events, hackathon rounds, and result declarations take place.</p>
          <div className="project-tech-stack">
            <span>React.js</span>
            <span>MongoDB</span>
            <span>Excel</span>
            <span>AWS</span>
            <span>Node.js</span>
          </div>
        </motion.div>
        
        {/* Original first three cards now below */}
        <motion.div 
          className="project-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="project-icon">🔍</div>
          <h3>Real-Time Shaft Detection System</h3>
          <span className="project-badge">Sponsored by Anad Group's of Industry</span>
          <p>Real-time monitoring and detection system for shaft manufacturing stages using YOLOv7 algorithm.</p>
          <div className="project-tech-stack">
            <span>YOLOv7</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Computer Vision</span>
            <span>Real-time Detection</span>
          </div>
        </motion.div>
        <motion.div 
          className="project-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="project-icon">👁️</div>
          <h3>Color Blindness Simulator</h3>
          <p>Interactive application that simulates how images appear to individuals with different types of color blindness.</p>
          <div className="project-tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>Image Processing</span>
            <span>svg Filters</span>
            <span>servlet</span>
          </div>
        </motion.div>
        <a
          href="https://github.com/Namita-Dewang/zerodha_clone"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <motion.div 
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="project-icon">🤖</div>
            <h3>Zerodha Clone</h3>
            <p>
              It's an exact copy of the Zerodha website, UI and core functionalities.  
              The project includes real-time stock data visualization, interactive charts, and user authentication.
            </p>
            <div className="project-tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>Chart.js</span>
              <span>MongoDB Atlas</span>
              <span>AWS</span>
            </div>
          </motion.div>
        </a>
      </div>
    </motion.section>
  );
}

export default Projects; 