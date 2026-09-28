---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek:
płeć: "Kobieta"
zaimki:
status: "nie żyje"
lokacja: "[[Cripple Creek]]"
rodziny: ["[[Galloway]]"]
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Jane Folger.png]]"
aliases: []
kanka_id: 6932787
---

![[Jane Folger.png|300]]

## Opis

Żona [[Wilhelm Galloway]] oraz matka [[Leo Galloway]]. Nie wiadomo o niej wiele poza tym, że była miłością życia swojego męża.

Gdy zaginął jej mąż oraz syn, mieszkała jeszcze przez kilka lat w [[Cripple Creek]] po czym zmarła ze złamanego serca.

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
