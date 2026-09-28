---
name: "Arapaho"
kategoria: "organizacja"
typ: "Społeczność"
rodzic:
lokacje: ["[[Wioska Arapaho]]"]
tagi: []
prywatne: false
image:
aliases: ["Arapaho"]
kanka_id: 6940053
---

## Opis


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
