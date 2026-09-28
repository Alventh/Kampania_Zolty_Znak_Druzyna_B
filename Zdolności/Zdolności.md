---
kategoria: indeks
---

> Nowa notatka w tym folderze dostaje automatycznie szablon **Zdolność**.

## Drzewo

```dataviewjs
await dv.view("_Szablony/widoki/drzewo", { folder: "Zdolności" })
```

## Lista

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ, rodzic, koszt
FROM "Zdolności"
WHERE file.path != this.file.path
SORT file.name
```
