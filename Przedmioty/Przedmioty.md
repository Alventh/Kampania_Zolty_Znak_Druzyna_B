---
kategoria: indeks
---

> Nowa notatka w tym folderze dostaje automatycznie szablon **Przedmiot**.

## Drzewo

```dataviewjs
await dv.view("_Szablony/widoki/drzewo", { folder: "Przedmioty" })
```

## Lista

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ, właściciel, lokacja
FROM "Przedmioty"
WHERE file.path != this.file.path
SORT file.name
```
