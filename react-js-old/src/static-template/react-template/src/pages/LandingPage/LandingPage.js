import React from 'react';
import Logo from '../../components/Logo';
import scrollIcon from './arrow-down.png';
import { motion } from 'framer-motion';

import './LandingPage.scss';

const LandingPage = () => {
  return (
    <>
      <section id="landing" className="landing-section section">
        <div className="landing-content content">
          <header>
            <h1 className="landing-title">r.SIMON</h1>
          </header>
          <div className="landing-logo">
            <Logo />
          </div>
          <div className="scroll-icon">
            <a href="#about">
              <motion.img
                src={scrollIcon}
                alt="scroll"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </a>
          </div>
        </div>
      </section>
      <div className="landing-video">
        <iframe
          className="landing-video-frame"
          src="https://www.youtube.com/embed/03DNHmBg3kQ?modestbranding=1&rel=0&controls=0&autoplay=1&enablejsapi=1&muted=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default LandingPage;
