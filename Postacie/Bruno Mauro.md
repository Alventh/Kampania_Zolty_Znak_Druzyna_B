---
kategoria: "postać"
typ:
tytuł:
wiek:
płeć:
zaimki:
status: "żyje"
lokacja:
rodziny: []
rasy: []
organizacje: ["[[Rodzina Carlino]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Bruno Mauro.png]]"
aliases: []
kanka_id: 7387338
---

![[Bruno Mauro.png|300]]

## Opis

Zarządca [[Restauracja Gaetano's]], prawa ręka Braci Carlino.

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
