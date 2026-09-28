---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "40"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Denver]]"
rodziny: []
rasy: []
organizacje: ["[[Rodzina Carlino]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Enzo „Gruby” Bianchi.png]]"
aliases: ["Enzo \"Gruby\" Bianchi"]
kanka_id: 7387280
---

![[Enzo „Gruby” Bianchi.png|300]]

## Opis

#### Enzo "Gruby" Bianchi
- **Wygląd**: Średniego wzrostu, otyły mężczyzna w wieku około 40 lat, z ogorzałą twarzą. Ma ciemne, gładko zaczesane włosy, małe oczy i spocony kark, który widać nad zbyt ciasnym kołnierzykiem białej koszuli. Jego garnitur w ciemnym odcieniu brązu jest lekko wymięty, a spod marynarki wystaje złoty łańcuch zegarka kieszonkowego. Na ręce nosi sygnet z inicjałami „C.C.” – znak przynależności do rodziny Carlino.
- **Charakter**: Enzo to typowy "rozjemca" mafijny. Woli straszyć niż bić, ale potrafi użyć pięści, gdy zajdzie taka potrzeba. Ma łagodny, ale złowrogi ton głosu, który sugeruje, że pod jego spokojem kryje się coś groźnego. Jest elokwentny, choć jego angielski zdradza włoski akcent.

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
