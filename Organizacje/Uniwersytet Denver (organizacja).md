---
name: "Uniwersytet Denver"
kategoria: "organizacja"
typ: "Społeczność Akademicka"
rodzic:
lokacje: ["[[Uniwersytet Denver (lokacja)]]"]
tagi: []
prywatne: false
image: "[[Uniwersytet Denver (organizacja).png]]"
aliases: ["Uniwersytet Denver"]
kanka_id: 6938378
---

![[Uniwersytet Denver (organizacja).png|300]]

## Opis

**Role członków:**

| Członek | Rola |
| --- | --- |
| [[Jack „Byk” Callahan]] | Student |
| [[Nolan Hawthorne]] | Student |

## Powiązania

| Z kim | Relacja | Stosunek |
| --- | --- | --- |
|  |  |  |

> [!mg]- Tylko dla MG
> 

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
