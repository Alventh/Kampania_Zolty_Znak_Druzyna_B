---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "130"
płeć: "Mężczyzna"
zaimki:
status: "nie żyje"
lokacja: "[[Cripple Creek]]"
rodziny: ["[[Epines]]"]
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: true
obraz: "[[Ethan Epines.png]]"
aliases: []
tags: ["mg"]
kanka_id: 6547315
---

![[Ethan Epines.png|300]]

> [!mg] Wpis prywatny w Kance — tylko dla MG

## Opis

ur. w 1784 roku ([[Narodziny Ethana Epines]]) w południowej [[Francja]]Ethan Epines, dziedzic rodziny [[Epines]]. Kontynuował on dzieło swoich rodziców [[Jaques Epines]] i [[Pierette Epines]] po ich [[Śmierć Jaques i Pierette Epines]]. Mieszkał w [[Bethania]], posiadłości rodowej w [[Cripple Creek]]

Zmarł w trakcie [[Nieudany Rytuał Otwarcia Bramy]]  do [[Carcossa]], gdy składał w ofierze młodego [[Leo Galloway]] z wykorzystaniem [[Artefakt Z Cripple Creek]]. Doszło do wstrząsów przez które zawaliło się na nich obu sklepienie [[Komnata pod posiadłością Bethania]] w której odbywał się rytuał. Ostatnim tchnieniem związał swoją krew zaklęciem, które miało utrzymać go przy życiu i umożliwić powrót. Do krwi poszukującej sił witalnych dostały się korzenie jego rodowych czarnych róż ogrodu ponad komnatą. Przejął  kontrolę nad [[Pnącza Czarnych Róż]] i rozsyła je po całej okolicy by wysysały krew i siły życiowe mieszkańców. Osoby wyssane przez nie zmieniają się w [[Szczurowiec]]

Ostatecznie pokonany 25 Sierpnia 1920 roku ( [[Śmierć Ethana Epines]] ) przez [[Lilian Harding]] [[Cole Phelps]] [[Benjamin Smith]] [[Victoria Woodhull]] oraz [[Edmund]]

Autor:

[[Dziennik Ethana Epines]]

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
