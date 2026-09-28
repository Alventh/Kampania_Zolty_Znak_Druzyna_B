---
name: "Nowy Jork"
kategoria: "lokacja"
typ:
rodzic: "[[USA (lokacja)]]"
tagi: []
prywatne: false
image:
aliases: []
kanka_id: 6945139
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
LIST FROM "Lokacje" WHERE rodzic = this.file.link SORT file.name
```

## Postacie

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ, status
FROM "Postacie"
WHERE lokacja = this.file.link AND kategoria != "indeks"
SORT file.name
```

## Organizacje

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ
FROM "Organizacje"
WHERE contains(lokacje, this.file.link) AND kategoria != "indeks"
SORT file.name
```

## Rodziny

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ
FROM "Rodziny"
WHERE contains(lokacje, this.file.link) AND kategoria != "indeks"
SORT file.name
```

## Przedmioty

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ
FROM "Przedmioty"
WHERE lokacja = this.file.link AND kategoria != "indeks"
SORT file.name
```

## Wydarzenia

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", data_w_grze
FROM "Wydarzenia"
WHERE lokacja = this.file.link AND kategoria != "indeks"
SORT file.name
```

## Mapy

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ
FROM "Mapy"
WHERE lokacja = this.file.link AND kategoria != "indeks"
SORT file.name
```
