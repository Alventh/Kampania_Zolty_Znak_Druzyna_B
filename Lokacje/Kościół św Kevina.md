---
name: "Kościół św Kevina"
kategoria: "lokacja"
typ: "Kościół"
rodzic: "[[Cripple Creek]]"
tagi: []
prywatne: false
image: "[[Kościół św Kevina.png]]"
aliases: []
kanka_id: 6940056
---

![[Kościół św Kevina.png|300]]

## Opis

Budynek należący do [[Kościół Katolicki]]

Prałatem jest tam [[Edmund]], wcześniej [[Percival Donahew]]

Na pobliskim cmentarzu pochowani są mieszkańcy [[Cripple Creek]] między innymi rodzina [[Galloway]].

W podziemiach kościoła znajdują się katakumby. Po [[Trzęsienie ziemi]] odkryła się wcześniej zamurowana komnata będąca kiedyś mauzoleum rodziny [[Epines]].

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
