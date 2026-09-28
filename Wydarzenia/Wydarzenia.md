---
kategoria: indeks
---

> Nowa notatka w tym folderze dostaje automatycznie szablon **Wydarzenie**.

## Drzewo

```dataviewjs
await dv.view("_Szablony/widoki/drzewo", { folder: "Wydarzenia" })
```

## Lista

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ, data_w_grze, lokacja
FROM "Wydarzenia"
WHERE file.path != this.file.path
SORT file.name
```
