---
kategoria: "postać"
typ: "NPC"
tytuł: "Student"
wiek: "21"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja:
rodziny: []
rasy: []
organizacje: ["[[Kult Nolana]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Tommy „Spryciarz” Malone.jpg]]"
aliases: ["Tommy \"Spryciarz\" Malone"]
kanka_id: 7138311
---

![[Tommy „Spryciarz” Malone.jpg|300]]

## Opis

Student Chemii na [[Uniwersytet Denver (lokacja)|Uniwersytet Denver]] kumpel [[Nolan Hawthorne]] oraz

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
