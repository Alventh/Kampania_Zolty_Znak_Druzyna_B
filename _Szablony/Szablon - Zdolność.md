---
kategoria: "zdolność"
typ:
rodzic:
koszt:
tagi: []
prywatne: false
obraz:
aliases: []
kanka_id:
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
LIST FROM "Zdolności" WHERE rodzic = this.file.link SORT file.name
```

## Posiadacze

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ
FROM "Postacie"
WHERE contains(zdolności, this.file.link) AND kategoria != "indeks"
SORT file.name
```
