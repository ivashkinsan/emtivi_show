import React, { forwardRef } from 'react';
import styles from './GlassCard.module.css';

type GlassCardVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
type GlassCardGlow = 'purple' | 'gold' | 'blue' | 'red' | 'none';

type GlassCardProps = {
  variant?: GlassCardVariant;
  glow?: GlassCardGlow;
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'a';
  href?: string;
} & React.HTMLAttributes<HTMLElement>;

export const GlassCard = forwardRef<HTMLElement, GlassCardProps>(({
  variant = 'md',
  glow = 'none',
  children,
  className = '',
  as: Component = 'div',
  href,
  ...props
}, ref) => {
    const combinedClassName = [
        styles.card,
        styles[variant],
        glow !== 'none' ? styles.glowEffect : '',
        styles[glow],
        className,
    ].filter(Boolean).join(' ');

    if (href) {
        return (
            <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={combinedClassName} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
                <div className={styles.reflection} />
                <div className={styles.content}>{children}</div>
            </a>
        );
    }

    return (
        <Component ref={ref as any} className={combinedClassName} {...props}>
            <div className={styles.reflection} />
            <div className={styles.content}>{children}</div>
        </Component>
    );
});
