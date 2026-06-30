# @russian-flags/arkhangelsk-oblast

[Русская версия](./README.md)

A native ESM collection of SVG flags for cities in Arkhangelsk Oblast, Russia. The package can be used as an npm dependency in JavaScript/TypeScript projects or as a set of SVG files with lazy loaders.

The list is based on the "Cities" section of the Russian Wikipedia page ["Urban localities in Arkhangelsk Oblast"](https://ru.wikipedia.org/wiki/Городские_населённые_пункты_Архангельской_области): 13 cities. Urban-type settlements are not included.

## Cities

| City | Flag | slug |
| --- | --- | --- |
| Arkhangelsk | <img src="./assets/arkhangelsk/index.svg" width="120" alt="Flag of Arkhangelsk"> | `arkhangelsk` |
| Severodvinsk | <img src="./assets/severodvinsk/index.svg" width="120" alt="Flag of Severodvinsk"> | `severodvinsk` |
| Kotlas | <img src="./assets/kotlas/index.svg" width="120" alt="Flag of Kotlas"> | `kotlas` |
| Novodvinsk | <img src="./assets/novodvinsk/index.svg" width="120" alt="Flag of Novodvinsk"> | `novodvinsk` |
| Koryazhma | <img src="./assets/koryazhma/index.svg" width="120" alt="Flag of Koryazhma"> | `koryazhma` |
| Mirny | <img src="./assets/mirnyy/index.svg" width="120" alt="Flag of Mirny"> | `mirnyy` |
| Velsk | <img src="./assets/velsk/index.svg" width="120" alt="Flag of Velsk"> | `velsk` |
| Nyandoma | <img src="./assets/nyandoma/index.svg" width="120" alt="Flag of Nyandoma"> | `nyandoma` |
| Onega | <img src="./assets/onega/index.svg" width="120" alt="Flag of Onega"> | `onega` |
| Kargopol | <img src="./assets/kargopol/index.svg" width="120" alt="Flag of Kargopol"> | `kargopol` |
| Shenkursk | <img src="./assets/shenkursk/index.svg" width="120" alt="Flag of Shenkursk"> | `shenkursk` |
| Mezen | <img src="./assets/mezen/index.svg" width="120" alt="Flag of Mezen"> | `mezen` |
| Solvychegodsk | <img src="./assets/solvychegodsk/index.svg" width="120" alt="Flag of Solvychegodsk"> | `solvychegodsk` |

## Features

- 13 local SVG flags in `assets/<slug>/index.svg`.
- ESM build with TypeScript types.
- Lazy loaders for every flag.
- City lookup by slug, code, Russian/English name, or alias.
- Direct SVG imports through `flags/<slug>` or `svg/<slug>`.

## Installation

```bash
npm install @russian-flags/arkhangelsk-oblast
```

For a local check from the project directory:

```bash
npm install .
```

## Quick Start

```js
import { loadFlag, settlements } from "@russian-flags/arkhangelsk-oblast";

console.log(settlements.length); // 13

const image = await loadFlag("arkhangelsk", {
  alt: "Flag of Arkhangelsk",
  className: "flag",
});

document.body.append(image);
```

## Direct SVG Imports

```js
import arkhangelskFlag from "@russian-flags/arkhangelsk-oblast/flags/arkhangelsk";
import arkhangelskSvg from "@russian-flags/arkhangelsk-oblast/svg/arkhangelsk";

console.log(arkhangelskFlag);
console.log(arkhangelskSvg);
```

Imports with the extension are supported too:

```js
import arkhangelskFlag from "@russian-flags/arkhangelsk-oblast/flags/arkhangelsk.svg";
import arkhangelskSvg from "@russian-flags/arkhangelsk-oblast/svg/arkhangelsk.svg";
```

## Lookup

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

Input is normalized: surrounding spaces are removed, case does not matter, `ё` is treated as `е`, and spaces or `_` are converted to `-`.

## API

| Export | Description |
| --- | --- |
| `settlements` | Metadata array `{ slug, code, nameRu, nameEn, aliases }`. |
| `settlementSlugs` | Array of all available slugs. |
| `normalizeSettlementInput(input)` | Normalizes user input before lookup. |
| `resolveSettlementSlug(input)` | Returns a slug by slug, code, name, or alias. |
| `getFlagModuleLoader(input)` | Returns a lazy flag module loader or `undefined`. |
| `loadFlagModule(input)` | Lazily imports a flag module. |
| `loadFlagImage(input, options)` | Loads a flag and returns an `HTMLImageElement`. |
| `loadFlag(input, options)` | Alias for `loadFlagImage`. |
| `preloadFlag(input)` | Starts module loading without waiting for the result. |
| `createFlagImage(src, defaultAlt, options)` | Creates and configures an `<img>` for an SVG flag. |

## Development

```bash
npm install
npm test
npm run pack:dry
```
