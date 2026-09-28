---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "60"
płeć: "Kobieta"
zaimki:
status: "żyje"
lokacja: "[[Rezydencja Harding]]"
rodziny: ["[[Harding]]"]
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Ophelia Harding.webp]]"
aliases: []
kanka_id: 9260873
---

![[Ophelia Harding.webp|300]]

## Opis

Ophelia Harding, matka [[Eleanor „Nellie” Harding|Eleanor "Nellie" Harding]] i [[Lilian Harding]]. Architekt projektujący domy i budynki w całych stanach pod koniec XIX i na początku XXw.

Wybudowała między innymi [[Posiadłość Marshallów]].

Jej dewizą było projektowanie tak, by budynek przykuwał oko, by nie można było koło niego przejść obojętnie.

Natrafiła na projekt [[Bethania]] w archiwum miejskim w [[Denver]]. Na projekcie było po marginesach wypisanych mnóstwo fragmentów [[Król w Żółci]]. Od tamtej pory jej projekty zaczęły się zmieniać odzwzorowując niemożliwe geometrie [[Carcossa]].  Doprowadzając między innymi do wypadków drogowych w Kansas City, opisane w [[Artykuł z Kansas City 2]]

W końcu postanowiła zmienić [[Rezydencja Harding]] w [[Pluckley]] w "Wieczny Dom" dla swoich dwóch córek, gdy zrozumiała, że nie zapewniła dziewczynkom przez swoje podróże służbowe prawdziwego domu.

Niestety jej umysł skorumpowany wpływem króla w żółci, wymuszał na niej ciągłe poprawki i udoskonalanie projektu. Remont i przebudowy rozciągnęły się na całe dekady. Dziewczynki zdążyły dorosnąć, a gdy wyjechały z domu, Ophelia zupełnie postradała zmysły. Tworząc coraz to bardziej zagmatwane plątaniny korytarzy. Dom obniża się ku swojemu centrów które jest kilka metrów niżej niż reszta domu, co sprawia, że z zewnątrz dom wydaje się dużo mniejszy niż jest w rzeczywistości.W końcu gdy dom stał się kwintesencją jej życiowej dewizy, przyciągając do tego stopnia, że zmarli w okolicy nie mogą już odejść w zaświaty. Dom zmienił się w studnię dusz.

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
