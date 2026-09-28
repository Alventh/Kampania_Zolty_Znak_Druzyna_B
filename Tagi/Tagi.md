---
kategoria: indeks
cssclasses: ["indeks-z-obrazkami"]
---

> Nowa notatka w tym folderze dostaje automatycznie szablon **Tag**.

## Drzewo

```dataviewjs
await dv.view("_Szablony/widoki/drzewo", { folder: "Tagi" })
```

## Lista

```dataview
TABLE WITHOUT ID embed(image) AS " ", file.link AS "Nazwa", typ, rodzic
FROM "Tagi"
WHERE file.path != this.file.path
SORT file.name
```
