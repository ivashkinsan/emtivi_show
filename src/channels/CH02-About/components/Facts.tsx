import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../../../hooks';
import styles from './Facts.module.css';

const useAnimatedCounter = (end: number, isVisible: boolean) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      if (!isVisible) return;
  
      let start = 0;
      const duration = 1500;
      const frameRate = 1000 / 60;
      const totalFrames = Math.round(duration / frameRate);
      const increment = end / totalFrames;
  
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(counter);
          setCount(end);
        } else {
          setCount(Math.ceil(start));
        }
      }, frameRate);
  
      return () => clearInterval(counter);
    }, [end, isVisible]);
  
    return count;
};

const FactItem = ({ value, label, plus = false }: { value: number; label: string; plus?: boolean }) => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.8, triggerOnce: true });
    const count = useAnimatedCounter(value, isVisible);

    return (
        <div ref={ref as React.RefObject<HTMLDivElement>} className={styles.factItem}>
            <span className={styles.factValue}>{count}{plus && '+'}</span>
            <span className={styles.factLabel}>{label}</span>
        </div>
    );
};

export const Facts: React.FC = () => {
  return (
    <div className={styles.factsContainer}>
      <FactItem value={14} label="лет на сцене" plus />
      <FactItem value={5} label="участников в составе" />
      <FactItem value={500} label="концертов" plus />
    </div>
  );
};
