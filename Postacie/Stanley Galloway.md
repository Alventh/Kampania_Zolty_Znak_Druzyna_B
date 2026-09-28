---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek:
płeć:
zaimki:
status: "żyje"
lokacja: "[[Denver]]"
rodziny: ["[[Galloway]]"]
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz:
aliases: []
kanka_id: 9260542
---

## Opis

Bogaty przemysłowiec mieszkający w [[Posiadłość Stanleya Galloway]] w [[Capitoll Hill]] w [[Denver]]. Jest Potomkiem [[Edward Galloway]] oraz jest spokrewniony z [[Wilhelm Galloway]].

Posiadał przekazywaną z pokolenia na pokolenie księgę [[Liber Temporis]]

## Wygląd


## Osobowość


## Powiązania

| Z kim | Relacja | Stosunek |
| --- | --- | --- |
| [[Posiadłość Stanleya Galloway]] | Lokacja |  |

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
