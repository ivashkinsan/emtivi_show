import React from 'react';
import styles from './BottomNavigation.module.css';
import { useChannelStore } from '../../../store';
import { svgIcons } from '../../Menu/svg/IconsAll';

const CHANNELS = [
  { id: 'CH01', label: 'Home', IconComponent: svgIcons.HOME },
  { id: 'CH02', label: 'About', IconComponent: svgIcons.INFO },
  { id: 'CH03', label: 'Band', IconComponent: svgIcons.PERSONE },
  { id: 'CH04', label: 'Shows', IconComponent: svgIcons.LIST },
  { id: 'CH05', label: 'Media', IconComponent: svgIcons.FOTO },
  { id: 'CH06', label: 'Contact', IconComponent: svgIcons.PHONE },
  { id: 'CH07', label: '3D Test', IconComponent: svgIcons.VIDEO },
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
            <span className={styles.icon}>
              <channel.IconComponent color="currentColor" />
            </span>
            <span className={styles.label}>{channel.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
