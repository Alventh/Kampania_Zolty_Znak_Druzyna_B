---
kategoria: indeks
---

> Nowa notatka w tym folderze dostaje automatycznie szablon **Rodzina**.

## Drzewo

```dataviewjs
await dv.view("_Szablony/widoki/drzewo", { folder: "Rodziny" })
```

## Lista

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ, rodzic, lokacje
FROM "Rodziny"
WHERE file.path != this.file.path
SORT file.name
```
