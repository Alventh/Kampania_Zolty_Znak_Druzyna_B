---
kategoria: "postać"
typ: "NPC"
tytuł: "Pielęgniarka"
wiek: "31"
płeć: "Kobieta"
zaimki:
status: "żyje"
lokacja: "[[Szpital Św. Antoniego]]"
rodziny: ["[[Boothby]]"]
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Marry Boothby.png]]"
aliases: []
kanka_id: 7937661
---

![[Marry Boothby.png|300]]

## Opis

Była żona [[William Boothby]]. Pracuje w [[Szpital Św. Antoniego]].

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
