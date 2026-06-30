# @russian-flags/arkhangelsk-oblast

[English version](./README.en.md)

Нативная ESM-коллекция SVG-флагов городов Архангельской области. Пакет можно использовать как npm-зависимость в JavaScript/TypeScript-проекте или как подключаемый набор готовых SVG-файлов и ленивых загрузчиков.

Список основан на странице Wikipedia ["Городские населённые пункты Архангельской области"](https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B8%D0%B5_%D0%BD%D0%B0%D1%81%D0%B5%D0%BB%D1%91%D0%BD%D0%BD%D1%8B%D0%B5_%D0%BF%D1%83%D0%BD%D0%BA%D1%82%D1%8B_%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B9_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8), раздел "Города": 13 городов. Посёлки городского типа не включены.

## Превью

| Город | Флаг | slug |
| --- | --- | --- |
| Архангельск | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/arkhangelsk/index.svg" width="120" alt="Флаг Архангельска"> | `arkhangelsk` |
| Северодвинск | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/severodvinsk/index.svg" width="120" alt="Флаг Северодвинска"> | `severodvinsk` |
| Котлас | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/kotlas/index.svg" width="120" alt="Флаг Котласа"> | `kotlas` |
| Новодвинск | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/novodvinsk/index.svg" width="120" alt="Флаг Новодвинска"> | `novodvinsk` |
| Коряжма | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/koryazhma/index.svg" width="120" alt="Флаг Коряжмы"> | `koryazhma` |
| Мирный | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/mirnyy/index.svg" width="120" alt="Флаг Мирного"> | `mirnyy` |
| Вельск | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/velsk/index.svg" width="120" alt="Флаг Вельска"> | `velsk` |
| Няндома | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/nyandoma/index.svg" width="120" alt="Флаг Няндомы"> | `nyandoma` |
| Онега | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/onega/index.svg" width="120" alt="Флаг Онеги"> | `onega` |
| Каргополь | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/kargopol/index.svg" width="120" alt="Флаг Каргополя"> | `kargopol` |
| Шенкурск | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/shenkursk/index.svg" width="120" alt="Флаг Шенкурска"> | `shenkursk` |
| Мезень | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/mezen/index.svg" width="120" alt="Флаг Мезени"> | `mezen` |
| Сольвычегодск | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/solvychegodsk/index.svg" width="120" alt="Флаг Сольвычегодска"> | `solvychegodsk` |

## Возможности

- 13 локальных SVG-флагов в составе пакета.
- ESM-сборка с TypeScript-типами.
- Ленивые загрузчики для каждого флага.
- Поиск флага по slug, коду, русскому/английскому названию или alias.
- Прямой импорт SVG-файлов через `flags/<slug>` или `svg/<slug>`.
- Подходит для обычного JavaScript, TypeScript и современных сборщиков.

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

console.log(settlements[0]);
// {
//   slug: "arkhangelsk",
//   code: "ARKHANGELSK",
//   nameRu: "Архангельск",
//   nameEn: "Arkhangelsk",
//   aliases: ["Archangelsk", "Arkhangel'sk"],
// }

const image = await loadFlag("arkhangelsk", {
  alt: "Флаг Архангельска",
  className: "flag",
});

document.body.append(image);
```

`loadFlag` - алиас для `loadFlagImage`. Функция лениво импортирует модуль нужного флага, создает `<img>` и по умолчанию ставит `loading="lazy"` и `decoding="async"`.

## Подключение SVG напрямую

Если нужен только файл флага, можно импортировать SVG напрямую:

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

`flags/<slug>` и `svg/<slug>` указывают на один и тот же файл внутри пакета:

```text
dist/flags/<slug>.svg
```

После публикации пакет также можно использовать как источник SVG через npm CDN:

```html
<img src="https://unpkg.com/@russian-flags/arkhangelsk-oblast/dist/flags/arkhangelsk.svg" alt="Флаг Архангельска"/>
```

## Поиск города

В большинство функций можно передавать:

- slug: `"arkhangelsk"`;
- код: `"ARKHANGELSK"`;
- русское название: `"Архангельск"`;
- английское название: `"Arkhangelsk"`;
- alias: `"Archangelsk"`.

```js
import {
  resolveSettlementSlug,
  settlementSlugs,
  settlements,
} from "@russian-flags/arkhangelsk-oblast";

console.log(settlements.length); // 13
console.log(settlementSlugs.includes("arkhangelsk")); // true

console.log(resolveSettlementSlug("ARKHANGELSK")); // "arkhangelsk"
console.log(resolveSettlementSlug("Архангельск")); // "arkhangelsk"
console.log(resolveSettlementSlug("Arkhangelsk")); // "arkhangelsk"
console.log(resolveSettlementSlug("Archangelsk")); // "arkhangelsk"
console.log(resolveSettlementSlug("unknown")); // undefined
```

Ввод нормализуется: пробелы по краям удаляются, регистр не важен, `ё` считается как `е`, пробелы и `_` заменяются на `-`.

## Ленивое отображение списка

```js
import { loadFlag, settlements } from "@russian-flags/arkhangelsk-oblast";

for (const settlement of settlements) {
  const row = document.createElement("tr");
  row.dataset.slug = settlement.slug;
  row.textContent = settlement.nameRu;
  document.querySelector("tbody").append(row);
}

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;

    observer.unobserve(entry.target);

    loadFlag(entry.target.dataset.slug).then((image) => {
      entry.target.append(image);
    });
  }
});

document
  .querySelectorAll("tr[data-slug]")
  .forEach((row) => observer.observe(row));
```

## Preload

`preloadFlag` запускает загрузку модуля флага без ожидания результата. Это удобно на `hover`, `focus` или перед появлением строки во viewport.

```js
import { preloadFlag } from "@russian-flags/arkhangelsk-oblast";

button.addEventListener("pointerenter", () => {
  preloadFlag("arkhangelsk");
});
```

Неизвестные значения игнорируются и не выбрасывают ошибку.

## API

| Экспорт | Описание |
| --- | --- |
| `settlements` | Массив метаданных `{ slug, code, nameRu, nameEn, aliases }`. |
| `settlementSlugs` | Массив всех доступных slug. |
| `normalizeSettlementInput(input)` | Нормализует пользовательский ввод перед поиском. |
| `resolveSettlementSlug(input)` | Возвращает slug по slug, коду, названию или alias. |
| `getFlagModuleLoader(input)` | Возвращает ленивый загрузчик модуля флага или `undefined`. |
| `loadFlagModule(input)` | Лениво импортирует модуль флага. Бросает ошибку для неизвестного значения. |
| `loadFlagImage(input, options)` | Загружает флаг и возвращает `HTMLImageElement`. |
| `loadFlag(input, options)` | Алиас для `loadFlagImage`. |
| `preloadFlag(input)` | Запускает загрузку модуля без ожидания результата. |
| `createFlagImage(src, defaultAlt, options)` | Создает и настраивает `<img>` для SVG-флага. |

## Типы

Пакет поставляет `.d.ts` файлы и экспортирует основные типы:

```ts
import type {
  FlagImageOptions,
  FlagModule,
  SettlementInput,
  SettlementMeta,
  SettlementSlug,
} from "@russian-flags/arkhangelsk-oblast";
```

`FlagImageOptions` поддерживает:

| Поле | Назначение |
| --- | --- |
| `alt` | Альтернативный текст изображения. |
| `decoding` | Значение свойства `HTMLImageElement.decoding`. |
| `loading` | Значение свойства `HTMLImageElement.loading`. |
| `className` | CSS-класс изображения. |
| `title` | Атрибут `title`. |
| `id` | Атрибут `id`. |
| `width`, `height` | Размеры изображения. |
| `style` | Inline-стили. |
| `dataset` | Значения для `data-*`. |
| `attributes` | Произвольные HTML-атрибуты. |

## Совместимость

Пакет рассчитан на современные ESM-проекты и браузерное окружение. Функции `loadFlag`, `loadFlagImage` и `createFlagImage` создают `HTMLImageElement`, поэтому для них нужен DOM.

Метаданные (`settlements`, `settlementSlugs`, `resolveSettlementSlug`) можно использовать отдельно, например для поиска, автокомплита или генерации списка доступных флагов.

## Демо

```bash
cd examples
npm install
npm run dev
```

Vite откроет страницу примера в браузере.

## Разработка

```bash
npm install
npm run build
npm test
npm run typecheck
npm run pack:dry
```

Сборка устроена так:

1. `scripts/build-source.js` читает `src/settlements.ts`, проверяет `assets/<slug>/index.svg` и генерирует TypeScript-исходники.
2. `scripts/build.js` собирает JavaScript через `esbuild` и копирует SVG в `dist/flags/<slug>.svg`.
3. `tsc -p tsconfig.build.json` генерирует `.d.ts` файлы в `dist`.

Чтобы добавить новый город, добавьте запись в `src/settlements.ts`, положите SVG в `assets/<slug>/index.svg` и запустите сборку.

## Репозиторий

- GitHub: <https://github.com/russian-flags/arkhangelsk-oblast>
- Issues: <https://github.com/russian-flags/arkhangelsk-oblast/issues>

## Лицензия

Код пакета распространяется по лицензии MIT. SVG-флаги не входят в MIT-лицензию кода и сохраняют свои исходные лицензии.
