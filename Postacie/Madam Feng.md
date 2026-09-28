---
kategoria: "postać"
typ: "NPC"
tytuł: "Qíngfù"
wiek: "100? 120? Nikt nie wie."
płeć: "Kobieta"
zaimki:
status: "żyje"
lokacja: "[[Smoczy Dwór]]"
rodziny: []
rasy: []
organizacje: ["[[Triady]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Madam Feng.png]]"
aliases: []
kanka_id: 6940216
---

![[Madam Feng.png|300]]

## Opis

Stara Chinka, właścicielka [[Smoczy Dwór]] oraz osoba trzęsąca całym [[Chinatown (lokacja)|Chinatown]] w [[Denver]].

Do działań jej organizacji należy handel narkotykami (przede wszystkim opium), szmuglowanie kontrabandy takiej jak alkohol i antyki oraz artefakty orientu. Nie stronią również od sutenerstwa. Nazywana jest Qíngfù (Mistrzyni).

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
