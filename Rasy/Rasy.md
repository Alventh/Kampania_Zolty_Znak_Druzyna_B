---
kategoria: indeks
---

> Nowa notatka w tym folderze dostaje automatycznie szablon **Rasa**.

## Drzewo

```dataviewjs
await dv.view("_Szablony/widoki/drzewo", { folder: "Rasy" })
```

## Lista

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ, rodzic
FROM "Rasy"
WHERE file.path != this.file.path
SORT file.name
```
