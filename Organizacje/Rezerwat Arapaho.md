---
name: "Rezerwat Arapaho"
kategoria: "organizacja"
typ: "Społeczność"
rodzic:
lokacje: ["[[Colorado]]"]
tagi: []
prywatne: false
image: "[[Rezerwat Arapaho.jpg]]"
aliases: []
kanka_id: 7200546
---

![[Rezerwat Arapaho.jpg|300]]

## Opis

**Role członków:**

| Członek | Rola |
| --- | --- |
| [[Niibéíhei (Przepowiadający Deszcz)]] | Wódz |

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
