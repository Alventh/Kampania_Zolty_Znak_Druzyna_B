---
kategoria: "organizacja"
typ: "Pracownicy Kopalnii"
rodzic:
lokacje: ["[[Kopalnia w Cripple Creek]]"]
tagi: []
prywatne: false
obraz: "[[Górnicy Cripple Creek.png]]"
aliases: []
kanka_id: 6934476
---

![[Górnicy Cripple Creek.png|300]]

## Opis

Górnicy pracujący w [[Kopalnia w Cripple Creek]]

**Role członków:**

| Członek | Rola |
| --- | --- |
| [[Robert „Bob” Sanders]] | Górnik |
| [[Albert Quint]] | Górnik |

## Powiązania

| Z kim | Relacja | Stosunek |
| --- | --- | --- |
|  |  |  |

> [!mg]- Tylko dla MG
> 

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
