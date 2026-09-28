---
kategoria: indeks
---

> Nowa notatka w tym folderze dostaje automatycznie szablon **Zadanie**.

## Drzewo

```dataviewjs
await dv.view("_Szablony/widoki/drzewo", { folder: "Zadania" })
```

## Lista

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ, zlecający, ukończone
FROM "Zadania"
WHERE file.path != this.file.path
SORT file.name
```
