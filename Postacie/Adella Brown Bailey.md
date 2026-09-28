---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek:
płeć: "Kobieta"
zaimki:
status: "żyje"
lokacja: "[[Denver]]"
rodziny: ["[[Bailey]]"]
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Adella Brown Bailey.png]]"
aliases: []
kanka_id: 7937544
---

![[Adella Brown Bailey.png|300]]

## Opis

Żona [[Dewey C. Bailey]], nie świadoma działalności okultystycznej męża.

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
