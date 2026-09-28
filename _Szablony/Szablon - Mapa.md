---
kategoria: "mapa"
typ:
rodzic:
lokacja:
tagi: []
prywatne: false
obraz:
aliases: []
kanka_id:
---

```leaflet
id: <% tp.file.title %>
image: [[_załączniki/nazwa-pliku-mapy.jpg]]
height: 600px
lat: 50
long: 50
minZoom: 1
maxZoom: 10
defaultZoom: 5
unit: meters
scale: 1
```

## Opis


## Powiązania

| Z kim | Relacja | Stosunek |
| --- | --- | --- |
|  |  |  |

> [!mg]- Tylko dla MG
> 

## Podrzędne

```dataview
LIST FROM "Mapy" WHERE rodzic = this.file.link SORT file.name
```
