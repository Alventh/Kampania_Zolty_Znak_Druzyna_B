---
kategoria: indeks
---

> Nowa notatka w tym folderze dostaje automatycznie szablon **Dziennik**.

## Drzewo

```dataviewjs
await dv.view("_Szablony/widoki/drzewo", { folder: "Dzienniki" })
```

## Lista

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", data, autor, lokacja
FROM "Dzienniki"
WHERE file.path != this.file.path
SORT data DESC
```
