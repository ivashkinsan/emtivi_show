import React from 'react';
import styles from './VideoCard.module.css';
import { GlassCard } from '../../../components/molecules/GlassCard';

const PlayIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
    </svg>
);

export const VideoCard: React.FC<{ duration: string }> = ({ duration }) => {
    return (
        <GlassCard variant="sm" className={styles.card}>
            <div className={styles.thumbnail}>
                <div className={styles.playButton}>
                    <PlayIcon />
                </div>
            </div>
            <div className={styles.info}>
                <span className={styles.title}>Концерт в "Руки Вверх Бар"</span>
                <span className={styles.duration}>{duration}</span>
            </div>
        </GlassCard>
    );
};
