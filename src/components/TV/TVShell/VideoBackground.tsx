import React from 'react';
import styles from './VideoBackground.module.css';
import backgroundVideo from '../../../channels/CH01-Home/video/background for site.mp4';

export const VideoBackground: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    if (!isActive) return null;
    return (
        <video
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
            src={backgroundVideo}
        />
    );
};
