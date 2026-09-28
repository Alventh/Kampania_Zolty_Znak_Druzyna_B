---
kategoria: "postać"
typ: "NPC"
tytuł: "Gwiazda Filmowa"
wiek: "26"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Denver]]"
rodziny: []
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Jack Walters.png]]"
aliases: []
kanka_id: 6940214
---

![[Jack Walters.png|300]]

## Opis

Gwiazdor filmowy, kochanek [[Elle Flynn]]. Kiedy zaginęła, wynajął [[Agencja Detektywistyczna Phelps & Harding]] by ją odnaleźli.

Uczestniczył w śledztwie bo jak stwierdził "Chce się lepiej przygotować do roli detektywa". Miał odgrywać taką postać w jego nadchodzącym filmie "Sleeping with the Fishes"

Brał udział w wydarzeniach w [[Chinatown (wydarzenie)|Chinatown]] ([[Chinatown (lokacja)|Chinatown]] - miejsce) oraz pomagał przedostać się do posiadłosci [[Basil Torrance]]. Zniknął w niewyjaśnionych okolicznościach pozostawiając po sobie jedynie kopię [[Król w Żółci]]

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
