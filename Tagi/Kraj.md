---
name: "Kraj"
kategoria: "tag"
typ:
rodzic:
kolor:
tagi: []
prywatne: false
image:
aliases: []
kanka_id: 6547178
---

## Opis


## Powiązania

| Z kim | Relacja | Stosunek |
| --- | --- | --- |
|  |  |  |

> [!mg]- Tylko dla MG
> 

## Podrzędne

```dataview
LIST FROM "Tagi" WHERE rodzic = this.file.link SORT file.name
```

## Oznaczone tym tagiem

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", kategoria, typ
FROM -"_Szablony"
WHERE contains(tagi, this.file.link)
SORT kategoria, file.name
```
