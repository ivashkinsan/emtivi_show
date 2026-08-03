import styles from './Home.module.css';
import { Hero } from './components/Hero';

export const HomeChannel = () => {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
};

export default HomeChannel;
