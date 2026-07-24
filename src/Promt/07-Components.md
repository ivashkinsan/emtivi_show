# EMTIVI

# 07-COMPONENTS.md

Version: 1.0

---

# Назначение

Данный документ описывает все UI-компоненты приложения EMTIVI.

Проект строится по принципам Atomic Design.

Любой экран состоит исключительно из компонентов.

Компоненты не знают друг о друге.

Компоненты не содержат бизнес-логики.

Компоненты максимально переиспользуемы.

Любой новый экран собирается только из существующих компонентов.

---

# Архитектура компонентов

Application

↓

Layouts

↓

Sections

↓

Organisms

↓

Molecules

↓

Atoms

---

# Структура компонентов

src/

components/

atoms/

molecules/

organisms/

layouts/

shared/

icons/

---

# Naming

Каждый компонент

PascalCase

Button

Card

GlassPanel

ChannelCard

NavigationBar

HeroScreen

---

CSS Modules

Button.module.css

Card.module.css

Hero.module.css

---

Props Interface

ButtonProps

CardProps

NavigationProps

---

====================================================

ATOMS

====================================================

# Button

Самый важный компонент приложения.

Используется абсолютно везде.

Никогда не использовать обычный HTML button напрямую.

---

Варианты

Primary

Secondary

Ghost

Glass

Danger

Success

Outline

Icon

Floating

Hero

TV

---

Размеры

XS

SM

MD

LG

XL

---

Состояния

Default

Hover

Focus

Pressed

Disabled

Loading

Active

Selected

---

Эффекты

Glow

Scale

Shadow

Ripple

Gradient

---

Поддерживает

Icon Left

Icon Right

Loading Spinner

Badge

Counter

---

====================================================

# IconButton

Кнопка только с иконкой.

Используется

Навигация

Плеер

Соцсети

Кнопка наверх

Меню

---

Размеры

40

48

56

64

---

====================================================

# Badge

Используется

LIVE

NEW

HD

4K

REC

TOP

2025

---

Варианты

Red

Purple

Gold

Blue

Glass

Outline

---

====================================================

# Chip

Используется

Жанры

Теги

Музыкальные стили

Категории

---

====================================================

# Avatar

Используется

Музыканты

Отзывы

Контакты

---

Поддерживает

Фото

Инициалы

Placeholder

---

====================================================

# Divider

Виды

Solid

Gradient

Glow

Animated

---

====================================================

# Loader

Варианты

Circle

Bars

Equalizer

Pulse

Wave

---

====================================================

MOLECULES

====================================================

# GlassCard

Основной компонент приложения.

Практически все карточки наследуются от него.

Имеет

Glass

Border

Glow

Hover

Reflection

Blur

---

Варианты

Small

Medium

Large

Hero

TV

---

====================================================

# MusicianCard

Содержит

Фото

Имя

Инструмент

Описание

Соцсети

Кнопка

Статус

---

Hover

Подсветка

Подъем

Glow

Tilt

---

====================================================

# ServiceCard

Используется

Стандартный состав

Полный состав

---

Содержит

Название

Стоимость

Описание

Список преимуществ

CTA

Фоновое свечение

---

====================================================

# ContactCard

Телефон

Email

Instagram

VK

Telegram

Кнопка связи

---

====================================================

# SocialButton

Instagram

VK

YouTube

Telegram

Spotify

Apple Music

---

====================================================

# StatCard

Используется

Лет на сцене

Количество концертов

Музыкантов

Композиции

---

====================================================

ORGANISMS

====================================================

# Navigation

Существует две версии.

Desktop Navigation

Bottom Navigation

---

Desktop

Logo

Menu

CTA

LIVE

---

Mobile

Bottom Tabs

5 кнопок

Glass

Blur

Floating

---

====================================================

# Hero

Главный экран приложения.

Содержит

TV Background

Particles

Glow

Gradient

Logo

Title

Subtitle

Buttons

Years Counter

Equalizer

Mouse Light

---

====================================================

# About Section

История

Фото

Преимущества

Timeline

---

====================================================

# Band Section

Grid музыкантов

MusicianCard

Фильтрация

Анимация

---

====================================================

# Services Section

Service Cards

Glass

Hover

Background Glow

---

====================================================

# Gallery

Pinterest Grid

Lazy Loading

Lightbox

Hover Zoom

---

====================================================

# Video Section

Видео

Концерты

Превью

Play

---

====================================================

# Contact Section

Glass Form

Contacts

Socials

Map Placeholder

CTA

---

====================================================

TV COMPONENTS

====================================================

# TV Shell

Главный компонент приложения.

Вся система располагается внутри него.

Содержит

Bezel

Reflection

Screen

Ambient Light

Shadow

Noise

---

====================================================

# Channel Indicator

Показывает

CH 01

CH 02

CH 03

---

====================================================

# Live Indicator

Красная точка

LIVE

Анимация

Пульсация

---

====================================================

# Signal Indicator

HD

4K

ONLINE

SIGNAL

---

====================================================

# Time Widget

Текущее время

Автоматическое обновление

---

====================================================

# Years Counter

Автоматически считает

CurrentYear - 2010

Анимируется при загрузке.

---

====================================================

# Equalizer

Живая анимация.

Несколько режимов.

Не зависит от музыки.

---

====================================================

# Ambient Background

Самый сложный компонент.

Содержит

Gradient

Blur

Noise

Light

Glow

Particles

Mouse Follow

---

====================================================

# Noise Layer

CSS Noise

SVG Noise

Opacity

2-4%

---

====================================================

# Cursor Glow

Desktop only.

Следует за мышью.

Использует requestAnimationFrame.

---

====================================================

# Scroll Progress

Полоса сверху.

Показывает просмотр канала.

---

====================================================

# Scroll To Top

Floating Button.

Glass.

Glow.

Scale.

---

====================================================

# Mobile Bottom Navigation

Самый важный компонент мобильной версии.

Всегда закреплен.

Использует

Glass

Blur

Safe Area

Active Indicator

Glow

Иконки

Подписи

---

====================================================

# Modal

Glass

Animation

Backdrop

Blur

Escape

Click Outside

Focus Trap

---

====================================================

# Drawer

Mobile Menu

Bottom Sheet

Filters

Contacts

---

====================================================

# Toast

Success

Warning

Error

Info

---

====================================================

# Tooltip

Glass

Fade

Scale

Arrow

---

====================================================

# Form Components

TextField

PhoneField

Textarea

Checkbox

Radio

Switch

Select

Button

Validation

Helper

Error

---

====================================================

# Shared Rules

Каждый компонент обязан:

использовать CSS Modules;

использовать Design Tokens;

не содержать жестких цветов;

не содержать магических чисел;

быть полностью типизирован TypeScript;

иметь aria-атрибуты;

поддерживать keyboard navigation;

поддерживать prefers-reduced-motion;

быть адаптивным;

не иметь зависимости от конкретной страницы.

---

# Структура папки компонента

Button/

Button.tsx

Button.module.css

Button.types.ts

Button.test.tsx

index.ts

---

# Definition of Done

Компонент считается готовым только если:

✔ полностью типизирован;

✔ использует CSS Modules;

✔ использует только Design Tokens;

✔ не содержит inline styles;

✔ поддерживает все состояния;

✔ адаптивен;

✔ доступен (Accessibility);

✔ переиспользуем;

✔ покрыт тестами;

✔ не зависит от бизнес-логики;

✔ документирован.