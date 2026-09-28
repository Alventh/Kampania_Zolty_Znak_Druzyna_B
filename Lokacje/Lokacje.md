---
kategoria: indeks
cssclasses: ["indeks-z-obrazkami"]
---

> Nowa notatka w tym folderze dostaje automatycznie szablon **Lokacja**.

## Drzewo

```dataviewjs
await dv.view("_Szablony/widoki/drzewo", { folder: "Lokacje" })
```

## Lista

```dataview
TABLE WITHOUT ID embed(image) AS " ", file.link AS "Nazwa", typ, rodzic
FROM "Lokacje"
WHERE file.path != this.file.path
SORT file.name
```
