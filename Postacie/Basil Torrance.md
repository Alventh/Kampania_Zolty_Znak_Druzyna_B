---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "33"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Denver]]"
rodziny: []
rasy: []
organizacje: ["[[Thule Studios]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Basil Torrance.png]]"
aliases: []
kanka_id: 6934718
---

![[Basil Torrance.png|300]]

## Opis

Gwiazda filmowa z [[Denver]] pracująca w [[Thule Studios]].

Kierowany szaleńczymi podszeptami po przeczytaniu [[Król w Żółci]] planował nakręcić film na podstawie przeklętej sztuki i wyemitować go w kinach zarażając szaleństwem całe [[USA (lokacja)|USA]] Stał za zniknięciem [[Elle Flynn]] którą planował oddać [[Hastur]] jako "żonę"

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
