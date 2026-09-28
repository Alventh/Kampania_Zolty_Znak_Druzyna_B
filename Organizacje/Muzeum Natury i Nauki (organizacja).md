---
name: "Muzeum Natury i Nauki"
kategoria: "organizacja"
typ: "Organizacja"
rodzic:
lokacje: ["[[Muzeum Natury i Nauki (lokacja)]]"]
tagi: []
prywatne: false
image: "[[Muzeum Natury i Nauki (organizacja).png]]"
aliases: ["Muzeum Natury i Nauki"]
kanka_id: 6938310
---

![[Muzeum Natury i Nauki (organizacja).png|300]]

## Podrzędne

```dataview
LIST FROM "Organizacje" WHERE rodzic = this.file.link SORT file.name
```

## Członkowie

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ, status
FROM "Postacie"
WHERE contains(organizacje, this.file.link) AND kategoria != "indeks"
SORT file.name
```
