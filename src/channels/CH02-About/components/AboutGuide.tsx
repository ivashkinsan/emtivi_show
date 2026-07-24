import React, { useState } from 'react';
import styles from './AboutGuide.module.css';

const CONTENT = [
    { title: "2010", text: "Основан в 2010г, огромный опыт выступлений." },
    { title: "SHOW", text: "Световое шоу с автоматизированной партитурой." },
    { title: "ARR", text: "Уникальные аранжировки и переосмысление хитов." },
    { title: "TECH", text: "Передовые технологии в музыкальном обеспечении." },
    { title: "GEAR", text: "Свой бэклайн и возможность работы на тихой сцене." },
    { title: "PRO", text: "Музыканты с профессиональным образованием." },
    { title: "SOUND", text: "Штатный звукорежиссер — 90% успеха." },
    { title: "HITS", text: "Качественный репертуар для всех возрастов." },
];

export const AboutGuide: React.FC = () => {
    const [scaledIndex, setScaledIndex] = useState<number | null>(null);

    return (
        <div className={styles.gridContainer}>
            {CONTENT.map((item, index) => (
                <div 
                    key={index} 
                    className={`${styles.gridItem} ${scaledIndex === index ? styles.scaled : ''}`}
                    onClick={() => setScaledIndex(scaledIndex === index ? null : index)}
                >
                    <div className={styles.cardContent}>
                        <h3 className={styles.title}>{item.title}</h3>
                        <p className={styles.text}>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
