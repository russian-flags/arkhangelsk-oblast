import assert from "node:assert/strict";
import {
  normalizeSettlementInput,
  resolveSettlementSlug,
  settlementSlugs,
  settlements,
} from "../dist/meta.js";

assert.ok(Object.isFrozen(settlements), "settlements should be frozen");
assert.ok(Object.isFrozen(settlementSlugs), "settlementSlugs should be frozen");
assert.equal(settlements.length, 13);
assert.equal(settlementSlugs.length, settlements.length);
assert.deepEqual(
  settlementSlugs,
  settlements.map((settlement) => settlement.slug)
);
assert.equal(new Set(settlementSlugs).size, settlementSlugs.length);

assert.deepEqual(settlementSlugs, [
  "arkhangelsk",
  "severodvinsk",
  "kotlas",
  "novodvinsk",
  "koryazhma",
  "mirnyy",
  "velsk",
  "nyandoma",
  "onega",
  "kargopol",
  "shenkursk",
  "mezen",
  "solvychegodsk",
]);

assert.equal(normalizeSettlementInput("  ARKHANGELSK  "), "arkhangelsk");
assert.equal(normalizeSettlementInput("SOLVYCHEGODSK"), "solvychegodsk");
assert.equal(normalizeSettlementInput("Архангельск"), "архангельск");
assert.equal(normalizeSettlementInput("АРХАНГЕЛЬСК"), "архангельск");

for (const settlement of settlements) {
  assert.equal(typeof settlement.nameRu, "string");
  assert.equal(typeof settlement.nameEn, "string");
  assert.ok(Array.isArray(settlement.aliases), "settlement aliases should be an array");
  assert.equal(resolveSettlementSlug(settlement.slug), settlement.slug);
  assert.equal(resolveSettlementSlug(settlement.code), settlement.slug);
  assert.equal(resolveSettlementSlug(settlement.nameRu), settlement.slug);
  assert.equal(resolveSettlementSlug(settlement.nameEn), settlement.slug);
  for (const alias of settlement.aliases) {
    assert.equal(resolveSettlementSlug(alias), settlement.slug);
  }
}

assert.equal(resolveSettlementSlug(" Архангельск "), "arkhangelsk");
assert.equal(resolveSettlementSlug("Archangelsk"), "arkhangelsk");
assert.equal(resolveSettlementSlug("Arkhangel'sk"), "arkhangelsk");
assert.equal(resolveSettlementSlug("Mirny"), "mirnyy");
assert.equal(resolveSettlementSlug("Mirnyy"), "mirnyy");
assert.equal(resolveSettlementSlug("Vel'sk"), "velsk");
assert.equal(resolveSettlementSlug("Mezen'"), "mezen");
assert.equal(resolveSettlementSlug("Kargopol'"), "kargopol");
assert.equal(resolveSettlementSlug("unknown"), undefined);
