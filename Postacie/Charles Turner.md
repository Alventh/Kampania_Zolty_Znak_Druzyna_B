---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "46"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Gospoda Charlsa Turnera]]"
rodziny: ["[[Turner]]"]
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Charles Turner.jpg]]"
aliases: []
kanka_id: 6940123
---

![[Charles Turner.jpg|300]]

## Opis

Mieszkaniec [[Cripple Creek]] i właściciel [[Gospoda Charlsa Turnera]] którą prowadzi wraz z córką [[Elisabeth Turner]]

Był jednym z mieszkańców których namówił [[Sherman Coolidge]] do składania ofiar z krwi na [[Ołtarz w górach]].

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
