import { loadFlagModule, preloadFlag, settlements } from "@russian-flags/arkhangelsk-oblast";

function requiredNode(selector) {
  const node = document.querySelector(selector);
  if (!node) {
    throw new Error(`Example DOM is missing required node: ${selector}`);
  }
  return node;
}

const list = requiredNode("#flagsList");
const summary = requiredNode("#summary");
const flagModal = requiredNode("#flagModal");
const flagModalTitle = requiredNode("#flagModalTitle");
const flagModalImage = requiredNode("#flagModalImage");
const flagModalClose = requiredNode(".flag-modal__close");
const nameCollator = new Intl.Collator("ru");
const flagSrcBySlug = new Map();

function sortedSettlements() {
  return [...settlements].sort((left, right) => nameCollator.compare(left.nameRu, right.nameRu));
}

async function flagUrl(settlement) {
  const cached = flagSrcBySlug.get(settlement.slug);
  if (cached) {
    return cached;
  }

  const module = await loadFlagModule(settlement.slug);
  flagSrcBySlug.set(settlement.slug, module.src);
  return module.src;
}

async function setFlagImage(image, frame, settlement) {
  try {
    image.src = await flagUrl(settlement);
  } catch (error) {
    console.error(error);
    frame.classList.add("load-error");
    frame.replaceChildren("не загружается");
  }
}

function makeCell(className, children) {
  const cell = document.createElement("td");
  if (className) {
    cell.className = className;
  }
  cell.append(...children);
  return cell;
}

function makePlaceCell(settlement) {
  const name = document.createElement("strong");
  name.textContent = settlement.nameRu;
  const english = document.createElement("span");
  english.textContent = settlement.nameEn;
  return makeCell("place", [name, english]);
}

function makeIdentifierCell(settlement) {
  const code = document.createElement("strong");
  code.textContent = settlement.code;
  const slug = document.createElement("span");
  slug.textContent = settlement.slug;
  return makeCell("identifier", [code, slug]);
}

function makeFlagCell(settlement) {
  const frame = document.createElement("button");
  frame.className = "flag-frame";
  frame.type = "button";
  frame.dataset.kind = "flag";

  const image = document.createElement("img");
  image.alt = `Флаг ${settlement.nameRu}`;
  image.loading = "lazy";
  image.decoding = "async";

  image.addEventListener("error", () => {
    frame.classList.add("load-error");
    frame.replaceChildren("не отображается");
  }, { once: true });

  frame.append(image);
  frame.addEventListener("pointerenter", () => preloadFlag(settlement.slug));
  frame.addEventListener("focus", () => preloadFlag(settlement.slug));
  frame.addEventListener("click", () => {
    void openFlagModal(settlement);
  });
  void setFlagImage(image, frame, settlement);
  return makeCell("flag-cell", [frame]);
}

function makeFormatCell(settlement) {
  const extension = document.createElement("strong");
  extension.textContent = "SVG";
  const details = document.createElement("span");
  details.textContent = `@russian-flags/arkhangelsk-oblast/flags/${settlement.slug}`;
  details.title = details.textContent;
  return makeCell("format", [extension, details]);
}

function makeRow(settlement) {
  const row = document.createElement("tr");
  row.dataset.slug = settlement.slug;
  row.append(
    makePlaceCell(settlement),
    makeIdentifierCell(settlement),
    makeFlagCell(settlement),
    makeFormatCell(settlement)
  );
  return row;
}

function updateSummary() {
  summary.textContent = `${settlements.length} городов, ${settlements.length} SVG из npm-пакета`;
}

async function openFlagModal(settlement) {
  flagModalTitle.textContent = settlement.nameRu;
  flagModalImage.removeAttribute("src");
  flagModalImage.alt = `Флаг ${settlement.nameRu}`;
  if (typeof flagModal.showModal === "function") {
    flagModal.showModal();
  } else {
    flagModal.setAttribute("open", "");
  }

  try {
    flagModalImage.src = await flagUrl(settlement);
  } catch (error) {
    console.error(error);
    flagModalImage.alt = `Не удалось загрузить флаг ${settlement.nameRu}`;
  }
}

function render() {
  list.replaceChildren(...sortedSettlements().map(makeRow));
  updateSummary();
}

flagModalClose.addEventListener("click", () => {
  flagModal.close();
});

flagModal.addEventListener("click", (event) => {
  if (event.target === flagModal) {
    flagModal.close();
  }
});

render();
