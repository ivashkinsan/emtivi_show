import React from 'react';
import type { ButtonOwnProps } from './Button.types';
import styles from './Button.module.css';

// This is a simplified polymorphic button.
// It renders an `<a>` tag if `href` is provided, otherwise it renders a `<button>`.
// This avoids the complex generic typing that was causing build errors.

type ButtonProps = ButtonOwnProps & (
    | (Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & { href?: undefined })
    | (Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>)
);


export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    children,
    disabled = false,
    loading = false,
    iconLeft,
    iconRight,
    className = '',
    href,
    ...props
}) => {
    const buttonDisabled = disabled || loading;

    const combinedClassName = [
        styles.button,
        styles[variant],
        styles[size],
        loading ? styles.loading : '',
        className,
    ].filter(Boolean).join(' ');

    if (href) {
        return (
            <a
                href={href}
                className={combinedClassName}
                aria-disabled={buttonDisabled}
                {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                {/* Content is duplicated but it's a simple way to ensure correctness */}
                {loading && <div className={styles.spinner} />}
                <span className={styles.content}>
                    {iconLeft && <span className={`${styles.iconWrapper} ${styles.iconLeft}`}>{iconLeft}</span>}
                    {children}
                    {iconRight && <span className={`${styles.iconWrapper} ${styles.iconRight}`}>{iconRight}</span>}
                </span>
            </a>
        );
    }

    return (
        <button
            className={combinedClassName}
            disabled={buttonDisabled}
            aria-disabled={buttonDisabled}
            {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {loading && <div className={styles.spinner} />}
            <span className={styles.content}>
                {iconLeft && <span className={`${styles.iconWrapper} ${styles.iconLeft}`}>{iconLeft}</span>}
                {children}
                {iconRight && <span className={`${styles.iconWrapper} ${styles.iconRight}`}>{iconRight}</span>}
            </span>
        </button>
    );
};

export default Button;
