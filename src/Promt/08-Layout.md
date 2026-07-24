# EMTIVI

# 08-LAYOUT.md

Version: 1.0

---

# Назначение

Данный документ определяет архитектуру всего пользовательского интерфейса EMTIVI.

EMTIVI не является веб-сайтом.

EMTIVI представляет собой интерактивное приложение, стилизованное под современный музыкальный телеканал.

Пользователь никогда не ощущает переход между страницами.

Он переключает каналы.

Каждый экран представляет собой отдельный эфир.

Каждый переход — смену телевизионного канала.

---

# Общая архитектура

Application

↓

TV Shell

↓

Global Navigation

↓

Channel

↓

Sections

↓

Components

↓

Atoms

---

# Главная идея

Интерфейс построен вокруг одного большого телевизионного экрана.

Весь контент располагается внутри него.

Вокруг экрана располагаются:

• свет

• шум

• отражения

• свечение

• окружающая атмосфера

---

# Пространственная модель

────────────────────────────

Safe Area

↓

Status Layer

↓

Navigation

↓

TV Screen

↓

Content Layer

↓

Overlay Layer

↓

Floating Layer

↓

Effects Layer

────────────────────────────

---

# TV Shell

Это основной контейнер приложения.

Он существует всегда.

Никогда не исчезает.

Никогда не размонтируется.

Содержит:

• фон

• шум

• Ambient Light

• отражения

• стекло

• экран

• все остальные компоненты

---

# Background Layer

Самый нижний уровень.

Содержит:

OLED Gradient

↓

Animated Gradient

↓

Noise

↓

Ambient Light

↓

Glow

↓

Particles

Фон никогда не бывает статичным.

---

# Screen Layer

Поверх Background располагается экран телевизора.

Экран имеет:

Glass

↓

Reflection

↓

Soft Border

↓

Shadow

↓

Screen Glow

---

# Navigation Layer

Навигация существует всегда.

На мобильном устройстве:

Bottom Navigation

На Desktop:

Top Navigation

Навигация никогда полностью не исчезает.

Меняется только прозрачность.

---

# Floating Layer

Находится выше контента.

Содержит:

Scroll To Top

↓

Music Player

↓

Floating CTA

↓

Notifications

↓

Dialogs

↓

Bottom Sheet

↓

Context Menu

---

# Effects Layer

Самый верхний уровень.

Используется исключительно для декоративных эффектов.

Cursor Glow

↓

Gradient Follow

↓

Light Reflection

↓

Noise Overlay

↓

Lens Effect

↓

Scanline (очень слабый)

---

# Каналы

Все приложение состоит из каналов.

Каждый канал представляет отдельную историю.

---

CH 01

HOME

Главный эфир.

---

CH 02

ABOUT

История группы.

---

CH 03

BAND

Музыканты.

---

CH 04

SHOWS

Концертные программы.

---

CH 05

MEDIA

Фото.

Видео.

---

CH 06

CONTACT

Контакты.

Бронирование.

---

# Переход между каналами

Пользователь не "скроллит страницу".

Он переключает эфир.

Во время перехода используются:

Fade

↓

Light Shift

↓

Blur

↓

Small Scale

↓

Glow Transition

Запрещены долгие анимации.

---

# HOME

Первый экран приложения.

Содержит:

LIVE

↓

Время

↓

Название EMTIVI

↓

Слоган

↓

Years Counter

↓

Equalizer

↓

CTA

↓

Scroll Indicator

---

# ABOUT

Вторая сцена.

Рассказывает историю группы.

Использует:

Timeline

↓

Glass Card

↓

Фото

↓

Историю

↓

Glow

↓

Parallax

---

# BAND

Основной экран музыкантов.

Содержит:

Grid

↓

Musician Cards

↓

Hover Animation

↓

Spotlight

↓

Social Buttons

↓

Instrument Badge

---

# SHOWS

Экран концертных программ.

Содержит:

Service Cards

↓

Glass

↓

Pricing

↓

CTA

↓

Advantages

↓

Background Glow

---

# MEDIA

Самый визуальный экран.

Содержит:

Gallery

↓

Videos

↓

Lightbox

↓

Animated Grid

↓

Hover Zoom

↓

Lazy Loading

---

# CONTACT

Финальный экран.

Содержит:

Glass Form

↓

Phone

↓

Social

↓

Website

↓

Booking

↓

Map Placeholder

↓

CTA

---

# Структура каждого канала

Каждый экран строится одинаково.

Channel Header

↓

Hero Block

↓

Main Content

↓

Supporting Content

↓

CTA

↓

Divider

↓

Next Channel Hint

---

# Hero Block

Каждый канал начинается одинаково.

Channel Number

↓

Channel Name

↓

Subtitle

↓

Glow Divider

↓

Main Content

---

# Channel Divider

Между каналами нет резких границ.

Используются:

Gradient

↓

Ambient Light

↓

Blur

↓

Large Spacing

↓

Particles

Пользователь ощущает смену атмосферы.

---

# Компоновка мобильной версии

────────────────────

Status

↓

Hero

↓

Content

↓

Cards

↓

CTA

↓

Next Section

↓

Bottom Navigation

────────────────────

Все элементы располагаются вертикально.

---

# Компоновка планшета

Добавляется больше воздуха.

Карточки становятся шире.

Появляются две колонки.

---

# Компоновка Desktop

Используется асимметрия.

Большие изображения.

Плавающие панели.

TV Shell становится более заметным.

---

# Bottom Navigation

Главный элемент мобильной версии.

Всегда закреплена.

Использует:

Glass

↓

Blur

↓

Safe Area

↓

Glow

↓

Active Indicator

↓

Animated Icons

---

# Верхняя навигация

Desktop.

Содержит:

Logo

↓

Channels

↓

LIVE

↓

Booking

↓

Clock

---

# Hero Layout

Mobile

Логотип

↓

Название

↓

Описание

↓

CTA

↓

Counter

↓

Equalizer

Desktop

Две колонки.

Левая:

контент.

Правая:

TV Animation.

---

# Карточки

Используется Masonry-подобная композиция.

Не все карточки одинаковые.

Допускаются:

Small

↓

Wide

↓

Tall

↓

Feature

Создается ощущение живого приложения.

---

# Glass Panels

Практически все панели используют:

Glass

↓

Blur

↓

Gradient

↓

Noise

↓

Reflection

↓

Glow

↓

Shadow

---

# Ambient Light

Каждый экран имеет собственный источник света.

HOME

Purple

ABOUT

Blue

BAND

Gold

SHOWS

Purple + Gold

MEDIA

Blue

CONTACT

Warm White

Таким образом пользователь чувствует смену атмосферы.

---

# Screen Depth

Интерфейс всегда состоит минимум из пяти уровней.

Background

↓

Ambient

↓

Glass

↓

Content

↓

Floating

Это создает глубину.

---

# Motion Layout

Каждый экран имеет собственную анимацию появления.

Background появляется первым.

↓

Light.

↓

Glass.

↓

Content.

↓

Buttons.

↓

Details.

Никогда наоборот.

---

# Scroll Behavior

Используется:

CSS Scroll Snap

или

плавный Scroll Navigation.

Каждый экран занимает минимум 100vh.

Переход ощущается как смена телевизионного эфира.

---

# Performance

На одном экране одновременно:

не более:

2 больших blur.

3 glow.

1 animated gradient.

1 particle layer.

Это позволяет сохранить стабильные 60 FPS.

---

# Accessibility

Все каналы доступны:

через клавиатуру;

через touch;

через screen reader;

через URL;

через навигацию.

Пользователь никогда не "теряется" внутри приложения.

---

# Future Expansion

Архитектура должна позволять без изменений добавить:

CH07

NEWS

↓

CH08

SHOP

↓

CH09

BACKSTAGE

↓

CH10

PLAYER

↓

CH11

FAN CLUB

↓

CH12

SETTINGS

Без изменения существующей структуры.

---

# Definition of Done

Архитектура считается завершенной, если:

• приложение воспринимается как единое цифровое пространство, а не набор страниц;

• все экраны используют единую композицию;

• пользователь ощущает переключение телевизионных каналов, а не навигацию по сайту;

• каждый канал имеет собственную атмосферу, цветовое освещение и характер;

• интерфейс остается цельным, плавным и узнаваемым на всех устройствах.
