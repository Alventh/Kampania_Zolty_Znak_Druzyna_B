// Ramka z portretem i najważniejszymi polami (jak w Kance / Wikipedii).
// Pokazuje tylko wypełnione pola. Użycie: await dv.view("_Szablony/widoki/infobox")
const p = dv.current();
const box = dv.container;
box.classList.add("zz-infobox");

const POLA = {
  "postać": [["Typ", "typ"], ["Status", "status"], ["Gracz", "gracz"], ["Zawód", "zawód"], ["Wiek", "wiek"],
             ["Płeć", "płeć"], ["Zaimki", "zaimki"], ["Lokacja", "lokacja"], ["Rodziny", "rodziny"],
             ["Rasy", "rasy"], ["Organizacje", "organizacje"], ["Zdolności", "zdolności"], ["Tagi", "tagi"]],
  "lokacja": [["Typ", "typ"], ["Położona w", "rodzic"], ["Tagi", "tagi"]],
  "organizacja": [["Typ", "typ"], ["Nadrzędna", "rodzic"], ["Siedziby", "lokacje"], ["Tagi", "tagi"]],
  "rodzina": [["Typ", "typ"], ["Nadrzędna", "rodzic"], ["Siedziby", "lokacje"], ["Tagi", "tagi"]],
  "przedmiot": [["Typ", "typ"], ["Właściciel", "właściciel"], ["Lokacja", "lokacja"], ["Część", "rodzic"],
                ["Twórcy", "twórcy"], ["Cena", "cena"], ["Rozmiar", "rozmiar"], ["Waga", "waga"], ["Tagi", "tagi"]],
  "wydarzenie": [["Typ", "typ"], ["Data", "data_w_grze"], ["Lokacja", "lokacja"], ["Kalendarz", "kalendarz"],
                 ["Część", "rodzic"], ["Tagi", "tagi"]],
  "dziennik": [["Typ", "typ"], ["Data w grze", "data_w_grze"], ["Data sesji", "data"], ["Autor", "autor"],
               ["Lokacja", "lokacja"], ["Tagi", "tagi"]],
};
const pola = (input && input.pola) || POLA[p.kategoria] || [["Typ", "typ"], ["Nadrzędny", "rodzic"], ["Tagi", "tagi"]];

const pusty = v => v === undefined || v === null || v === "" ||
  (typeof v === "object" && "length" in v && v.length === 0);

if (p.status === "nie żyje") box.classList.add("zz-dead");
if (p.prywatne) box.classList.add("zz-private");

// portret z pola `obraz`
const img = p.obraz;
if (img && img.path) {
  const f = app.metadataCache.getFirstLinkpathDest(img.path, p.file.path);
  if (f) box.createEl("img", { cls: "zz-infobox-img", attr: { src: app.vault.getResourcePath(f), alt: p.file.name } });
}
box.createEl("div", { cls: "zz-infobox-title", text: (p.aliases && p.aliases[0]) || p.file.name });
if (!pusty(p["tytuł"])) box.createEl("div", { cls: "zz-infobox-sub", text: p["tytuł"] });
if (p.prywatne) box.createEl("div", { cls: "zz-badge zz-badge-mg", text: "🔒 Tylko dla MG" });

const wiersze = pola
  .filter(([, k]) => !pusty(p[k]))
  .map(([etykieta, k]) => [etykieta, k === "status" && p[k] === "nie żyje" ? "💀 nie żyje" : p[k]]);
if (wiersze.length) dv.table(["", ""], wiersze);
