---
kategoria: "postać"
typ: "NPC"
tytuł: "Asystentka"
wiek: "23"
płeć: "Kobieta"
zaimki:
status: "żyje"
lokacja: "[[Denver]]"
rodziny: []
rasy: []
organizacje: ["[[Redakcja Denver Post]]"]
zdolności: []
tagi: []
prywatne: false
obraz:
aliases: []
kanka_id: 7139732
---

## Opis

Jane Harwood pochodząca z [[Sutton]] w stanie [[Massachusets]]Jest asystentką [[Adam H. Morrison]] w [[Redakcja Denver Post]]

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
