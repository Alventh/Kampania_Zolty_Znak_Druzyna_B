---
name: "Harding"
kategoria: "rodzina"
typ:
rodzic:
lokacje: ["[[Pluckley]]"]
tagi: []
prywatne: false
image:
aliases: []
kanka_id: 6934767
---

## Opis

Rodzina Harding z miasta [[Pluckley]]

Jedynymi żyjącymi przedstawicielkami są [[Lilian Harding]] i [[Eleanor „Nellie” Harding|Eleanor "Nellie" Harding]]

## Powiązania

| Z kim | Relacja | Stosunek |
| --- | --- | --- |
|  |  |  |

> [!mg]- Tylko dla MG
> 

## Podrzędne

```dataview
LIST FROM "Rodziny" WHERE rodzic = this.file.link SORT file.name
```

## Członkowie

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ, status
FROM "Postacie"
WHERE contains(rodziny, this.file.link) AND kategoria != "indeks"
SORT file.name
```
