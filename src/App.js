import React, { useState, useEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./App.css";
import profilePhoto from './formal_photo.png';
import linkedinIcon from './linkdin.jpg';
import githubIcon from './github.svg';
import instaIcon from './insta.jpg';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const { scrollY } = useViewportScroll();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const [about80Out, setAbout80Out] = useState(false);

  // Transition range (in px)
  const TRANSITION_START = 0;
  const TRANSITION_END = 600; // adjust for how long you want the effect

  const [hideHome, setHideHome] = useState(false);
  const [forceShowHome, setForceShowHome] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (forceShowHome) return; // Don't auto-hide if forced
      if (latest >= TRANSITION_END && !hideHome) {
        setHideHome(true);
      } else if (latest < TRANSITION_END && hideHome) {
        setHideHome(false);
      }
    });
  }, [scrollY, hideHome, forceShowHome]);

  // If user scrolls away from the top, disable forceShowHome
  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (forceShowHome && latest > 10) {
        setForceShowHome(false);
      }
    });
  }, [scrollY, forceShowHome]);

  // Home section: fixed during transition, static after
  const isTransitioning = scrollY && scrollY.get() < TRANSITION_END;

  // Hide Home section as soon as About overlay starts to appear
  const HOME_HIDE_AT = TRANSITION_END - 80; // About overlay starts at this scroll position

  // Home scale and opacity (optional, can keep at 1 if you want no scale/fade)
  const homeScale = useTransform(scrollY, [TRANSITION_START, TRANSITION_END], [1.1, 1]);
  const homeOpacity = useTransform(scrollY, [TRANSITION_START, TRANSITION_END * 0.8, TRANSITION_END], [1, 0.8, 0.5]);

  // ABOUT overlay: scale, opacity, color
  const aboutOverlayScale = useTransform(scrollY, [TRANSITION_START, TRANSITION_END], [8, 1]);
  const aboutOverlayOpacity = useTransform(scrollY, [TRANSITION_START, TRANSITION_START + 50, TRANSITION_END - 100, TRANSITION_END], [0, 1, 1, 0]);
  const aboutOverlayColor = useTransform(scrollY, [TRANSITION_START, TRANSITION_END - 80, TRANSITION_END], ["transparent", "transparent", "#111"]);
  const aboutOverlayBg = useTransform(scrollY, [TRANSITION_START, TRANSITION_END - 80, TRANSITION_END], ["inherit", "inherit", "none"]);

  // About content: fade in, slide up, and color transition after overlay is gone
  const aboutContentY = useTransform(scrollY, [TRANSITION_END, TRANSITION_END + 200], [40, 0]);
  const aboutContentOpacity = useTransform(scrollY, [TRANSITION_END, TRANSITION_END + 200], [0, 1]);
  const aboutContentColor = useTransform(
    scrollY,
    [
      TRANSITION_END - 300, // Start
      TRANSITION_END - 100, // Middle (darker)
      TRANSITION_END + 100  // End
    ],
    [
      theme === 'light' ? '#ff6347' : '#ff6347', // Accent at start
      theme === 'light' ? '#222' : '#aaa',      // Darker in the middle
      theme === 'light' ? '#ff6347' : '#ff6347' // Accent at end
    ]
  );

  // Education transition range (after About)
  const EDU_TRANSITION_START = 1000; // adjust based on About section height
  const EDU_TRANSITION_END = 1600;   // adjust for effect length

  // Education overlay: scale, opacity, color
  const eduOverlayScale = useTransform(scrollY, [EDU_TRANSITION_START, EDU_TRANSITION_END], [8, 1]);
  const eduOverlayOpacity = useTransform(scrollY, [EDU_TRANSITION_START, EDU_TRANSITION_START + 50, EDU_TRANSITION_END - 100, EDU_TRANSITION_END], [0, 1, 1, 0]);
  const eduOverlayColor = useTransform(scrollY, [EDU_TRANSITION_START, EDU_TRANSITION_END - 80, EDU_TRANSITION_END], ["transparent", "transparent", "#111"]);
  const eduOverlayBg = useTransform(scrollY, [EDU_TRANSITION_START, EDU_TRANSITION_END - 80, EDU_TRANSITION_END], ["inherit", "inherit", "none"]);

  // Education content: fade in after overlay is small and solid
  const eduContentOpacity = useTransform(scrollY, [EDU_TRANSITION_END - 50, EDU_TRANSITION_END + 150], [0, 1]);

  // 1. Add new motion values for SVG fill and stroke
  const aboutTextFill = useTransform(scrollY, [TRANSITION_START, TRANSITION_END - 80, TRANSITION_END], ["rgba(0,0,0,0)", "rgba(0,0,0,0)", theme === 'light' ? '#111' : '#fff']);
  const aboutTextStroke = useTransform(scrollY, [TRANSITION_START, TRANSITION_END - 80, TRANSITION_END], [theme === 'light' ? '#111' : '#fff', theme === 'light' ? '#111' : '#fff', 'rgba(0,0,0,0)']);
  const aboutTextStrokeWidth = useTransform(scrollY, [TRANSITION_START, TRANSITION_END - 80, TRANSITION_END], [2, 2, 0]);

  useEffect(() => {
    function handleHashChange() {
      if (window.location.hash === "#about") {
        window.scrollTo({
          top: TRANSITION_END + 1,
          behavior: "auto"
        });
      }
      if (window.location.hash === "#home") {
        setForceShowHome(true);
        setHideHome(false);
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    }
    window.addEventListener("hashchange", handleHashChange, false);
    // Also check on mount in case user loads with #about
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange, false);
  }, []);

  useEffect(() => {
    function onScroll() {
      if (aboutSectionRef.current) {
        const rect = aboutSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const aboutHeight = rect.height;
        // When bottom of About is above 20% of its height from the top of viewport
        if (rect.bottom < windowHeight - aboutHeight * 0.2) {
          setAbout80Out(true);
        } else {
          setAbout80Out(false);
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <ul style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li style={{ flex: 1 }}></li>
          <li style={{ marginLeft: 'auto' }}>
            <button className="theme-toggle-btn" onClick={toggleTheme} style={{ background: 'none', border: 'none', boxShadow: 'none', padding: 0, margin: 0, cursor: 'pointer' }}>
              <LightbulbRoundedIcon fontSize="large" style={{ color: theme === 'light' ? '#FFD600' : '#B0B0B0' }} />
            </button>
          </li>
        </ul>
      </nav>

      {/* Home Section: fixed during transition, static after */}
      <Home 
        hideHome={hideHome && !forceShowHome}
        homeScale={homeScale}
        homeOpacity={homeOpacity}
        isTransitioning={isTransitioning}
        homeRef={homeRef}
        theme={theme}
        profilePhoto={profilePhoto}
        linkedinIcon={linkedinIcon}
        githubIcon={githubIcon}
        instaIcon={instaIcon}
      />

      {/* ABOUT hollow text overlay transition (SVG) */}
      <motion.div
        className="about-hollow-overlay"
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
          scale: aboutOverlayScale,
          opacity: aboutOverlayOpacity,
        }}
      >
        <motion.svg
          width="80vw"
          height="30vh"
          viewBox="0 0 1000 300"
          style={{
            display: "block",
            overflow: "visible",
          }}
        >
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
            }}
            initial={false}
            animate={false}
            fill={aboutTextFill}
            stroke={aboutTextStroke}
            strokeWidth={aboutTextStrokeWidth}
          >
            <tspan x="50%" dy="0">ABOUT</tspan>
            <tspan x="50%" dy="1.2em">ME</tspan>
          </motion.text>
        </motion.svg>
      </motion.div>

      {/* About Section with cinematic scroll transition */}
      <About 
        aboutRef={aboutSectionRef}
        aboutContentOpacity={aboutContentOpacity}
        aboutContentY={aboutContentY}
        aboutContentColor={aboutContentColor}
      />


      {/* Education Section with cinematic scroll transition */}
      <Education 
        aboutRef={aboutSectionRef}
        about80Out={about80Out}
        eduOverlayScale={eduOverlayScale}
        eduOverlayOpacity={eduOverlayOpacity}
        eduContentOpacity={eduContentOpacity}
      />

      {/* Projects Section */}
      <Projects />

      {/* Hobbies Section */}
      <Hobbies />

      {/* Contact Section */}
      <Contact 
        formData={formData}
        handleChange={handleChange}
        submitted={submitted}
        setSubmitted={setSubmitted}
      />
    </div>
  );
}

export default App;
