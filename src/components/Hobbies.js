import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import sketingImg from '../sketing.jpg';
import paintingImg from '../sketching.jpg';
import travelingImg from '../traveling.jpg';

function Hobbies() {
  const textRef = useRef(null);
  const inView = useInView(textRef, { triggerOnce: false, threshold: 0.3 });

  const skateImgRef = useRef(null);
  const skateInView = useInView(skateImgRef, { triggerOnce: false, threshold: 0.2 });

  const paintImgRef = useRef(null);
  const paintInView = useInView(paintImgRef, { triggerOnce: false, threshold: 0.2 });

  const travelImgRef = useRef(null);
  const travelInView = useInView(travelImgRef, { triggerOnce: false, threshold: 0.2 });

  return (
    <section className="hobbies-collage">
      <div className="hobbies-grid">
        <div className="hobbies-row">
          <motion.img
            ref={skateImgRef}
            src={sketingImg}
            alt=""
            style={{ marginTop: '100px', marginRight: '40px', width: '700px', height: '700px', objectFit: 'cover' }}
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={skateInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 40 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.p
              ref={textRef}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{
                fontSize: '3rem',
                fontWeight: 500,
                marginBottom: '1rem',
                maxWidth: '400px',
                textAlign: 'center'
              }}
            >
              <span style={{ color: '#FFF9C4' }}>
                I vibe with skateboards, live for sketching wild ideas, and dream of stamping my passport on every page—
              </span>
              <br />
              <span style={{ color: '#F8BBD0' }}>
                because life's too short to stay still. Let's roll, draw, and explore!
              </span>
            </motion.p>
            <motion.img
              ref={paintImgRef}
              src={paintingImg}
              alt=""
              style={{ marginTop: '50px', width: '500px', height: '550px', objectFit: 'cover' }}
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={paintInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 40 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </div>
        <div className="hobbies-row">
          <motion.img
            ref={travelImgRef}
            src={travelingImg}
            alt=""
            style={{ width: '700px', height: '430px', objectFit: 'cover', position: 'relative', marginTop: '-440px' }}
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={travelInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 40 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hobbies; 