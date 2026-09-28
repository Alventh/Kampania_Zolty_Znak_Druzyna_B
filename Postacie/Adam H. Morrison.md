---
kategoria: "postać"
typ: "NPC"
tytuł: "Dziennikarz"
wiek: "41"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja:
rodziny: []
rasy: []
organizacje: ["[[Redakcja Denver Post]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Adam H. Morrison.jpg]]"
aliases: []
kanka_id: 7139620
---

![[Adam H. Morrison.jpg|300]]

## Opis

Dziennikarz w [[Redakcja Denver Post]]. Autor [[Artykuł o anomaliach]]. Jest najlepszym dziennikarzem śledczym w readakcji a przynajmniej tak mówi o nim [[Dean „Dinky” Singleton|Dean "Dinky" Singleton]]. Jego asystentką jest młoda [[Jane Harwood]]

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
