---
kategoria: "postać"
typ: "Gracz"
tytuł:
wiek: "26"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Boulder]]"
rodziny: []
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Axel Bonton.png]]"
aliases: []
kanka_id: 6934258
---

![[Axel Bonton.png|300]]

## Opis

Poszukiwacz przygód który pomagał [[Lilian Harding]] [[Cole Phelps]] i [[Benjamin Smith]] w poszukiwaniach [[Arthur Holdem]] na zlecenie [[Dean „Dinky” Singleton|Dean "Dinky" Singleton]]

Okazał się mocno niezrównoważony. Strzelając do niezagrażających im wówczas pracowników [[Agencja Detektywistyczna Phelps & Harding]]

Gdy cała ekipa została porwana przez [[William Candlish]]  i miała zostać złożona w ofierze [[Hastur]] w trakcie [[Pełnia Aldebaran]] pomógł ocalić księgowego i kilku czarnoskórych muzyków w tym [[Robert Johnson]]

Sam został porażony przez [[Śpiew Hastura]] rzucany przez Candlisha. Po wszystkim został umieszczony w szpitalu w [[Boulder]]. Spędził tu kolejne miesiące, ale jego stan fizyczny się nie poprawia. Za to jego umysł poddał się paranoji, lub wpływom jakichś dziwnych sił.

Jego lekarzem jest [[Ernest Ceriani]] . znalazł on w krwi Axela jakąś substację, która nie daje się przebadać, aktywnie "ucieka" przed próbami pobrania próbki.

Axel gdy dowiedział się o tym, że Lilian również przebywa w szpitalu, poprosił doktora Ceriani o spotkanie z nią. Bredził i opowiadał o mrocznych wizjach końca świata.

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
