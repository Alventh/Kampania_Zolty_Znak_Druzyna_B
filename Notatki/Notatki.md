---
kategoria: indeks
---

> Nowa notatka w tym folderze dostaje automatycznie szablon **Notatka**.

## Drzewo

```dataviewjs
await dv.view("_Szablony/widoki/drzewo", { folder: "Notatki" })
```

## Lista

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ, rodzic
FROM "Notatki"
WHERE file.path != this.file.path
SORT file.name
```
