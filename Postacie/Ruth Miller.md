---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "10"
płeć: "Kobieta"
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
aliases: []
kanka_id: 6940288
---

![[Ruth Miller.png|300]]

## Opis

Córka [[Hank Miller]] i siostra [[William „Billy” Miller|William "Billy" Miller]]

Przyjaźniła się z [[Marvin Folger]] nawet po jego oszpeceniu przez chorbę.

Odnalazła [[Dr. Ernest Ceriani Raport Medyczny]] w krzakach nad strumieniem i przekazała go swojej nauczycielce [[Victoria Woodhull]] pod [[Kościół św Kevina]]

Zmarła w [[Komnata pod posiadłością Bethania]] w trakcie wydarzenia [[Śmierć Ethana Epines]]

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
