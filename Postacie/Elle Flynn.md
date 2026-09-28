---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek:
płeć:
zaimki:
status: "żyje"
lokacja: "[[Denver]]"
rodziny: ["[[Smith]]"]
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Elle Flynn.png]]"
aliases: []
kanka_id: 6934755
---

![[Elle Flynn.png|300]]

## Opis

Żona [[Benjamin Smith]], opuściła męża bo ciągle pił. Zniknęła na 4 lata.

Benjamin odnalazł ją w [[Denver]] w szponach [[Kult Hastura]] a przede wszystkim [[Basil Torrance]]. Miała zostać gwiazdą filmową w [[Thule Studios]] ale zamiast tego uwięziono ją i trzymano jako "żonę" dla [[Hastur]] . Zaślubiny miały być częścią filmu tworzonego przez studio, na podstawie sztuki [[Król w Żółci]]

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
