# Real Estate

Адаптивный лендинг агентства недвижимости, разработанный на React по макету из Figma.

## Демо

[Открыть демо](https://tkornilova.github.io/real-estate/)

## Стек

- React
- React Router
- JavaScript (ES6+)
- SCSS
- Vite
- Swiper
- Yandex Maps API
- ESLint
- Prettier

## Реализовано

- адаптивная вёрстка для desktop и tablet;
- навигация по секциям страницы;
- форма выбора города и ввода e-mail;
- интерактивный слайдер объектов недвижимости;
- рейтинги объектов;
- интерактивная карта с помощью Yandex Maps API;
- раскрытие полного текста отзывов;
- отдельная страница 404;
- SVG-спрайт для иконок;
- состояния `hover` и `focus-visible`;
- базовая accessibility-разметка;
- ESLint и Prettier для проверки кода.

## Структура проекта

```text
src/
├── assets/
│   ├── fonts/
│   ├── icons/
│   └── images/
├── components/
│   ├── base/
│   │   ├── Header/
│   │   └── Footer/
│   ├── blocks/
│   │   ├── Card/
│   │   ├── Form/
│   │   ├── Map/
│   │   ├── Review/
│   │   ├── Reviews/
│   │   └── Slider/
│   └── sections/
│       ├── Cards/
│       ├── Feedback/
│       ├── FindUs/
│       ├── Intro/
│       └── Offers/
├── pages/
│   ├── Home/
│   └── NotFound/
├── styles/
│   ├── fonts.scss
│   ├── global.scss
│   ├── normalize.scss
│   └── variables.scss
├── App.jsx
└── main.jsx
```
