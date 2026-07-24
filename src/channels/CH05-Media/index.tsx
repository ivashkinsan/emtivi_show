import React from 'react';
import styles from './Media.module.css';
import { PhotoGrid } from './components/PhotoGrid';
import { VideoCard } from './components/VideoCard';

export const MediaChannel: React.FC = () => {
    return (
        <div className={styles.container}>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Фото</h2>
                <PhotoGrid />
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Видео</h2>
                <div className={styles.videoGrid}>
                    <VideoCard duration="3:45" />
                    <VideoCard duration="5:12" />
                </div>
            </section>
        </div>
    );
};

export default MediaChannel;
