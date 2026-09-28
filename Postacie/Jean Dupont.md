---
kategoria: "postać"
typ: "NPC"
tytuł: "Pierwszy Oficer"
wiek: "34"
płeć: "Mężczyzna"
zaimki:
status: "nie żyje"
lokacja: "[[Francja]]"
rodziny: []
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Jean Dupont.png]]"
aliases: []
kanka_id: 6938331
---

![[Jean Dupont.png|300]]

## Opis

Pierwszy oficer na francuskim ([[Francja]]) okręcie [[Montmartre]]. Statek wypłynął z [[Paryż]], przepłynął przez [[Plymouth]] w [[Anglia]] i [[QueensTown]] w [[Irlandia]] i popłynął w kierunku portu w @NowyJork w [[USA (mapa)|USA]] ale nigdy tam nie dotarł.

Jean napisał w nieokreślonym momencie rejsu [[List Z Butelki]] który został odnaleziony 9 Sierpnia 1920 roku w [[Jezioro Sloan]]

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
