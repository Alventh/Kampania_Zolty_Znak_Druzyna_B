---
kategoria: indeks
---

> Nowa notatka w tym folderze dostaje automatycznie szablon **Tag**.

## Drzewo

```dataviewjs
await dv.view("_Szablony/widoki/drzewo", { folder: "Tagi" })
```

## Lista

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ, rodzic
FROM "Tagi"
WHERE file.path != this.file.path
SORT file.name
```
