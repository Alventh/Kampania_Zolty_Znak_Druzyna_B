---
name: "Kalendarz"
kategoria: "kalendarz"
typ:
rodzic:
calendarium:
tagi: []
prywatne: false
image: "[[Kalendarz.jpg]]"
aliases: []
kanka_id: 6547711
---

![[Kalendarz.jpg|300]]

## Miesiące i dni tygodnia

**Bieżąca data w grze:** 1920-11-10

| Miesiąc | Dni |
| --- | --- |
| Styczeń | 31 |
| Luty | 29 |
| Marzec | 31 |
| Kwiecień | 30 |
| Maj | 31 |
| Czerwiec | 30 |
| Lipiec | 31 |
| Sierpień | 31 |
| Wrzesień | 30 |
| Październik | 31 |
| Listopad | 30 |
| Grudzień | 31 |

**Dni tygodnia:** Poniedziałek, Wtorek, Środa, Czwartek, Piątek, Sobota, Niedziela

## Powiązania

| Z kim | Relacja | Stosunek |
| --- | --- | --- |
| [[Współczesność]] | Kalendarz |  |

## Podrzędne

```dataview
LIST FROM "Kalendarze" WHERE rodzic = this.file.link SORT file.name
```

## Wydarzenia

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", data_w_grze
FROM "Wydarzenia"
WHERE kalendarz = this.file.link AND kategoria != "indeks"
SORT file.name
```

## Dzienniki

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", data_w_grze
FROM "Dzienniki"
WHERE kalendarz = this.file.link AND kategoria != "indeks"
SORT file.name
```
