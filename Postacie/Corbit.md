---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "50"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Boston]]"
rodziny: []
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Corbit.png]]"
aliases: []
kanka_id: 6547968
---

![[Corbit.png|300]]

## Opis

Mieszkaniec [[Dom Corbita]] w [[Boston]] i twórca [[Dziennik Corbita]]

Spętał swego ducha we własnych zwłokach i nawiedzał po śmierci swój dom przeganiając kolejnych lokatorów.

Ostatecznie zniszczony przez [[Lilian Harding]] i [[Cole Phelps]] z [[Agencja Detektywistyczna Phelps & Harding]] z pomocą [[Rytualny Nóż]] po tym gdy 6 funkcjonariuszy [[Policja]] umarło w piwnicy. Uszkodzili oni jednak na tyle jego magiczną osłonę, umożliwiając badaczom zwycięstwo.

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
