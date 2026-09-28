---
name: "Policja w Denver"
kategoria: "organizacja"
typ: "Policja"
rodzic: "[[Policja]]"
lokacje: ["[[Denver]]"]
tagi: []
prywatne: false
image: "[[Policja w Denver.png]]"
aliases: []
kanka_id: 6934535
---

![[Policja w Denver.png|300]]

## Opis

Siły policyjne w [[Denver]].

**Role członków:**

| Członek | Rola |
| --- | --- |
| [[William Candlish]] | Szef Policji w Denver |

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
