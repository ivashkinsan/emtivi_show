import { FC } from 'react';
import { AnniversaryGallery } from './components/AnniversaryGallery';
import styles from './Anniversary.module.css';

const AnniversaryChannel: FC = () => {
    return (
        <div className={styles.container}>
            <AnniversaryGallery />
        </div>
    );
};

export default AnniversaryChannel;
