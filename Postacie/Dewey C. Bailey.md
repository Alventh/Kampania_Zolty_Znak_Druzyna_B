---
kategoria: "postać"
typ: "NPC"
tytuł: "Burmistrz Denver"
wiek:
płeć:
zaimki:
status: "żyje"
lokacja: "[[Denver]]"
rodziny: ["[[Bailey]]"]
rasy: []
organizacje: ["[[Kult Hastura]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Dewey C. Bailey.jpg]]"
aliases: []
kanka_id: 6934253
---

![[Dewey C. Bailey.jpg|300]]

## Opis

Dewey Crossman Bailey jest Republikańskim politykiem a od 1916 roku Burmistrzem [[Denver]]

Swoją pozycję zawdzięcza przede wszystkim rytuałom organizowanym przez [[Kult Hastura]]. Jest jego przywódcą odkąd zastąpił oryginalnego założyciela [[Algernon Witherby]].

Jest jednym z oryginalnych członków Kultu wraz z [[William Candlish]] [[Arthur Holdem]] [[Carl Bradshaw]] [[Dorian Shaw]] co wspomniane zostało w [[Opowieść Arthura]]

Jest twórcą planu złożenia w ofierze dużej ilości żyć ludzkich w trakcie [[Pełnia Aldebaran]] w 1920 roku.

To on sprowadził do Denver i jego

Ma żonę [[Adella Brown Bailey]]

Po działaniach [[Agencja Detektywistyczna Phelps & Harding]], śmierci Candlisha oraz uwolnieniu Holdema, 20 Sierpnia pojawił się [[Artykuł o anomaliach]], napisany przez samego  który zdawał się przekreślać jego szansę na kolejną kadencję. Jakimś cudem został ponownie wybrany burmistrzem.

Po porażce popadł w paranoję. Używa [[Zapiski Z Carcossy]] już nie jak środka do władzy i bogactwa, a jak Biblii której poświęcił się bez reszty.

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
