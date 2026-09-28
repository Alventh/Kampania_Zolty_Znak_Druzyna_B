---
kategoria: "postać"
typ: "NPC"
tytuł: "Pies"
wiek: "3"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Denver]]"
rodziny: []
rasy: ["[[Rottweiler]]"]
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Legat.png]]"
aliases: []
kanka_id: 7937639
---

![[Legat.png|300]]

## Opis

[[Rottweiler]] należący do [[William Boothby]]. Był na spacerze z Williamem w trakcie [[Dźwięk na jeziorze Sloan]]. Został mocno kopnięty przez [[Jack „Byk” Callahan|Jack "Byk" Callahan]]. William chwycił go w ręce i uciekł.

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
