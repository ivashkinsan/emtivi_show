import styles from './Home.module.css';
import { Hero } from './components/Hero';
import { useParallax } from '../../hooks/useParallax';

export const HomeChannel = () => {
  const bgOffset = useParallax(30);
  
  return (
    <div className={styles.container}>
      <div 
        className={styles.parallaxBackground}
        style={{ transform: `translate(${bgOffset.x}px, ${bgOffset.y}px)` }}
      />
      <Hero />
    </div>
  );
};

export default HomeChannel;
