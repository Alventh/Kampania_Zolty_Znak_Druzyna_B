---
name: "Epines"
kategoria: "rodzina"
typ: "Kultyści"
rodzic:
lokacje: []
tagi: []
prywatne: false
image: "[[Epines.png]]"
aliases: []
kanka_id: 6547292
---

![[Epines.png|300]]

## Opis

Rodzina Epines z [[Rennes Le Château]].

Przeprowadzili się oni w trakcie rewolucji francuskiej do USA.

Byli założycielami miasteczka [[Cripple Creek]].

## Podrzędne

```dataview
LIST FROM "Rodziny" WHERE rodzic = this.file.link SORT file.name
```

## Członkowie

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ, status
FROM "Postacie"
WHERE contains(rodziny, this.file.link) AND kategoria != "indeks"
SORT file.name
```
