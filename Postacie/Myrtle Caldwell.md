---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "80"
płeć: "Kobieta"
zaimki:
status: "nie żyje"
lokacja: "[[Cripple Creek]]"
rodziny: ["[[Caldwell]]"]
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Myrtle Caldwell.png]]"
aliases: []
kanka_id: 6940213
---

![[Myrtle Caldwell.png|300]]

## Opis

Stara mieszkanka [[Cripple Creek]] emerytowana nauczycielka ze [[Szkoła]]. Zastąpiła ją [[Victoria Woodhull]]

Kiedy umierała poczuła skruchę i opowiedziała księdzu [[Edmund]], że przez większość życia składała ofiary pogańskim bożkom, i że wielu mieszkańców robiło to samo.

Zmarła zostawiając swojego chorego umysłowo 40 letniego syna [[Cecile Caldwell]]

## Wygląd


## Osobowość


## Powiązania

| Z kim | Relacja | Stosunek |
| --- | --- | --- |
|  |  |  |

> [!mg]- Tylko dla MG
> 

## Ekwipunek

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ
FROM "Przedmioty"
WHERE właściciel = this.file.link AND kategoria != "indeks"
SORT file.name
```

## Autor dzienników

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", data
FROM "Dzienniki"
WHERE autor = this.file.link AND kategoria != "indeks"
SORT file.name
```

## Zlecone zadania

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", ukończone
FROM "Zadania"
WHERE zlecający = this.file.link AND kategoria != "indeks"
SORT file.name
```
