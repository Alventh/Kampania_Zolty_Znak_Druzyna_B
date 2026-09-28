---
kategoria: "postać"
typ: "NPC"
tytuł: "Ministrant"
wiek: "14"
płeć: "Mężczyzna"
zaimki:
status: "nie żyje"
lokacja: "[[Cripple Creek]]"
rodziny: ["[[Miller]]"]
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Ruth Miller.png]]"
aliases: ["William \"Billy\" Miller"]
kanka_id: 6940289
---

![[Ruth Miller.png|300]]

## Opis

14 letni chłopak. Syn [[Hank Miller]] i [[Eunice Miller]] oraz brat [[Ruth Miller]]

Był ministrantem w [[Kościół św Kevina]] w [[Cripple Creek]] pracował blisko z [[Edmund]] którego darzył szacunkiem.

Był najlepszym przyjacielem [[Marvin Folger]] i nie odwrócił się od niego nawet kiedy chłopak został straszliwie oszpecony.

Często bawili się nad strumieniem. Tam też znaleźli oni w krzakach [[Dr. Ernest Ceriani Raport Medyczny]] który dzień wcześniej porwał wiatr.

Uczęszczał na zajęcia w [[Szkoła]] gdzie uczyła go [[Victoria Woodhull]]

Zmarł w [[Komnata pod posiadłością Bethania]] w trakcie wydarzenia [[Śmierć Ethana Epines]]

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
