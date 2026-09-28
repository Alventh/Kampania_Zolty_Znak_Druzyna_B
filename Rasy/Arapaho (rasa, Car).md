---
name: "Arapaho"
kategoria: "rasa"
typ: "Człowiek"
rodzic: "[[Car]]"
lokacje: ["[[Wioska Arapaho]]"]
tagi: []
prywatne: false
image:
aliases: ["Arapaho"]
kanka_id: 8152864
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
LIST FROM "Rasy" WHERE rodzic = this.file.link SORT file.name
```

## Przedstawiciele

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ, status
FROM "Postacie"
WHERE contains(rasy, this.file.link) AND kategoria != "indeks"
SORT file.name
```
