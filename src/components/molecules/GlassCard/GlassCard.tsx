import React from 'react';
import styles from './GlassCard.module.css';

type GlassCardVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
type GlassCardGlow = 'purple' | 'gold' | 'blue' | 'red' | 'none';

// Simplified polymorphic pattern
type GlassCardProps = {
  variant?: GlassCardVariant;
  glow?: GlassCardGlow;
  children: React.ReactNode;
  className?: string;
} & (
    | (Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> & { href?: undefined; as?: 'div' | 'article' })
    | (Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & { href: string; as: 'a' })
);

export const GlassCard: React.FC<GlassCardProps> = ({
  variant = 'md',
  glow = 'none',
  children,
  className = '',
  as: Component = 'div', // Default to 'div'
  href,
  ...props
}) => {
    const combinedClassName = [
        styles.card,
        styles[variant],
        glow !== 'none' ? styles.glowEffect : '',
        styles[glow],
        className,
    ].filter(Boolean).join(' ');

    if (href) {
        return (
            <a href={href} className={combinedClassName} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
                <div className={styles.reflection} />
                <div className={styles.content}>{children}</div>
            </a>
        );
    }

    return (
        <Component className={combinedClassName} {...(props as React.HTMLAttributes<HTMLElement>)}>
            <div className={styles.reflection} />
            <div className={styles.content}>{children}</div>
        </Component>
    );
};
