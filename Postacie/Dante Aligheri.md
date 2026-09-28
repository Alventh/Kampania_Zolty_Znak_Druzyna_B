---
kategoria: "postać"
typ: "NPC"
tytuł: "Pisarz"
wiek: "56"
płeć: "Mężczyzna"
zaimki:
status: "nie żyje"
lokacja: "[[Włochy]]"
rodziny: []
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz:
aliases: []
kanka_id: 7138361
---

## Opis

Dante Alighieri (ur. w maju lub czerwcu 1265 we Florencji, zm. 13 lub 14 września 1321 w Rawennie) – włoski poeta, filozof i polityk,często nazywany „ostatnim poetą średniowiecza i jednocześnie pierwszym poetą nowych czasów”[2].

Jego najwybitniejszym dziełem jest poemat [[Boska Komedia]], uważany za arcydzieło literatury światowej i szczytowe osiągnięcie literatury średniowiecznej. Utwór jest w całości napisany po włosku.

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
