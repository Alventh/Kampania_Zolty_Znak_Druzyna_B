---
kategoria: "organizacja"
typ:
rodzic:
lokacje: []
tagi: []
prywatne: false
obraz:
aliases: []
kanka_id: 7861228
---

## Opis

**Role członków:**

| Członek | Rola |
| --- | --- |
| [[Charlotte Reed]] | Przywódca |

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
