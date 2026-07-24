import React, { useState, useEffect } from 'react';
import styles from './Avatar.module.css';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps {
  src?: string | null;
  alt?: string;
  fallback?: string;
  size?: AvatarSize;
  className?: string;
}

const getInitials = (name: string = '') => {
  return name
    .split(' ')
    .map(n => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'User avatar',
  fallback = '',
  size = 'md',
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  const showImage = src && !hasError;
  const initials = getInitials(fallback);

  const combinedClassName = [
    styles.avatar,
    styles[size],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={combinedClassName}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          className={styles.image}
          onError={() => setHasError(true)}
        />
      ) : (
        <span className={styles.fallback} aria-label={alt}>
          {initials}
        </span>
      )}
    </div>
  );
};

export default Avatar;
