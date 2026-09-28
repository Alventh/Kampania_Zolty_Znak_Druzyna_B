---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek:
płeć: "Mężczyzna"
zaimki:
status: "nie żyje"
lokacja: "[[Denver]]"
rodziny: []
rasy: []
organizacje: ["[[Kult Hastura]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Owen Pierce.jpg]]"
aliases: []
kanka_id: 6934214
---

![[Owen Pierce.jpg|300]]

## Opis

Inspektor Straży Pożarnej w [[Denver]]

Dobry znajomy [[Arthur Holdem]]. Razem należeli do [[Kult Hastura]]. Pierce dołączył do kultu dużo później w 1918, raptem 2 lata przed swoją śmiercią.

Kiedy [[Dewey C. Bailey]] ogłosił kultowi swój plan wykorzystania [[Zamieszki W Denver]] do zdobycia ofiar do złożenia w trakcie [[Pełnia Aldebaran]], Arthur postanowił odejść i poprosił Owena o pomoc. Niestety ich plan został odkryty przez [[William Candlish]]. Owen został zamknięty w [[Szpital Psychiatryczny Denver]] gdzie [[Dorian Shaw]] próbował go ponownie zindoktrynować.

Owen oszalał w wyniku tego procesu.

Zmarł w Listopadzie 1920 roku, kilka dni przed tym jak [[Lilian Harding]] pobita przez [[Benjamin Smith]] trafiła do [[Szpital Św. Antoniego]] znajdującego się po sąsiedzku od Szpitala Psychiatrycznego

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
