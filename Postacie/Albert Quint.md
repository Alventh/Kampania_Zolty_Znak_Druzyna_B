---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "31"
płeć: "Mężczyzna"
zaimki:
status: "nie żyje"
lokacja: "[[Cripple Creek]]"
rodziny: []
rasy: []
organizacje: ["[[Górnicy Cripple Creek]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Albert Quint.png]]"
aliases: []
kanka_id: 6934431
---

![[Albert Quint.png|300]]

## Opis

Górnik( Na fot. z lewej)  który został wysłany przez [[Carl Bradshaw]] wraz z jego towarzyszem [[Robert „Bob” Sanders|Robert "Bob" Sanders]] aby wykonać kilka strategicznych wystrzałów dynamitem by poszerzyć tunele i odnaleźć bogate żyły złota.

W wyniku błędu w pomiarach ( po drugiej stronie ściany nie była lita skała jak zakładali, a pusta przetrzeń starych tuneli porzuconych kopalnii) zawalił się na nich strop. Albert zdołał uciec, ale Sanders został przywalony zawałem.

Quint był w akcji ratunkowej Sandersa, zobaczył jednak jego ducha oraz ducha [[Leo Galloway]] co doprowadziło do jego samobójstwa przez rozbiegnięcie się w panice w ścianę tunelu i nadzianie się na własny kilof.

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
