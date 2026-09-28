---
kategoria: indeks
cssclasses: ["indeks-z-obrazkami"]
---

> Nowa notatka w tym folderze dostaje automatycznie szablon **Notatka**.

## Drzewo

```dataviewjs
await dv.view("_Szablony/widoki/drzewo", { folder: "Notatki" })
```

## Lista

```dataview
TABLE WITHOUT ID embed(image) AS " ", file.link AS "Nazwa", typ, rodzic
FROM "Notatki"
WHERE file.path != this.file.path
SORT file.name
```
