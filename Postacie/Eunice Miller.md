---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "35"
płeć: "Kobieta"
zaimki:
status: "żyje"
lokacja: "[[Cripple Creek]]"
rodziny: ["[[Miller]]"]
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz:
aliases: []
kanka_id: 8770269
---

## Opis

Mieszkanka [[Cripple Creek]], żona burmistrza [[Hank Miller]] oraz matka [[William „Billy” Miller|William "Billy" Miller]] i [[Ruth Miller]]

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
