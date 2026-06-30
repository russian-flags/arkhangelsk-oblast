import type { FlagModule, SettlementSlug } from "./types.js";

export const flagLoaders = Object.freeze({
  "arkhangelsk": () => import("./loaders/arkhangelsk.js") as Promise<FlagModule>,
  "severodvinsk": () => import("./loaders/severodvinsk.js") as Promise<FlagModule>,
  "kotlas": () => import("./loaders/kotlas.js") as Promise<FlagModule>,
  "novodvinsk": () => import("./loaders/novodvinsk.js") as Promise<FlagModule>,
  "koryazhma": () => import("./loaders/koryazhma.js") as Promise<FlagModule>,
  "mirnyy": () => import("./loaders/mirnyy.js") as Promise<FlagModule>,
  "velsk": () => import("./loaders/velsk.js") as Promise<FlagModule>,
  "nyandoma": () => import("./loaders/nyandoma.js") as Promise<FlagModule>,
  "onega": () => import("./loaders/onega.js") as Promise<FlagModule>,
  "kargopol": () => import("./loaders/kargopol.js") as Promise<FlagModule>,
  "shenkursk": () => import("./loaders/shenkursk.js") as Promise<FlagModule>,
  "mezen": () => import("./loaders/mezen.js") as Promise<FlagModule>,
  "solvychegodsk": () => import("./loaders/solvychegodsk.js") as Promise<FlagModule>,
}) as Readonly<Record<SettlementSlug, () => Promise<FlagModule>>>;
