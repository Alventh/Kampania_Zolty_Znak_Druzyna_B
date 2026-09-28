---
kategoria: "postać"
typ: "NPC"
tytuł: "Burmistrz"
wiek: "36"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Cripple Creek]]"
rodziny: ["[[Miller]]"]
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Hank Miller.png]]"
aliases: []
kanka_id: 6940064
---

![[Hank Miller.png|300]]

## Opis

Burmistrz [[Cripple Creek]] były górnik.

Był członkiem ekipy eksplorującej [[Kopalnia w Cripple Creek]]. To na niego rzucił się [[Carl Bradshaw]] pod postacią [[Szczurowiec]].

Bardzo dba o swoich ludzi, wspierał wszystkich po [[Zamknięcie Kopalni]]. Silny przywódca który nie bał się ruszyć wraz z badaczami do [[Komnata pod posiadłością Bethania]] szukając ratunku dla mieszkańców.

Mąż [[Eunice Miller]] ,ojciec [[Ruth Miller]] i  którzy zmarli w trakcie wydarzenia [[Śmierć Ethana Epines]]

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
