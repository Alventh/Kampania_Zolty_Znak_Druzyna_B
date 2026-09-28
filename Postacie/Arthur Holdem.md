---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek:
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Denver]]"
rodziny: []
rasy: []
organizacje: ["[[Redakcja Denver Post]]", "[[Kult Hastura]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Arthur Holdem.png]]"
aliases: []
kanka_id: 6933958
---

![[Arthur Holdem.png|300]]

## Opis

Księgowy Pana [[Dean „Dinky” Singleton|Dean "Dinky" Singleton]] w [[Redakcja Denver Post]].

Należał do [[Kult Hastura]]. Dołączył do niego gdy w raz ze swoimi znajomymi [[Dewey C. Bailey]] [[William Candlish]] i kilkoma innymi mężczyznami, poznali [[Algernon Witherby]].

Pokazał on im Zaklęcia i rytuały które rzekomo miały im wszystkim zapewnić dobrobyt.

Więcej o tym spotkaniu wyczytać można z notatek [[Lilian Harding]] która spisała *(usunięty wpis)*

Arthur przytłoczony zmianami którę wprowadził Dewey C. Bailey i jego diabolicznym planem postanowił opuścić szeregi kultu i uciec.

Poprosił o pomoc innego kultystę, młodego inspektora straży pożarnej [[Owen Pierce]] Ich plan ucieczki pokrzyżował jednak William który umieścił Owena w szpitalu psychiatrycznym, a Holdema wywiózł na farmę i planował złożyć go w ofierze Hasturowi w trakcie [[Pełnia Aldebaran]] gwiazdy [[Aldebaran]]

Uratowany z [[Farma Goździków]] przez [[Axel Bonton]] [[Benjamin Smith]] [[Cole Phelps]] oraz Lilian Harding

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
