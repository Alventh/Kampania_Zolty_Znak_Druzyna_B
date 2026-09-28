---
name: "Bethania"
kategoria: "lokacja"
typ: "Posiadłość"
rodzic: "[[Rennes Le Château]]"
tagi: []
prywatne: false
image: "[[Bethania.jpg]]"
aliases: []
kanka_id: 6547313
---

![[Bethania.jpg|300]]

## Opis

Posiadłość rodowa rodziny [[Epines]] Została tu przeniesiona, kamień po kamieniu z ich rodzinnej miejscowości [[Rennes Le Château]] we [[Francja]]

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
