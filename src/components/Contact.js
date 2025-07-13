import React from 'react';
import { motion } from 'framer-motion';

function Contact({ formData, handleChange, submitted, setSubmitted }) {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>Contact Me</h2>
      <p>Let's work together on your next project!</p>
      {
        submitted ? (
          <motion.div 
            className="success-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Message sent successfully!
          </motion.div>
        ) : (
          <motion.form 
            className="contact-form"
            action="https://formsubmit.co/namitadewang@gmail.com"
            method="POST"
          >
            <motion.div>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="contact-input"
                required
              />
            </motion.div>
            <motion.div>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="contact-input"
                required
              />
            </motion.div>
            <motion.div>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="contact-input contact-textarea"
                rows="4"
                required
              />
            </motion.div>
            <motion.button 
              className="contact-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
            >
              Send Message
            </motion.button>
          </motion.form>
        )
      }
      <button className="contact-btn">Get in Touch</button>
      <div style={{ marginTop: '10px', fontSize: '1rem', color: '#b0b0b0', textAlign: 'center', wordBreak: 'break-all' }}>
        namitadewang@gmail.com
      </div>
    </motion.section>
  );
}

export default Contact; 