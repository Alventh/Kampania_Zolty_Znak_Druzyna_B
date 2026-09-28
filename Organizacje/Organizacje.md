---
kategoria: indeks
---

> Nowa notatka w tym folderze dostaje automatycznie szablon **Organizacja**.

## Drzewo

```dataviewjs
await dv.view("_Szablony/widoki/drzewo", { folder: "Organizacje" })
```

## Lista

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ, rodzic, lokacje
FROM "Organizacje"
WHERE file.path != this.file.path
SORT file.name
```
