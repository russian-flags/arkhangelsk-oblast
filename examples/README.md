# Пример

Демо-приложение показывает SVG и метаданные из установленного npm-пакета `@russian-flags/arkhangelsk-oblast`.

Флаги загружаются через публичный API пакета: `settlements`, `loadFlagModule` и `preloadFlag`. Это повторяет сценарий обычного приложения-потребителя.

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

- импорт списка городов из `@russian-flags/arkhangelsk-oblast`;
- ленивую загрузку SVG из установленного npm-пакета;
- отображение всех 13 городов Архангельской области.
