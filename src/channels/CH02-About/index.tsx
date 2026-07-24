import React from 'react';
import styles from './About.module.css';
import { AboutGuide } from './components/AboutGuide';
import { AboutBackground } from './components/AboutBackground';

export const AboutChannel: React.FC = () => {
  return (
    <div className={styles.container}>
      <AboutBackground />
      <AboutGuide />
    </div>
  );
};

export default AboutChannel;
