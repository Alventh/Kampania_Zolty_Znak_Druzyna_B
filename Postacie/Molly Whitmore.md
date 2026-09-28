---
kategoria: "postać"
typ: "NPC"
tytuł: "Studentka"
wiek: "20"
płeć: "Kobieta"
zaimki:
status: "żyje"
lokacja: "[[Uniwersytet Denver (lokacja)]]"
rodziny: []
rasy: []
organizacje: ["[[Kult Nolana]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Molly Whitmore.jpg]]"
aliases: []
kanka_id: 7138310
---

![[Molly Whitmore.jpg|300]]

## Opis

Molly Whitmore, studentka Literatury na [[Uniwersytet Denver (lokacja)|Uniwersytet Denver]]. Zakochana w [[Nolan Hawthorne]], poszukuje dla niego manuskryptów [[Dante Aligheri]] z [[Boska Komedia]]

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
