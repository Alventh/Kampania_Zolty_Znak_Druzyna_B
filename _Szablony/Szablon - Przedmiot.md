---
name: "<% tp.file.title %>"
kategoria: "przedmiot"
typ:
rodzic:
właściciel:
lokacja:
cena:
rozmiar:
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
LIST FROM "Przedmioty" WHERE rodzic = this.file.link SORT file.name
```
