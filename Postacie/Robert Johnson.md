---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "19"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Szpital Psychiatryczny Denver]]"
rodziny: []
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Robert Johnson.png]]"
aliases: []
kanka_id: 6934786
---

![[Robert Johnson.png|300]]

## Opis

Muzyk grający swego czasu w speakeasy [[Williams & Graham]]&Graham wraz z kilkoma innymi czarnoskórymi mężczyznami. Zostali porwani przez [[William Candlish]] który wykorzystał członków [[Ku Klux Klan]] w szeregach [[Policja w Denver]] aby zbierać ofiary dla [[Hastur]] które [[Kult Hastura]] planował złożyć 8 Sierpnia 1920 roku w trakcie [[Pełnia Aldebaran]]

Został przybity do krzyża, ale uratowany przez [[Lilian Harding]] [[Cole Phelps]] [[Benjamin Smith]] i [[Axel Bonton]]

Stracił możliwość grania na gitarze po uszkodzeniu przedramion przez gwoździe za pomocą których był przybity do krzyża.

Zatrudnił się na kolei, pracował razem z Benjaminem Smithem.

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
