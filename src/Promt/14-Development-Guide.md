# EMTIVI

# 14-DEVELOPMENT-GUIDE.md

Version: 1.0

---

## Назначение

Данный документ является центральным руководством для разработчиков, работающих над проектом EMTIVI.

Он описывает:

• процесс разработки;

• Git-стратегию;

• настройку окружения;

• код-стайл;

• процесс ревью;

• CI/CD;

• деплой;

• документацию;

• управление задачами.

Документ предназначен для всех участников команды: разработчиков, дизайнеров, тестировщиков и менеджеров.

---

## Философия разработки

EMTIVI — это не просто веб-сайт. Это цифровой продукт премиум-класса.

Разработка должна отражать это качество:

• **Качество кода** — превыше скорости.

• **Дизайн-система** — единственный источник истины.

• **Документация** — обязательна для всего.

• **Тестирование** — неотъемлемая часть разработки.

• **Доступность** — встроена в процесс.

---

## Роли в команде

| Роль                   | Ответственность                                             |
| ---------------------- | ----------------------------------------------------------- |
| **Product Owner**      | Владелец продукта, приоритизация задач, работа с заказчиком |
| **Tech Lead**          | Архитектура, код-ревью, технические решения, стандарты      |
| **Frontend Developer** | Разработка UI-компонентов, интеграция с API, анимации       |
| **UI/UX Designer**     | Дизайн-система, прототипы, пользовательские сценарии        |
| **QA Engineer**        | Тестирование, автоматизация, регрессионные тесты            |
| **DevOps Engineer**    | CI/CD, инфраструктура, мониторинг, деплой                   |

---

## Настройка окружения

### Системные требования

````text
Node.js: 18.x или выше
npm: 9.x или выше
Git: 2.x или выше
VS Code: последняя версия (рекомендуется)
Установка проекта
bash
# Клонирование репозитория
git clone https://github.com/emtivi/emtivi-app.git
cd emtivi-app

# Установка зависимостей
npm install

# Создание файла окружения
cp .env.example .env.local

# Запуск в режиме разработки
npm run dev
Переменные окружения
env
# .env.local
VITE_API_URL=https://api.emtivi.ru
VITE_APP_ENV=development
VITE_APP_VERSION=1.0.0
VITE_SENTRY_DSN=your_sentry_dsn
VITE_GA_ID=your_ga_id
Рекомендуемые расширения VS Code
json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "dsznajder.es7-react-js-snippets",
    "clinyong.vscode-css-modules",
    "naumovs.color-highlight",
    "mikestead.dotenv",
    "oderwat.indent-rainbow"
  ]
}
Git-стратегия
Ветки
text
main           # production
├── develop    # development (основная ветка)
│   ├── feature/*  # новые функции
│   ├── fix/*      # исправления
│   ├── refactor/* # рефакторинг
│   └── docs/*     # документация
└── release/*   # релизные ветки
Именование веток
text
feature/12-add-musician-cards
fix/45-fix-navigation-bug
refactor/78-update-glass-styles
docs/99-update-readme
release/1.2.0
hotfix/100-critical-fix
Commit-сообщения
Используется Conventional Commits:

text
<type>(<scope>): <subject>

<body>

<footer>
Типы:

Тип	Назначение
feat	Новая функциональность
fix	Исправление ошибки
docs	Изменения в документации
style	Изменения стиля кода (форматирование)
refactor	Рефакторинг кода
perf	Оптимизация производительности
test	Добавление/изменение тестов
chore	Обновление зависимостей, конфигурации
revert	Откат изменений
Примеры:

bash
feat(channel): add smooth channel transition animation

- Implement fade and glow effects
- Add 400ms transition duration
- Support prefers-reduced-motion

Closes #42
bash
fix(navigation): correct bottom nav active state on mobile

- Fix active indicator position
- Add touch feedback
- Update z-index for safe area

Fixes #67
Правила работы с Git
Никогда не пушить в main напрямую.

Все изменения через Pull Request.

PR должен проходить проверку CI и код-ревью.

Одно изменение — один PR.

Название PR должно быть описательным.

PR должен содержать описание изменений и скриншоты (если UI).

Минимум 2 апрува для мержа.

Squash-мерж для чистоты истории.

Код-стайл
ESLint
js
// .eslintrc.cjs
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'jsx-a11y'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
Prettier
json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "always",
  "endOfLine": "lf"
}
TypeScript
json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
Именование
tsx
// Компоненты - PascalCase
export const MusicianCard: React.FC = () => { ... }

// Файлы компонентов - PascalCase
MusicianCard.tsx
MusicianCard.module.css

// Хуки - camelCase с префиксом use
const useScrollReveal = () => { ... }

// Константы - SCREAMING_SNAKE_CASE
export const CHANNELS = [...];

// Функции - camelCase
const formatPhoneNumber = () => { ... }

// CSS классы - camelCase (CSS Modules)
.buttonPrimary
.navContainer
.glassEffect

// Типы/Интерфейсы - PascalCase
interface ButtonProps { ... }
type ChannelId = 'CH01' | 'CH02';
Структура документации компонента
Каждый компонент должен иметь JSDoc документацию:

tsx
/**
 * MusicianCard - карточка участника группы
 *
 * @component
 * @example
 * ```tsx
 * <MusicianCard
 *   name="Дарья Темникова"
 *   instrument="Вокал"
 *   description="Яркая солистка с красивым тембром"
 *   photo="/images/daria.jpg"
 *   socials={{ instagram: 'https://instagram.com/daria' }}
 * />
 * ```
 *
 * @props {string} name - Имя музыканта
 * @props {string} instrument - Инструмент или роль
 * @props {string} description - Краткое описание
 * @props {string} [photo] - URL фотографии
 * @props {Object} [socials] - Социальные сети
 * @props {string} [socials.instagram] - URL Instagram
 * @props {string} [socials.vk] - URL VK
 */
export const MusicianCard: React.FC<MusicianCardProps> = ({ ... }) => { ... }
Процесс разработки
1. Планирование





2. Разработка







3. Код-ревью
Чек-лист ревью:

□ Код соответствует код-стайлу
□ Используются Design Tokens
□ Компоненты типизированы
□ Есть тесты
□ Accessibility соблюдена
□ Адаптивность работает
□ Производительность не ухудшена
□ Документация обновлена
□ Нет console.log (кроме warn/error)
□ Нет тудушек без задачи
CI/CD
GitHub Actions
yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [develop, main]
  pull_request:
    branches: [develop, main]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check

  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npm run test:ci

  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - run: npm run preview
Деплой
yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
Управление задачами
Спринт
text
Длительность: 2 недели
Планирование: Понедельник утром
Ретроспектива: Пятница вечером
Ежедневные стендапы: 10:00 (15 минут)
Система оценки (Story Points)
text
1 SP  - Микро-задача (изменение одной строки)
2 SP  - Простая задача (1 компонент, 1 час)
3 SP  - Средняя задача (несколько компонентов)
5 SP  - Сложная задача (новая секция)
8 SP  - Очень сложная (архитектурное изменение)
13 SP - Эпик (требует декомпозиции)
Доска задач (Jira/Trello)
text
📋 Backlog           → Неотсортированные задачи
🔄 Ready             → Готово к разработке
⚡ In Progress       → В работе
👀 Review            → На код-ревью
✅ Done              → Выполнено
Тестирование
Стратегия тестирования
text
┌─────────────────────────────────────┐
│          E2E Tests (Cypress)        │  ← Полные пользовательские сценарии
├─────────────────────────────────────┤
│     Integration Tests (Vitest)      │  ← Взаимодействие компонентов
├─────────────────────────────────────┤
│      Unit Tests (Vitest + RTL)      │  ← Отдельные компоненты и утилиты
└─────────────────────────────────────┘
Запуск тестов
bash
# Unit тесты
npm run test

# Unit тесты с покрытием
npm run test:coverage

# E2E тесты (интерактивный режим)
npm run test:e2e

# E2E тесты (headless)
npm run test:e2e:ci
Порог покрытия
json
{
  "coverage": {
    "lines": 80,
    "statements": 80,
    "functions": 80,
    "branches": 70
  }
}
Доступность (Accessibility)
WCAG 2.1 AA
Обязательные практики:

□ Все интерактивные элементы доступны с клавиатуры
□ Правильные ARIA-атрибуты
□ Достаточный цветовой контраст (4.5:1)
□ Альтернативный текст для изображений
□ Заголовки в правильной иерархии
□ Формы с правильными лейблами
□ Фокус видим и управляем
□ Поддержка prefers-reduced-motion
Проверка доступности
bash
# Автоматическая проверка
npm run test:a11y

# Ручная проверка
# Использовать axe DevTools в браузере
# Использовать Screen Reader (VoiceOver, NVDA)
Производительность
Метрики
text
First Contentful Paint (FCP): < 1.8s
Largest Contentful Paint (LCP): < 2.5s
Time to Interactive (TTI): < 3.0s
Total Blocking Time (TBT): < 300ms
Cumulative Layout Shift (CLS): < 0.1
First Input Delay (FID): < 100ms
Оптимизация
□ Lazy loading для изображений и каналов
□ Code splitting по каналам
□ Tree shaking
□ Минификация и сжатие
□ Кэширование через CDN
□ Оптимизация шрифтов
□ Preload критических ресурсов
Инструменты
bash
# Анализ бандла
npm run analyze

# Lighthouse
npm run lighthouse

# Web Vitals
# Использовать npm:web-vitals в приложении
Мониторинг и аналитика
Sentry
ts
// src/lib/sentry.ts
import * as Sentry from '@sentry/react';

export const initSentry = () => {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: import.meta.env.VITE_APP_ENV,
    release: import.meta.env.VITE_APP_VERSION,
    tracesSampleRate: 1.0,
    integrations: [
      new Sentry.BrowserTracing({
        tracePropagationTargets: ['localhost', /^https:\/\/emtivi\.ru/],
      }),
    ],
  });
};
Google Analytics
ts
// src/lib/analytics.ts
export const initAnalytics = () => {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', import.meta.env.VITE_GA_ID);
};
Документация
Структура документации
text
docs/
├── 01-Product-vision.md      # Видение продукта
├── 02-Design-system.md       # Дизайн-система
├── 03-Colors.md              # Цветовая система
├── 04-Typography.md          # Типографика
├── 05-Spacing.md             # Пространство
├── 06-Breakpoints.md         # Адаптивность
├── 07-Components.md          # Компоненты
├── 08-Layout.md              # Компоновка
├── 09-Component-specs.md     # Спецификации
├── 10-Motion.md              # Анимации
├── 11-TV-System.md           # TV-система
├── 12-React-architecture.md  # Архитектура React
├── 13-Development-workflow.md # Рабочий процесс (этот файл)
└── 14-API-reference.md       # Справочник API
Комментарии в коде
tsx
/**
 * Компонент для отображения карточки музыканта
 *
 * @component
 * @example
 * <MusicianCard name="Дарья" instrument="Вокал" />
 */
CHANGELOG
markdown
# Changelog

## [1.2.0] - 2024-12-20

### Added
- Добавлен канал MEDIA с галереей
- Анимация переключения каналов

### Changed
- Улучшена производительность TV Shell
- Обновлены Design Tokens

### Fixed
- Исправлен баг с навигацией на мобильных
- Исправлена адаптивность карточек

### Removed
- Удален устаревший код

## [1.1.0] - 2024-12-10

### Added
- Добавлен канал BAND
- Добавлен канал SHOWS
- Добавлен Bottom Navigation
Безопасность
Обязательные практики
□ Санитизация пользовательского ввода
□ XSS-защита (React делает это автоматически)
□ HTTPS-only
□ Secure и HttpOnly cookies
□ CSP (Content Security Policy)
□ Безопасная работа с API (не хранить токены в localStorage)
□ Проверка зависимостей на уязвимости
Проверка безопасности
bash
# Проверка уязвимостей
npm audit

# Обновление уязвимых пакетов
npm audit fix

# Snyk анализ
snyk test
Сборка и деплой
Среда
text
development → локальная разработка
staging    → тестовый сервер
production → боевой сервер
Скрипты
json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "build:staging": "tsc && vite build --mode staging",
    "build:prod": "tsc && vite build --mode production",
    "preview": "vite preview",
    "test": "vitest",
    "test:coverage": "vitest --coverage",
    "test:e2e": "cypress open",
    "test:e2e:ci": "cypress run",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint src --ext ts,tsx --fix",
    "format": "prettier --write src",
    "type-check": "tsc --noEmit",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  }
}
Команды и запуск
Разработка
bash
# Клонирование
git clone https://github.com/emtivi/emtivi-app.git

# Установка
npm install

# Запуск
npm run dev

# Открыть в браузере
open http://localhost:5173
Тестирование
bash
# Unit тесты
npm run test

# E2E тесты
npm run test:e2e

# Проверка типов
npm run type-check

# Линтинг
npm run lint
Сборка
bash
# Сборка для разработки
npm run build

# Сборка для продакшена
npm run build:prod

# Предпросмотр сборки
npm run preview
Часто задаваемые вопросы
Как добавить новый канал?
Создать папку channels/CH07-NewChannel/

Создать index.tsx и NewChannel.module.css

Добавить в CHANNELS в lib/constants/channels.ts

Добавить lazy import в app/App.tsx

Добавить цвет Ambient в components/tv/TVShell/AmbientBackground.tsx

Обновить навигацию

Как создать новый компонент?
Создать папку в components/atoms/ или components/molecules/

Создать Component.tsx и Component.module.css

Использовать Design Tokens (не HEX!)

Добавить TypeScript типы

Написать тесты

Документировать

Как обновить Design Tokens?
Обновить styles/tokens.css

Обновить соответствующий файл документации

Проверить, что все компоненты обновились

Создать PR с изменениями

Что делать при конфликтах?
Не пушить в main напрямую

Решить конфликты локально

Создать PR с решением

Получить апрув

Сделать мерж
````
