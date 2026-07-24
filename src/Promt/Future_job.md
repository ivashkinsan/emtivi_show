## Шаг 19: Тесты — Unit

### Промт для Gemini CLI

Ты — эксперт по тестированию React-приложений с Vitest и React Testing Library.

Создай базовые unit-тесты для компонентов приложения EMTIVI.

Требования:

Button.test.tsx

Рендерится с текстом

Вызывает onClick при клике

Показывает состояние loading

Отключается при disabled

Применяет классы variant и size

GlassCard.test.tsx

Рендерится с контентом

Применяет glow-эффекты

Работает как ссылка (href)

channelStore.test.ts

Начальное состояние

setChannel обновляет канал

switchChannel обрабатывает переключение

Не переключает при isSwitching

Настройки:

Vitest с Coverage

React Testing Library

userEvent для взаимодействий

Создай файлы:

src/components/atoms/Button/Button.test.tsx

src/components/molecules/GlassCard/GlassCard.test.tsx

src/store/channelStore.test.ts

vitest.config.ts

src/test/setup.ts — настройка тестового окружения

Правила:

Используй describe/it

Очистка после каждого теста

Покрытие > 80%

Дай полный код всех файлов.

text

---

## Шаг 20: CI/CD — GitHub Actions

### Промт для Gemini CLI

Ты — эксперт по CI/CD и GitHub Actions.

Создай конфигурацию CI/CD для приложения EMTIVI.

Требования:

1. CI (Continuous Integration)

Запуск на push в develop/main и PR

Этапы:

Установка зависимостей (npm ci)

Линтинг (npm run lint)

Проверка типов (npm run type-check)

Тесты (npm run test:ci)

Сборка (npm run build)

2. CD (Continuous Deployment)

Запуск на push в main

Деплой на Vercel / Netlify

Использование environment variables

Создай файлы:

.github/workflows/ci.yml — CI pipeline

.github/workflows/deploy.yml — CD pipeline

.github/workflows/pr.yml — PR checks

Дополнительно:

Настройка для Vercel (или выбранного хостинга)

Переменные окружения через secrets

Правила:

Используй actions/checkout@v4

Используй actions/setup-node@v4

Кэширование зависимостей

Дай полный код всех файлов.

text

---

## Заключительный промт: Проверка целостности

Ты — архитектор и технический лид проекта EMTIVI.

Проверь целостность проекта после выполнения всех шагов.

Чек-лист:

□ npm run dev — запускается без ошибок
□ npm run build — собирается без ошибок
□ npm run lint — проходит без ошибок
□ npm run test — проходит все тесты
□ Все каналы доступны через навигацию
□ Все анимации работают (scroll reveal, hover, transition)
□ Адаптивность работает (320px → 1920px)
□ Доступность соблюдена (keyboard navigation, aria)
□ Design Tokens используются во всех компонентах
□ Нет жестко заданных HEX-цветов
Если что-то не работает, напиши:

Какой шаг не выполнен

Какая ошибка возникает

Что нужно исправить

Если всё работает, создай финальный отчёт:

Общее количество компонентов

Покрытие тестами

Размер бандла

Рекомендации по улучшению

text

---

## Версия документа

| Дата       | Версия | Изменения                     |
| ---------- | ------ | ----------------------------- |
| 2024-12-20 | 1.0    | Создание документа            |
| 2024-12-21 | 1.1    | Добавлены заключительные шаги |

---

**Конец документа**
