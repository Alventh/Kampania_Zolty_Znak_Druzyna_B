---
kategoria: "organizacja"
typ: "Mafia"
rodzic:
lokacje: ["[[Chinatown (lokacja)]]"]
tagi: []
prywatne: false
obraz: "[[Triady.png]]"
aliases: []
kanka_id: 6940238
---

![[Triady.png|300]]

## Opis

Operująca głównie w [[Chinatown (lokacja)|Chinatown]] organizacja przestępcza. Kieruje nią [[Madam Feng]]

**Role członków:**

| Członek | Rola |
| --- | --- |
| [[Madam Feng]] | Qíngfù |

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
