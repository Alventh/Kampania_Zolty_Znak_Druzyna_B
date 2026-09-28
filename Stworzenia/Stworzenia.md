---
kategoria: indeks
---

> Nowa notatka w tym folderze dostaje automatycznie szablon **Stworzenie**.

## Drzewo

```dataviewjs
await dv.view("_Szablony/widoki/drzewo", { folder: "Stworzenia" })
```

## Lista

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ, rodzic, lokacje
FROM "Stworzenia"
WHERE file.path != this.file.path
SORT file.name
```
