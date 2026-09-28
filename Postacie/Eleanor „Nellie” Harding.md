---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "28"
płeć: "Kobieta"
zaimki:
status: "żyje"
lokacja: "[[Pluckley]]"
rodziny: ["[[Harding]]"]
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: false
obraz: "[[Eleanor „Nellie” Harding.png]]"
aliases: ["Eleanor \"Nellie\" Harding"]
kanka_id: 6934766
---

![[Eleanor „Nellie” Harding.png|300]]

## Opis

Nellie Harding jest siostrą [[Lilian Harding]]

Wraz z siostrą gdy były małe, parały się przywoływaniem duchów. Wydawało im się że to tylko zabawa, ale przynajmniej jedna, jeśli nie obie siostry, mają prawdziwy dar.

Mieszka w posiadłości rodowej w [[Pluckley]] od dziecka. Mimo, że jest młodsza, jest główną dziedziczką fortuny po rodzicach.

Po śmierci jej narzeczonego [[Vincent Fontain]], zamknęła się w sobie. Jedyną osobą jaka dotrzymuje jej towarzystwa jest jej znajomy farmaceuta [[Aaron Adelmann]].

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
