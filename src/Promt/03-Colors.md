# EMTIVI

# 03-COLORS.md

Версия: 1.0

---

# Назначение

Данный документ определяет единую цветовую систему проекта EMTIVI.

Запрещается использовать HEX, RGB, HSL или любые другие цветовые значения непосредственно в компонентах.

Все компоненты используют только CSS Custom Properties.

Любой новый цвет сначала добавляется в данный документ, затем используется в интерфейсе.

---

# Философия

EMTIVI использует не "цвета", а "свет".

Практически каждый цвет является источником освещения.

Интерфейс должен выглядеть как дорогой OLED-дисплей ночью.

Черный никогда не абсолютно черный.

Белый никогда не абсолютно белый.

Все цвета слегка смещены в холодный спектр.

---

# Основная палитра

## Pure Colors

```css
--black: #000000;
--white: #FFFFFF;
```

Используются только как базовые значения.

Никогда напрямую в компонентах.

---

# OLED Background

Главный фон приложения.

```css
--color-bg-primary: #07080D;
```

Самый темный цвет проекта.

---

```css
--color-bg-secondary: #0C1018;
```

Фон второго уровня.

---

```css
--color-bg-tertiary: #131826;
```

Карточки.

---

```css
--color-bg-elevated: #181F31;
```

Поднятые панели.

---

```css
--color-bg-modal: #1E2436;
```

Модальные окна.

---

```css
--color-bg-floating: rgba(20,25,38,.72);
```

Плавающие панели.

---

# Glass

Главная идея интерфейса.

```css
--glass-xs: rgba(255,255,255,.02);
--glass-sm: rgba(255,255,255,.04);
--glass-md: rgba(255,255,255,.06);
--glass-lg: rgba(255,255,255,.08);
--glass-xl: rgba(255,255,255,.12);
```

Используются совместно с backdrop-filter.

---

# Surface

```css
--surface-primary: rgba(255,255,255,.05);

--surface-secondary: rgba(255,255,255,.08);

--surface-hover: rgba(255,255,255,.12);

--surface-active: rgba(255,255,255,.18);
```

---

# Borders

```css
--border-primary: rgba(255,255,255,.08);

--border-secondary: rgba(255,255,255,.12);

--border-focus: rgba(255,255,255,.22);

--border-glow: rgba(155,89,182,.45);
```

---

# Typography

Основной текст.

```css
--text-primary:#F5F7FA;
```

---

Вторичный.

```css
--text-secondary:#B6C0CF;
```

---

Подсказки.

```css
--text-muted:#7E8899;
```

---

Неактивный.

```css
--text-disabled:#5A6272;
```

---

На цветном фоне.

```css
--text-inverse:#050608;
```

---

# Brand

Основной цвет EMTIVI.

```css
--brand-primary:#8B5CF6;
```

---

Светлый.

```css
--brand-light:#A78BFA;
```

---

Темный.

```css
--brand-dark:#6D28D9;
```

---

Глубокий.

```css
--brand-deep:#4C1D95;
```

---

# Gold Accent

Основной концертный акцент.

```css
--gold-primary:#FFD54A;
```

---

```css
--gold-light:#FFE58A;
```

---

```css
--gold-dark:#F4B400;
```

---

# Blue Accent

```css
--blue-primary:#4DA3FF;
```

---

```css
--blue-light:#7FC3FF;
```

---

```css
--blue-dark:#1E6BFF;
```

---

# Live Colors

Индикатор эфира.

```css
--live-red:#FF4D5A;
```

---

REC.

```css
--record-red:#FF2B55;
```

---

ON AIR.

```css
--air-red:#FF3B30;
```

---

# Success

```css
--success:#4ADE80;
```

---

# Warning

```css
--warning:#FACC15;
```

---

# Error

```css
--danger:#F87171;
```

---

# Information

```css
--info:#38BDF8;
```

---

# Shadows

Все тени должны использовать цвета проекта.

Никогда не использовать чистый черный.

---

```css
--shadow-color:rgba(0,0,0,.42);
```

---

```css
--shadow-glow-purple:rgba(139,92,246,.45);
```

---

```css
--shadow-glow-gold:rgba(255,213,74,.35);
```

---

```css
--shadow-glow-blue:rgba(77,163,255,.40);
```

---

```css
--shadow-live:rgba(255,70,70,.45);
```

---

# Ambient Glow

Используется для освещения интерфейса.

```css
--ambient-purple:rgba(139,92,246,.28);

--ambient-gold:rgba(255,213,74,.18);

--ambient-blue:rgba(77,163,255,.20);

--ambient-red:rgba(255,80,90,.18);
```

---

# Overlay

```css
--overlay-dark:rgba(0,0,0,.55);

--overlay-medium:rgba(0,0,0,.35);

--overlay-light:rgba(0,0,0,.16);
```

---

# Gradients

## Hero

```css
--gradient-hero:
linear-gradient(
135deg,
#07080D 0%,
#111827 40%,
#28184B 100%
);
```

---

## Purple

```css
--gradient-purple:
linear-gradient(
135deg,
#6D28D9,
#8B5CF6,
#A78BFA
);
```

---

## Gold

```css
--gradient-gold:
linear-gradient(
135deg,
#F4B400,
#FFD54A,
#FFE58A
);
```

---

## OLED

```css
--gradient-oled:
linear-gradient(
180deg,
#050608,
#0A1018,
#131826
);
```

---

## Glass

```css
--gradient-glass:
linear-gradient(
180deg,
rgba(255,255,255,.12),
rgba(255,255,255,.04)
);
```

---

## Ambient

```css
--gradient-ambient:
radial-gradient(circle,
rgba(139,92,246,.22),
transparent 70%);
```

---

# Semantic Tokens

Компоненты используют только семантические переменные.

Например

Плохо

```css
background:#8B5CF6;
```

Хорошо

```css
background:var(--button-primary-bg);
```

---

# Button Tokens

```css
--button-primary-bg:var(--brand-primary);

--button-primary-hover:var(--brand-light);

--button-primary-active:var(--brand-dark);

--button-secondary-bg:var(--glass-md);

--button-secondary-hover:var(--glass-lg);

--button-secondary-border:var(--border-primary);
```

---

# Card Tokens

```css
--card-bg:var(--glass-sm);

--card-hover:var(--glass-md);

--card-border:var(--border-primary);

--card-shadow:var(--shadow-color);
```

---

# Navigation

```css
--nav-bg:rgba(12,16,24,.82);

--nav-border:rgba(255,255,255,.08);

--nav-active:var(--brand-primary);

--nav-hover:var(--glass-md);
```

---

# TV Interface

```css
--tv-screen:#090B10;

--tv-bezel:#161A24;

--tv-light:rgba(255,255,255,.04);

--tv-reflection:rgba(255,255,255,.05);
```

---

# Glow Rules

Допускается использовать одновременно максимум два источника свечения.

Например

✔️ Purple + Gold

✔️ Purple + Blue

✔️ Gold + White

Запрещено

Purple + Gold + Blue + Red одновременно.

Интерфейс станет визуально шумным.

---

# Accessibility

Минимальный коэффициент контрастности текста

WCAG AA

Основной текст всегда имеет высокий контраст.

Цвет никогда не является единственным способом передачи информации.

---

# Правила использования

Каждый компонент использует только семантические переменные.

Никогда не использовать HEX.

Никогда не создавать собственные цвета.

Никогда не использовать rgba(...) непосредственно в компоненте.

Все изменения производятся только в данном документе.

---

# Definition of Done

Цветовая система считается завершенной, если:

• любой компонент собирается исключительно из токенов;

• изменение одного токена автоматически обновляет весь интерфейс;

• приложение поддерживает смену темы без изменения компонентов;

• ни один CSS Module не содержит жестко заданных цветов.