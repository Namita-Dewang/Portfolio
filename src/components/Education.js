import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const cardStyle = {
  width: '100%',
  background: 'var(--card-bg, #fff)',
  borderRadius: 20,
  boxShadow: '0 6px 32px 0 rgba(60,60,60,0.08)',
  padding: '28px 32px',
  borderLeft: '6px solid #ff6347', // Modern accent color
  margin: 0,
  transition: 'box-shadow 0.2s, transform 0.2s',
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  position: 'relative',
};
const cardHoverStyle = {
  boxShadow: '0 12px 32px 0 rgba(60,60,60,0.16)',
  transform: 'translateY(-4px) scale(1.02)',
};

function Education({ aboutRef, about80Out, eduOverlayScale, eduOverlayOpacity, eduContentOpacity }) {
  const blockRef = useRef(null);
  const sectionRef = useRef(null);
  const inView = useInView(blockRef, { margin: '-100px 0px -100px 0px', once: true });
  const inViewSection = useInView(sectionRef, { margin: '0px 0px 0px 0px' });
  const [hovered, setHovered] = React.useState(-1);

  // Debug logs
  console.log('about80Out:', about80Out, 'inViewSection:', inViewSection);

  // Fine-tuned overlay animation: start when Education section enters viewport, end when heading is in place
  // Offset: 'start end' means animation starts when Education top hits viewport bottom
  //         'start start' means animation ends when Education top hits viewport top
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'start start'] });
  const overlayScale = useTransform(scrollYProgress, [0, 0.25], [4, 1]);
  const overlayVisible = useTransform(overlayScale, value => value > 1 ? 1 : 0);

  const cards = [
    {
      title: '10th',
      school: 'Nagar Parishad Vidyalaya, Chandur Bazar',
      year: '2020',
      value: '92%',
      valueLabel: 'Percentage',
    },
    {
      title: '12th',
      school: 'Rular Institute of Science, Amravati',
      year: '2022',
      value: '80%',
      valueLabel: 'Percentage',
    },
    {
      title: 'B.Tech',
      school: 'MIT Academy of Engineering',
      year: '2022 - 2026',
      value: '8.29',
      valueLabel: 'CGPA',
    },
  ];

  return (
    <section
      id="education"
      className="education"
      ref={sectionRef}
      style={{ position: "relative", minHeight: "100vh", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
    >
      {/* DEBUG: Always show overlay for testing */}
      <motion.div
        className="education-hollow-overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 20,
          scale: eduOverlayScale,
          opacity: eduOverlayOpacity,
        }}
      >
        <motion.svg
          width="80vw"
          height="30vh"
          viewBox="0 0 1000 300"
          style={{ display: "block", overflow: "visible" }}
        >
          <defs>
            <linearGradient id="education-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#888" />
              <stop offset="100%" stopColor="#111" />
            </linearGradient>
          </defs>
          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Impact, Arial Black, sans-serif"
            fontWeight="900"
            fontSize="200"
            letterSpacing="0.1em"
            style={{
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.2))",
              transition: "all 0.2s",
              userSelect: "none",
              fill: 'url(#education-gradient)',
              stroke: '#111',
              strokeWidth: 4,
            }}
          >
            <tspan x="50%" dy="0">EDUCATION</tspan>
          </motion.text>
        </motion.svg>
      </motion.div>

      {/* Add margin-top between overlay and content */}
      <div style={{ marginTop: '400px' }} />

      {/* Education content always visible */}
      <div
        ref={blockRef}
        style={{ width: '100%', maxWidth: 600, display: 'flex', flexDirection: 'column', gap: 36, alignItems: 'center' }}
      >
        <div />
        {/* Section heading above the cards, with color based on theme */}
        <h2 className="education-cards-heading">Education</h2>
        <div style={{ marginBottom: '35px' }} />
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            style={{
              ...cardStyle,
              ...(hovered === idx ? cardHoverStyle : {}),
              cursor: 'pointer',
            }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(-1)}
            initial={{ opacity: 0, y: 80, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
              delay: idx * 0.25,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div style={{ fontSize: 22, fontWeight: 700, color: '#ff6347', marginBottom: 2 }}>{card.title}</div>
            <div style={{ fontSize: 18, fontWeight: 600, color: '#222', marginBottom: 2 }}>{card.school}</div>
            <div style={{ fontSize: 15, color: '#666', marginBottom: 8 }}>{card.year}</div>
            <div style={{ fontSize: 18, fontWeight: 600, color: '#222' }}>
              <span style={{ color: '#ff6347', fontWeight: 800 }}>{card.value}</span>
              <span style={{ fontSize: 15, color: '#888', marginLeft: 8 }}>{card.valueLabel}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;