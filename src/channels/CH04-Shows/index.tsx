import React from 'react';
import styles from './Shows.module.css';
import { ServiceCard } from './components/ServiceCard';
import type { ServiceCardProps } from './components/ServiceCard';
import { useScrollReveal } from '../../hooks';

const SERVICES: ServiceCardProps[] = [
    {
        title: 'Стандартный состав',
        memberCount: 5,
        description: 'Классический состав группы, идеально подходящий для большинства мероприятий.',
        whatsIncluded: ['Вокал', 'Саксофон', 'Гитара', 'Клавиши', 'Барабаны'],
        glow: 'purple',
    },
    {
        title: 'Полный состав',
        memberCount: 8,
        description: 'Абсолютный вау-эффект с мощной медной секцией для самых масштабных событий.',
        whatsIncluded: ['Стандартный состав', 'Труба', 'Тромбон'],
        glow: 'gold',
        isTop: true,
    }
];

const AnimatedServiceCard = ({ service, index }: { service: ServiceCardProps, index: number }) => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.2, triggerOnce: true });
    const cardClassName = `${styles.card} ${isVisible ? styles.visible : ''}`;
  
    return (
      <div 
        ref={ref as React.RefObject<HTMLDivElement>}
        className={cardClassName}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <ServiceCard {...service} />
      </div>
    );
};


export const ShowsChannel: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {SERVICES.map((service, index) => (
                    <AnimatedServiceCard key={service.title} service={service} index={index} />
                ))}
            </div>
        </div>
    );
};

export default ShowsChannel;
