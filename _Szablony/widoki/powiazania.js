// Odwrotne relacje + "Wspominany w" - pokazuje tylko niepuste grupy.
// Użycie: await dv.view("_Szablony/widoki/powiazania")
const cur = dv.current();
const here = cur.file.path;

// kategoria bieżącej notatki -> [nagłówek, folder źródłowy, pole wskazujące tutaj, kolumny]
const REV = {
  "postać": [["Ekwipunek", "Przedmioty", "właściciel", ["typ"]],
             ["Autor dzienników", "Dzienniki", "autor", ["data_w_grze"]],
             ["Zlecone zadania", "Zadania", "zlecający", ["ukończone"]]],
  "lokacja": [["Podlokacje", "Lokacje", "rodzic", ["typ"]],
              ["Postacie", "Postacie", "lokacja", ["typ", "status"]],
              ["Organizacje", "Organizacje", "lokacje", ["typ"]],
              ["Rodziny", "Rodziny", "lokacje", ["typ"]],
              ["Przedmioty", "Przedmioty", "lokacja", ["typ"]],
              ["Wydarzenia", "Wydarzenia", "lokacja", ["data_w_grze"]],
              ["Dzienniki", "Dzienniki", "lokacja", ["data_w_grze"]],
              ["Mapy", "Mapy", "lokacja", ["typ"]]],
  "organizacja": [["Członkowie", "Postacie", "organizacje", ["typ", "status"]],
                  ["Podorganizacje", "Organizacje", "rodzic", ["typ"]]],
  "rodzina": [["Członkowie", "Postacie", "rodziny", ["typ", "status"]],
              ["Gałęzie rodu", "Rodziny", "rodzic", ["typ"]]],
  "rasa": [["Przedstawiciele", "Postacie", "rasy", ["typ", "status"]], ["Podrasy", "Rasy", "rodzic", ["typ"]]],
  "przedmiot": [["Części", "Przedmioty", "rodzic", ["typ"]]],
  "wydarzenie": [["Podwydarzenia", "Wydarzenia", "rodzic", ["data_w_grze"]]],
  "kalendarz": [["Wydarzenia", "Wydarzenia", "kalendarz", ["data_w_grze"]],
                ["Dzienniki", "Dzienniki", "kalendarz", ["data_w_grze"]]],
  "zdolność": [["Posiadacze", "Postacie", "zdolności", ["typ"]]],
  "tag": [["Oznaczone", "", "tagi", ["kategoria", "typ"]]],
};

const lista = v => v == null ? [] : (Array.isArray(v) ? v : (typeof v.array === "function" ? v.array() : [v]));
const wskazuje = (p, pole) => lista(p[pole]).some(l => l && l.path &&
  (l.path === here || (dv.page(l.path) || {}).file?.path === here));
const zwykla = p => p.kategoria && p.kategoria !== "indeks" && !p.file.path.startsWith("_Szablony/");

const pokazane = new Set([here]);
let cokolwiek = false;
for (const [naglowek, folder, pole, kolumny] of REV[cur.kategoria] || []) {
  const strony = dv.pages(folder ? `"${folder}"` : "").where(p => zwykla(p) && wskazuje(p, pole))
    .sort(p => p.file.name);
  if (!strony.length) continue;
  cokolwiek = true;
  strony.forEach(p => pokazane.add(p.file.path));
  dv.header(3, `${naglowek} (${strony.length})`);
  dv.table(["Nazwa", ...kolumny], strony.map(p => [p.file.link, ...kolumny.map(k => p[k])]));
}

// "linkujące tutaj" - wpisy, które wspominają tę notatkę w treści
const wzmianki = dv.pages().where(p => zwykla(p) && !pokazane.has(p.file.path) &&
  p.file.outlinks.some(l => l.path === here)).sort(p => p.file.name);
if (wzmianki.length) {
  cokolwiek = true;
  dv.header(3, `Wspominany w (${wzmianki.length})`);
  dv.list(wzmianki.map(p => p.file.link));
}
if (!cokolwiek) dv.paragraph("*Brak powiązanych wpisów.*");
