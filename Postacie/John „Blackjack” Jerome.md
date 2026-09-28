---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "53"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Chicago]]"
rodziny: []
rasy: []
organizacje: ["[[Agencja Detektywistyczna Johnna „Blackjacka” Jerome]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[John „Blackjack” Jerome.png]]"
aliases: ["John \"Blackjack\" Jerome"]
kanka_id: 6934503
---

![[John „Blackjack” Jerome.png|300]]

## Opis

Założyciel [[Agencja Detektywistyczna Johnna „Blackjacka” Jerome|Agencja Detektywistyczna Johnna "Blackjacka" Jerome]] z [[Chicago]]

Został wynajęty przez Burmistrza [[Denver]] [[Dewey C. Bailey]] do stłamszenia zamieszek z Sierpnia 1920 roku.

Tak naprawdę miał służyć jedynie jako kozioł ofiarny dla niecnych planów [[Kult Hastura]]

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
