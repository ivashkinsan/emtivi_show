import React from 'react';
import styles from './Badge.module.css';

type BadgeVariant = 'red' | 'purple' | 'gold' | 'blue' | 'glass' | 'outline';
type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'purple',
  size = 'md',
  children,
  className = '',
}) => {
  const combinedClassName = [
    styles.badge,
    styles[variant],
    styles[size],
    className,
  ].filter(Boolean).join(' ');

  return <span className={combinedClassName}>{children}</span>;
};

export default Badge;
