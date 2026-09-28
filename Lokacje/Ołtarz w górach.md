---
name: "Ołtarz w górach"
kategoria: "lokacja"
typ: "Ołtarz"
rodzic: "[[Kopalnia w Cripple Creek]]"
tagi: []
prywatne: false
image: "[[Ołtarz w górach.png]]"
aliases: []
kanka_id: 6940061
---

![[Ołtarz w górach.png|300]]

## Opis

Ołtarz [[Palamque]] wykorzystywany przez [[Sherman Coolidge]], [[Cecile Caldwell]] oraz część rodzin z [[Cripple Creek]]. Wokół ołtarza rosły [[Pnącza Czarnych Róż]] które pożywiały się z przynoszonych przez mieszkańców słoików z krwią.

Wysadzony przez [[Edmund]] za pomocą dynamitu

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
