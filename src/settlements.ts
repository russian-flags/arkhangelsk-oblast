import type { SettlementMeta, SettlementSlug } from "./types.js";

export const settlements = Object.freeze([
  {
    slug: "arkhangelsk",
    code: "ARKHANGELSK",
    nameRu: "Архангельск",
    nameEn: "Arkhangelsk",
    aliases: ["Archangelsk", "Arkhangel'sk"],
  },
  {
    slug: "severodvinsk",
    code: "SEVERODVINSK",
    nameRu: "Северодвинск",
    nameEn: "Severodvinsk",
    aliases: [],
  },
  {
    slug: "kotlas",
    code: "KOTLAS",
    nameRu: "Котлас",
    nameEn: "Kotlas",
    aliases: [],
  },
  {
    slug: "novodvinsk",
    code: "NOVODVINSK",
    nameRu: "Новодвинск",
    nameEn: "Novodvinsk",
    aliases: [],
  },
  {
    slug: "koryazhma",
    code: "KORYAZHMA",
    nameRu: "Коряжма",
    nameEn: "Koryazhma",
    aliases: [],
  },
  {
    slug: "mirnyy",
    code: "MIRNYY",
    nameRu: "Мирный",
    nameEn: "Mirny",
    aliases: ["Mirnyy"],
  },
  {
    slug: "velsk",
    code: "VELSK",
    nameRu: "Вельск",
    nameEn: "Velsk",
    aliases: ["Vel'sk"],
  },
  {
    slug: "nyandoma",
    code: "NYANDOMA",
    nameRu: "Няндома",
    nameEn: "Nyandoma",
    aliases: [],
  },
  {
    slug: "onega",
    code: "ONEGA",
    nameRu: "Онега",
    nameEn: "Onega",
    aliases: [],
  },
  {
    slug: "kargopol",
    code: "KARGOPOL",
    nameRu: "Каргополь",
    nameEn: "Kargopol",
    aliases: ["Kargopol'"],
  },
  {
    slug: "shenkursk",
    code: "SHENKURSK",
    nameRu: "Шенкурск",
    nameEn: "Shenkursk",
    aliases: [],
  },
  {
    slug: "mezen",
    code: "MEZEN",
    nameRu: "Мезень",
    nameEn: "Mezen",
    aliases: ["Mezen'"],
  },
  {
    slug: "solvychegodsk",
    code: "SOLVYCHEGODSK",
    nameRu: "Сольвычегодск",
    nameEn: "Solvychegodsk",
    aliases: ["Solvychegodsk"],
  },
]) as readonly SettlementMeta[];

export const settlementSlugs = Object.freeze(settlements.map((settlement) => settlement.slug)) as readonly SettlementSlug[];
