---
kategoria: "kalendarz"
typ:
rodzic:
calendarium:
tagi: []
prywatne: false
obraz:
aliases: []
kanka_id:
---

## Opis


## Miesiące i dni tygodnia


## Powiązania

| Z kim | Relacja | Stosunek |
| --- | --- | --- |
|  |  |  |

> [!mg]- Tylko dla MG
> 

## Podrzędne

```dataview
LIST FROM "Kalendarze" WHERE rodzic = this.file.link SORT file.name
```

## Wydarzenia

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", data_w_grze
FROM "Wydarzenia"
WHERE kalendarz = this.file.link AND kategoria != "indeks"
SORT file.name
```

## Dzienniki

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", data_w_grze
FROM "Dzienniki"
WHERE kalendarz = this.file.link AND kategoria != "indeks"
SORT file.name
```
