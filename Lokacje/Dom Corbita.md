---
name: "Dom Corbita"
kategoria: "lokacja"
typ: "Budynek"
rodzic: "[[Boston]]"
tagi: []
prywatne: false
image: "[[Dom Corbita.png]]"
aliases: []
kanka_id: 6935858
---

![[Dom Corbita.png|300]]

## Opis

Dom w [[Boston]] należący pierwotnie do [[Corbit]]. Był przez Corbita nawiedzany, przeganiał on wszystkich którzy próbowali w nim zamieszkać.

[[Agencja Detektywistyczna Phelps & Harding]] przyjęła zlecenie na zbadanie tej sprawy. Zakończyło się to pokonaniem Corbitta i oczyszczeniem domu.

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
