# EMTIVI

# Design System

Версия: 1.0

---

# Назначение

Данный документ определяет единый визуальный язык приложения EMTIVI.

Ни один компонент не должен создавать собственные цвета, размеры, тени или анимации.

Все значения берутся исключительно из Design Tokens.

Любые новые компоненты обязаны использовать только существующие токены.

---

# Основные принципы

Design System строится вокруг пяти идей.

• Mobile First

• Glassmorphism

• OLED Interface

• Motion First

• Neon Ambient

---

# Design Tokens

Запрещено писать значения напрямую.

Плохо

color: #ffffff;

Правильно

color: var(--color-text-primary);

Плохо

border-radius:16px;

Правильно

border-radius:var(--radius-lg);

Плохо

padding:24px;

Правильно

padding:var(--space-xl);

---

# Структура токенов

Все токены делятся на категории.

Color Tokens

↓

Typography Tokens

↓

Spacing Tokens

↓

Radius Tokens

↓

Shadow Tokens

↓

Motion Tokens

↓

Blur Tokens

↓

Border Tokens

↓

Gradient Tokens

↓

Z-index Tokens

↓

Transition Tokens

---

# Color System

Вся цветовая схема основана на OLED экранах.

Черный никогда не абсолютно черный.

Белый никогда не абсолютно белый.

Основной фон строится из глубоких холодных оттенков.

---

Background

--color-bg-primary

главный фон приложения

---

--color-bg-secondary

фон телевизора

---

--color-bg-tertiary

фон карточек

---

--color-bg-overlay

полупрозрачный фон

---

Surface

--surface-glass

стеклянная панель

---

--surface-elevated

поднятая панель

---

--surface-hover

состояние hover

---

Text

--text-primary

основной текст

---

--text-secondary

вторичный текст

---

--text-muted

неактивный текст

---

--text-accent

акцентный текст

---

Accent Colors

Основной акцент

Purple

Вторичный

Gold

Дополнительный

Blue

Индикатор LIVE

Red

Success

Green

---

Неоновые цвета используются только как источник света.

Не использовать их как основные цвета текста.

---

# Opacity Scale

100%

96%

92%

88%

80%

72%

64%

48%

32%

16%

8%

4%

2%

---

# Glass System

Каждая стеклянная панель должна иметь

полупрозрачность

размытие

тонкую внутреннюю границу

световой ореол

мягкую тень

---

Glass Levels

Glass XS

Glass S

Glass M

Glass L

Glass XL

Различаются только силой blur.

---

# Blur Tokens

Backdrop Blur XS

Backdrop Blur S

Backdrop Blur M

Backdrop Blur L

Backdrop Blur XL

Все значения задаются через CSS Variables.

---

# Radius System

Все элементы используют единую систему скруглений.

XS

S

M

L

XL

2XL

FULL

Не использовать произвольные значения.

---

# Spacing System

Все расстояния кратны одной базовой единице.

Base Unit = 4px

Scale

4

8

12

16

20

24

32

40

48

56

64

80

96

120

160

Запрещено использовать произвольные значения.

---

# Typography

Основной шрифт

Inter

Заголовки

Montserrat

Допускается использование Space Grotesk для отдельных акцентов.

---

Размеры текста

Display XL

Display L

Heading XL

Heading L

Heading M

Heading S

Body L

Body

Body Small

Caption

Label

Button

Navigation

Badge

---

Высота строки

Для каждого размера определяется отдельно.

Не использовать line-height: normal.

---

Letter Spacing

Определяется токенами.

Для заголовков

отрицательный tracking.

Для обычного текста

нулевой.

Для кнопок

небольшой положительный.

---

Font Weight

300

400

500

600

700

800

---

Grid

Проект Mobile First.

---

Mobile

4 Columns

---

Tablet

8 Columns

---

Desktop

12 Columns

---

Container Width

XS

SM

MD

LG

XL

2XL

---

Safe Area

Поддержка

iPhone Dynamic Island

Safe Area Insets

Home Indicator

---

Elevation

Все элементы располагаются по уровням.

Background

↓

Particles

↓

Ambient Glow

↓

Glass Panels

↓

Cards

↓

Buttons

↓

Floating Controls

↓

Navigation

↓

Dialogs

↓

Notifications

↓

Cursor Effects

---

Shadow System

Shadow XS

Shadow S

Shadow M

Shadow L

Shadow XL

Shadow Glow Purple

Shadow Glow Gold

Shadow Glow Blue

Shadow Live

Каждый компонент использует только токены.

---

Border System

Толщина

Hairline

Thin

Regular

Bold

Glow Border

---

Gradient System

Primary Gradient

Hero Gradient

Glass Gradient

Gold Gradient

Purple Gradient

Background Gradient

Ambient Gradient

Не допускается создание собственных градиентов.

---

Icons

Все иконки имеют одинаковую толщину.

Stroke

2px

Размеры

16

20

24

28

32

40

48

---

Motion Tokens

Duration Instant

Duration Fast

Duration Normal

Duration Slow

Duration Very Slow

---

Timing Functions

Ease Out

Ease In

Ease In Out

Spring Soft

Spring Medium

Spring Strong

---

Hover Rules

Каждый интерактивный элемент обязан иметь.

Hover

Focus

Pressed

Disabled

Loading

Active

Selected

---

Animation Rules

Запрещены

резкие появления

резкие исчезновения

дерганые движения

линейные анимации

---

Разрешены

Fade

Scale

Slide

Glow

Float

Pulse

Gradient Shift

Glass Reflection

Parallax

---

Accessibility

Минимальный размер кликабельной области

44x44

Контраст текста

WCAG AA

Все кнопки доступны с клавиатуры.

Фокус всегда видим.

---

Responsive

Сначала проектируется мобильная версия.

Планшет является расширением мобильной.

Десктоп является расширением планшета.

Никогда наоборот.

---

Правило разработки

Каждый новый компонент обязан использовать исключительно существующие Design Tokens.

Если компоненту не хватает токена, сначала расширяется Design System.

И только после этого создается компонент.

Никогда наоборот.

---

Definition of Done

Design System считается завершенной, если любой новый компонент можно создать, не используя ни одного "магического числа" или произвольного значения.

Любой стиль должен ссылаться только на заранее определенные токены.
