import React, { useRef, useEffect } from 'react';
import styles from './AmbientBackground.module.css';

type AmbientColor = 'purple' | 'gold' | 'blue' | 'red' | 'white';

export interface AmbientBackgroundProps {
  color?: AmbientColor;
  className?: string;
}

export const AmbientBackground: React.FC<AmbientBackgroundProps> = ({
  color = 'purple',
  className = '',
}) => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const backgroundElement = backgroundRef.current;
    if (!backgroundElement) return;

    // Check if the device is not touch-primary
    const isDesktop = window.matchMedia('(pointer: fine)').matches;
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        backgroundElement.style.setProperty('--mouse-x', `${e.clientX}px`);
        backgroundElement.style.setProperty('--mouse-y', `${e.clientY}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const combinedClassName = [
    styles.background,
    styles[color],
    className,
  ].filter(Boolean).join(' ');

  return <div ref={backgroundRef} className={combinedClassName} />;
};
