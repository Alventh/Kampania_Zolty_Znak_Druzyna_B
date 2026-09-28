---
name: "Smoczy Dwór"
kategoria: "lokacja"
typ: "Bar"
rodzic: "[[Chinatown (lokacja)]]"
tagi: []
prywatne: false
image: "[[Smoczy Dwór.png]]"
aliases: []
kanka_id: 6940215
---

![[Smoczy Dwór.png|300]]

## Opis

Ekskluzywny lokal do spożywania Opium i innych uciech cielesnych znajdujący się w [[Chinatown (lokacja)|Chinatown]]. Należy do [[Triady]] jest prowadzony przez [[Madam Feng]]

Pracowała tu chodź krótko [[Elle Flynn]], zanim została zabrana przez [[Basil Torrance]].

Miejsce wydarzeń [[Chinatown (wydarzenie)|Chinatown]]

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
