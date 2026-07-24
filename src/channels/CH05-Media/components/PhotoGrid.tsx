import React from 'react';
import styles from './PhotoGrid.module.css';

// Create an array of placeholders
const PHOTOS = Array.from({ length: 12 }, (_, i) => ({ id: i }));

const PhotoItem = ({ item }: { item: { id: number } }) => {
    // Simple pseudo-random gradient
    const hue = (item.id * 40) % 360;
    const gradient = `linear-gradient(135deg, hsl(${hue}, 50%, 50%), hsl(${(hue + 60) % 360}, 50%, 30%))`;

    return (
        <div className={styles.photoItem}>
            <img 
                className={styles.photo}
                // Use a placeholder service like placehold.co for actual images
                src={`https://placehold.co/600x${Math.floor(400 + Math.random() * 400)}`} 
                alt={`Placeholder image ${item.id + 1}`}
                loading="lazy"
                style={{ background: gradient }}
            />
        </div>
    );
};

export const PhotoGrid: React.FC = () => {
    return (
        <div className={styles.grid}>
            {PHOTOS.map(item => <PhotoItem key={item.id} item={item} />)}
        </div>
    );
};
