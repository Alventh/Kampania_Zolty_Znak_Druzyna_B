---
kategoria: indeks
---

> Nowa notatka w tym folderze dostaje automatycznie szablon **Mapa**.

## Drzewo

```dataviewjs
await dv.view("_Szablony/widoki/drzewo", { folder: "Mapy" })
```

## Lista

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ, lokacja
FROM "Mapy"
WHERE file.path != this.file.path
SORT file.name
```
