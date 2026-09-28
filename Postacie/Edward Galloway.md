---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek:
płeć: "Mężczyzna"
zaimki:
status: "nie żyje"
lokacja: "[[Denver]]"
rodziny: ["[[Galloway]]"]
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz:
aliases: []
kanka_id: 9260543
---

## Opis

Rodzony brat [[Wilhelm Galloway]], stryj [[Leo Galloway]] oraz pradziadek [[Stanley Galloway]]. To do niego Wilhelm wysłał [[Liber Temporis]] i planował ją od niego odebrać. Ale gdy [[Jaques Epines]] dla którego księga była zamówiona zmarł, książka nigdy nie została odebrana. Była przekazywana z pokolenia na pokolenia aż otrzymał ją Stanley.

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
