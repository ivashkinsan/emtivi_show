import React from 'react';
import { MUSICIANS } from '../../../lib/constants/musicians';
import { MusicianCard } from '../../../components/molecules/MusicianCard';
import { useScrollReveal } from '../../../hooks';
import styles from './BandGrid.module.css';

const AnimatedMusicianCard = ({ musician, index }: { musician: typeof MUSICIANS[0], index: number }) => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.1, triggerOnce: true });
    const cardClassName = `${styles.card} ${isVisible ? styles.visible : ''}`;

    return (
        <div 
            ref={ref as React.RefObject<HTMLDivElement>}
            className={cardClassName}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <MusicianCard
                name={musician.name}
                instrument={musician.instrument}
                description={musician.description}
                photo={musician.photo}
            />
        </div>
    );
};

export const BandGrid: React.FC = () => {
    return (
        <div className={styles.grid}>
            {MUSICIANS.map((musician, index) => (
                <AnimatedMusicianCard key={musician.id} musician={musician} index={index} />
            ))}
        </div>
    );
};
