---
kategoria: "postać"
typ: "NPC"
tytuł: "Zegarmistrz"
wiek:
płeć: "Mężczyzna"
zaimki:
status: "nie żyje"
lokacja: "[[Denver]]"
rodziny: []
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz:
aliases: []
kanka_id: 9260617
---

## Opis

Zegarmistrz z [[Denver]] który miał manię na punkcie nieśmiertelności. Zdobył [[Liber Temporis]] i zaklął [[Dawca Czasu]] w [[ZłotyZegarekUchrmachera]]. Utknął w pętli czasowej która ciągle powtarzała jeden dzień. Postradał zmysły i został zamknięty w [[Szpital Psychiatryczny Denver]]. Tam został zamordowany przez śledzącego go [[OgarzTindalos]].

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
