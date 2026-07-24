import React from 'react';
import styles from './Home.module.css';
import { Hero } from './components/Hero';
import { GlassCard } from '../../components/molecules/GlassCard/index';
import { useScrollReveal } from '../../hooks/index';

const BENEFITS = [
  { title: 'Хиты на любой вкус', description: 'Наш репертуар знаком каждому и заставляет танцевать с первых нот.' },
  { title: 'Опыт с 2010 года', description: 'Мы — выходцы из легендарных кавер-групп Just Like Heaven и Strawberry Fields.' },
  { title: 'Полный состав', description: 'Восемь профессиональных музыкантов, включая мощную медную секцию.' },
];

const BenefitCard = ({ title, description }: { title: string, description: string }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2, triggerOnce: true });
  const cardClassName = `${styles.card} ${isVisible ? styles.visible : ''}`;

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={cardClassName}>
      <GlassCard variant="lg">
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </GlassCard>
    </div>
  );
};

export const HomeChannel = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <section className={styles.benefitsGrid}>
        {BENEFITS.map(benefit => (
          <BenefitCard key={benefit.title} {...benefit} />
        ))}
      </section>
    </div>
  );
};

export default HomeChannel;
