---
name: "Kościół Katolicki"
kategoria: "organizacja"
typ: "Religia"
rodzic:
lokacje: ["[[Ziemia]]"]
tagi: []
prywatne: false
image: "[[Kościół Katolicki.png]]"
aliases: []
kanka_id: 6935834
---

![[Kościół Katolicki.png|300]]

## Opis

**Role członków:**

| Członek | Rola |
| --- | --- |
| [[Edmund]] | Ksiądz |

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
