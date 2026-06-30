# Пример

Демо-приложение показывает SVG и метаданные из локального проекта `@russian-flags/arkhangelsk-oblast`.

SVG берутся напрямую из `../assets/<slug>/index.svg`. Поэтому можно заменить любой файл в `assets`, перезапустить или обновить страницу Vite, и результат сразу появится в таблице.

## Запуск

Из корня проекта:

```bash
npm run example:dev
```

Или из папки `examples`:

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

Пример проверяет:

- импорт списка городов из `../src/settlements.ts`;
- загрузку SVG из `../assets/<slug>/index.svg`;
- отображение всех 13 городов Архангельской области.
