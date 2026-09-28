---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek:
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja:
rodziny: []
rasy: []
organizacje: ["[[Kult Hastura]]", "[[Thule Studios]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Manny DeMarco.png]]"
aliases: []
kanka_id: 6933957
---

![[Manny DeMarco.png|300]]

## Opis

Szef [[Thule Studios]] i jeden z oryginalnych założycieli [[Kult Hastura]]

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
