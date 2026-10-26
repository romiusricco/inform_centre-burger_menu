# Внесённые изменения

Доработка проекта информационного центра и меню относительно исходной версии.

## Точка отсчёта

- Исходник: ветка `base/original`, тег `original-source`, первый коммит `45d873fbd8ae12653e8023272ea98a8977e0971a`.
- Доработка: ветка `main`.

## Сводка по файлам

| Файл | Статус | Что произошло |
|---|---|---|
| `.vscode/settings.json` | A | Добавлен файл настроек VS Code (3 строки). |
| `LICENSE` | A | Добавлена лицензия (21 строка). |
| `blocks/burger-menu.css` | A | Добавлены стили блока меню (484 строки). |
| `blocks/burger-menu.css.map` | A | Добавлена карта стилей блока меню (1 строка). |
| `css/style.css` | D | Удалён прежний файл стилей (555 строк). |
| `css/style.css.map` | D | Удалена карта прежних стилей (1 строка). |
| `images/news/img-1-{grid,list}[-{mobile,tablet}][2x].jpg` → `images/news/chistiy_prydy_facade-{grid,list}[-{mobile,tablet}][@2x].jpg` | R100 × 12 | Переименованы 12 вариантов изображений новостей `img-1` в набор `chistiy_prydy_facade` — grid/list, desktop/mobile/tablet, обычный и 2x. |
| `images/news/img-2-{grid,list}[-{mobile,tablet}][2x].jpg` → `images/news/chistiy_prydy_view-{grid,list}[-{mobile,tablet}][@2x].jpg` | R100 × 12 | Переименованы 12 вариантов изображений новостей `img-2` в набор `chistiy_prydy_view` — grid/list, desktop/mobile/tablet, обычный и 2x. |
| `images/news/img-5-{grid,list}[-{mobile,tablet}][2x].jpg` → `images/news/iliinka-barelief-{grid,list}[-{mobile,tablet}][@2x].jpg` | R100 × 12 | Переименованы 12 вариантов изображений новостей `img-5` в набор `iliinka-barelief` — grid/list, desktop/mobile/tablet, обычный и 2x. |
| `images/news/img-4-{grid,list}[-{mobile,tablet}][2x].jpg` → `images/news/iliinka-yard-garden-{grid,list}[-{mobile,tablet}][@2x].jpg` | R100 × 12 | Переименованы 12 вариантов изображений новостей `img-4` в набор `iliinka-yard-garden` — grid/list, desktop/mobile/tablet, обычный и 2x. |
| `images/news/img-3-{grid,list}[-{mobile,tablet}][2x].jpg` → `images/news/ostzhenka-{grid,list}[-{mobile,tablet}][@2x].jpg` | R100 × 12 | Переименованы 12 вариантов изображений новостей `img-3` в набор `ostzhenka` — grid/list, desktop/mobile/tablet, обычный и 2x. |
| `images/news/img-6-{grid,list}[-{mobile,tablet}][2x].jpg` → `images/news/top_5-buildings-{grid,list}[-{mobile,tablet}][@2x].jpg` | R100 × 12 | Переименованы 12 вариантов изображений новостей `img-6` в набор `top_5-buildings` — grid/list, desktop/mobile/tablet, обычный и 2x. |
| `info-center.html` | M | Обновлена разметка страницы (623 строки добавлено). |
| `scripts/burger-menu.js` | A | Добавлен скрипт меню (47 строк). |
| `scripts/switcher.js` | A | Добавлен скрипт переключателя (43 строки). |
| `scss/blocks/_burger-menu.scss` | A | Добавлены исходные SCSS-стили меню (531 строка). |
| `scss/blocks/_header-wrapper.scss` | A | Добавлены исходные SCSS-стили обёртки шапки (14 строк). |
| `scss/blocks/_news-controls.scss` | A | Добавлены исходные SCSS-стили элементов управления новостями (240 строк). |
| `scss/blocks/_news.scss` | A | Добавлены исходные SCSS-стили новостного блока (588 строк). |
| `scss/blocks/_header.scss` | M | Изменены стили шапки (57 строк в diff). |
| `scss/global/_container.scss` | M | Изменены глобальные стили контейнера (13 строк в diff). |
| `scss/global/_mixins.scss` | M | Изменены глобальные SCSS-миксины (2 строки в diff). |
| `scss/global/_normalize.scss` | M | Изменён файл нормализации (4 строки в diff). |
| `scss/global/_reboot.scss` | M | Изменены базовые стили (13 строк в diff). |
| `scss/global/_variables.scss` | M | Изменены SCSS-переменные (4 строки в diff). |
| `scss/style.scss` | M | Изменён главный SCSS-файл (21 строка в diff). |
| `style.css` | A | Добавлен CSS-файл в корне проекта (1859 строк). |
| `style.css.map` | A | Добавлена карта корневого CSS-файла (1 строка). |

## Что доработано

- **SCSS-структура:** коммит `33fa028` переводит подключения с `@import` на `@use`; добавлены SCSS-файлы блоков шапки-обёртки, новостей, управления новостями и бургер-меню.
- **Шапка и навигация:** добавлены и настроены блоки `header-wrapper` и `burger-menu`; в истории коммитов отдельно отмечены доработки меню для ширин 1725, 1023 и 375 пикселей.
- **Новости:** добавлены разметка и стили новостного блока и элементов управления; коммит `5c3115e` отмечает переход к grid-виду.
- **Интерактивность:** добавлены `scripts/burger-menu.js` и `scripts/switcher.js`.
- **Адаптивная вёрстка и подгонка:** коммиты содержат этапы rubber-адаптации, pixel-perfect-настройки, отказа от `aspect-ratio` и настройки для ширин 1728, 768 и 375 пикселей.
- **Изображения новостей:** файлы с нумерованными именами переименованы в имена, соответствующие наборам `chistiy_prydy_facade`, `chistiy_prydy_view`, `iliinka-barelief`, `iliinka-yard-garden`, `ostzhenka` и `top_5-buildings`; варианты grid/list и размеры сохранены.
- **Выходные CSS-файлы:** прежние `css/style.css` и карта удалены; добавлены `style.css`, `style.css.map`, а также CSS и карта блока бургер-меню в `blocks/`.
- **Лицензия:** добавлен файл `LICENSE`.

## Как проверить дельту

[Сравнить `base/original` и `main`](https://github.com/romiusricco/inform_centre-burger_menu/compare/base/original...main).

## TODO / требует уточнения

- В предоставленных сведениях нет содержимого самого `diff`, поэтому детали изменений разметки и поведения компонентов, помимо названий коммитов и файлов, не уточняются.