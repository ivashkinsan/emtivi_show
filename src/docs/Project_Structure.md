# Документация по структуре проекта (Обновлено)

Этот документ описывает текущую структуру папок и файлов в директории `src` после рефакторинга.

## Корневая директория `src`

*   `App.css`: Основные стили для компонента `App`.
*   `App.tsx`: Главный компонент приложения, теперь рендерит `HomePage`.
*   `index.css`: Глобальные стили.
*   `index.jsx`: Точка входа в приложение, рендерит `App` в DOM.
*   `components/`: Содержит переиспользуемые компоненты.
*   `docs/`: Содержит документацию проекта.
*   `img/`: Изображения и ресурсы.
*   `pages/`: Содержит компоненты, представляющие целые страницы.

## Детальная структура

```
src/
├── App.css
├── App.tsx
├── index.css
├── index.jsx
├── components/
│   ├── Background/
│   │   ├── Background.module.css
│   │   └── Background.tsx
│   ├── Logo/
│   │   ├── Logo.module.css
│   │   ├── Logo.tsx
│   │   └── LogoLabel.tsx
│   ├── Menu/
│   │   ├── Menu.module.css
│   │   ├── Menu.tsx
│   │   └── svg/
│   │       ├── FOTO.svg
│   │       ├── HOME.svg
│   │       ├── IconsAll.tsx
│   │       ├── INFO.svg
│   │       ├── LIST.svg
│   │       ├── MUSIC.svg
│   │       ├── PERSONE.svg
│   │       ├── PHONE.svg
│   │       ├── SELECTOR.svg
│   │       └── VIDEO.svg
│   ├── SoundWaveAnimation/
│   │   ├── SoundAnimationReserve.tsx
│   │   └── SoundWaveAnimation.tsx
│   └── TV/
│       ├── TV.module.css
│       └── TV.tsx
├── docs/
│   ├── Project_Description.md
│   └── Project_Structure.md
├── img/
│   ├── emtivi_background_1.png
│   └── image 39.png
└── pages/
    └── HomePage/
        ├── HomePage.module.css
        └── HomePage.tsx
```

---
*Этот файл был сгенерирован автоматически на основе обновленной структуры проекта.*