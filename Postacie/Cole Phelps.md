---
kategoria: "postać"
typ: "Gracz"
tytuł:
wiek: "30"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Boston]]"
rodziny: []
rasy: []
organizacje: ["[[Agencja Detektywistyczna Phelps & Harding]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Cole Phelps.png]]"
aliases: []
kanka_id: 6547728
---

![[Cole Phelps.png|300]]

## Opis

Współzałożyciel [[Agencja Detektywistyczna Phelps & Harding]]. Urodzony w Bostonie. Obecnie prowadzi swoją agencję w [[Denver]] Gdzie pod protektoratem [[Dean „Dinky” Singleton|Dean "Dinky" Singleton]] rozwiązuje sprawy o charakterze paranormalnym. Jego długoletnią partnerką zawodową jest medium [[Lilian Harding]].

Ostatnio rozpoczął współpracę z @Victoria oraz [[Benjamin Smith]]

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
