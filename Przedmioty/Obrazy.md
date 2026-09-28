---
name: "Obrazy"
kategoria: "przedmiot"
typ: "Obraz"
rodzic:
właściciel:
lokacja:
cena:
rozmiar:
tagi: []
prywatne: true
image: "[[Obrazy.png]]"
aliases: []
kanka_id: 6932982
waga:
twórcy: []
tags: ["mg"]
---

![[Obrazy.png|300]]

> [!mg] Wpis prywatny w Kance — tylko dla MG

## Podrzędne

```dataview
LIST FROM "Przedmioty" WHERE rodzic = this.file.link SORT file.name
```
