import React from 'react';
import { BandGrid } from './components/BandGrid';
import styles from './Band.module.css';

export const BandChannel: React.FC = () => {
    return (
        <div className={styles.container}>
            <BandGrid />
        </div>
    );
};

export default BandChannel;
