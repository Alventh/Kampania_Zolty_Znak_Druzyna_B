---
kategoria: "zdolność"
typ: "Zaklęcie"
rodzic:
koszt:
tagi: []
prywatne: false
obraz: "[[Ochrona Ciała.png]]"
aliases: []
kanka_id: 6935881
---

![[Ochrona Ciała.png|300]]

## Opis

Zaklęcie chroniące rzucającego przed obrażeniami fizycznymi, aż do momentu gdy zużyje się jego "ładunek".

## Powiązania

| Z kim | Relacja | Stosunek |
| --- | --- | --- |
|  |  |  |

> [!mg]- Tylko dla MG
> 

## Podrzędne

```dataview
LIST FROM "Zdolności" WHERE rodzic = this.file.link SORT file.name
```

## Posiadacze

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ
FROM "Postacie"
WHERE contains(zdolności, this.file.link) AND kategoria != "indeks"
SORT file.name
```
