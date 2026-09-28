---
kategoria: "postać"
typ: "NPC"
tytuł: "Polityk"
wiek: "48"
płeć: "Mężczyzna"
zaimki: "On"
status: "żyje"
lokacja: "[[Denver]]"
rodziny: []
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Benjamin F. Stapleton.png]]"
aliases: []
kanka_id: 7937556
---

![[Benjamin F. Stapleton.png|300]]

## Opis

Kandydat na burmistrza [[Denver]], był głównym przeciwnikiem [[Dewey C. Bailey]] w wyborach po [[Pełnia Aldebaran]] w Sierpniu 1920 roku. Nie udało mu się wygrać, ale był silnym kandydatem który nawet po przegranych wyborach stanowił silną opozycję w mieście dla rzędów Baileya.

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
