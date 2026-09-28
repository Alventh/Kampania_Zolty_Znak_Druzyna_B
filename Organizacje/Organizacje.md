---
kategoria: indeks
cssclasses: ["indeks-z-obrazkami"]
---

> Nowa notatka w tym folderze dostaje automatycznie szablon **Organizacja**.

## Drzewo

```dataviewjs
await dv.view("_Szablony/widoki/drzewo", { folder: "Organizacje" })
```

## Lista

```dataview
TABLE WITHOUT ID embed(image) AS " ", file.link AS "Nazwa", typ, rodzic, lokacje
FROM "Organizacje"
WHERE file.path != this.file.path
SORT file.name
```
