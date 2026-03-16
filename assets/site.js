function qs(sel, root = document) { return root.querySelector(sel); }
function qsa(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

function normalize(s) {
  return (s || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function initProjectFilters() {
  const list = qs("[data-project-list]");
  if (!list) return;

  const search = qs("[data-filter-search]");
  const chips = qsa("[data-filter-chip]");
  const items = qsa("[data-project]", list);

  // Pressed chips act as an OR filter over tags/levels.
  function activeTokens() {
    return chips
      .filter((c) => c.getAttribute("aria-pressed") === "true")
      .map((c) => c.getAttribute("data-token"))
      .filter(Boolean);
  }

  function itemTokens(el) {
    const tags = normalize(el.getAttribute("data-tags")).split(",").map((x) => x.trim()).filter(Boolean);
    const level = normalize(el.getAttribute("data-level"));
    return new Set([...tags, level].filter(Boolean));
  }

  function apply() {
    const q = normalize(search?.value || "");
    const tokens = activeTokens();

    for (const el of items) {
      const text = normalize(el.textContent);
      const tok = itemTokens(el);
      const okQuery = !q || text.includes(q);

      const okTokens =
        tokens.length === 0 || tokens.some((t) => tok.has(normalize(t)));

      const visible = okQuery && okTokens;
      el.style.display = visible ? "" : "none";
    }
  }

  if (search) {
    search.addEventListener("input", apply);
  }

  for (const chip of chips) {
    chip.addEventListener("click", () => {
      const pressed = chip.getAttribute("aria-pressed") === "true";
      chip.setAttribute("aria-pressed", pressed ? "false" : "true");
      apply();
    });
  }

  apply();
}

function initCurrentNav() {
  const path = location.pathname.replace(/\/+$/, "/");
  for (const a of qsa(".nav a")) {
    const href = a.getAttribute("href") || "";
    if (!href || href.startsWith("http")) continue;
    const h = new URL(href, location.origin).pathname.replace(/\/+$/, "/");
    if (h === path) a.setAttribute("aria-current", "page");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initCurrentNav();
  initProjectFilters();
});

