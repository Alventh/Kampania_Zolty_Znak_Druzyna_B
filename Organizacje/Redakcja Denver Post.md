---
name: "Redakcja Denver Post"
kategoria: "organizacja"
typ: "Organizacja"
rodzic:
lokacje: ["[[Denver]]"]
tagi: []
prywatne: false
image: "[[Redakcja Denver Post.png]]"
aliases: []
kanka_id: 6547835
---

![[Redakcja Denver Post.png|300]]

## Opis

Redakcja Denver Post założona przez [[Dean „Dinky” Singleton|Dean "Dinky" Singleton]]

Jednym z jej pracowników był zaginiony [[Arthur Holdem]]

**Role członków:**

| Członek | Rola |
| --- | --- |
| [[Arthur Holdem]] | Księgowy |
| [[Dean „Dinky” Singleton]] | Szef |
| [[Jane Harwood]] | Pracownik |
| [[Adam H. Morrison]] | Dziennikarz |

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
