---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "45"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Szpital Psychiatryczny Denver]]"
rodziny: []
rasy: []
organizacje: ["[[Kult Hastura]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Dorian Shaw.png]]"
aliases: []
kanka_id: 6934213
---

![[Dorian Shaw.png|300]]

## Opis

Ordynator [[Szpital Psychiatryczny Denver]]

Jest jednocześnie jednym z oryginalnych członków [[Kult Hastura]]. Opisane zostało to w [[Opowieść Arthura]].

Pomagał wdrożyć plan złożenia w ofierze mnóstwa ludzi w trakcie [[Pełnia Aldebaran]] w 1920 roku. Dostarczał ludziom [[William Candlish]] środki odurzające pomagające im porywać ludzi z ulicy. Przetrzymywał też tymczasowo ofiary na swoim oddziale zamkniętym.

To on przetrzymywał [[Owen Pierce]] po tym gdy ten został przyłapany na próbie pomocy w ucieczce [[Arthur Holdem]].

Mimo pokrzyżowanych planów Kultu i śmierci Candlisha. Dalej pozostaje na swojej funkcji ordynatora, gotów do pomocy Kultowi w każdej chwili.

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
