---
name: "Car"
kategoria: "rasa"
typ: "Człowiek"
rodzic:
lokacje: ["[[Wioska Arapaho]]"]
tagi: []
prywatne: false
image:
aliases: []
kanka_id: 8152863
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
