---
name: "Williams & Graham"
kategoria: "lokacja"
typ: "Bar"
rodzic: "[[Denver]]"
tagi: []
prywatne: false
image: "[[Williams & Graham.png]]"
aliases: []
kanka_id: 6938250
---

![[Williams & Graham.png|300]]

## Opis

Tajny bar ukryty za fasadą księgarni. To tam grywał [[Robert Johnson]]. W tym też miejscu spotkali się [[Owen Pierce]] i [[Arthur Holdem]] przed pojmaniem ich przez [[William Candlish]].

8 sierpnia 1920 roku tuż przed [[Pełnia Aldebaran]] [[Lilian Harding]], [[Cole Phelps]], [[Benjamin Smith]] i [[Axel Bonton]] zostali tutaj złapani i wywiezieni na [[Farma Goździków]]

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
