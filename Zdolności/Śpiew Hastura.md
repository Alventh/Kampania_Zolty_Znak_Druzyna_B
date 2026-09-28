---
name: "Śpiew Hastura"
kategoria: "zdolność"
typ: "Zaklęcie"
rodzic:
koszt:
tagi: []
prywatne: false
image: "[[Śpiew Hastura.png]]"
aliases: []
kanka_id: 6934349
---

![[Śpiew Hastura.png|300]]

## Opis

Zaklęcie używane przez [[William Candlish]] w trakcie walki na [[Farma Goździków]] w trakcie [[Pełnia Aldebaran]]. Zakłada śpiewanie do [[Aldebaran]] bluźnierczej inkantacji wysławiającej [[Hastur]]

Ciało ofiary pokrywa się ranami i ropiejącymi bliznami.

Wielki
Królu, Opiekunie tysińca drzwi. Pożeraczu dusz. Tyś zasiadasz na tronie w
martwym mięści [[Carcossa]] nad jeziorem Hali gdzie głosy martwych obieją się echem
na pustych uliczkach. Ześlij blizny na mych wrogów. Niech ich ciała pokryją się
ropą i przywiedź ich do śmierci.

Działanie:

1k6 obrażeń na runde po 3 rundach rzucania. Utrzmanie 1k4
puntów magii na rundę. (może utrzymać minimum 2 rundy (8pkt magii ) Punktów
obrażeń na rundę przez cały czas, kiedy czar jest

aktywny. Co dwie rundy okaleczenia sprawiają, że WYG
ofiary zostaje obniżony o 3K10 punktów. Co cztery rundy wewnętrzne obrażenia
sprawiają, że KON ofiary zostaje obniżona o 3K10 punktów. Kiedy wartość KON
ofiary spadnie do zera lub gdy ofiara umrze wskutek utraty punktów
Wytrzymałości, jej ciało puchnie i eksploduje z obrzydliwym hukiem, a parująca
posoka rozlewa się po ziemi.

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
