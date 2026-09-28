---
kategoria: "postać"
typ: "NPC"
tytuł: "Archeolog"
wiek: "52"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Muzeum Natury i Nauki (lokacja)]]"
rodziny: []
rasy: []
organizacje: ["[[Muzeum Natury i Nauki (organizacja)]]", "[[Uniwersytet Denver (organizacja)]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Edward Herbert Tomson.png]]"
aliases: []
kanka_id: 6938326
---

![[Edward Herbert Tomson.png|300]]

## Opis

Archeolog, specjalista od historii [[Francja]] oraz transatlantyckich podróży.

Otrzymał [[Butelka z listem]] od [[Lucke Klausen]] rybaka. Wyłowił on butelkę w [[Jezioro Sloan]].

Ustalił iż pochodzi on ze statku [[Montmartre]] i nie ma możliwości aby znalazł się w jeziorze w [[Denver]] w [[Colorado]].

W związku z brakiem funduszy i czasu na prowadzenie badań na własną rękę, zgłosił się do [[Agencja Detektywistyczna Phelps & Harding]] znanej w mieście z rozwiązywania dziwnych spraw.

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
