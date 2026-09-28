---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "30"
płeć: "Mężczyzna"
zaimki:
status: "nie żyje"
lokacja:
rodziny: []
rasy: []
organizacje: ["[[Górnicy Cripple Creek]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Robert „Bob” Sanders.png]]"
aliases: ["Robert \"Bob\" Sanders"]
kanka_id: 6934348
---

![[Robert „Bob” Sanders.png|300]]

## Opis

Górnik( Na fot. z lewej)  który został wysłany przez [[Carl Bradshaw]]wraz z jego towarzyszem [[Albert Quint]] aby wykonać kilka strategicznych wystrzałów dynamitem by poszerzyć tunele i odnaleźć bogate żyły złota.

W wyniku błędu w pomiarach ( po drugiej stronie ściany nie była lita skała jak zakładali, a pusta przetrzeń starych tuneli porzuconych kopalnii) zawalił się na nich strop. Sanders zmarł pod zawałem. Jego ciało zostało wyssane przez [[Pnącza Czarnych Róż]] A jego duch pozostał przywiązany do rumowiska pod którym zginął.

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
