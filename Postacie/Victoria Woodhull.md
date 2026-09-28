---
kategoria: "postać"
typ: "Gracz"
tytuł:
wiek:
płeć: "Kobieta"
zaimki:
status: "żyje"
lokacja: "[[Denver]]"
rodziny: []
rasy: []
organizacje: ["[[Agencja Detektywistyczna Phelps & Harding]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Victoria Woodhull.webp]]"
aliases: []
kanka_id: 6934630
---

![[Victoria Woodhull.webp|300]]

## Opis

**Ekwipunek (z Kanki):**
- [[Król w Żółci]]

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
