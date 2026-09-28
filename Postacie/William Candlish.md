---
kategoria: "postać"
typ: "NPC"
tytuł: "Szef Policji w Denver, \"Wielki Czarownik\""
wiek: "36"
płeć:
zaimki:
status: "nie żyje"
lokacja: "[[Denver]]"
rodziny: []
rasy: []
organizacje: ["[[Kult Hastura]]", "[[Policja]]", "[[Policja w Denver]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[William Candlish.jpg]]"
aliases: []
kanka_id: 6933956
---

![[William Candlish.jpg|300]]

## Opis

Szef [[Policja w Denver]]. Bliski współpracownik Burmistrza [[Dewey C. Bailey]].

Candlish był również "Wielkim Czarownikiem" [[Ku Klux Klan]]. Członków zarówno Policji jak i Klanu ( często jego współpracownicy należeli do obu tych ugrupowań) wykorzystywał do porywania ludzi których planował wraz [[Kult Hastura]] złożyć w ofierze na [[Farma Goździków]] w trakcie [[Pełnia Aldebaran]] w 1920 roku. Większość członków jego świty nie było świadomych jego okultystycznych zapędów, myśleli że przeprowadzają czystki na tle rasowym.

Candlish był jednym z oryginalnych członków Kultu Hastura, co zostało wspomniane w [[Opowieść Arthura]].

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
