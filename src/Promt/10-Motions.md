# EMTIVI

# 10-MOTION.md

Version: 1.0

---

# Назначение

Данный документ определяет систему движения (Motion Design System) приложения EMTIVI.

Анимации не являются украшением.

Они являются частью интерфейса.

Каждое движение должно объяснять пользователю происходящее.

Любая анимация обязана иметь смысл.

Если движение не улучшает понимание интерфейса — оно запрещено.

---

# Motion Philosophy

EMTIVI ощущается как современный OLED-телевизор премиум-класса.

Интерфейс живой.

Но спокойный.

Никакой суеты.

Никаких резких движений.

Каждое движение мягкое.

Плавное.

Физичное.

---

# Motion Principles

Каждая анимация должна:

• быть понятной

• быть предсказуемой

• быть короткой

• работать в 60 FPS

• использовать transform и opacity

• не использовать тяжелые repaint

---

# Общая длительность

XS

100ms

Используется:

Hover

Opacity

Cursor

---

SM

150ms

Используется:

Buttons

Cards

Icons

---

MD

250ms

Основной Motion.

Используется практически везде.

---

LG

400ms

Screen Transition

---

XL

600ms

Hero Animation

---

XXL

900ms

Intro

Splash

---

Запрещены анимации длиннее 1000ms.

---

# Timing Functions

Используются только заранее определенные кривые.

Fast Out

```css
cubic-bezier(.4,0,.2,1)
```

---

Soft

```css
cubic-bezier(.22,1,.36,1)
```

---

Bounce

```css
cubic-bezier(.34,1.56,.64,1)
```

---

Linear

Используется только для бесконечных эффектов.

---

Запрещены другие easing.

---

# Motion Tokens

```css
--motion-xs: 100ms;
--motion-sm: 150ms;
--motion-md: 250ms;
--motion-lg: 400ms;
--motion-xl: 600ms;

--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
--ease-soft: cubic-bezier(0.22, 1, 0.36, 1);
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
```

---

# Layer Animation

Любой экран появляется одинаково.

Background

↓

Ambient Light

↓

Glass

↓

Content

↓

Buttons

↓

Details

---

Никогда наоборот.

---

# Hero Animation

При загрузке.

1.

Background Fade

↓

2.

Gradient появляется

↓

3.

Logo

↓

4.

Название EMTIVI

↓

5.

Подзаголовок

↓

6.

Years Counter

↓

7.

CTA

↓

8.

Equalizer

---

Общая длительность

≈900ms

---

# Scroll Reveal

Каждая секция появляется при первом входе во viewport.

Используется:

Opacity

-

TranslateY

24px

↓

0

---

Длительность

400ms

---

Delay

50ms между соседними элементами.

---

# Stagger

Карточки появляются по очереди.

Каждая следующая

+50ms.

Максимум

8 элементов.

---

# Navigation

Появление.

Fade

-

Blur

-

TranslateY

---

Bottom Navigation

Поднимается снизу.

---

Top Navigation

Появляется сверху.

---

# Button Hover

Используется:

Scale

1.03

↓

Glow

-

Gradient Shift

---

Длительность

150ms.

---

# Button Press

Scale

0.98

↓

Glow уменьшается.

↓

Shadow уменьшается.

---

# Card Hover

Desktop only.

Используется:

TranslateY

-8px

↓

Glow

↓

Border Brightness

↓

Reflection

↓

Shadow

---

Tilt

До 3°.

---

# Card Press

Scale

0.98

---

# Glass Animation

Glass никогда не изменяет blur.

Изменяется только:

Opacity

Glow

Reflection

---

Blur остается постоянным.

---

# Glow Animation

Свечение живет постоянно.

Используется медленная пульсация.

Период

5 секунд.

---

Изменяется только:

Opacity

Intensity

---

# Gradient Animation

Все большие градиенты медленно движутся.

Период

20–40 секунд.

Движение практически незаметно.

---

# Ambient Light

Источник света постоянно "дышит".

Используется:

Scale

1

↓

1.05

↓

1

Opacity

6%

↓

9%

↓

6%

---

Период

8 секунд.

---

# Mouse Follow

Desktop only.

Используется requestAnimationFrame.

Обновление не чаще 60 FPS.

Движение плавное.

Используется интерполяция.

---

# Cursor Glow

Следует за курсором.

Не повторяет движение мгновенно.

Используется инерция.

---

# Equalizer

Работает постоянно.

Высота столбиков изменяется случайно.

FPS

20–30.

Используется CSS keyframes.

Не зависит от музыки.

---

# Live Badge

Красная точка.

Каждые

2 секунды

слегка увеличивается.

Opacity

0.6

↓

1

↓

0.6

---

# Scroll Progress

Полоса сверху.

Использует scaleX.

Без изменения width.

---

# Channel Transition

Главная особенность приложения.

При переключении каналов.

1.

Fade Current

↓

2.

Glow Shift

↓

3.

Blur

↓

4.

Content Change

↓

5.

Fade New

---

Общая длительность

≈450ms

---

# Hero Gradient

Использует Mouse Follow.

Mobile

Автоматическое движение.

Desktop

Реакция на курсор.

---

# TV Reflection

Очень медленно движется.

Период

≈30 секунд.

Почти незаметна.

---

# Noise

Никогда не анимируется.

Используется статичная текстура.

---

# Modal

Появление

Scale

0.96

↓

1

-

Opacity

0

↓

1

---

Закрытие

Fade.

---

# Drawer

Bottom Sheet.

Использует:

TranslateY.

Не opacity.

---

# Toast

Slide Down.

↓

Fade.

---

Закрытие

Fade.

---

# Tooltip

Fade.

↓

Scale.

---

# Form Validation

Ошибка

Shake

4px

Не более одного раза.

---

Success

Зеленый Glow.

---

# Loading

Используются:

Equalizer

Spinner

Wave

Pulse

---

Никогда не использовать бесконечное вращение большого объекта.

---

# Skeleton

Используется shimmer.

Период

≈1.5s.

---

# Performance Rules

Разрешено анимировать только:

transform

opacity

filter (минимально)

background-position

---

Запрещено анимировать:

width

height

left

right

top

bottom

margin

padding

border-width

box-shadow (интенсивно)

---

# GPU

Все большие анимации используют:

translate3d()

или

will-change.

Только перед началом анимации.

---

# Accessibility

Поддерживается

prefers-reduced-motion.

Если пользователь отключил анимации.

Все движения заменяются на Fade.

---

# Mobile

На мобильных устройствах:

отключаются

Tilt

Cursor

Mouse Follow

Reflection Tracking

---

Остаются

Fade

Scale

Opacity

Gradient

Glow

---

# TV Experience

Во всем приложении пользователь должен ощущать:

живой экран,

переключение эфира,

дыхание света,

глубину стекла,

атмосферу современного OLED-дисплея.

Анимации никогда не должны отвлекать от контента.

Они лишь усиливают ощущение цифрового телевизионного пространства.

---

# Definition of Done

Motion System считается завершенной, если:

• все анимации используют только Motion Tokens;

• отсутствуют произвольные transition и animation;

• интерфейс работает с частотой не менее 60 FPS;

• соблюдается поддержка prefers-reduced-motion;

• все переходы выглядят как единая система, а не набор независимых эффектов;

• пользователь воспринимает приложение как живой музыкальный телеканал, а не обычный веб-сайт.
