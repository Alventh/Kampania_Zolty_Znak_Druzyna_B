---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "15"
płeć:
zaimki:
status: "nie żyje"
lokacja: "[[Cripple Creek]]"
rodziny: ["[[Folger]]"]
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Marvin Folger.webp]]"
aliases: []
kanka_id: 6547498
---

![[Marvin Folger.webp|300]]

## Opis

Mieszkaniec [[Cripple Creek]]

Syn [[Jeremy Folger]] i [[Jane Folger]]

Zachorował po śmierci swego ojca. Straszliwie oszpecony chorobą, nie dawał za wygraną i cieszył się życiem do końca swych dni.

To badania jego krwi przeraziły [[Ernest Ceriani]]

Zmarł 23 Sierpnia 1920 roku, ostatecznie wyssany przez [[Ethan Epines]] i jego [[Pnącza Czarnych Róż]].

Pochowany przez [[Edmund]] i [[Benjamin Smith]]

Zmienił się w szczurowca

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
