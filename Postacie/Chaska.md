---
kategoria: "postać"
typ: "NPC"
tytuł:
wiek: "12"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Wioska Arapaho]]"
rodziny: []
rasy: ["[[Arapaho (rasa)]]"]
organizacje: ["[[Arapaho (organizacja)]]"]
zdolności: []
tagi: []
prywatne: false
obraz: "[[Chaska.png]]"
aliases: []
kanka_id: 8152872
---

![[Chaska.png|300]]

## Opis

12 letni chłopak mieszkający w [[Wioska Arapaho]], jest ciekawy świata, chce zostać wojownikiem.

Kiedy Gracze przyjechali do wioski, był zafascynowany psem [[William Boothby]] o imieniu [[Legat]].  Kiedy Gracze zostali rozbrojeni w lesie. Przywłaszczył sobie [[Rękawica]] należącą do [[Benjamin Smith]]

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
