# @russian-flags/arkhangelsk-oblast

[Русская версия](./README.md)

A native ESM collection of SVG flags for cities in Arkhangelsk Oblast, Russia. The package can be used as an npm dependency in JavaScript/TypeScript projects or as a connectable set of ready-made SVG files and lazy loaders.

## Preview

| City | Flag | slug |
| --- | --- | --- |
| Arkhangelsk | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/arkhangelsk/index.svg" width="120" alt="Flag of Arkhangelsk"> | `arkhangelsk` |
| Severodvinsk | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/severodvinsk/index.svg" width="120" alt="Flag of Severodvinsk"> | `severodvinsk` |
| Kotlas | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/kotlas/index.svg" width="120" alt="Flag of Kotlas"> | `kotlas` |
| Novodvinsk | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/novodvinsk/index.svg" width="120" alt="Flag of Novodvinsk"> | `novodvinsk` |
| Koryazhma | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/koryazhma/index.svg" width="120" alt="Flag of Koryazhma"> | `koryazhma` |
| Mirny | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/mirnyy/index.svg" width="120" alt="Flag of Mirny"> | `mirnyy` |
| Velsk | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/velsk/index.svg" width="120" alt="Flag of Velsk"> | `velsk` |
| Nyandoma | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/nyandoma/index.svg" width="120" alt="Flag of Nyandoma"> | `nyandoma` |
| Onega | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/onega/index.svg" width="120" alt="Flag of Onega"> | `onega` |
| Kargopol | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/kargopol/index.svg" width="120" alt="Flag of Kargopol"> | `kargopol` |
| Shenkursk | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/shenkursk/index.svg" width="120" alt="Flag of Shenkursk"> | `shenkursk` |
| Mezen | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/mezen/index.svg" width="120" alt="Flag of Mezen"> | `mezen` |
| Solvychegodsk | <img src="https://raw.githubusercontent.com/russian-flags/arkhangelsk-oblast/main/assets/solvychegodsk/index.svg" width="120" alt="Flag of Solvychegodsk"> | `solvychegodsk` |

## Features

- 13 local SVG flags bundled with the package.
- ESM build with TypeScript declarations.
- Per-flag lazy loaders.
- Lookup by slug, code, Russian/English city name, or alias.
- Direct SVG imports via `flags/<slug>` or `svg/<slug>`.
- Works with plain JavaScript, TypeScript, and modern bundlers.

## Installation

```bash
npm install @russian-flags/arkhangelsk-oblast
```

For local testing from this project directory:

```bash
npm install .
```

## Quick Start

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
  alt: "Flag of Arkhangelsk",
  className: "flag",
});

document.body.append(image);
```

`loadFlag` is an alias for `loadFlagImage`. It lazily imports the required flag module, creates an `<img>`, and uses `loading="lazy"` plus `decoding="async"` by default.

## Direct SVG Usage

If you only need the flag file, import the SVG directly:

```js
import arkhangelskFlag from "@russian-flags/arkhangelsk-oblast/flags/arkhangelsk";
import arkhangelskSvg from "@russian-flags/arkhangelsk-oblast/svg/arkhangelsk";

console.log(arkhangelskFlag);
console.log(arkhangelskSvg);
```

Imports with the `.svg` extension are supported as well:

```js
import arkhangelskFlag from "@russian-flags/arkhangelsk-oblast/flags/arkhangelsk.svg";
import arkhangelskSvg from "@russian-flags/arkhangelsk-oblast/svg/arkhangelsk.svg";
```

`flags/<slug>` and `svg/<slug>` point to the same file inside the package:

```text
dist/flags/<slug>.svg
```

After publishing, the package can also be used as an SVG source through an npm CDN:

```html
<img
  src="https://unpkg.com/@russian-flags/arkhangelsk-oblast/dist/flags/arkhangelsk.svg"
  alt="Flag of Arkhangelsk"
/>
```

## City Lookup

Most functions accept:

- slug: `"arkhangelsk"`;
- code: `"ARKHANGELSK"`;
- Russian name: `"Архангельск"`;
- English name: `"Arkhangelsk"`;
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

Input is normalized before lookup: surrounding whitespace is trimmed, matching is case-insensitive, `ё` is treated as `е`, and spaces or `_` are converted to `-`.

## Lazy List Rendering

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

`preloadFlag` starts loading a flag module without waiting for the result. It is useful on `hover`, `focus`, or shortly before a row enters the viewport.

```js
import { preloadFlag } from "@russian-flags/arkhangelsk-oblast";

button.addEventListener("pointerenter", () => {
  preloadFlag("arkhangelsk");
});
```

Unknown values are ignored and do not throw.

## API

| Export | Description |
| --- | --- |
| `settlements` | Metadata array with `{ slug, code, nameRu, nameEn, aliases }`. |
| `settlementSlugs` | Array of all available slugs. |
| `normalizeSettlementInput(input)` | Normalizes user input before lookup. |
| `resolveSettlementSlug(input)` | Resolves a slug from a slug, code, name, or alias. |
| `getFlagModuleLoader(input)` | Returns a lazy flag module loader or `undefined`. |
| `loadFlagModule(input)` | Lazily imports a flag module. Throws for unknown input. |
| `loadFlagImage(input, options)` | Loads a flag and returns an `HTMLImageElement`. |
| `loadFlag(input, options)` | Alias for `loadFlagImage`. |
| `preloadFlag(input)` | Starts loading a module without waiting for the result. |
| `createFlagImage(src, defaultAlt, options)` | Creates and configures an `<img>` for an SVG flag. |

## Types

The package ships `.d.ts` files and exports the main types:

```ts
import type {
  FlagImageOptions,
  FlagModule,
  SettlementInput,
  SettlementMeta,
  SettlementSlug,
} from "@russian-flags/arkhangelsk-oblast";
```

`FlagImageOptions` supports:

| Field | Purpose |
| --- | --- |
| `alt` | Image alternative text. |
| `decoding` | Value for `HTMLImageElement.decoding`. |
| `loading` | Value for `HTMLImageElement.loading`. |
| `className` | Image CSS class. |
| `title` | `title` attribute. |
| `id` | `id` attribute. |
| `width`, `height` | Image dimensions. |
| `style` | Inline styles. |
| `dataset` | Values for `data-*`. |
| `attributes` | Custom HTML attributes. |

## Compatibility

The package targets modern ESM projects and browser environments. `loadFlag`, `loadFlagImage`, and `createFlagImage` create an `HTMLImageElement`, so they require the DOM.

Metadata exports (`settlements`, `settlementSlugs`, `resolveSettlementSlug`) can be used separately, for example for search, autocomplete, or generating a list of available flags.

## Demo

```bash
cd examples
npm install
npm run dev
```

Vite will open the example page in your browser.

## Development

```bash
npm install
npm run build
npm test
npm run typecheck
npm run pack:dry
```

Build flow:

1. `scripts/build-source.js` reads `src/settlements.ts`, checks `assets/<slug>/index.svg`, and generates TypeScript sources.
2. `scripts/build.js` bundles JavaScript with `esbuild` and copies SVG files to `dist/flags/<slug>.svg`.
3. `tsc -p tsconfig.build.json` emits `.d.ts` files into `dist`.

To add a new city, add an entry to `src/settlements.ts`, put the SVG into `assets/<slug>/index.svg`, and run the build.

## Repository

- GitHub: <https://github.com/russian-flags/arkhangelsk-oblast>
- Issues: <https://github.com/russian-flags/arkhangelsk-oblast/issues>

## License

Package code is licensed under MIT. Bundled SVG flags are not covered by the MIT code license and keep their original licenses.
