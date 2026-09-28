---
kategoria: "postać"
typ: "NPC"
tytuł: "Student Sztuki"
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
obraz: "[[Nolan Hawthorne.png]]"
aliases: []
kanka_id: 6973058
---

![[Nolan Hawthorne.png|300]]

## Opis

Student w [[Uniwersytet Denver (organizacja)|Uniwersytet Denver]]. Jego głównym profesorem jest [[Borys Schmidt]]

Wraz z [[Molly Whitmore]], [[Tommy „Spryciarz” Malone|Tommy "Spryciarz" Malone]] oraz [[Jack „Byk” Callahan|Jack "Byk" Callahan]] próbuje otworzyć [[Właz]] na [[Jezioro Sloan]], wierząc że są to *(usunięty wpis)*

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
