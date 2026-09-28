---
kategoria: "postać"
typ: "NPC"
tytuł: "Rybak"
wiek: "62"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Jezioro Sloan]]"
rodziny: []
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Lucke Klausen.png]]"
aliases: []
kanka_id: 6938324
---

![[Lucke Klausen.png|300]]

## Opis

Rybak w średnim wieku, pochodzący z Niemiec ([[Niemcy]])

Całymi dniami przesiaduje nad brzegiem [[Jezioro Sloan]] i łowi ryby. To on odnalazł [[Butelka z listem]] i przekazał ją [[Edward Herbert Tomson]]

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
