import React from 'react';
import scrollIcon from './arrow-down.png';
import { motion } from 'framer-motion';

import './LandingPage.scss';
import Logo from '../../components/Logo/Logo';
import { getSanityAssetUrl } from '../../api/client';

type LandingPageProps = {
  heroBg?: {
    asset: {
      _ref: string;
    };
  };
  heroImage?: {
    asset: {
      _ref: string;
    };
  };
  heroTitle?: string;
};

const LandingPage = (props: LandingPageProps) => (
  <>
    <section
      id="landing"
      className="landing-section section"
      style={{
        backgroundImage: `url(${
          props?.heroBg
            ? getSanityAssetUrl(props?.heroBg?.asset?._ref)
            : 'https://i.postimg.cc/7668qcy3/black.png'
        }`,
      }}
    >
      <div className="landing-content content">
        <header>
          <h1 className="landing-title">
            {props?.heroTitle ? props?.heroTitle : 'r.Simon'}
          </h1>
        </header>
        <div className="landing-logo">
          <Logo
            logoImg={
              props?.heroImage
                ? getSanityAssetUrl(props?.heroImage?.asset?._ref)
                : null
            }
          />
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
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </>
);

export default LandingPage;
