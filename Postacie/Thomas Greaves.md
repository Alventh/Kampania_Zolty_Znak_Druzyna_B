---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "42"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Denver]]"
rodziny: []
rasy: []
organizacje: ["[[Ekspedycja]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Thomas Greaves.jpg]]"
aliases: []
kanka_id: 6996627
---

![[Thomas Greaves.jpg|300]]

## Opis


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
