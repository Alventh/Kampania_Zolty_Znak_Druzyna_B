---
kategoria: "postać"
typ: "NPC"
tytuł: "Doktor"
wiek: "34"
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
obraz: "[[Ernest Ceriani.webp]]"
aliases: []
kanka_id: 6934790
---

![[Ernest Ceriani.webp|300]]

## Opis

Obwoźny lekarz w stanie [[Colorado]]. Często przyjeżdżał swym koniem do [[Cripple Creek]] gdzie zaprzyjaźnił się z [[Victoria Woodhull]] oraz [[Edmund]]

Udzielał pierwszej pomocy [[Lilian Harding]], [[Cole Phelps]] i [[Benjamin Smith]] kiedy Ci dachowali samochodem na wyjeździe z tunelu prowadzącego do Cripple Creek.

Prowadził badania nad chorym chłopcem [[Marvin Folger]]. To co odkrył zmroziło jego krew w żyłach i zaraz po [[Przyjazd do Cripple Creek]] Badaczy, wyjechał do  głównego szpitala w  [[Boulder]] aby tam zasięgnąć drugiej opinii.

Twórca:

[[Dr. Ernest Ceriani Raport Medyczny]]

Po wyjeździe z Cripple Creek poświęcił się badaniom nad krwią mieszkańców. Od Victorii dowiedział się, że większość mieszkańców umarła.

We wrześniu stał się lekarzem prowadzącym [[Axel Bonton]] w szpitalu w Boulder. Wykrył w jego krwii dziwną substancję, której nie udało mu się jednak zbadać gdyż, "ucieka" przed byciem zbadaną.

Na prośbę Victorii, zwrócił się do swojego kolegi [[Nathan S. Kline]] o przyjęcie [[Elle Flynn]] jako pacjentki, na co Nathan przystał.

12 Listopada 1920 roku, w trakcie dyżuru został poproszony przez Axela, o możliwość rozmowy z Lilian. Zadzwonił do niej i pokierował ją do jej byłego współpracownika.

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
