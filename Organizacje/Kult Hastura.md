---
name: "Kult Hastura"
kategoria: "organizacja"
typ: "Kult"
rodzic:
lokacje: ["[[Denver]]"]
tagi: []
prywatne: false
image: "[[Kult Hastura.png]]"
aliases: []
kanka_id: 6933959
---

![[Kult Hastura.png|300]]

## Opis

Kult założony przez [[Algernon Witherby]], [[William Candlish]], [[Manny DeMarco]] [[Arthur Holdem]], [[Dorian Shaw]], [[Carl Bradshaw]] w trakcie [[Powstanie Kultu Hastura w Denver]] opisane w [[Opowieść Arthura]]

**Role członków:**

| Członek | Rola |
| --- | --- |
| [[Algernon Witherby]] | Założyciel |
| [[Arthur Holdem]] | Księgowy |
| [[Carl Bradshaw]] | Członek |
| [[Dewey C. Bailey]] | Przywódca |
| [[William Candlish]] | Członek |
| [[Manny DeMarco]] | Członek |
| [[Owen Pierce]] | Członek |

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
