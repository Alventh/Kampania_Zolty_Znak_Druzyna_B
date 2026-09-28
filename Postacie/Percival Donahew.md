---
kategoria: "postać"
typ: "NPC"
tytuł: "Ksiądz"
wiek: "98"
płeć: "Mężczyzna"
zaimki:
status: "nie żyje"
lokacja: "[[Cripple Creek]]"
rodziny: []
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Percival Donahew.png]]"
aliases: []
kanka_id: 6940055
---

![[Percival Donahew.png|300]]

## Opis

Prałat w [[Kościół św Kevina]] w XIX wieku. Jego następcą jest [[Edmund]]

Był powodem odejścia [[Sherman Coolidge]] od [[Kościół Katolicki]] po tym jak Percival odmówił Coolidgeowi udostępnienia swojego wozu. Sherman chciał nim przetransportować chorą na gruźlicę żonę do Szpitala w [[Denver]].

Percival odmówił twierdząć że wystarczy żarliwie się modlić.

@Sophie zmarła, a Sherman pochował ją w swoim ogrodzie. Jego noga przez kolejnych 50 lat nie stanęła na kościelnej ziemi.

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
