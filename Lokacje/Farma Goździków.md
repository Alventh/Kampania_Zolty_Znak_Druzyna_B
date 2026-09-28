---
name: "Farma Goździków"
kategoria: "lokacja"
typ: "Farma"
rodzic: "[[Denver]]"
tagi: []
prywatne: false
image: "[[Bitwa Płonących Krzyży.png]]"
aliases: []
kanka_id: 6934257
---

![[Bitwa Płonących Krzyży.png|300]]

## Opis

Farma Goździków należąca do wyredagowane na której [[William Candlish]] wraz ze swoimi ludźmi miał w 1920 roku w trakcie [[Pełnia Aldebaran]] złożyć w ofierze ludzi w ramach rytuału [[Kult Hastura]].

To tu przetrzymywany był [[Arthur Holdem]].

Była miejscem częstych spotkań Kultu od momentu jego powstania ([[Powstanie Kultu Hastura w Denver]]) aż do wydarzeń [[Bitwa Płonących Krzyży]] w której spłonęła.

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
