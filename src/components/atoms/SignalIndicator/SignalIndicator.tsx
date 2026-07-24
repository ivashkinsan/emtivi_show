import React from 'react';
import styles from './SignalIndicator.module.css';

export const SignalIndicator: React.FC = () => {
    return (
        <div className={styles.signalContainer}>
            <div className={styles.bar} style={{ height: '40%' }}></div>
            <div className={styles.bar} style={{ height: '60%' }}></div>
            <div className={styles.bar} style={{ height: '80%' }}></div>
            <div className={styles.bar} style={{ height: '100%' }}></div>
        </div>
    );
};
