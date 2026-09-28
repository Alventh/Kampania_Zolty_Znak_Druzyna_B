---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "24"
płeć: "Kobieta"
zaimki:
status: "nie żyje"
lokacja: "[[Cripple Creek]]"
rodziny: ["[[Coolidge]]"]
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz:
aliases: []
kanka_id: 6940054
---

## Opis

Żona [[Sherman Coolidge]] zmarła na gruźlicę kiedy ksiądz [[Percival Donahew]] nie użyczył im wozu aby mogli pojechać do szpitala.

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
