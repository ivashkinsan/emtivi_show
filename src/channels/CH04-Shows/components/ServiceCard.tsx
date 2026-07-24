import React from 'react';
import styles from './ServiceCard.module.css';
import { GlassCard } from '../../../components/molecules/GlassCard';
import Button from '../../../components/atoms/Button/Button';
import Badge from '../../../components/atoms/Badge/Badge';

export interface ServiceCardProps {
    title: string;
    memberCount: number;
    description: string;
    whatsIncluded: string[];
    glow: 'purple' | 'gold';
    isTop?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    memberCount,
    description,
    whatsIncluded,
    glow,
    isTop = false,
}) => {
    return (
        <GlassCard variant="lg" glow={glow} className={styles.card}>
            {isTop && <Badge variant="gold" size="md" className={styles.badge}>TOP</Badge>}
            
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                <span className={styles.memberCount}>{memberCount} человек</span>
            </div>
            
            <p className={styles.description}>{description}</p>

            <div className={styles.included}>
                <h4 className={styles.includedTitle}>Что входит:</h4>
                <ul className={styles.includedList}>
                    {whatsIncluded.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>

            <div className={styles.footer}>
                <span className={styles.price}>Договорная</span>
                <Button variant="secondary" size="lg">Заказать</Button>
            </div>
        </GlassCard>
    );
};
