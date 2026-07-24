import React from 'react';
import { useScrollReveal } from '../../../hooks';
import styles from './Timeline.module.css';

const YEARS = ['2010', '2015', '2020', '2024'];

export const Timeline: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.5, triggerOnce: true });
  const timelineClassName = `${styles.timeline} ${isVisible ? styles.visible : ''}`;

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={timelineClassName}>
      {YEARS.map(year => (
        <div key={year} className={styles.milestone}>
          <div className={styles.dot}></div>
          <div className={styles.year}>{year}</div>
        </div>
      ))}
    </div>
  );
};
