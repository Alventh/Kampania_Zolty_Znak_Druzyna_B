---
name: "Kult Nolana"
kategoria: "organizacja"
typ: "Kult"
rodzic:
lokacje: ["[[Jezioro Sloan]]", "[[Uniwersytet Denver (lokacja)]]"]
tagi: []
prywatne: false
image:
aliases: []
kanka_id: 7139748
---

## Opis

**Role członków:**

| Członek | Rola |
| --- | --- |
| [[Nolan Hawthorne]] | Założyciel |
| [[Molly Whitmore]] | Członek |
| [[Jack „Byk” Callahan]] | Członek |
| [[Tommy „Spryciarz” Malone]] | Członek |

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
