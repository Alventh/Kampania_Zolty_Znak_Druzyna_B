---
kategoria: indeks
---

> Nowa notatka w tym folderze dostaje automatycznie szablon **Kalendarz**.

## Drzewo

```dataviewjs
await dv.view("_Szablony/widoki/drzewo", { folder: "Kalendarze" })
```

## Lista

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ
FROM "Kalendarze"
WHERE file.path != this.file.path
SORT file.name
```
