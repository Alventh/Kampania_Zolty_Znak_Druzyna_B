---
name: "Właz"
kategoria: "lokacja"
typ: "Wejście"
rodzic: "[[Jezioro Sloan]]"
tagi: []
prywatne: false
image: "[[Właz.png]]"
aliases: []
kanka_id: 7138313
---

![[Właz.png|300]]

## Opis

Znajdujący się na terenie na którym wcześniej było [[Jezioro Sloan]] właz do [[Placówka Yithian]]. Odnaleziony przez [[Nolan Hawthorne]] który uznał go za wejście do [[Piekło]] niczym te opisane w [[Boska Komedia]] autorstwa [[Dante Alighieri]]

Wydostawała się tędy [[Czarna Maź]] z Placówka Yithian, kiedy wody zaczęły opadać.

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
