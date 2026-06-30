import assert from "node:assert/strict";
import {
  getFlagModuleLoader,
  loadFlag,
  loadFlagImage,
  loadFlagModule,
  preloadFlag,
} from "../dist/dynamic.js";
import { installTestImage } from "./helpers/test-image.js";

const ImageCtor = installTestImage();

assert.equal(loadFlag, loadFlagImage);

const arkhangelskLoader = getFlagModuleLoader("arkhangelsk");
assert.equal(typeof arkhangelskLoader, "function");
assert.equal(getFlagModuleLoader(" ARKHANGELSK "), arkhangelskLoader);
assert.equal(getFlagModuleLoader("Архангельск"), arkhangelskLoader);
assert.equal(getFlagModuleLoader("Archangelsk"), arkhangelskLoader);
assert.equal(getFlagModuleLoader("Mirnyy"), getFlagModuleLoader("mirnyy"));
assert.equal(getFlagModuleLoader("unknown"), undefined);

assert.doesNotThrow(() => preloadFlag("arkhangelsk"));
assert.doesNotThrow(() => preloadFlag("unknown"));

const arkhangelskModule = await loadFlagModule("Arkhangelsk");
assert.equal(arkhangelskModule.default, arkhangelskModule.createImage);
assert.equal(typeof arkhangelskModule.createImage, "function");
assert.ok(arkhangelskModule.src.endsWith("/flags/arkhangelsk.svg"));

const moduleImage = arkhangelskModule.createImage({ className: "module-image" });
assert.ok(moduleImage instanceof ImageCtor);
assert.equal(moduleImage.className, "module-image");
assert.ok(moduleImage.src.endsWith("/flags/arkhangelsk.svg"));

const loadedImage = await loadFlagImage("ARKHANGELSK", {
  alt: "Lazy Arkhangelsk",
  className: "loaded-image",
});
assert.ok(loadedImage instanceof ImageCtor);
assert.equal(loadedImage.alt, "Lazy Arkhangelsk");
assert.equal(loadedImage.className, "loaded-image");
assert.equal(loadedImage.loading, "lazy");
assert.equal(loadedImage.decoding, "async");
assert.ok(loadedImage.src.endsWith("/flags/arkhangelsk.svg"));

const aliasImage = await loadFlag("archangelsk", { alt: "Alias Arkhangelsk" });
assert.ok(aliasImage instanceof ImageCtor);
assert.equal(aliasImage.alt, "Alias Arkhangelsk");

await assert.rejects(
  () => loadFlagModule("unknown"),
  /Unknown Arkhangelsk Oblast settlement: unknown/
);
await assert.rejects(
  () => loadFlagImage("unknown"),
  /Unknown Arkhangelsk Oblast settlement: unknown/
);
