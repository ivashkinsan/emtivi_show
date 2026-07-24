import React from 'react';
import styles from './About.module.css';
import { GlassCard } from '../../components/molecules/GlassCard';
import { Timeline } from './components/Timeline';
import { Facts } from './components/Facts';
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

export const AboutChannel: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.benefitsGrid}>
        {BENEFITS.map(benefit => (
          <BenefitCard key={benefit.title} {...benefit} />
        ))}
      </section>
      
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Наша история</h2>
        <p className={styles.historyText}>
          Ребята из легендарных групп Just Like Heaven и StrawberryFields, теперь с ещё большим драйвом! Опыт на сцене — с 2010 года.
        </p>
        <Timeline />
      </section>

      <section className={styles.section}>
        <GlassCard variant="lg" glow="gold">
            <h3 className={styles.cardTitle}>От каверов к авторскому звучанию</h3>
            <p className={styles.cardText}>
                Мы начинали с исполнения любимых хитов, но со временем наш собственный стиль и звук стали основой репертуара. Сегодня EMTIVI — это уникальный музыкальный опыт, сочетающий ностальгию и современный грув.
            </p>
        </GlassCard>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Факты</h2>
        <Facts />
      </section>

      <section className={styles.section}>
        <div className={styles.photoPlaceholder}>
            <span>Фото группы</span>
        </div>
      </section>
    </div>
  );
};

export default AboutChannel;
