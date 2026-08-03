import React from 'react';
import styles from './Loader.module.css';

// Используем те же типы и стили, что и в основном Loader
type LoaderVariant = 'circle' | 'bars' | 'equalizer' | 'pulse' | 'wave';
type LoaderSize = 'sm' | 'md' | 'lg';

export interface TransitionLoaderProps {
  variant?: LoaderVariant;
  size?: LoaderSize;
  className?: string;
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

const TransitionLoader: React.FC<TransitionLoaderProps> = ({
  variant = 'circle',
  size = 'md',
  className = '',
}) => {
  const combinedClassName = [
    styles.loader,
    styles[variant],
    styles[size],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={combinedClassName} role="status">
      {renderLoaderVariant(variant)}
    </div>
  );
};

export default TransitionLoader;
