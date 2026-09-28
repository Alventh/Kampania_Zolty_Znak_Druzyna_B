---
kategoria: "postać"
typ: "NPC"
tytuł: "Mistrz Ceremonii"
wiek: "53"
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
obraz: "[[Auguste „Gustave” Moreau.png]]"
aliases: ["Auguste \"Gustave\"  Moreau"]
kanka_id: 7937587
---

![[Auguste „Gustave” Moreau.png|300]]

## Opis

Był Mistrzem ceremonii w trakcie [[Aukcja]] w [[Opera w Denver]]. To on zaproponował dla [[William Boothby]] pracę przy tej uroczystości. Prawdziwy specjalista w swoim fachu.

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
