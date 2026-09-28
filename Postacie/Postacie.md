---
kategoria: indeks
cssclasses: ["indeks-z-obrazkami"]
---

> Nowa notatka w tym folderze dostaje szablon **NPC**. Badacza utworzysz przez *Templater: Create new note from template → Szablon - Badacz*.

## Badacze

```dataview
TABLE WITHOUT ID embed(image) AS " ", file.link AS "Postać", typ AS "Typ", status AS "Status", lokacja AS "Lokacja", organizacje AS "Organizacje", rodziny AS "Rodzina"
FROM "Postacie"
WHERE kategoria = "postać" AND typ = "Gracz"
SORT file.name
```

## Postacie niezależne

```dataview
TABLE WITHOUT ID embed(image) AS " ", file.link AS "Postać", typ AS "Typ", status AS "Status", lokacja AS "Lokacja", organizacje AS "Organizacje", rodziny AS "Rodzina"
FROM "Postacie"
WHERE kategoria = "postać" AND typ != "Gracz"
SORT file.name
```
