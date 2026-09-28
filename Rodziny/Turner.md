---
name: "Turner"
kategoria: "rodzina"
typ:
rodzic:
lokacje: []
tagi: []
prywatne: false
image:
aliases: []
kanka_id: 6940059
---

## Podrzędne

```dataview
LIST FROM "Rodziny" WHERE rodzic = this.file.link SORT file.name
```

## Członkowie

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ, status
FROM "Postacie"
WHERE contains(rodziny, this.file.link) AND kategoria != "indeks"
SORT file.name
```
