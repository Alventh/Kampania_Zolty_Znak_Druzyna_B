---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "???"
płeć: "???"
zaimki:
status: "żyje"
lokacja:
rodziny: []
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Dobroczyńca.jpg]]"
aliases: []
kanka_id: 6934631
---

![[Dobroczyńca.jpg|300]]

## Opis

Dziwny byt pojawiający się pod postacią chłopca siedzącego na murze otaczającym polanę.

Rozmowa z nim możliwa jest tylko po dotknięciu [[Bransoleta z koniem|BransoletaZKoniem]] po którym osoba trzymająca bransoletę zapada w sen i przenosi się na wyżej wspomnianą polanę.

Wydaje się być wszechwiedzący. Dzieli się swoją wiedzą chętnie, ale mówi zagadkami i zawsze prosi o coś w zamian.

W zamian za informację ostrzeżenie przed "Gwiazdą" poprosił [[Benjamin Smith]] o odnalezienie "małego nic nie znaczącego drobiazgu, ot kamyczka" którym okazał się [[Artefakt Z Cripple Creek]].

Po odzyskaniu przez Benjamina artefaktu, Dobroczyńca udzielił mu informacji, że człowiekiem który wie coś na temat jego żony jest @JackWalters. W zamian za tę informację, poprosił o zakopanie Artefaktu na [[Pusta Działka w Denver]]

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
