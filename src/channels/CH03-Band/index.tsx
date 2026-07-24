import React from 'react';
import { ChannelHeader } from '../../components/molecules/ChannelHeader';
import { BandGrid } from './components/BandGrid';
import styles from './Band.module.css';

export const BandChannel: React.FC = () => {
    return (
        <div className={styles.container}>
            <ChannelHeader>CH 03 | BAND | LIVE</ChannelHeader>
            <BandGrid />
        </div>
    );
};

export default BandChannel;
