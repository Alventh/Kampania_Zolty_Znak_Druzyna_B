---
name: "Ku Klux Klan"
kategoria: "organizacja"
typ: "Organizacja"
rodzic:
lokacje: ["[[USA (lokacja)]]", "[[Denver]]"]
tagi: []
prywatne: false
image: "[[Ku Klux Klan.png]]"
aliases: []
kanka_id: 6934558
---

![[Ku Klux Klan.png|300]]

## Opis

Ku Klux Klan (KKK) – skrajnie prawicowa organizacja rasistowska, utworzona w [[USA (lokacja)|USA]], częściowo zakonspirowana, walcząca o utrzymanie supremacji białych protestantów w Stanach Zjednoczonych i dążąca do ograniczenia praw innych grup rasowych i etnicznych, głównie Afroamerykanów i Żydów, oraz katolików jako grupy wyznaniowej, zorganizowana na wzór tajnego stowarzyszenia.

W 1920 roku działająca dość jawnie na Republikańskich terenach jakim było [[Denver]] w [[Colorado]]

Przywódcą (Wielkim Czarownikiem) Klanu w Denver w 1920 roku był [[William Candlish]]. Do sił klanu należało mnóstwo członków [[Policja w Denver]].

## Podrzędne

```dataview
LIST FROM "Organizacje" WHERE rodzic = this.file.link SORT file.name
```

## Członkowie

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ, status
FROM "Postacie"
WHERE contains(organizacje, this.file.link) AND kategoria != "indeks"
SORT file.name
```
