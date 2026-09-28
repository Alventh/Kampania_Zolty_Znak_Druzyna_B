---
name: "Ogród przy domu Shermana Coolidge"
kategoria: "lokacja"
typ: "Ogród"
rodzic: "[[Cripple Creek]]"
tagi: []
prywatne: false
image: "[[Ogród przy domu Shermana Coolidge.webp]]"
aliases: []
kanka_id: 8877103
---

![[Ogród przy domu Shermana Coolidge.webp|300]]

## Opis

Ogrod koło domu [[Sherman Coolidge]] w [[Cripple Creek]]. Rośnie w nim wielki dąb na którym wiszą spiralne symbole związene z [[Arapaho (rasa, Car)|Arapaho]] i [[Palamque]]

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
