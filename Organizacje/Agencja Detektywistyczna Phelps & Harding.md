---
name: "Agencja Detektywistyczna Phelps & Harding"
kategoria: "organizacja"
typ: "Agencja Detektywistyczna"
rodzic:
lokacje: ["[[Boston]]", "[[Denver]]"]
tagi: []
prywatne: false
image: "[[Agencja Detektywistyczna Phelps & Harding.png]]"
aliases: []
kanka_id: 6547740
---

![[Agencja Detektywistyczna Phelps & Harding.png|300]]

## Opis

**Role członków:**

| Członek | Rola |
| --- | --- |
| [[Victoria Woodhull]] | Asystentka |

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
