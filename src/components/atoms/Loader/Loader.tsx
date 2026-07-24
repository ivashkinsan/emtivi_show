import React from 'react';
import styles from './Loader.module.css';

type LoaderVariant = 'circle' | 'bars' | 'equalizer' | 'pulse' | 'wave';
type LoaderSize = 'sm' | 'md' | 'lg';

export interface LoaderProps {
  variant?: LoaderVariant;
  size?: LoaderSize;
  className?: string;
  'aria-label'?: string;
}

const renderLoaderVariant = (variant: LoaderVariant) => {
    switch (variant) {
        case 'bars':
            return <><div /><div /><div /></>;
        case 'equalizer':
            return <><div /><div /><div /><div /></>;
        case 'wave':
            return <><div /><div /><div /><div /><div /></>;
        case 'pulse':
        case 'circle':
        default:
            return null;
    }
}

const Loader: React.FC<LoaderProps> = ({
  variant = 'circle',
  size = 'md',
  className = '',
  'aria-label': ariaLabel = 'Загрузка...',
}) => {
  const combinedClassName = [
    styles.loader,
    styles[variant],
    styles[size],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={combinedClassName}
      role="status"
      aria-live="polite"
      aria-label={ariaLabel}
    >
      {renderLoaderVariant(variant)}
    </div>
  );
};

export default Loader;
