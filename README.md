# asanbaevabermet-web

Учебный проект — веб-приложение на **Gatsby** и **TypeScript** с авторизацией через **AWS Cognito**.

🌐 **Демо:** [beta.asanbaevabermet.mancho.school](https://beta.asanbaevabermet.mancho.school)

## 🛠 Стек технологий

- [Gatsby](https://www.gatsbyjs.com/) — React-фреймворк для статических сайтов
- [TypeScript](https://www.typescriptlang.org/) — строгая типизация (Interfaces, Types)
- [React.js](https://react.dev/) — UI-библиотека
- [Redux](https://redux.js.org/) — управление состоянием (Store, Action, Reducer)
- [RxJS + Epics](https://rxjs.dev/) — обработка асинхронных запросов
- [AWS Cognito](https://aws.amazon.com/cognito/) — аутентификация и авторизация пользователей
- [Leaflet](https://leafletjs.com/) — интерактивные карты
- [i18next](https://www.i18next.com/) — мультиязычность (🇰🇬 кыргызский, 🇷🇺 русский, 🇬🇧 английский)
- [Atomize UI](https://atomizecode.com/) — библиотека компонентов
- [SCSS](https://sass-lang.com/) — стилизация (Flexbox, Grid)
- [Jest](https://jestjs.io/) — тестирование
- [Prettier](https://prettier.io/) — форматирование кода
- [AWS CodeBuild](https://aws.amazon.com/codebuild/) — CI/CD

## ✨ Функциональность

- 📱 Адаптивная верстка на основе макетов Figma
- 🔐 Система входа и регистрации с модальными окнами
- 🗺️ Интерактивная карта Leaflet на странице авторизации
- 🌍 Поддержка трёх языков через i18next
- ⚡ Строгая типизация и Jest-тесты для стабильности кода

## 🚀 Запуск проекта

### Требования

- Node.js `>= 18`
- npm

### Установка

```bash
git clone https://github.com/beimeis/asanbaevabermet-web.git
cd asanbaevabermet-web
npm install
```

### Переменные окружения

Создай файл `.env.development` в корне проекта:

```env
GATSBY_REGION=us-west-2
GATSBY_SITE_DOMAIN=your_site_domain
GATSBY_COGNITO_USER_POOL_ID=your_user_pool_id
GATSBY_COGNITO_CLIENT_ID=your_client_id
```

> ⚠️ Никогда не коммить реальные ключи в репозиторий.

### Локальный запуск

```bash
npm run develop
```

Приложение будет доступно на `http://localhost:8000`

### Тесты

```bash
npm test
```

### Продакшн-сборка

```bash
npm run build
```

## 📁 Структура проекта

```
asanbaevabermet-web/
├── src/              # Компоненты, страницы, стили
├── tests/            # Unit-тесты
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-browser.js
├── gatsby-ssr.js
└── tsconfig.json
```
