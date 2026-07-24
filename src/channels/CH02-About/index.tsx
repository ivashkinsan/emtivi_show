import React from 'react';
import styles from './About.module.css';
import { ChannelHeader } from '../../components/molecules/ChannelHeader';
import { GlassCard } from '../../components/molecules/GlassCard';
import { Timeline } from './components/Timeline';
import { Facts } from './components/Facts';

export const AboutChannel: React.FC = () => {
  return (
    <div className={styles.container}>
      <ChannelHeader>CH 02 | ABOUT | LIVE</ChannelHeader>
      
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
