---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "18"
płeć: "Kobieta"
zaimki:
status: "żyje"
lokacja: "[[Cripple Creek]]"
rodziny: ["[[Turner]]"]
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Elisabeth Turner.png]]"
aliases: []
kanka_id: 6940124
---

![[Elisabeth Turner.png|300]]

## Opis

Córka [[Charles Turner]]. pracuje jako barmanka w gospodzie ojca. Poruszona jednym z kazań [[Edmund]] postanawia wyznać mu prawdę o tym, że jej ojciec oraz część mieszkańców [[Cripple Creek]] składa dziwne ofiary na [[Ołtarz w górach]] jakiemuś pogańskiemu bożkowi.

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
