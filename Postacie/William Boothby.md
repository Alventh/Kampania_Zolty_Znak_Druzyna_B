---
kategoria: "postać"
typ: "Gracz"
tytuł: "Barman"
wiek: "30"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Restauracja Gaetano's]]"
rodziny: ["[[Boothby]]"]
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz:
aliases: []
kanka_id: 7937588
---

## Opis

Barman w [[Restauracja Gaetano's]] zarządzanej przez [[Bruno Mauro]] ale należącej do [[Rodzina Carlino]].
Ma psa, Rottweilera imieniem [[Legat]]. W trakcie [[Dźwięk na jeziorze Sloan]] był na brzegu gdzie napotkał [[Jack „Byk” Callahan|Jack "Byk" Callahan]], [[Nolan Hawthorne]] oraz [[Tommy „Spryciarz” Malone|Tommy "Spryciarz" Malone]]. Zaatakowali oni Williama oraz mocno poturbowali Legata.

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
