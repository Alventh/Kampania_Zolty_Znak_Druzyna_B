---
kategoria: "postać"
typ: "NPC"
tytuł: "Student"
wiek: "20"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Uniwersytet Denver (lokacja)]]"
rodziny: []
rasy: []
organizacje: ["[[Uniwersytet Denver (organizacja)]]", "[[Kult Nolana]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Jack „Byk” Callahan.png]]"
aliases: ["Jack \"Byk\" Callahan"]
kanka_id: 7138312
---

![[Jack „Byk” Callahan.png|300]]

## Opis

Student wychowania fizycznego, kumpel i pomocnik [[Nolan Hawthorne]]

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
