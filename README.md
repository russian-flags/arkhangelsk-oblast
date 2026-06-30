# @russian-flags/arkhangelsk-oblast

[English version](./README.en.md)

Нативная ESM-коллекция SVG-флагов городов Архангельской области. Пакет можно использовать как npm-зависимость в JavaScript/TypeScript-проекте или как набор SVG-файлов с ленивыми загрузчиками.

Список основан на странице Wikipedia ["Городские населённые пункты Архангельской области"](https://ru.wikipedia.org/wiki/Городские_населённые_пункты_Архангельской_области), раздел "Города": 13 городов. Посёлки городского типа не включены.

## Города

| Город | Флаг | slug |
| --- | --- | --- |
| Архангельск | <img src="./assets/arkhangelsk/index.svg" width="120" alt="Флаг Архангельска"> | `arkhangelsk` |
| Северодвинск | <img src="./assets/severodvinsk/index.svg" width="120" alt="Флаг Северодвинска"> | `severodvinsk` |
| Котлас | <img src="./assets/kotlas/index.svg" width="120" alt="Флаг Котласа"> | `kotlas` |
| Новодвинск | <img src="./assets/novodvinsk/index.svg" width="120" alt="Флаг Новодвинска"> | `novodvinsk` |
| Коряжма | <img src="./assets/koryazhma/index.svg" width="120" alt="Флаг Коряжмы"> | `koryazhma` |
| Мирный | <img src="./assets/mirnyy/index.svg" width="120" alt="Флаг Мирного"> | `mirnyy` |
| Вельск | <img src="./assets/velsk/index.svg" width="120" alt="Флаг Вельска"> | `velsk` |
| Няндома | <img src="./assets/nyandoma/index.svg" width="120" alt="Флаг Няндомы"> | `nyandoma` |
| Онега | <img src="./assets/onega/index.svg" width="120" alt="Флаг Онеги"> | `onega` |
| Каргополь | <img src="./assets/kargopol/index.svg" width="120" alt="Флаг Каргополя"> | `kargopol` |
| Шенкурск | <img src="./assets/shenkursk/index.svg" width="120" alt="Флаг Шенкурска"> | `shenkursk` |
| Мезень | <img src="./assets/mezen/index.svg" width="120" alt="Флаг Мезени"> | `mezen` |
| Сольвычегодск | <img src="./assets/solvychegodsk/index.svg" width="120" alt="Флаг Сольвычегодска"> | `solvychegodsk` |

## Возможности

- 13 локальных SVG-флагов в структуре `assets/<slug>/index.svg`.
- ESM-сборка с TypeScript-типами.
- Ленивые загрузчики для каждого флага.
- Поиск города по slug, коду, русскому/английскому названию или alias.
- Прямой импорт SVG через `flags/<slug>` или `svg/<slug>`.

## Установка

```bash
npm install @russian-flags/arkhangelsk-oblast
```

Для локальной проверки из папки проекта:

```bash
npm install .
```

## Быстрый старт

```js
import { loadFlag, settlements } from "@russian-flags/arkhangelsk-oblast";

console.log(settlements.length); // 13

const image = await loadFlag("arkhangelsk", {
  alt: "Флаг Архангельска",
  className: "flag",
});

document.body.append(image);
```

## Подключение SVG напрямую

```js
import arkhangelskFlag from "@russian-flags/arkhangelsk-oblast/flags/arkhangelsk";
import arkhangelskSvg from "@russian-flags/arkhangelsk-oblast/svg/arkhangelsk";

console.log(arkhangelskFlag);
console.log(arkhangelskSvg);
```

Вариант с расширением тоже поддерживается:

```js
import arkhangelskFlag from "@russian-flags/arkhangelsk-oblast/flags/arkhangelsk.svg";
import arkhangelskSvg from "@russian-flags/arkhangelsk-oblast/svg/arkhangelsk.svg";
```

## Поиск города

```js
import {
  resolveSettlementSlug,
  settlementSlugs,
  settlements,
} from "@russian-flags/arkhangelsk-oblast";

console.log(settlementSlugs.includes("arkhangelsk")); // true
console.log(resolveSettlementSlug("Архангельск")); // "arkhangelsk"
console.log(resolveSettlementSlug("Archangelsk")); // "arkhangelsk"
console.log(resolveSettlementSlug("unknown")); // undefined
```

Ввод нормализуется: пробелы по краям удаляются, регистр не важен, `ё` считается как `е`, пробелы и `_` заменяются на `-`.

## API

| Экспорт | Описание |
| --- | --- |
| `settlements` | Массив метаданных `{ slug, code, nameRu, nameEn, aliases }`. |
| `settlementSlugs` | Массив всех доступных slug. |
| `normalizeSettlementInput(input)` | Нормализует пользовательский ввод перед поиском. |
| `resolveSettlementSlug(input)` | Возвращает slug по slug, коду, названию или alias. |
| `getFlagModuleLoader(input)` | Возвращает ленивый загрузчик модуля флага или `undefined`. |
| `loadFlagModule(input)` | Лениво импортирует модуль флага. |
| `loadFlagImage(input, options)` | Загружает флаг и возвращает `HTMLImageElement`. |
| `loadFlag(input, options)` | Алиас для `loadFlagImage`. |
| `preloadFlag(input)` | Запускает загрузку модуля без ожидания результата. |
| `createFlagImage(src, defaultAlt, options)` | Создаёт и настраивает `<img>` для SVG-флага. |

## Разработка

```bash
npm install
npm test
npm run pack:dry
```
