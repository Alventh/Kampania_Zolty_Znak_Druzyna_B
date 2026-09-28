---
name: "Jezioro Sloan"
kategoria: "lokacja"
typ: "Jezioro"
rodzic: "[[Denver]]"
tagi: []
prywatne: true
image: "[[Jezioro Sloan.png]]"
aliases: []
kanka_id: 6938328
tags: ["mg"]
---

![[Jezioro Sloan.png|300]]

> [!mg] Wpis prywatny w Kance — tylko dla MG

## Opis

Jezioro znajdujące się w [[Denver]] zajmujące powierzchnię 72 hektarów

To tutaj [[Lucke Klausen]] odnalazł [[Butelka z listem]]

Jezioro powstało w 1866 roku na miejscu wcześniej przeznaczonym na pola uprawne. Ówczesny Prezydent miasta Andrew Johnson przekazał miasto niejakiemu Thomasowi M. Sloan. Który wykopał na tych terenach studnię trafiając na jakiś podwodny akwen. Wedle legendy, kolejnego ranka obudził się część jego farmy była pod wodą.

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
