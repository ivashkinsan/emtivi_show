import React, { useState, useEffect } from 'react';
import styles from './ChannelHeader.module.css';
import LogoSVG from '../../Logo/LogoSVG';

interface ChannelHeaderProps {
  channelId: string;
}

const formatTime = (date: Date) => {
    // As per reference image, e.g., 22:37
    return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
};

export const ChannelHeader: React.FC<ChannelHeaderProps> = ({ channelId }) => {
    const [currentTime, setCurrentTime] = useState(formatTime(new Date()));

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(formatTime(new Date()));
        }, 1000 * 30); // Update every 30 seconds is enough

        return () => clearInterval(timerId);
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <span className={styles.channelId}>{channelId}</span>
                <span className={styles.liveIndicator}>● LIVE</span>
            </div>
            <div className={styles.center}>
                <div className={styles.logoWrapper}>
                    <LogoSVG className={styles.logoSvg} />
                </div>
            </div>
            <div className={styles.right}>
                <span className={styles.time}>{currentTime}</span>
                <span className={styles.signal}>SIGNAL 98%</span>
            </div>
        </header>
    );
};
