# Пример погодного приложения на Svelte с использованием OpenWeather API
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
![Deploy to Now](https://badgen.net/badge/Deploy%20to%20Now/success/green)
[![Maintainability](https://api.codeclimate.com/v1/badges/b100ee939b868e42c27a/maintainability)](https://codeclimate.com/github/mikhail-shpakov/weather-app-on-svelte/maintainability)
[![DeepScan grade](https://deepscan.io/api/teams/8555/projects/10843/branches/155136/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=8555&pid=10843&bid=155136)

:ru: by Mikhail Shpakov

Пример простого [SPA](https://ru.wikipedia.org/wiki/%D0%9E%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5)
и [PWA](https://web.dev/progressive-web-apps/) погодного приложения на [Svelte](https://svelte.dev/)
с использованием [OpenWeather API](https://openweathermap.org/api).

:tada: [Демо](https://weather-app-on-svelte.now.sh/)

:tv: [Дизайн (figma)](https://www.figma.com/file/7URoiBEupUXFln3G39hSaI/Weather-app-on-Svelte?node-id=0%3A1)

:hammer: [Используемые технологии и инструменты](#tools)

:wrench: [Локальный запуск проекта](#dev)

:rocket: [Деплой на Zeit (Now)](#deploy)


## <a name="tools"></a>Используемые технологии и инструменты

- [Svelte](https://svelte.dev/)
- [Stylus](https://stylus-lang.com/) + [Less](http://lesscss.org/)
- [Rollup](https://rollupjs.org/)
- [Eslint](https://eslint.org/) + [Prettier](https://prettier.io/)
- [Babel](https://babeljs.io/) +
[Postcss](https://postcss.org/) ([autoprefixer](https://github.com/postcss/autoprefixer)) +
[es6-shim](https://github.com/paulmillr/es6-shim)
- [Zeit (Now)](https://zeit.co/)
- Иконки [weather-icons](https://github.com/erikflowers/weather-icons)
- Графика [DrawKit](https://www.drawkit.io/)

## <a name="dev"></a>Локальный запуск проекта

1. **Загрузка проекта на локальную машину**

    ```
    git clone https://github.com/mikhail-shpakov/weather-app-on-svelte.git
    ```

2. **Установка зависимостей**

    ```
    npm ci
    ```

    Использование `npm ci` вместо `npm i` позволит гарантировать корректные версии устанавливаемых `npm` пакетов,
    так как они будут взяты из `package-lock.json`.  

3. **Запуск сервера для разработки**

    В качестве сервера для разработки используется
    [Rollup](https://rollupjs.org/) с плагином
    [rollup-plugin-livereload](https://github.com/thgh/rollup-plugin-livereload).

    Для его запуска выполните из корневой директории проекта:

    ```
    npm run dev
   ```

    После этого приложение будет доступно по адресу `localhost:5000`.

    Для корректной работы сервера, перед его запуском
    требуется добавить переменную окружению `OPEN_WEATHER_API_KEY`,
    значением которого будет токен API c
    [OpenWeatherMap](https://openweathermap.org/).

    Инструкцию по получению токена [OpenWeatherMap](https://openweathermap.org)
    можно найти на [их сайте](https://openweathermap.org/guide).

    Во время разработки изменения в файлах будут отслеживаться автоматически,
    при этом будет вызываться линтер и сервер будет перезапускаться.

    Также доступны следующие команды:

    ```
    npm run build // сборка приложения Svelte для развёртывания на production
    npm run format // запуск prettier с автоматическим исправлением файлов
    ```


## <a name="deploy">Деплой на Zeit (Now)

Для публикации приложения на [Zeit (Now)](https://zeit.co/) требуется:

1. Установить `cli` клиент `now`:

    ```bash
    npm install -g now
    ```

2. Затем, из папки `public` выполнить команду для деплоя:

    ```bash
    cd public
    now deploy --name my-project
    ```

3. Для корректной работы приложения требуется добавить переменную окружения
`OPEN_WEATHER_API_KEY`, значением которого будет токен API c
[OpenWeatherMap](https://openweathermap.org/).

    Подробнее о процессе добавления переменных окружения можно прочитать
    в [официальном руководстве](https://zeit.co/docs/v2/build-step).
