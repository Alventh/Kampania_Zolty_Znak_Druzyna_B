---
kategoria: "zdolność"
typ: "Zaklęcie"
rodzic:
koszt:
tagi: []
prywatne: false
obraz: "[[Ropiejąca Ślepota Siedmiu Piekieł.png]]"
aliases: []
kanka_id: 6547886
---

![[Ropiejąca Ślepota Siedmiu Piekieł.png|300]]

## Opis

Zaklęcie z [[Dziennik Corbita]]

Koszt: 3 punkty Magii; 1 punkt Poczytalności
Czas rzucania: 1 runda
To zaklęcie czasowo obezwładnia pojedynczy cel, który
znajduje się w odległości 10 metrów od osoby rzucającej
zaklęcie. Aby czar zadziałał, rzucająca go osoba musi odnieść
sukces w przeciwstawnym teście Mocy przeciwko celowi.
Silny, dręczący ból dopada ofiarę; jej twarz i ręce pokrywają
się ropiejącymi pęcherzami, a oczy zasnuwa krwawa mgła,
co powoduje czasowe oślepienie. Podczas trwania zaklęcia
ofiara jest całkowicie bezbronna.
Efekt zaklęcia trwa przez 1K6 rund, po tym czasie wzrok
ofiary powraca. W ciągu 3K10 minut ofiara całkowicie wraca
do siebie i może zacząć normalnie funkcjonować. Ślady
fizycznych deformacji szybko znikają i przez najbliższe 24 godziny
na skórze są widoczne tylko niewielkie odbarwienia.
Każde takie doświadczenie kosztuje ofiarę 1/1K6+1 punktów
Poczytalności.

## Powiązania

| Z kim | Relacja | Stosunek |
| --- | --- | --- |
|  |  |  |

> [!mg]- Tylko dla MG
> 

## Podrzędne

```dataview
LIST FROM "Zdolności" WHERE rodzic = this.file.link SORT file.name
```

## Posiadacze

```dataview
TABLE WITHOUT ID file.link AS "Nazwa", typ
FROM "Postacie"
WHERE contains(zdolności, this.file.link) AND kategoria != "indeks"
SORT file.name
```
