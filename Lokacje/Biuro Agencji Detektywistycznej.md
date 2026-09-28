---
name: "Biuro Agencji Detektywistycznej"
kategoria: "lokacja"
typ: "Biuro"
rodzic: "[[Denver]]"
tagi: []
prywatne: false
image: "[[Biuro Agencji Detektywistycznej.png]]"
aliases: []
kanka_id: 6937552
---

![[Biuro Agencji Detektywistycznej.png|300]]

## Opis

Biuro [[Agencja Detektywistyczna Phelps & Harding]] znajdujące się na Washington Street w [[Denver]] nieopodal [[Redakcja Denver Post]]. Służy również za mieszkanie [[Lilian Harding]] i [[Cole Phelps]]

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
