# EMTIVI

# 11-TV-SYSTEM.md

Version: 1.0

---

# Назначение

TV System является главным визуальным ядром приложения EMTIVI.

Все экраны, каналы и интерфейсные элементы существуют внутри телевизионной оболочки.

EMTIVI не имитирует старый телевизор.

Это современный цифровой OLED-экран будущего.

Вдохновение:

• Apple VisionOS

• iPhone Dynamic Island

• Apple TV

• OLED телевизоры LG/Samsung

• Spotify Canvas

• музыкальные визуализаторы

---

# Главная идея

Пользователь не открывает страницы.

Пользователь включает музыкальный канал.

Каждый раздел приложения является отдельным эфиром.

Пример:

CH 01

HOME

↓

CH 02

ABOUT

↓

CH 03

BAND

↓

CH 04

SHOWS

↓

CH 05

MEDIA

↓

CH 06

CONTACT

---

# TV Architecture

Главный контейнер:

```
TV SYSTEM

├── Outer Environment
│
├── TV Frame
│
├── Screen Glass
│
├── Content Layer
│
├── HUD Layer
│
├── Reflection Layer
│
├── Ambient Layer
│
└── Interaction Layer
```

---

# Layer System

Телевизор состоит из 8 визуальных слоев.

---

## Layer 01

Environment

Самый нижний слой.

Отвечает за атмосферу.

Содержит:

• Background Gradient

• Dark Space

• Ambient Glow

• Noise Texture

• Particles

---

## Layer 02

TV Frame

Корпус телевизора.

На Desktop:

видимая рамка.

На Mobile:

минимальная.

---

Параметры:

Desktop:

padding

40px

Tablet:

24px

Mobile:

12px

---

Материалы:

Glass Metal

Dark Titanium

Soft Reflection

---

# Frame Style

Не использовать реалистичный 3D телевизор.

Стиль:

Premium Minimal.

Пример:

iPhone + OLED + Cyber Interface.

---

# Frame Effects

Используются:

border

gradient

inner shadow

reflection

soft glow

---

# Layer 03

Screen

Главная область контента.

---

Соотношение сторон:

Desktop:

16:9

Mobile:

адаптивное вертикальное.

---

Screen Background:

#0A0A0A

с динамическим свечением.

---

# Screen Border

Очень тонкая линия.

Opacity:

10-20%

---

# Layer 04

Glass Layer

Главная особенность интерфейса.

---

Используется:

backdrop-filter

blur()

brightness()

---

Параметры:

Desktop:

blur 40px

Mobile:

blur 20px

---

Glass имеет:

• прозрачность

• отражение

• внутреннее свечение

• шум

---

# Glass Material

Создает ощущение:

"экран выключен, но внутри есть жизнь".

---

# Layer 05

Content Layer

Здесь находятся:

• каналы

• карточки

• тексты

• кнопки

• медиа

---

Контент никогда не выходит за пределы экрана.

---

# Layer 06

HUD Layer

Head Up Display.

Интерфейс телевизора.

---

Содержит:

CH Number

↓

LIVE

↓

TIME

↓

SIGNAL

↓

QUALITY

↓

CHANNEL NAME

---

# HUD Position

Desktop:

верхние углы.

Mobile:

внутри верхней зоны экрана.

---

# HUD Typography

Используется:

Space Grotesk.

---

Стиль:

uppercase

letter spacing

small size

---

Пример:

```
● LIVE

CH 03

BAND

4K SIGNAL
```

---

# Layer 07

Reflection Layer

Имитация отражения стекла.

---

Содержит:

Diagonal Light

↓

Soft Shine

↓

Moving Reflection

---

Скорость:

очень медленная.

30-40 секунд цикл.

---

Нельзя делать ярким.

---

# Layer 08

Interaction Layer

Самый верхний слой.

Содержит:

• cursor glow

• hover effects

• touch effects

• gestures

---

# Channel System

Каждый канал является отдельным состоянием приложения.

---

Channel Object:

```ts
{
 id:"CH01",
 name:"HOME",
 color:"#FFD700",
 mood:"energetic"
}
```

---

# Каналы EMTIVI

---

# CH 01

## HOME

Главный эфир.

Цвет:

Gold + Purple

Содержит:

Logo

↓

Slogan

↓

Years Counter

↓

CTA

↓

Equalizer

---

# CH 02

## ABOUT

История группы.

Настроение:

Warm

Цвет:

Gold

---

# CH 03

## BAND

Музыканты.

Настроение:

Live

Цвет:

Purple

---

# CH 04

## SHOWS

Концертные программы.

Настроение:

Energy

Цвет:

Orange + Purple

---

# CH 05

## MEDIA

Фото и видео.

Настроение:

Creative

Цвет:

Blue

---

# CH 06

## CONTACT

Бронирование.

Настроение:

Premium

Цвет:

Gold

---

# Channel Switching

Главное действие пользователя.

---

При смене канала:

## Step 01

Current Screen

Blur

---

## Step 02

Glow Shift

---

## Step 03

Content Fade

---

## Step 04

New Channel Load

---

## Step 05

Screen Brightness

---

Общее время:

400-600ms

---

# Channel Transition Effects

Разрешены:

Fade

Scale

Blur

Glow

Slide

---

Запрещены:

Rotate

3D Spin

Bounce

---

# Mobile TV Mode

На мобильных устройствах:

Телевизор становится полноэкранным.

---

Нет:

• большой рамки

• тяжелого blur

• сложных отражений

---

Есть:

• glass

• glow

• channel HUD

• bottom navigation

---

# Desktop TV Mode

На больших экранах:

телевизор становится объектом.

---

Добавляется:

• глубокая тень

• объем

• рамка

• ambient light

• reflection

---

# TV Remote Concept

Будущее расширение.

Навигация может работать как пульт.

---

Компонент:

Remote Controller

Содержит:

Channel buttons

Volume

Play

Next

Previous

---

# Screen States

---

## OFF

Экран темный.

Есть слабое свечение.

---

## BOOT

Запуск приложения.

Анимация:

Logo

↓

Glow

↓

Interface

---

## LIVE

Основное состояние.

---

## SWITCHING

Переключение канала.

---

## PAUSED

Остановка эфира.

---

# Boot Animation

Первое открытие приложения.

Последовательность:

1.

Black Screen

2.

Gold Light Line

3.

EMTIVI Logo

4.

Glow Expansion

5.

TV Interface

---

Длительность:

1500ms

---

# Ambient Lighting System

Каждый канал имеет свой цвет света.

---

HOME

Gold/Purple

ABOUT

Warm Gold

BAND

Purple

SHOWS

Orange

MEDIA

Blue

CONTACT

White/Gold

---

# Performance Rules

TV System должен работать 60 FPS.

---

Запрещено:

• тяжелый WebGL

• постоянный blur больших областей

• тысячи частиц

---

Разрешено:

CSS Gradient

CSS Animation

Transform

Opacity

---

# Accessibility

TV интерфейс не должен мешать использованию.

Все:

• кнопки доступны;

• каналы имеют aria-label;

• анимации отключаются;

• контент читается скринридером.

---

# Development Rules

TV System реализуется первым.

Порядок:

1.

TV Shell

2.

Screen

3.

HUD

4.

Navigation

5.

Channels

6.

Effects

7.

Content

---

# Component Structure

```
TVSystem/

├── TVShell.tsx

├── Screen.tsx

├── Frame.tsx

├── HUD.tsx

├── ChannelIndicator.tsx

├── Reflection.tsx

├── AmbientLight.tsx

├── NoiseLayer.tsx

└── index.ts
```

---

# Definition of Done

TV System считается готовым если:

✔ приложение ощущается как телевизионная платформа;

✔ переключение каналов плавное;

✔ экран имеет глубину;

✔ стекло выглядит реалистично;

✔ интерфейс работает на мобильных;

✔ Desktop выглядит премиально;

✔ визуальная атмосфера EMTIVI узнаваема без текста;

✔ пользователь понимает метафору "музыкального ТВ".
