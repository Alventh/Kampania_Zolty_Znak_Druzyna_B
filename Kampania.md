---
kategoria: indeks
---

# Żółty Znak

## Moduły

```dataviewjs
const moduly = ["Postacie", "Lokacje", "Rodziny", "Organizacje", "Przedmioty", "Notatki", "Wydarzenia", "Kalendarze", "Osie czasu", "Rasy", "Stworzenia", "Zadania", "Dzienniki", "Zdolności", "Mapy", "Tagi"];
dv.table(["Moduł", "Wpisów", "Prywatnych"], moduly.map(f => {
  const p = dv.pages(`"${f}"`).where(x => x.kategoria !== "indeks");
  return [dv.fileLink(`${f}/${f}.md`, false, f), p.length, p.where(x => x.prywatne).length];
}));
```

## Ostatnie dzienniki

```dataview
TABLE WITHOUT ID file.link AS "Dziennik", data, lokacja
FROM "Dzienniki"
WHERE kategoria = "dziennik"
SORT data DESC
LIMIT 5
```

## Ostatnio zmienione

```dataview
TABLE WITHOUT ID file.link AS "Wpis", kategoria, file.mtime AS "Zmiana"
FROM -"_Szablony"
WHERE kategoria AND kategoria != "indeks"
SORT file.mtime DESC
LIMIT 10
```

## Tylko dla MG

```dataview
LIST
FROM -"_Szablony"
WHERE prywatne = true
SORT kategoria, file.name
```
