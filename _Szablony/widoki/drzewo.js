// Drzewo encji wg pola `rodzic` (jak zagniezdzone listy w Kance).
// Uzycie: await dv.view("_Szablony/widoki/drzewo", { folder: "Lokacje" })
const folder = input.folder;
const pages = dv.pages(`"${folder}"`).where(p => p.kategoria !== "indeks").array();
const byPath = new Map(pages.map(p => [p.file.path, p]));
const children = new Map();
const roots = [];
for (const p of pages) {
  const parent = p.rodzic ? dv.page(p.rodzic) : null;
  const key = parent && byPath.has(parent.file.path) ? parent.file.path : null;
  if (key === null) roots.push(p);
  else {
    if (!children.has(key)) children.set(key, []);
    children.get(key).push(p);
  }
}
const byName = (a, b) => a.file.name.localeCompare(b.file.name, "pl");
const lines = [];
const walk = (p, depth, seen) => {
  if (seen.has(p.file.path)) return;  // ochrona przed petla rodzicow
  seen.add(p.file.path);
  const mark = p.prywatne ? " 🔒" : "";
  const typ = p.typ ? ` <span style="opacity:.6">(${p.typ})</span>` : "";
  lines.push(`${"\t".repeat(depth)}- [[${p.file.path}|${p.file.name}]]${typ}${mark}`);
  for (const c of (children.get(p.file.path) || []).sort(byName)) walk(c, depth + 1, seen);
};
for (const r of roots.sort(byName)) walk(r, 0, new Set());
dv.paragraph(lines.length ? lines.join("\n") : "*Brak wpisów.*");
