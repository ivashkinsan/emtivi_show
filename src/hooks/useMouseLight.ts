import { useEffect, useRef, useState } from 'react';

interface MouseLightOptions {
  color?: string;
  size?: number;
  opacity?: number;
}

const isTouchDevice = 'ontouchstart' in window;

export const useMouseLight = (
  elementRef: React.RefObject<HTMLElement>,
  options: MouseLightOptions = {}
) => {
  const { 
    color = 'rgba(139, 92, 246, 0.15)', 
    size = 300, 
    opacity = 1 
  } = options;
  
  const lightRef = useRef<HTMLDivElement | null>(null);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldReduceMotion(mediaQuery.matches);

    const handleChange = () => setShouldReduceMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || isTouchDevice || shouldReduceMotion) {
      return;
    }

    const light = document.createElement('div');
    light.style.position = 'fixed'; // Use fixed to position relative to viewport
    light.style.width = `${size}px`;
    light.style.height = `${size}px`;
    light.style.borderRadius = '50%';
    light.style.background = `radial-gradient(circle, ${color} 0%, transparent 80%)`;
    light.style.filter = `blur(${size / 4}px)`;
    light.style.opacity = '0';
    light.style.transform = 'translate(-50%, -50%)';
    light.style.transition = 'opacity 0.3s ease-out';
    light.style.pointerEvents = 'none';
    light.style.zIndex = '9999';

    document.body.appendChild(light);
    lightRef.current = light;

    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        light.style.left = `${e.clientX}px`;
        light.style.top = `${e.clientY}px`;
      });
    };

    const handleMouseEnter = () => {
      light.style.opacity = `${opacity}`;
    };

    const handleMouseLeave = () => {
      light.style.opacity = '0';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (lightRef.current && document.body.contains(lightRef.current)) {
        document.body.removeChild(lightRef.current);
      }
    };
  }, [elementRef, color, size, opacity, shouldReduceMotion]);

  return lightRef;
};
