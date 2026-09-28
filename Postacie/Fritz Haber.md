---
kategoria: "postać"
typ: "NPC"
tytuł: "Doktor"
wiek: "52"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja:
rodziny: []
rasy: ["[[Żydzi]]"]
organizacje: ["[[Ekspedycja]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Fritz Haber.png]]"
aliases: []
kanka_id: 7012167
---

![[Fritz Haber.png|300]]

## Opis

laureat Nagrody Nobla w dziedzinie chemii w 1918 roku za syntezę amoniaku z azotu i wodoru.

W roku 1913 przedsiębiorstwo BASF wybudowało w Ludwigshafen fabrykę, w której rozpoczęto produkcję amoniaku z wodoru i azotu z atmosfery. W prasie pisano w tym czasie, że Haber „zrobił chleb z powietrza”. Dziś światowa produkcja nawozów azotowych, wytwarzanych metodą Habera-Boscha, osiąga kilkaset milionów ton rocznie[8]. Dzięki produkcji nawozów azotowych Haber został milionerem.

Po wybuchu I wojny światowej amoniak zastąpił importowaną z Chile saletrę do produkcji materiałów wybuchowych i amunicji. [[Niemcy]] szybko i tanio uzupełniały swoje arsenały zbrojeniowe. Haber na zlecenie niemieckiego Sztabu Generalnego rozpoczął pracę nad wykorzystaniem chemii na potrzeby armii (Konwencja haska z 1907 zabraniała stosowania broni chemicznej). W odpowiedzi na zapotrzebowanie niemieckiej armii, zamiast toluenu, zaproponował do produkcji trotylu stosowanie ksylenu i innych pochodnych ropy naftowej

Opracował Cyklon B.

Uczestnik [[Aukcja]] gdzie został poproszony przez [[Charlotte Reed]] o udział w [[Ekspedycja]]

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
