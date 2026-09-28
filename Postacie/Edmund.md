---
kategoria: "postać"
typ: "NPC"
tytuł: "Ksiądz"
wiek: "70"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Cripple Creek]]"
rodziny: []
rasy: []
organizacje: ["[[Kościół Katolicki]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Edmund.png]]"
aliases: []
kanka_id: 6934432
---

![[Edmund.png|300]]

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
