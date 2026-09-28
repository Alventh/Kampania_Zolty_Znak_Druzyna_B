---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "40"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Cripple Creek]]"
rodziny: ["[[Caldwell]]"]
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Cecile Caldwell.png]]"
aliases: []
kanka_id: 6940062
---

![[Cecile Caldwell.png|300]]

## Opis

Syn [[Myrtle Caldwell]]. Niepełnosprawny umysłowo 40 letni mężczyzna o zachowaniu i rozumowaniu 5 latka.

Wykorzystany przez [[Sherman Coolidge]] do włamywania się do domów, otwierania okien i wpuszczania [[Pnącza Czarnych Róż]] które żywiły się na mieszkańcach. Przenosił też ludzi do [[Komnata pod posiadłością Bethania]].

Skonfrontował się z badaczami w piwnicy [[Bethania]] gdzie popadł w szaleństwo uderzając się własnym młotkiem po głowie. Uspokojony przez [[Victoria Woodhull]], został rozjuszony przez głośne egzorcyzmy odprawiane przez [[Edmund]]. Zaatakował badaczy. Zmarł postrzelony przez  [[Cole Phelps]] w samo serce.

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
