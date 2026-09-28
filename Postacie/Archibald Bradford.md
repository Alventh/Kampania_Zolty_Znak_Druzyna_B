---
kategoria: "postać"
typ: "NPC"
tytuł: "Szeryf"
wiek: "27"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Cripple Creek]]"
rodziny: []
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Archibald Bradford.png]]"
aliases: []
kanka_id: 6940109
---

![[Archibald Bradford.png|300]]

## Opis

Szeryf miasteczka [[Cripple Creek]]. Od czasu [[Zamknięcie Kopalni]] popadł w alkoholizm nie radząc sobie kompletnie z bezrobotnymi górnikami. Przesiaduje w [[Gospoda Charlsa Turnera]].

Brał udział w eksploracji [[Kopalnia w Cripple Creek]] wraz z badaczami oraz w [[Śmierć Ethana Epines]] w [[Komnata pod posiadłością Bethania]]

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
