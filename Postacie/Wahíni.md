---
kategoria: "postać"
typ: "NPC"
tytuł: "Szamanka"
wiek: "79"
płeć: "Kobieta"
zaimki:
status: "żyje"
lokacja: "[[Wioska Arapaho]]"
rodziny: []
rasy: []
organizacje: ["[[Arapaho (organizacja)]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Wahíni.png]]"
aliases: []
kanka_id: 8152866
---

![[Wahíni.png|300]]

## Opis

Wahíni to stara 79 kobieta z plemienia [[Arapaho (organizacja)|Arapaho]]. Mieszka w [[Wioska Arapaho]] w rezerwacie niedaleko [[Boulder]] w [[Colorado]].
Wahini wraz z [[Niibéíhei (Przepowiadający Deszcz)]] są duchowymi przewodnikami społeczności. Posiada ona dużą wiedzą o przeszłości plemienia, chociaż nie wie wszystkiego tak dobrze jak Niibéíhei.

Kiedy [[Benjamin Smith]] [[Lilian Harding]] [[Eleanor „Nellie” Harding|Eleanor "Nellie" Harding]] [[William Boothby]] oraz [[Victoria Woodhull]] przyjechali do Wioski, testowała ich za pomocą długiej kościanej igły. Smakowała ich krew i od razu wyczuła, że są pod zgubnym wpływem Carcossy. Szaleństwo w ich krwii daje o sobie znać, ale najbardziej naznaczona jest Nellie.

Zaprowadziła ich do Tipi wodza.

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
