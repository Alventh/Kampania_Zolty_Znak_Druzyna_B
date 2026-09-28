---
kategoria: "postać"
typ:
tytuł:
wiek: "37"
płeć:
zaimki:
status: "żyje"
lokacja: "[[Denver]]"
rodziny: []
rasy: []
organizacje: ["[[Rodzina Carlino]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Vito „Łamacz” Moretti.png]]"
aliases: ["Vito \"Łamacz\" Moretti"]
kanka_id: 7387281
---

![[Vito „Łamacz” Moretti.png|300]]

## Opis

Silna ręka [[Bruno Mauro]]. Z duetu [[Enzo „Gruby” Bianchi|Enzo "Gruby" Bianchi]] i Vito "Łamacz" Moretti, ro on jest tym który najpierw bije a potem pyta.

Obecnie pilnuje spłaty długu za uszkodzony projektor w [[Kino Rivoli]]

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
