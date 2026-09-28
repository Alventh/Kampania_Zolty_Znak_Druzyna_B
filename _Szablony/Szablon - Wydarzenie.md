---
name: "<% tp.file.title %>"
kategoria: "wydarzenie"
typ:
rodzic:
data_w_grze:
kalendarz:
lokacja:
tagi: []
prywatne: false
image:
aliases: []
kanka_id:
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
LIST FROM "Wydarzenia" WHERE rodzic = this.file.link SORT file.name
```
