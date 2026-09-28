---
kategoria: "postać"
typ: "Byt"
tytuł: "Król w żółci, Król w Łachmanach, Biesiadnik z Daleka, Nieznajomy"
wiek: "??"
płeć: "???"
zaimki:
status: "żyje"
lokacja: "[[Carcossa]]"
rodziny: []
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Hastur.png]]"
aliases: []
kanka_id: 6934347
---

![[Hastur.png|300]]

## Opis

?????????

![[9d879f30-5a7f-49f6-b997-0f7090f0f960_a8777a97.jpg]]

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
