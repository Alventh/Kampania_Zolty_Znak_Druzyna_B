---
kategoria: "postać"
typ: "NPC"
tytuł: "Doktor Psychiatra"
wiek: "53"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Boulder]]"
rodziny: []
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Nathan S. Kline.png]]"
aliases: []
kanka_id: 6969414
---

![[Nathan S. Kline.png|300]]

## Opis

Lekarz z [[Boulder]], znajomy [[Ernest Ceriani]]. To za jego sprawą, zgodził się zająć rozchwianą psychicznie [[Elle Flynn]]. Jest jednym z pierwszych psychiatrów który stosuje środki farmakologiczne do leczenia chorób umysłu. Szybko umieścił Elle na liście swoich pacjentów i zaczął podawać jej Rezerpinę. Środek wyizolowany z himalajskiej rośliny, Rauwolfii żmijowej.

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
