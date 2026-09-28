---
name: "Policja"
kategoria: "organizacja"
typ: "Policja"
rodzic:
lokacje: ["[[Boulder]]", "[[Baltimore]]", "[[Port Key West]]", "[[Southampton]]", "[[Bremerhaven]]", "[[Denver]]"]
tagi: []
prywatne: false
image: "[[Policja.png]]"
aliases: []
kanka_id: 6934531
---

![[Policja.png|300]]

## Opis

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
