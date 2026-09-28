---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek:
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja:
rodziny: ["[[Galloway]]"]
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Wilhelm Galloway.webp]]"
aliases: []
kanka_id: 6571674
---

![[Wilhelm Galloway.webp|300]]

## Opis

Senior Rodu *(usunięty wpis)*. Pierwotnie pochodzi z [[Boston]], ale przeniósł się wraz z rodziną [[Margaret Galloway]]  do [[Cripple Creek]]. Doglądał transportów oraz odbudowy posiadłości [[Bethania]] dla rodziny [[Epines]]. Później zajmował się również zarządzaniem [[Kopalnia w Cripple Creek]]. Po kilku latach urodził mu się syn [[Leo Galloway]]

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
