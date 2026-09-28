---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "47"
płeć:
zaimki:
status: "żyje"
lokacja: "[[Denver]]"
rodziny: []
rasy: []
organizacje: ["[[Redakcja Denver Post]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Dean „Dinky” Singleton.jpg]]"
aliases: ["Dean \"Dinky\" Singleton"]
kanka_id: 6547823
---

![[Dean „Dinky” Singleton.jpg|300]]

## Opis

Właściciel [[Redakcja Denver Post]] oraz udziałowiec wielu innych instytucji oraz miejsc takich jak [[Amfiteatr Red Rocks]] czy [[Kopalnia w Cripple Creek]]

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
