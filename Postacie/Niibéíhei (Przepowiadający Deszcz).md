---
kategoria: "postać"
typ: "NPC"
tytuł: "Wódz"
wiek: "75"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Wioska Arapaho]]"
rodziny: []
rasy: []
organizacje: ["[[Arapaho (organizacja)]]", "[[Rezerwat Arapaho]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Niibéíhei (Przepowiadający Deszcz).jpg]]"
aliases: []
kanka_id: 7200540
---

![[Niibéíhei (Przepowiadający Deszcz).jpg|300]]

## Opis

Twórca [[Opowieść Niibéíhei (Przepowiadający Deszcz) o pochodzeniu ludu Hinono'eino|Opowieść Niibéíhei (Przepowiadający Deszcz) o pochodzeniu ludu  Hinono'eino]] Wódz [[Wioska Arapaho]] należącej do [[Rezerwat Arapaho]]

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
