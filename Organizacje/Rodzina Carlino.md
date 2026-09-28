---
name: "Rodzina Carlino"
kategoria: "organizacja"
typ: "Mafia"
rodzic:
lokacje: ["[[Denver]]"]
tagi: []
prywatne: false
image: "[[Rodzina Carlino.png]]"
aliases: []
kanka_id: 7387291
---

![[Rodzina Carlino.png|300]]

## Opis

Włoska rodzina mafijna prowadzona przez braci Sama i Petera Carlino. Trzęsą większą częścią [[Colorado]] a ich siedzibą jest [[Denver]].

To do nich należy [[Kino Rivoli]] w którym [[Benjamin Smith]] uszkodził projektor w szale po obejrzeniu dziwnego filmu z [[Basil Torrance]] oraz [[Elle Flynn]] w rolach głównych. Namierzyli oni badaczy i wysłali [[Vito „Łamacz” Moretti|Vito "Łamacz" Moretti]] i [[Enzo „Gruby” Bianchi|Enzo "Gruby" Bianchi]] aby odzyskali pieniądze za projektor.

**Role członków:**

| Członek | Rola |
| --- | --- |
| [[Vito „Łamacz” Moretti]] | Członek |
| [[Enzo „Gruby” Bianchi]] | Członek |
| [[Bruno Mauro]] | Członek |

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
