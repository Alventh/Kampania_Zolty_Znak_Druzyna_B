---
kategoria: indeks
---

> Nowa notatka w tym folderze dostaje automatycznie szablon **Postać**.

## Lista

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ, status, lokacja, organizacje
FROM "Postacie"
WHERE file.path != this.file.path
SORT file.name
```
