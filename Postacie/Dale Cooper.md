---
kategoria: "postać"
typ: "NPC"
tytuł: "Antykwariusz"
wiek: "28"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Denver]]"
rodziny: []
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Dale Cooper.png]]"
aliases: []
kanka_id: 6937559
---

![[Dale Cooper.png|300]]

## Opis

Antykwariusz. Właściciel [[Antykwariat Biały Kruk]] w [[Denver]]

Wyjechał wraz z Eve Dyer aby uratować znanego poetę Crimsona. Pozostawił antykwariat pod okiem [[Victoria Woodhull]]

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
