---
kategoria: "organizacja"
typ: "Studio Filmowe"
rodzic: "[[Kult Hastura]]"
lokacje: ["[[Denver]]"]
tagi: []
prywatne: false
obraz: "[[Thule Studios.png]]"
aliases: []
kanka_id: 6934719
---

![[Thule Studios.png|300]]

## Opis

Studio filmowe [[Manny DeMarco]]

To tu miał powstać film [[Basil Torrance]]Torrance na podstawie książki [[Król w Żółci]]

Kolejna przykrywka [[Kult Hastura]]

**Role członków:**

| Członek | Rola |
| --- | --- |
| [[Manny DeMarco]] | Szef |
| [[Basil Torrance]] | Członek |

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
