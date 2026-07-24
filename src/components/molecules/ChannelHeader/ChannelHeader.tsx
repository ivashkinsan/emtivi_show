import React from 'react';
import styles from './ChannelHeader.module.css';

interface ChannelHeaderProps {
  children: React.ReactNode;
}

export const ChannelHeader: React.FC<ChannelHeaderProps> = ({ children }) => {
  return <h1 className={styles.header}>{children}</h1>;
};
