---
kategoria: "lokacja"
typ: "Komnata"
rodzic: "[[Bethania]]"
tagi: []
prywatne: false
obraz: "[[Komnata pod posiadłością Bethania.png]]"
aliases: []
kanka_id: 6934595
---

![[Komnata pod posiadłością Bethania.png|300]]

## Opis

Komnata znajdująca się za mauzoleum rodziny [[Epines]] w ich posiadłości [[Bethania]]

To tego miejsca poszukiwały 2 pokolenia rodziny Epines. Była też miejscem śmierci wszystkich jej członków oraz kilku rytuałów:

[[Śmierć Jaques i Pierette Epines]]

[[Nieudany Rytuał Otwarcia Bramy]]

[[Śmierć Ethana Epines]]

Skrywała w sobie [[Artefakt Z Cripple Creek]], który został zabrany przez [[Benjamin Smith]] po śmierci Ethana Epines

Wspominana w:

 [[Dziennik Ethana Epines]]

[[Dziennik Wilhelma Gallowaya]]

[[Dziennik Jaques Epines]]

## Powiązania

| Z kim | Relacja | Stosunek |
| --- | --- | --- |
|  |  |  |

> [!mg]- Tylko dla MG
> 

## Podrzędne

```dataview
LIST FROM "Lokacje" WHERE rodzic = this.file.link SORT file.name
```

## Postacie

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ, status
FROM "Postacie"
WHERE lokacja = this.file.link AND kategoria != "indeks"
SORT file.name
```

## Organizacje

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ
FROM "Organizacje"
WHERE contains(lokacje, this.file.link) AND kategoria != "indeks"
SORT file.name
```

## Rodziny

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ
FROM "Rodziny"
WHERE contains(lokacje, this.file.link) AND kategoria != "indeks"
SORT file.name
```

## Przedmioty

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ
FROM "Przedmioty"
WHERE lokacja = this.file.link AND kategoria != "indeks"
SORT file.name
```

## Wydarzenia

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", data_w_grze
FROM "Wydarzenia"
WHERE lokacja = this.file.link AND kategoria != "indeks"
SORT file.name
```

## Mapy

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ
FROM "Mapy"
WHERE lokacja = this.file.link AND kategoria != "indeks"
SORT file.name
```
