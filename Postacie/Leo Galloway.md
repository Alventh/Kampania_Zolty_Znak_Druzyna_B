---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek:
płeć: "Mężczyzna"
zaimki:
status: "nie żyje"
lokacja: "[[Komnata pod posiadłością Bethania]]"
rodziny: ["[[Galloway]]"]
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Leo Galloway.jpg]]"
aliases: []
kanka_id: 6932788
---

![[Leo Galloway.jpg|300]]

## Opis

"Leo" a właściwie Leonard Galloway był synem [[Wilhelm Galloway]] oraz [[Margaret Galloway]].  Wraz z rodzicami mieszkał w [[Cripple Creek]]

Złożony w ofierze w trakcie rytuału przez [[Ethan Epines]] w podziemiach [[Bethania]]

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
