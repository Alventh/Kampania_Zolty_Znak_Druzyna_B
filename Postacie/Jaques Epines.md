---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "37"
płeć: "Mężczyzna"
zaimki:
status: "nie żyje"
lokacja: "[[Cripple Creek]]"
rodziny: ["[[Epines]]"]
rasy: []
organizacje: []
zdolności: []
tagi: []
prywatne: true
obraz: "[[Jaques Epines.webp]]"
aliases: []
tags: ["mg"]
kanka_id: 6571673
---

![[Jaques Epines.webp|300]]

> [!mg] Wpis prywatny w Kance — tylko dla MG

## Opis

Szlachecko urodzony we [[Francja]] w  [[Rennes Le Château]] w 1769 roku. Większość życia mieszkał w posiadłości rodowej [[Bethania]] wraz z żoną [[Pierette Epines]] oraz synem [[Ethan Epines]].

W wyniku [[Rewolucja Francuska]] w 1789 roku był zmuszony opuścić dom i udać się do [[USA (lokacja)|USA]] gdzie po kilku letnim pobycie w [[Boston]] Przeniósł się do [[Colorado]] gdzie założył małą osadę górniczą [[Cripple Creek]]. Posiadłośc Bethania została przetransportowana kamień po kamieniu i odbudowana w Cripple Creek. We wszystkich sprawach organizacyjnych i technicznych pomagał mu wynajęty specjalista [[Wilhelm Galloway]].

W czasach swej młodości jeszcze we Francji natrafił wraz z żoną na kopię sztuki teatralnej [[Król w Żółci]] w wyniku której czytania stał się wiernym wyznawcą [[Hastur]], i [[Carcossa]]. Na podstawie sztuki stwierdził, że Carcossa jest miastem wiecznym, w którym należy mu się miejsce przy boku króla. Poświęcił więc życie na poszukiwanie odpowiedniego miejsca, które pozwoli na otworzenie bramy do Carcossy. Wybrał miejsce w górach Colorado nie bez powodu. Jego wrodzony instynkt i podatność na moce magiczne, pozwoliły mu ustalić, że gdzieś w tej okolicy znajduje się miejsce o dostatecznej mocy, aby umożliwić podróż do wymarzonej krainy Króla w Żółci.

Po latach poszukiwań i tworzeniu ogromnej sieci tuneli wokół swojej posiadłości, odnaleziono [[Komnata pod posiadłością Bethania]] a w niej [[Artefakt Z Cripple Creek]]. Pozwoliło mu to na przystąpienie, do ostatniej fazy jego planu i otwarcia bramy.

Nieudana próba otwarcia bramy doprowadziła do [[Śmierć Jaques i Pierette Epines]] w 1815 roku.

## Wygląd


## Osobowość


## Powiązania

| Z kim | Relacja | Stosunek |
| --- | --- | --- |
|  |  |  |

> [!mg]- Tylko dla MG
> 

## Ekwipunek

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ
FROM "Przedmioty"
WHERE właściciel = this.file.link AND kategoria != "indeks"
SORT file.name
```

## Autor dzienników

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", data
FROM "Dzienniki"
WHERE autor = this.file.link AND kategoria != "indeks"
SORT file.name
```

## Zlecone zadania

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", ukończone
FROM "Zadania"
WHERE zlecający = this.file.link AND kategoria != "indeks"
SORT file.name
```
