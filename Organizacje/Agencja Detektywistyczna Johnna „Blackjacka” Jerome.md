---
kategoria: "organizacja"
typ: "Agencja Detektywistyczna"
rodzic:
lokacje: ["[[Chicago]]"]
tagi: []
prywatne: false
obraz: "[[John „Blackjack” Jerome.png]]"
aliases: ["Agencja Detektywistyczna Johnna \"Blackjacka\" Jerome"]
kanka_id: 6934504
---

![[John „Blackjack” Jerome.png|300]]

## Opis

Agencja z [[Chicago]]. Zostali wynajęci do stłamszenia zamieszek w [[Denver]] w 1920 roku

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
