import React from 'react';
import styles from './BottomNavigation.module.css';
import { useChannelStore } from '../../../store';

const CHANNELS = [
  { id: 'CH01', label: 'Home', icon: '🏠' },
  { id: 'CH02', label: 'About', icon: '📖' },
  { id: 'CH03', label: 'Band', icon: '🎸' },
  { id: 'CH04', label: 'Shows', icon: '🎤' },
  { id: 'CH05', label: 'Media', icon: '📸' },
  // { id: 'CH06', label: 'Contact', icon: '✉️' }, // Specs say 5 tabs
];

export const BottomNavigation: React.FC = () => {
  const { currentChannel, isSwitching, switchChannel } = useChannelStore();

  return (
    <nav className={styles.nav}>
      {CHANNELS.map((channel) => {
        const isActive = channel.id === currentChannel;
        const buttonClassName = [
          styles.button,
          isActive ? styles.active : '',
        ].filter(Boolean).join(' ');

        return (
          <button
            key={channel.id}
            className={buttonClassName}
            onClick={() => switchChannel(channel.id)}
            disabled={isSwitching}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className={styles.icon}>{channel.icon}</span>
            <span className={styles.label}>{channel.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
