---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "42"
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
obraz: "[[Jeremy Folger.png]]"
aliases: []
kanka_id: 6934788
---

![[Jeremy Folger.png|300]]

## Opis

Górnik w [[Kopalnia w Cripple Creek]]

Mąż [[Jane Folger]] i ojciec [[Marvin Folger]]

Umarł niedługo po śmierci [[Albert Quint]] i  . Jako jeden z niewielu zdecydował się próbować ich odkopać. Zobaczył ducha [[Leo Galloway]] i przerażony umarł kiedy w panice uciekając nadział się oczodołem na własny kilof.

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
