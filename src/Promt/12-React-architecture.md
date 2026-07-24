# EMTIVI

# 12-REACT-ARCHITECTURE.md

Version: 1.0

---

## Назначение

Данный документ определяет архитектуру React-приложения EMTIVI.

Он описывает:

• структуру проекта;

• организацию компонентов;

• управление состоянием;

• маршрутизацию;

• взаимодействие с данными;

• производительность;

• стилизацию;

• тестирование.

Архитектура должна обеспечивать реализацию всех принципов, описанных в предыдущих документах:

• TV System как ядро интерфейса;

• Channel-based навигацию;

• Mobile First подход;

• Motion First философию;

• Glass/OLED визуальный язык.

---

## Технологический стек

```json
{
  "framework": "React 18+",
  "language": "TypeScript 5+",
  "build": "Vite",
  "styling": "CSS Modules + Design Tokens",
  "state": "Zustand / Jotai",
  "routing": "React Router v6",
  "animations": "Framer Motion / CSS",
  "forms": "React Hook Form",
  "http": "Fetch / TanStack Query",
  "testing": "Vitest + React Testing Library",
  "linting": "ESLint + Prettier",
  "git": "Husky + lint-staged"
}
Структура проекта
text
src/
│
├── app/                    # Инициализация приложения
│   ├── App.tsx
│   ├── App.module.css
│   └── providers/
│       ├── index.tsx
│       ├── ThemeProvider.tsx
│       ├── RouterProvider.tsx
│       └── QueryProvider.tsx
│
├── assets/                 # Статические файлы
│   ├── fonts/
│   ├── images/
│   └── icons/
│
├── components/             # UI-компоненты (Atomic Design)
│   ├── atoms/
│   │   ├── Button/
│   │   ├── Badge/
│   │   ├── Avatar/
│   │   └── ...
│   ├── molecules/
│   │   ├── GlassCard/
│   │   ├── MusicianCard/
│   │   └── ...
│   ├── organisms/
│   │   ├── Navigation/
│   │   ├── Hero/
│   │   └── ...
│   ├── tv/                 # TV-специфичные компоненты
│   │   ├── TVShell/
│   │   ├── Screen/
│   │   ├── HUD/
│   │   └── ...
│   └── shared/             # Общие утилитарные компоненты
│       ├── Container/
│       ├── Section/
│       └── ...
│
├── channels/               # Каналы (экраны приложения)
│   ├── CH01-Home/
│   │   ├── index.tsx
│   │   ├── Home.module.css
│   │   └── components/
│   ├── CH02-About/
│   ├── CH03-Band/
│   ├── CH04-Shows/
│   ├── CH05-Media/
│   └── CH06-Contact/
│
├── hooks/                  # Кастомные React-хуки
│   ├── useChannel.ts
│   ├── useScrollReveal.ts
│   ├── useMouseLight.ts
│   └── ...
│
├── lib/                    # Утилиты и сервисы
│   ├── constants/
│   │   ├── channels.ts
│   │   └── config.ts
│   ├── types/
│   │   ├── channel.types.ts
│   │   └── api.types.ts
│   ├── utils/
│   │   ├── cn.ts
│   │   └── format.ts
│   └── api/
│       └── client.ts
│
├── store/                  # Управление состоянием
│   ├── channelStore.ts
│   ├── uiStore.ts
│   └── ...
│
├── styles/                 # Глобальные стили
│   ├── tokens.css          # Design Tokens (CSS Variables)
│   ├── globals.css
│   ├── reset.css
│   └── animations.css
│
└── main.tsx                # Точка входа
Организация компонентов
Атомы (Atoms)
Самые маленькие, неделимые компоненты.

tsx
// components/atoms/Button/Button.tsx
import styles from './Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'glass' | 'ghost' | 'outline' | 'danger' | 'success' | 'tv' | 'hero' | 'icon' | 'floating';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero' | 'floating';
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  className = '',
  type = 'button',
  ariaLabel,
}) => {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    loading && styles.loading,
    disabled && styles.disabled,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      aria-label={ariaLabel}
      aria-busy={loading}
    >
      {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
      <span className={styles.content}>{children}</span>
      {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
      {loading && <span className={styles.spinner} role="status" aria-label="Loading" />}
    </button>
  );
};
css
/* components/atoms/Button/Button.module.css */
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  border-radius: var(--radius-xl);
  font-family: var(--font-inter);
  font-weight: 600;
  font-size: var(--font-size-label);
  cursor: pointer;
  transition: all var(--motion-sm) var(--ease-standard);
  border: none;
  position: relative;
  overflow: hidden;
  min-height: 48px;
  padding: 0 var(--space-6);
  text-decoration: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.button:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}

.button:active:not(.disabled):not(.loading) {
  transform: scale(0.98);
}

/* Variants */
.primary {
  background: var(--brand-primary);
  color: var(--text-primary);
  box-shadow: 0 0 20px var(--shadow-glow-purple);
}

.primary:hover:not(.disabled):not(.loading) {
  background: var(--brand-light);
  box-shadow: 0 0 32px var(--shadow-glow-purple);
  transform: scale(1.03);
}

.secondary {
  background: var(--glass-md);
  backdrop-filter: blur(var(--blur-md));
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
}

.secondary:hover:not(.disabled):not(.loading) {
  background: var(--glass-lg);
  border-color: var(--border-secondary);
  transform: scale(1.03);
}

.glass {
  background: var(--glass-sm);
  backdrop-filter: blur(var(--blur-md));
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
}

.glass:hover:not(.disabled):not(.loading) {
  background: var(--glass-md);
  border-color: var(--border-secondary);
  box-shadow: 0 0 30px var(--shadow-glow-purple);
}

.ghost {
  background: transparent;
  color: var(--text-primary);
}

.ghost:hover:not(.disabled):not(.loading) {
  background: var(--glass-sm);
  color: var(--text-primary);
}

.outline {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
}

.outline:hover:not(.disabled):not(.loading) {
  background: var(--glass-sm);
  border-color: var(--border-secondary);
}

.danger {
  background: var(--danger);
  color: var(--text-primary);
}

.danger:hover:not(.disabled):not(.loading) {
  opacity: 0.85;
  transform: scale(1.03);
}

.success {
  background: var(--success);
  color: var(--text-inverse);
}

.success:hover:not(.disabled):not(.loading) {
  opacity: 0.85;
  transform: scale(1.03);
}

.tv {
  background: var(--glass-md);
  backdrop-filter: blur(var(--blur-lg));
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
  box-shadow: 0 0 40px var(--shadow-glow-purple);
}

.tv:hover:not(.disabled):not(.loading) {
  background: var(--glass-lg);
  border-color: var(--border-secondary);
  box-shadow: 0 0 60px var(--shadow-glow-purple);
  transform: scale(1.03);
}

.hero {
  background: var(--gradient-purple);
  color: var(--text-primary);
  box-shadow: 0 0 40px var(--shadow-glow-purple);
}

.hero:hover:not(.disabled):not(.loading) {
  box-shadow: 0 0 60px var(--shadow-glow-purple);
  transform: scale(1.05);
}

.icon {
  background: transparent;
  color: var(--text-primary);
  padding: 0;
  min-height: auto;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
}

.icon:hover:not(.disabled):not(.loading) {
  background: var(--glass-sm);
}

.floating {
  background: var(--glass-md);
  backdrop-filter: blur(var(--blur-xl));
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
  box-shadow: 0 8px 32px var(--shadow-color);
}

.floating:hover:not(.disabled):not(.loading) {
  background: var(--glass-lg);
  border-color: var(--border-secondary);
  transform: scale(1.05);
  box-shadow: 0 12px 48px var(--shadow-color);
}

/* Sizes */
.xs {
  min-height: 32px;
  padding: 0 var(--space-3);
  font-size: var(--font-size-caption);
  border-radius: var(--radius-md);
}

.sm {
  min-height: 40px;
  padding: 0 var(--space-4);
  font-size: var(--font-size-caption);
}

.md {
  min-height: 48px;
  padding: 0 var(--space-6);
}

.lg {
  min-height: 56px;
  padding: 0 var(--space-8);
  font-size: var(--font-size-body-l);
}

.xl {
  min-height: 64px;
  padding: 0 var(--space-10);
  font-size: var(--font-size-heading-s);
}

.hero {
  min-height: 72px;
  padding: 0 var(--space-12);
  font-size: var(--font-size-heading-m);
  border-radius: var(--radius-2xl);
}

.floating {
  min-height: 56px;
  padding: 0 var(--space-6);
  border-radius: var(--radius-full);
}

/* States */
.loading {
  cursor: default;
  pointer-events: none;
}

.loading .content {
  opacity: 0;
}

.loading .spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border: 2px solid var(--glass-lg);
  border-top-color: var(--text-primary);
  border-radius: 50%;
  animation: spin var(--motion-md) linear infinite;
}

.disabled {
  opacity: 0.45;
  cursor: default;
  pointer-events: none;
}

.iconLeft, .iconRight {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.iconLeft {
  margin-right: var(--space-2);
}

.iconRight {
  margin-left: var(--space-2);
}

/* Icon only button */
.button:has(.iconLeft:only-child),
.button:has(.iconRight:only-child) {
  padding: 0;
  width: 48px;
  height: 48px;
  min-height: 48px;
  border-radius: var(--radius-full);
}

.button:has(.iconLeft:only-child).xs,
.button:has(.iconRight:only-child).xs {
  width: 32px;
  height: 32px;
  min-height: 32px;
}

.button:has(.iconLeft:only-child).sm,
.button:has(.iconRight:only-child).sm {
  width: 40px;
  height: 40px;
  min-height: 40px;
}

.button:has(.iconLeft:only-child).lg,
.button:has(.iconRight:only-child).lg {
  width: 56px;
  height: 56px;
  min-height: 56px;
}

@keyframes spin {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* Mobile touch optimization */
@media (hover: none) {
  .button:hover:not(.disabled):not(.loading) {
    transform: none;
  }

  .primary:hover:not(.disabled):not(.loading),
  .secondary:hover:not(.disabled):not(.loading),
  .glass:hover:not(.disabled):not(.loading),
  .hero:hover:not(.disabled):not(.loading) {
    transform: none;
  }
}
Молекулы (Molecules)
Комбинации атомов.

tsx
// components/molecules/GlassCard/GlassCard.tsx
import styles from './GlassCard.module.css';
import { cn } from '@/lib/utils/cn';

interface GlassCardProps {
  variant?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  children: React.ReactNode;
  glow?: 'purple' | 'gold' | 'blue' | 'red' | 'none';
  href?: string;
  onClick?: () => void;
  className?: string;
  as?: 'div' | 'a' | 'article';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  variant = 'md',
  children,
  glow = 'none',
  href,
  onClick,
  className = '',
  as: Component = 'div',
}) => {
  const props = {
    className: cn(
      styles.card,
      styles[variant],
      styles[`glow-${glow}`],
      className
    ),
    ...(href ? { href } : {}),
    ...(onClick ? { onClick } : {}),
  };

  return (
    <Component {...props}>
      <div className={styles.glass} />
      <div className={styles.content}>{children}</div>
      <div className={styles.reflection} />
      {glow !== 'none' && <div className={styles[`glowEffect-${glow}`]} />}
    </Component>
  );
};
css
/* components/molecules/GlassCard/GlassCard.module.css */
.card {
  position: relative;
  background: var(--glass-sm);
  backdrop-filter: blur(var(--blur-md));
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all var(--motion-md) var(--ease-soft);
  cursor: default;
}

.card:hover {
  background: var(--glass-md);
  border-color: var(--border-secondary);
  transform: translateY(-4px);
  box-shadow: 0 8px 40px var(--shadow-color);
}

.glass {
  position: absolute;
  inset: 0;
  background: var(--gradient-glass);
  pointer-events: none;
  z-index: 0;
}

.content {
  position: relative;
  z-index: 1;
  height: 100%;
}

.reflection {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    transparent 50%
  );
  pointer-events: none;
  z-index: 2;
}

/* Variants */
.xs {
  padding: var(--space-3);
  border-radius: var(--radius-md);
}

.sm {
  padding: var(--space-4);
}

.md {
  padding: var(--space-6);
}

.lg {
  padding: var(--space-8);
}

.xl {
  padding: var(--space-10);
  border-radius: var(--radius-2xl);
}

.hero {
  padding: var(--space-12);
  border-radius: var(--radius-2xl);
}

/* Glow effects */
.glow-purple .glowEffect-purple {
  position: absolute;
  inset: -2px;
  background: var(--ambient-purple);
  filter: blur(var(--blur-xl));
  opacity: 0.3;
  pointer-events: none;
  z-index: 0;
  border-radius: var(--radius-xl);
}

.glow-purple:hover .glowEffect-purple {
  opacity: 0.5;
}

.glow-gold .glowEffect-gold {
  position: absolute;
  inset: -2px;
  background: var(--ambient-gold);
  filter: blur(var(--blur-xl));
  opacity: 0.3;
  pointer-events: none;
  z-index: 0;
  border-radius: var(--radius-xl);
}

.glow-gold:hover .glowEffect-gold {
  opacity: 0.5;
}

.glow-blue .glowEffect-blue {
  position: absolute;
  inset: -2px;
  background: var(--ambient-blue);
  filter: blur(var(--blur-xl));
  opacity: 0.3;
  pointer-events: none;
  z-index: 0;
  border-radius: var(--radius-xl);
}

.glow-blue:hover .glowEffect-blue {
  opacity: 0.5;
}

.glow-red .glowEffect-red {
  position: absolute;
  inset: -2px;
  background: var(--ambient-red);
  filter: blur(var(--blur-xl));
  opacity: 0.3;
  pointer-events: none;
  z-index: 0;
  border-radius: var(--radius-xl);
}

.glow-red:hover .glowEffect-red {
  opacity: 0.5;
}

.glow-none .glowEffect-purple,
.glow-none .glowEffect-gold,
.glow-none .glowEffect-blue,
.glow-none .glowEffect-red {
  display: none;
}

/* Clickable card */
.card:has(a),
.card[onClick] {
  cursor: pointer;
}

.card:has(a):hover,
.card[onClick]:hover {
  transform: translateY(-8px);
}

.card:has(a):active,
.card[onClick]:active {
  transform: scale(0.98);
}

/* Mobile */
@media (hover: none) {
  .card:hover {
    transform: none;
  }

  .card:has(a):hover,
  .card[onClick]:hover {
    transform: none;
  }
}
tsx
// components/molecules/MusicianCard/MusicianCard.tsx
import styles from './MusicianCard.module.css';
import { GlassCard } from '../GlassCard';
import { Avatar } from '@/components/atoms/Avatar';
import { Button } from '@/components/atoms/Button';
import { SocialButton } from '@/components/molecules/SocialButton';

interface MusicianCardProps {
  name: string;
  instrument: string;
  description: string;
  photo?: string;
  socials?: {
    instagram?: string;
    vk?: string;
  };
  className?: string;
}

export const MusicianCard: React.FC<MusicianCardProps> = ({
  name,
  instrument,
  description,
  photo,
  socials,
  className = '',
}) => {
  return (
    <GlassCard
      variant="md"
      glow="purple"
      className={cn(styles.card, className)}
    >
      <div className={styles.photo}>
        <Avatar
          src={photo}
          alt={name}
          size="xl"
          fallback={name.charAt(0)}
        />
        <div className={styles.overlay}>
          <span className={styles.instrument}>{instrument}</span>
        </div>
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.instrumentLabel}>{instrument}</p>
        <p className={styles.description}>{description}</p>
      </div>

      {socials && (
        <div className={styles.socials}>
          {socials.instagram && (
            <SocialButton platform="instagram" url={socials.instagram} />
          )}
          {socials.vk && (
            <SocialButton platform="vk" url={socials.vk} />
          )}
        </div>
      )}
    </GlassCard>
  );
};
css
/* components/molecules/MusicianCard/MusicianCard.module.css */
.card {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  min-height: 320px;
}

.photo {
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--color-bg-tertiary);
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--space-4);
  background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
}

.instrument {
  display: inline-block;
  padding: var(--space-2) var(--space-3);
  background: var(--glass-md);
  backdrop-filter: blur(var(--blur-sm));
  border-radius: var(--radius-full);
  font-size: var(--font-size-caption);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
}

.info {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.name {
  font-family: var(--font-montserrat);
  font-size: var(--font-size-heading-m);
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.instrumentLabel {
  font-size: var(--font-size-label);
  font-weight: 500;
  color: var(--brand-primary);
  margin: 0;
}

.description {
  font-size: var(--font-size-body);
  color: var(--text-secondary);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.socials {
  display: flex;
  gap: var(--space-2);
  margin-top: auto;
}
Организмы (Organisms)
Сложные, самодостаточные блоки.

tsx
// components/organisms/Navigation/BottomNavigation.tsx
import styles from './BottomNavigation.module.css';
import { useChannelStore } from '@/store/channelStore';
import { CHANNELS } from '@/lib/constants/channels';
import { cn } from '@/lib/utils/cn';

export const BottomNavigation: React.FC = () => {
  const { currentChannel, setChannel, isSwitching } = useChannelStore();

  return (
    <nav className={styles.nav} role="navigation" aria-label="Основная навигация">
      <div className={styles.safeArea}>
        <div className={styles.tabs}>
          {CHANNELS.map((channel) => {
            const isActive = currentChannel === channel.id;
            return (
              <button
                key={channel.id}
                className={cn(
                  styles.tab,
                  isActive && styles.active,
                  isSwitching && styles.disabled
                )}
                onClick={() => setChannel(channel.id)}
                aria-label={channel.name}
                aria-current={isActive ? 'page' : undefined}
                disabled={isSwitching}
              >
                <span className={styles.icon}>{channel.icon}</span>
                <span className={styles.label}>{channel.label}</span>
                {isActive && <span className={styles.indicator} />}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
css
/* components/organisms/Navigation/BottomNavigation.module.css */
.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: var(--z-navigation);
  background: var(--nav-bg);
  backdrop-filter: blur(var(--blur-xl));
  -webkit-backdrop-filter: blur(var(--blur-xl));
  border-top: 1px solid var(--nav-border);
  padding-top: var(--space-2);
}

.safeArea {
  padding-bottom: env(safe-area-inset-bottom);
}

.tabs {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height: 72px;
  padding: 0 var(--space-4);
}

.tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  background: none;
  border: none;
  padding: var(--space-2) var(--space-3);
  cursor: pointer;
  position: relative;
  min-height: 56px;
  min-width: 56px;
  transition: all var(--motion-sm) var(--ease-standard);
  border-radius: var(--radius-lg);
  color: var(--text-muted);
}

.tab:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}

.tab:active:not(.disabled) {
  transform: scale(0.92);
}

.tab.disabled {
  cursor: default;
  opacity: 0.5;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  font-size: 24px;
  transition: all var(--motion-sm) var(--ease-standard);
}

.label {
  font-family: var(--font-inter);
  font-size: var(--font-size-caption);
  font-weight: 500;
  transition: all var(--motion-sm) var(--ease-standard);
}

.tab.active {
  color: var(--text-primary);
}

.tab.active .icon {
  transform: translateY(-2px);
}

.tab.active .label {
  color: var(--brand-primary);
  font-weight: 600;
}

.indicator {
  position: absolute;
  top: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 3px;
  background: var(--brand-primary);
  border-radius: var(--radius-full);
  box-shadow: 0 0 12px var(--shadow-glow-purple);
}

/* Hover states */
@media (hover: hover) {
  .tab:hover:not(.active):not(.disabled) {
    color: var(--text-secondary);
    background: var(--nav-hover);
  }
}

/* Mobile */
@media (max-width: 768px) {
  .tabs {
    height: 64px;
    padding: 0 var(--space-2);
  }

  .tab {
    padding: var(--space-1) var(--space-2);
    min-height: 48px;
    min-width: 48px;
  }

  .icon {
    width: 24px;
    height: 24px;
    font-size: 20px;
  }

  .label {
    font-size: 10px;
  }
}
TV-компоненты
tsx
// components/tv/TVShell/TVShell.tsx
import styles from './TVShell.module.css';
import { AmbientBackground } from './AmbientBackground';
import { Reflection } from './Reflection';
import { NoiseLayer } from './NoiseLayer';
import { cn } from '@/lib/utils/cn';

interface TVShellProps {
  children: React.ReactNode;
  className?: string;
  ambientColor?: 'purple' | 'gold' | 'blue' | 'red' | 'white';
}

export const TVShell: React.FC<TVShellProps> = ({
  children,
  className = '',
  ambientColor = 'purple',
}) => {
  return (
    <div className={cn(styles.shell, className)}>
      <AmbientBackground color={ambientColor} />
      <NoiseLayer />

      <div className={styles.frame}>
        <div className={styles.bezel}>
          <div className={styles.screen}>
            {children}
            <Reflection />
          </div>
        </div>
      </div>
    </div>
  );
};
css
/* components/tv/TVShell/TVShell.module.css */
.shell {
  position: relative;
  min-height: 100vh;
  background: var(--color-bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-6);
  overflow: hidden;
}

.frame {
  position: relative;
  width: 100%;
  max-width: 1440px;
  aspect-ratio: 16 / 9;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-2xl);
  padding: var(--space-4);
  box-shadow:
    0 0 60px var(--ambient-purple),
    0 30px 80px rgba(0, 0, 0, 0.6);
  transition: box-shadow var(--motion-lg) var(--ease-soft);
}

.bezel {
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--border-primary);
}

.screen {
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--color-bg-primary);
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.screen::-webkit-scrollbar {
  width: 6px;
}

.screen::-webkit-scrollbar-track {
  background: transparent;
}

.screen::-webkit-scrollbar-thumb {
  background: var(--brand-primary);
  border-radius: var(--radius-full);
}

/* Mobile */
@media (max-width: 768px) {
  .shell {
    padding: 0;
  }

  .frame {
    border-radius: 0;
    padding: 0;
    aspect-ratio: auto;
    min-height: 100vh;
    box-shadow: none;
  }

  .bezel {
    border-radius: 0;
    border: none;
  }

  .screen {
    border-radius: 0;
  }

  .screen::-webkit-scrollbar {
    width: 4px;
  }
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  .frame {
    padding: var(--space-3);
    border-radius: var(--radius-xl);
  }

  .bezel {
    border-radius: var(--radius-lg);
  }
}
tsx
// components/tv/TVShell/AmbientBackground.tsx
import { useEffect, useRef } from 'react';
import styles from './AmbientBackground.module.css';
import { cn } from '@/lib/utils/cn';

interface AmbientBackgroundProps {
  color?: 'purple' | 'gold' | 'blue' | 'red' | 'white';
  className?: string;
}

export const AmbientBackground: React.FC<AmbientBackgroundProps> = ({
  color = 'purple',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      container.style.setProperty('--mouse-x', `${x}%`);
      container.style.setProperty('--mouse-y', `${y}%`);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(styles.ambient, styles[color], className)}
    />
  );
};
css
/* components/tv/TVShell/AmbientBackground.module.css */
.ambient {
  position: fixed;
  inset: 0;
  z-index: var(--z-background);
  pointer-events: none;
  transition: background var(--motion-lg) var(--ease-soft);
  --mouse-x: 50%;
  --mouse-y: 50%;
}

.purple {
  background:
    radial-gradient(
      circle at var(--mouse-x) var(--mouse-y),
      rgba(139, 92, 246, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 20% 80%,
      rgba(139, 92, 246, 0.08) 0%,
      transparent 40%
    ),
    var(--color-bg-primary);
  animation: ambientPulse 8s ease-in-out infinite;
}

.gold {
  background:
    radial-gradient(
      circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 213, 74, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(255, 213, 74, 0.08) 0%,
      transparent 40%
    ),
    var(--color-bg-primary);
  animation: ambientPulse 8s ease-in-out infinite;
}

.blue {
  background:
    radial-gradient(
      circle at var(--mouse-x) var(--mouse-y),
      rgba(77, 163, 255, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 50% 80%,
      rgba(77, 163, 255, 0.08) 0%,
      transparent 40%
    ),
    var(--color-bg-primary);
  animation: ambientPulse 8s ease-in-out infinite;
}

.red {
  background:
    radial-gradient(
      circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 70, 70, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 30% 70%,
      rgba(255, 70, 70, 0.08) 0%,
      transparent 40%
    ),
    var(--color-bg-primary);
  animation: ambientPulse 8s ease-in-out infinite;
}

.white {
  background:
    radial-gradient(
      circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.08) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 70% 30%,
      rgba(255, 255, 255, 0.04) 0%,
      transparent 40%
    ),
    var(--color-bg-primary);
  animation: ambientPulse 8s ease-in-out infinite;
}

@keyframes ambientPulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

/* Mobile - reduce intensity */
@media (max-width: 768px) {
  .ambient {
    animation-duration: 12s;
  }

  .purple {
    background:
      radial-gradient(
        circle at 50% 50%,
        rgba(139, 92, 246, 0.1) 0%,
        transparent 60%
      ),
      var(--color-bg-primary);
  }

  .gold {
    background:
      radial-gradient(
        circle at 50% 50%,
        rgba(255, 213, 74, 0.1) 0%,
        transparent 60%
      ),
      var(--color-bg-primary);
  }

  .blue {
    background:
      radial-gradient(
        circle at 50% 50%,
        rgba(77, 163, 255, 0.1) 0%,
        transparent 60%
      ),
      var(--color-bg-primary);
  }

  .red {
    background:
      radial-gradient(
        circle at 50% 50%,
        rgba(255, 70, 70, 0.1) 0%,
        transparent 60%
      ),
      var(--color-bg-primary);
  }
}
tsx
// components/tv/ChannelHeader/ChannelHeader.tsx
import styles from './ChannelHeader.module.css';
import { LiveBadge } from '@/components/atoms/LiveBadge';
import { cn } from '@/lib/utils/cn';

interface ChannelHeaderProps {
  number: string;
  name: string;
  status?: 'live' | 'rec' | 'offline';
  description?: string;
  className?: string;
}

export const ChannelHeader: React.FC<ChannelHeaderProps> = ({
  number,
  name,
  status,
  description,
  className = '',
}) => {
  return (
    <header className={cn(styles.header, className)}>
      <div className={styles.top}>
        <span className={styles.number}>{number}</span>
        {status && <LiveBadge status={status} />}
      </div>

      <h1 className={styles.name}>{name}</h1>

      {description && (
        <p className={styles.description}>{description}</p>
      )}

      <div className={styles.divider} />
    </header>
  );
};
css
/* components/tv/ChannelHeader/ChannelHeader.module.css */
.header {
  padding: var(--space-6) var(--space-6) var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.top {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.number {
  font-family: var(--font-space);
  font-size: var(--font-size-label);
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.name {
  font-family: var(--font-montserrat);
  font-size: var(--font-size-display-l);
  font-weight: 800;
  color: var(--text-primary);
  margin: 0;
  letter-spacing: -0.02em;
}

.description {
  font-family: var(--font-inter);
  font-size: var(--font-size-body-l);
  color: var(--text-secondary);
  margin: 0;
  max-width: 600px;
}

.divider {
  width: 60px;
  height: 3px;
  background: var(--brand-primary);
  border-radius: var(--radius-full);
  box-shadow: 0 0 20px var(--shadow-glow-purple);
  margin-top: var(--space-2);
}

/* Mobile */
@media (max-width: 768px) {
  .header {
    padding: var(--space-4) var(--space-4) var(--space-3);
    gap: var(--space-2);
  }

  .name {
    font-size: var(--font-size-display-m);
  }

  .description {
    font-size: var(--font-size-body);
  }

  .divider {
    width: 40px;
  }
}
Каналы (Channels)
Каждый канал — это отдельный "экран" приложения.

tsx
// channels/CH01-Home/index.tsx
import { useEffect } from 'react';
import styles from './Home.module.css';
import { Hero } from './components/Hero';
import { ChannelHeader } from '@/components/tv/ChannelHeader';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { GlassCard } from '@/components/molecules/GlassCard';
import { Button } from '@/components/atoms/Button';

export const HomeChannel: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className={styles.channel}>
      <ChannelHeader
        number="CH 01"
        name="HOME"
        status="live"
        description="Главный эфир EMTIVI — заряжаем танцпол с первых нот!"
      />

      <section className={styles.hero}>
        <Hero />
      </section>

      <section ref={ref} className={cn(styles.content, isVisible && styles.visible)}>
        <div className={styles.grid}>
          <GlassCard glow="gold" variant="lg">
            <h3>🎵 Хиты на любой вкус</h3>
            <p>Репертуар — сокровищница песен, знакомых всем</p>
          </GlassCard>

          <GlassCard glow="purple" variant="lg">
            <h3>🎸 Опыт с 2010 года</h3>
            <p>Музыканты из легендарных групп Just Like Heaven и StrawberryFields</p>
          </GlassCard>

          <GlassCard glow="blue" variant="lg">
            <h3>💫 Полный состав</h3>
            <p>8 профессионалов с медной секцией для вау-эффекта</p>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};
css
/* channels/CH01-Home/Home.module.css */
.channel {
  padding-bottom: 80px;
}

.hero {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-6);
}

.content {
  opacity: 0;
  transform: translateY(40px);
  transition: all var(--motion-lg) var(--ease-soft);
  padding: var(--space-6);
}

.content.visible {
  opacity: 1;
  transform: translateY(0);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
}

/* Mobile */
@media (max-width: 768px) {
  .channel {
    padding-bottom: 72px;
  }

  .hero {
    min-height: 40vh;
    padding: var(--space-4);
  }

  .content {
    padding: var(--space-4);
  }

  .grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
}
Управление состоянием
Zustand Store
tsx
// store/channelStore.ts
import { create } from 'zustand';

interface ChannelState {
  currentChannel: string;
  previousChannel: string | null;
  isSwitching: boolean;
  setChannel: (channelId: string) => void;
  switchChannel: (channelId: string) => Promise<void>;
}

export const useChannelStore = create<ChannelState>((set, get) => ({
  currentChannel: 'CH01',
  previousChannel: null,
  isSwitching: false,

  setChannel: (channelId) => {
    set({ currentChannel: channelId });
  },

  switchChannel: async (channelId) => {
    const { currentChannel, isSwitching } = get();

    if (isSwitching || channelId === currentChannel) return;

    set({ isSwitching: true, previousChannel: currentChannel });

    // Анимация переключения канала
    await new Promise((resolve) => setTimeout(resolve, 450));

    set({ currentChannel: channelId, isSwitching: false });
  },
}));
tsx
// store/uiStore.ts
import { create } from 'zustand';

interface UIState {
  isScrollAtTop: boolean;
  isScrollAtBottom: boolean;
  scrollProgress: number;
  setScrollState: (state: Partial<UIState>) => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isScrollAtTop: true,
  isScrollAtBottom: false,
  scrollProgress: 0,
  setScrollState: (state) => set(state),
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
}));
Хуки (Hooks)
tsx
// hooks/useScrollReveal.ts
import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollReveal = ({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: UseScrollRevealOptions = {}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.disconnect();
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};
tsx
// hooks/useMouseLight.ts
import { useEffect, useRef } from 'react';

interface UseMouseLightOptions {
  color?: string;
  size?: number;
  opacity?: number;
}

export const useMouseLight = (
  elementRef: React.RefObject<HTMLElement>,
  options: UseMouseLightOptions = {}
) => {
  const {
    color = 'rgba(139, 92, 246, 0.15)',
    size = 300,
    opacity = 1,
  } = options;

  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const glow = document.createElement('div');
    glow.style.cssText = `
      position: absolute;
      pointer-events: none;
      z-index: 1;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: radial-gradient(circle, ${color}, transparent 70%);
      opacity: ${opacity};
      transform: translate(-50%, -50%);
      transition: none;
      will-change: transform;
    `;

    element.style.position = 'relative';
    element.appendChild(glow);
    glowRef.current = glow;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      glow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    };

    const handleMouseLeave = () => {
      glow.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      glow.style.opacity = String(opacity);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mouseenter', handleMouseEnter);
      glow.remove();
    };
  }, [elementRef, color, size, opacity]);

  return glowRef;
};
tsx
// hooks/useChannelTransition.ts
import { useEffect, useState } from 'react';
import { useChannelStore } from '@/store/channelStore';

export const useChannelTransition = () => {
  const { currentChannel, isSwitching } = useChannelStore();
  const [displayChannel, setDisplayChannel] = useState(currentChannel);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (isSwitching) {
      setShouldRender(false);
      const timer = setTimeout(() => {
        setDisplayChannel(currentChannel);
        setShouldRender(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isSwitching, currentChannel]);

  return { displayChannel, shouldRender, isSwitching };
};
Маршрутизация
tsx
// app/providers/RouterProvider.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TVShell } from '@/components/tv/TVShell';
import { HomeChannel } from '@/channels/CH01-Home';
import { AboutChannel } from '@/channels/CH02-About';
import { BandChannel } from '@/channels/CH03-Band';
import { ShowsChannel } from '@/channels/CH04-Shows';
import { MediaChannel } from '@/channels/CH05-Media';
import { ContactChannel } from '@/channels/CH06-Contact';

const CHANNEL_ROUTES = {
  'CH01': HomeChannel,
  'CH02': AboutChannel,
  'CH03': BandChannel,
  'CH04': ShowsChannel,
  'CH05': MediaChannel,
  'CH06': ContactChannel,
};

export const RouterProvider: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TVShell />}>
          <Route index element={<HomeChannel />} />
          <Route path="about" element={<AboutChannel />} />
          <Route path="band" element={<BandChannel />} />
          <Route path="shows" element={<ShowsChannel />} />
          <Route path="media" element={<MediaChannel />} />
          <Route path="contact" element={<ContactChannel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
tsx
// app/App.tsx
import { Suspense, lazy } from 'react';
import { TVShell } from '@/components/tv/TVShell';
import { BottomNavigation } from '@/components/organisms/Navigation/BottomNavigation';
import { Loader } from '@/components/atoms/Loader';
import { useChannelStore } from '@/store/channelStore';
import { useChannelTransition } from '@/hooks/useChannelTransition';

const CHANNELS = {
  'CH01': lazy(() => import('@/channels/CH01-Home')),
  'CH02': lazy(() => import('@/channels/CH02-About')),
  'CH03': lazy(() => import('@/channels/CH03-Band')),
  'CH04': lazy(() => import('@/channels/CH04-Shows')),
  'CH05': lazy(() => import('@/channels/CH05-Media')),
  'CH06': lazy(() => import('@/channels/CH06-Contact')),
};

export const App: React.FC = () => {
  const { currentChannel } = useChannelStore();
  const { shouldRender, isSwitching } = useChannelTransition();

  const ChannelComponent = CHANNELS[currentChannel as keyof typeof CHANNELS];

  return (
    <TVShell>
      <Suspense fallback={<Loader />}>
        {shouldRender && <ChannelComponent />}
      </Suspense>
      <BottomNavigation />
    </TVShell>
  );
};
Дизайн-токены (глобальные стили)
css
/* styles/tokens.css */
:root {
  /* Colors - Background */
  --color-bg-primary: #07080D;
  --color-bg-secondary: #0C1018;
  --color-bg-tertiary: #131826;
  --color-bg-elevated: #181F31;
  --color-bg-modal: #1E2436;
  --color-bg-floating: rgba(20, 25, 38, 0.72);

  /* Colors - Glass */
  --glass-xs: rgba(255, 255, 255, 0.02);
  --glass-sm: rgba(255, 255, 255, 0.04);
  --glass-md: rgba(255, 255, 255, 0.06);
  --glass-lg: rgba(255, 255, 255, 0.08);
  --glass-xl: rgba(255, 255, 255, 0.12);

  /* Colors - Surface */
  --surface-primary: rgba(255, 255, 255, 0.05);
  --surface-secondary: rgba(255, 255, 255, 0.08);
  --surface-hover: rgba(255, 255, 255, 0.12);
  --surface-active: rgba(255, 255, 255, 0.18);

  /* Colors - Brand */
  --brand-primary: #8B5CF6;
  --brand-light: #A78BFA;
  --brand-dark: #6D28D9;
  --brand-deep: #4C1D95;

  /* Colors - Gold */
  --gold-primary: #FFD54A;
  --gold-light: #FFE58A;
  --gold-dark: #F4B400;

  /* Colors - Blue */
  --blue-primary: #4DA3FF;
  --blue-light: #7FC3FF;
  --blue-dark: #1E6BFF;

  /* Colors - Live */
  --live-red: #FF4D5A;
  --record-red: #FF2B55;
  --air-red: #FF3B30;

  /* Colors - Text */
  --text-primary: #F5F7FA;
  --text-secondary: #B6C0CF;
  --text-muted: #7E8899;
  --text-disabled: #5A6272;
  --text-inverse: #050608;

  /* Colors - Status */
  --success: #4ADE80;
  --warning: #FACC15;
  --danger: #F87171;
  --info: #38BDF8;

  /* Colors - Borders */
  --border-primary: rgba(255, 255, 255, 0.08);
  --border-secondary: rgba(255, 255, 255, 0.12);
  --border-focus: rgba(255, 255, 255, 0.22);
  --border-glow: rgba(155, 89, 182, 0.45);

  /* Colors - Ambient */
  --ambient-purple: rgba(139, 92, 246, 0.28);
  --ambient-gold: rgba(255, 213, 74, 0.18);
  --ambient-blue: rgba(77, 163, 255, 0.20);
  --ambient-red: rgba(255, 80, 90, 0.18);

  /* Colors - Overlay */
  --overlay-dark: rgba(0, 0, 0, 0.55);
  --overlay-medium: rgba(0, 0, 0, 0.35);
  --overlay-light: rgba(0, 0, 0, 0.16);

  /* Colors - Shadows */
  --shadow-color: rgba(0, 0, 0, 0.42);
  --shadow-glow-purple: rgba(139, 92, 246, 0.45);
  --shadow-glow-gold: rgba(255, 213, 74, 0.35);
  --shadow-glow-blue: rgba(77, 163, 255, 0.40);
  --shadow-live: rgba(255, 70, 70, 0.45);

  /* Colors - TV */
  --tv-screen: #090B10;
  --tv-bezel: #161A24;
  --tv-light: rgba(255, 255, 255, 0.04);
  --tv-reflection: rgba(255, 255, 255, 0.05);

  /* Colors - Navigation */
  --nav-bg: rgba(12, 16, 24, 0.82);
  --nav-border: rgba(255, 255, 255, 0.08);
  --nav-active: var(--brand-primary);
  --nav-hover: var(--glass-md);

  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #07080D 0%, #111827 40%, #28184B 100%);
  --gradient-purple: linear-gradient(135deg, #6D28D9, #8B5CF6, #A78BFA);
  --gradient-gold: linear-gradient(135deg, #F4B400, #FFD54A, #FFE58A);
  --gradient-oled: linear-gradient(180deg, #050608, #0A1018, #131826);
  --gradient-glass: linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04));
  --gradient-ambient: radial-gradient(circle, rgba(139,92,246,0.22), transparent 70%);

  /* Spacing */
  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 32px;
  --space-8: 40px;
  --space-9: 48px;
  --space-10: 56px;
  --space-11: 64px;
  --space-12: 72px;
  --space-13: 80px;
  --space-14: 96px;
  --space-15: 112px;
  --space-16: 128px;
  --space-17: 144px;
  --space-18: 160px;

  /* Radius */
  --radius-xs: 6px;
  --radius-sm: 10px;
  --radius-md: 14px;
  --radius-lg: 18px;
  --radius-xl: 24px;
  --radius-2xl: 32px;
  --radius-full: 9999px;

  /* Motion */
  --motion-xs: 100ms;
  --motion-sm: 150ms;
  --motion-md: 250ms;
  --motion-lg: 400ms;
  --motion-xl: 600ms;
  --motion-xxl: 900ms;

  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-soft: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Blur */
  --blur-xs: 4px;
  --blur-sm: 8px;
  --blur-md: 16px;
  --blur-lg: 24px;
  --blur-xl: 32px;
  --blur-2xl: 48px;
  --blur-3xl: 64px;

  /* Z-index */
  --z-background: 0;
  --z-ambient: 1;
  --z-glass: 10;
  --z-content: 20;
  --z-navigation: 50;
  --z-floating: 100;
  --z-modal: 200;
  --z-toast: 300;
  --z-cursor: 999;

  /* Breakpoints */
  --bp-xs: 320px;
  --bp-sm: 375px;
  --bp-md: 480px;
  --bp-lg: 768px;
  --bp-xl: 1024px;
  --bp-2xl: 1280px;
  --bp-3xl: 1440px;
  --bp-4xl: 1920px;
}
css
/* styles/globals.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: var(--font-inter);
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  background: var(--color-bg-primary);
  color: var(--text-primary);
  overflow-x: hidden;
  min-height: 100vh;
  min-height: 100dvh;
}

/* Typography System */
.display-xxl {
  font-family: var(--font-montserrat);
  font-size: clamp(48px, 8vw, 96px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.display-xl {
  font-family: var(--font-montserrat);
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.02em;
}

.display-l {
  font-family: var(--font-montserrat);
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.heading-xl {
  font-family: var(--font-montserrat);
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.015em;
}

.heading-l {
  font-family: var(--font-montserrat);
  font-size: clamp(24px, 3.5vw, 40px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.heading-m {
  font-family: var(--font-montserrat);
  font-size: clamp(20px, 3vw, 32px);
  font-weight: 600;
  line-height: 1.25;
}

.heading-s {
  font-family: var(--font-montserrat);
  font-size: clamp(18px, 2.5vw, 24px);
  font-weight: 600;
  line-height: 1.3;
}

.body-xl {
  font-family: var(--font-inter);
  font-size: clamp(18px, 2vw, 24px);
  font-weight: 400;
  line-height: 1.5;
}

.body-l {
  font-family: var(--font-inter);
  font-size: clamp(16px, 1.5vw, 20px);
  font-weight: 400;
  line-height: 1.5;
}

.body {
  font-family: var(--font-inter);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
}

.body-small {
  font-family: var(--font-inter);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
}

.caption {
  font-family: var(--font-inter);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
}

.label {
  font-family: var(--font-inter);
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
}

.badge-text {
  font-family: var(--font-space);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

/* Font variables */
:root {
  --font-inter: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-montserrat: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-space: 'Space Grotesk', -apple-system, BlinkMacSystemFont, monospace;
}

/* Font size variables */
:root {
  --font-size-display-xxl: clamp(48px, 8vw, 96px);
  --font-size-display-xl: clamp(40px, 6vw, 72px);
  --font-size-display-l: clamp(32px, 5vw, 56px);
  --font-size-heading-xl: clamp(28px, 4vw, 48px);
  --font-size-heading-l: clamp(24px, 3.5vw, 40px);
  --font-size-heading-m: clamp(20px, 3vw, 32px);
  --font-size-heading-s: clamp(18px, 2.5vw, 24px);
  --font-size-body-xl: clamp(18px, 2vw, 24px);
  --font-size-body-l: clamp(16px, 1.5vw, 20px);
  --font-size-body: 16px;
  --font-size-body-small: 14px;
  --font-size-caption: 12px;
  --font-size-label: 14px;
  --font-size-badge: 10px;
}

/* Selection */
::selection {
  background: var(--brand-primary);
  color: var(--text-primary);
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-bg-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--brand-primary);
  border-radius: var(--radius-full);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--brand-light);
}

/* Reduce motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
Производительность
Оптимизация
tsx
// components/molecules/MusicianCard/MusicianCard.tsx (с оптимизациями)
import React from 'react';
import { GlassCard } from '../GlassCard';
import { Avatar } from '@/components/atoms/Avatar';

interface MusicianCardProps {
  name: string;
  instrument: string;
  description: string;
  photo?: string;
  socials?: {
    instagram?: string;
    vk?: string;
  };
}

export const MusicianCard = React.memo<MusicianCardProps>(({
  name,
  instrument,
  description,
  photo,
  socials,
}) => {
  return (
    <GlassCard variant="md" glow="purple">
      <Avatar src={photo} alt={name} size="xl" fallback={name.charAt(0)} />
      <h3>{name}</h3>
      <p>{instrument}</p>
      <p>{description}</p>
    </GlassCard>
  );
}, (prev, next) => {
  return (
    prev.name === next.name &&
    prev.instrument === next.instrument &&
    prev.description === next.description &&
    prev.photo === next.photo &&
    JSON.stringify(prev.socials) === JSON.stringify(next.socials)
  );
});

MusicianCard.displayName = 'MusicianCard';
tsx
// app/App.tsx (с ленивой загрузкой)
import { Suspense, lazy, useMemo } from 'react';
import { TVShell } from '@/components/tv/TVShell';
import { BottomNavigation } from '@/components/organisms/Navigation/BottomNavigation';
import { Loader } from '@/components/atoms/Loader';
import { useChannelStore } from '@/store/channelStore';
import { useChannelTransition } from '@/hooks/useChannelTransition';

const CHANNELS = {
  'CH01': lazy(() => import('@/channels/CH01-Home')),
  'CH02': lazy(() => import('@/channels/CH02-About')),
  'CH03': lazy(() => import('@/channels/CH03-Band')),
  'CH04': lazy(() => import('@/channels/CH04-Shows')),
  'CH05': lazy(() => import('@/channels/CH05-Media')),
  'CH06': lazy(() => import('@/channels/CH06-Contact')),
};

const CHANNEL_IDS = ['CH01', 'CH02', 'CH03', 'CH04', 'CH05', 'CH06'];

export const App: React.FC = () => {
  const { currentChannel } = useChannelStore();
  const { shouldRender, isSwitching } = useChannelTransition();

  const ChannelComponent = useMemo(() => {
    return CHANNELS[currentChannel as keyof typeof CHANNELS] || CHANNELS['CH01'];
  }, [currentChannel]);

  return (
    <TVShell>
      <Suspense fallback={<Loader />}>
        {shouldRender && <ChannelComponent />}
      </Suspense>
      <BottomNavigation />
    </TVShell>
  );
};
Тестирование
tsx
// components/atoms/Button/Button.test.tsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('shows loading state', () => {
    render(<Button loading>Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button).toHaveClass('loading');
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByText('Click me')).toBeDisabled();
  });

  it('does not call onClick when disabled', () => {
    const onClick = vi.fn();
    render(<Button disabled onClick={onClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Button variant="primary">Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('primary');

    rerender(<Button variant="glass">Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('glass');
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(<Button size="lg">Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('lg');

    rerender(<Button size="sm">Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('sm');
  });

  it('renders icon when provided', () => {
    render(
      <Button iconLeft={<span data-testid="left-icon">←</span>}>
        Button
      </Button>
    );
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
  });
});
tsx
// store/channelStore.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { useChannelStore } from './channelStore';

describe('channelStore', () => {
  beforeEach(() => {
    useChannelStore.setState({
      currentChannel: 'CH01',
      previousChannel: null,
      isSwitching: false,
    });
  });

  it('has correct initial state', () => {
    const state = useChannelStore.getState();
    expect(state.currentChannel).toBe('CH01');
    expect(state.previousChannel).toBeNull();
    expect(state.isSwitching).toBe(false);
  });

  it('setChannel updates currentChannel', () => {
    const { setChannel } = useChannelStore.getState();
    setChannel('CH02');
    expect(useChannelStore.getState().currentChannel).toBe('CH02');
  });

  it('switchChannel handles switching state', async () => {
    const { switchChannel } = useChannelStore.getState();

    const promise = switchChannel('CH02');
    expect(useChannelStore.getState().isSwitching).toBe(true);

    await promise;
    expect(useChannelStore.getState().currentChannel).toBe('CH02');
    expect(useChannelStore.getState().isSwitching).toBe(false);
  });

  it('switchChannel does nothing if already switching', async () => {
    const { switchChannel } = useChannelStore.getState();
    useChannelStore.setState({ isSwitching: true });

    await switchChannel('CH02');
    expect(useChannelStore.getState().currentChannel).toBe('CH01');
  });

  it('switchChannel does nothing if switching to same channel', async () => {
    const { switchChannel } = useChannelStore.getState();
    await switchChannel('CH01');
    expect(useChannelStore.getState().currentChannel).toBe('CH01');
    expect(useChannelStore.getState().isSwitching).toBe(false);
  });
});
```
