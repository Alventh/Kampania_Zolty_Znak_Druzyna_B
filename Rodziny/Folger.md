---
kategoria: "rodzina"
typ: "Mieszkańcy Cripple Creek"
rodzic:
lokacje: ["[[Cripple Creek]]"]
tagi: []
prywatne: false
obraz:
aliases: []
kanka_id: 6547496
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
LIST FROM "Rodziny" WHERE rodzic = this.file.link SORT file.name
```

## Członkowie

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ, status
FROM "Postacie"
WHERE contains(rodziny, this.file.link) AND kategoria != "indeks"
SORT file.name
```
