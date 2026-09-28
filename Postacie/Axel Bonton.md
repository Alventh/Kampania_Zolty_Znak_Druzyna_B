---
name: "Axel Bonton"
kategoria: "postać"
typ: "Gracz"
gracz:
zawód:
tytuł:
wiek: "26"
płeć: "Mężczyzna"
zaimki:
status: "żyje"
lokacja: "[[Boulder]]"
rodziny: []
rasy: []
organizacje: []
zdolności: []
s: 0
kon: 0
bc: 0
zr: 0
wyg: 0
int: 0
moc: 0
wyk: 0
pw: 0
pw_max: 0
pm: 0
pm_max: 0
pocz: 0
pocz_start: 0
szczescie: 0
ruch: 8
mo: "0"
krzepa: 0
ciezka_rana: false
nieprzytomny: false
umierajacy: false
szalenstwo_chwilowe: false
szalenstwo_dlugotrwale: false
tagi: []
prywatne: false
image: "[[Axel Bonton.png]]"
aliases: []
cssclasses: ["karta-postaci"]
kanka_id: 6934258
---

```statblock
{}
```

## Karta badacza

> [!stan] Stan
> **Punkty Wytrzymałości:** `INPUT[number:pw]` / `INPUT[number:pw_max]`
> `INPUT[progressBar(minValue(0), maxValue(20)):pw]`
>
> **Poczytalność:** `INPUT[number:pocz]` (start: `INPUT[number:pocz_start]`)
> `INPUT[progressBar(minValue(0), maxValue(99)):pocz]`
>
> **Szczęście:** `INPUT[number:szczescie]`
> `INPUT[progressBar(minValue(0), maxValue(99)):szczescie]`
>
> **Punkty Magii:** `INPUT[number:pm]` / `INPUT[number:pm_max]`
>
> `INPUT[toggle:ciezka_rana]` Ciężka rana · `INPUT[toggle:nieprzytomny]` Nieprzytomny · `INPUT[toggle:umierajacy]` Umierający
> `INPUT[toggle:szalenstwo_chwilowe]` Chwilowe szaleństwo · `INPUT[toggle:szalenstwo_dlugotrwale]` Długotrwałe szaleństwo

### Cechy

| Cecha | Wartość | ½ | ⅕ |
| --- | :-: | :-: | :-: |
| Siła (S) | `INPUT[number:s]` | `VIEW[floor({s} / 2)]` | `VIEW[floor({s} / 5)]` |
| Kondycja (KON) | `INPUT[number:kon]` | `VIEW[floor({kon} / 2)]` | `VIEW[floor({kon} / 5)]` |
| Budowa Ciała (BC) | `INPUT[number:bc]` | `VIEW[floor({bc} / 2)]` | `VIEW[floor({bc} / 5)]` |
| Zręczność (ZR) | `INPUT[number:zr]` | `VIEW[floor({zr} / 2)]` | `VIEW[floor({zr} / 5)]` |
| Wygląd (WYG) | `INPUT[number:wyg]` | `VIEW[floor({wyg} / 2)]` | `VIEW[floor({wyg} / 5)]` |
| Inteligencja (INT) | `INPUT[number:int]` | `VIEW[floor({int} / 2)]` | `VIEW[floor({int} / 5)]` |
| Moc (MOC) | `INPUT[number:moc]` | `VIEW[floor({moc} / 2)]` | `VIEW[floor({moc} / 5)]` |
| Wykształcenie (WYK) | `INPUT[number:wyk]` | `VIEW[floor({wyk} / 2)]` | `VIEW[floor({wyk} / 5)]` |

**Ruch:** `INPUT[number:ruch]` · **Modyfikator Obrażeń:** `INPUT[text:mo]` · **Krzepa:** `INPUT[number:krzepa]`

Rzut testu: `dice: 1d100` · Kość premiowa/karna: `dice: 1d10`

### Umiejętności

| Umiejętność | % | ½ | ⅕ |
| --- | :-: | :-: | :-: |
|  |  |  |  |

### Broń

| Broń | % | Obrażenia | Zasięg | Ataki | Amunicja |
| --- | :-: | :-: | :-: | :-: | :-: |
|  |  |  |  |  |  |

### Ekwipunek i majątek

## Historia

Poszukiwacz przygód który pomagał [[Lilian Harding]] [[Cole Phelps]] i [[Benjamin Smith]] w poszukiwaniach [[Arthur Holdem]] na zlecenie [[Dean „Dinky” Singleton|Dean "Dinky" Singleton]]

Okazał się mocno niezrównoważony. Strzelając do niezagrażających im wówczas pracowników [[Agencja Detektywistyczna Phelps & Harding]]

Gdy cała ekipa została porwana przez [[William Candlish]]  i miała zostać złożona w ofierze [[Hastur]] w trakcie [[Pełnia Aldebaran]] pomógł ocalić księgowego i kilku czarnoskórych muzyków w tym [[Robert Johnson]]

Sam został porażony przez [[Śpiew Hastura]] rzucany przez Candlisha. Po wszystkim został umieszczony w szpitalu w [[Boulder]]. Spędził tu kolejne miesiące, ale jego stan fizyczny się nie poprawia. Za to jego umysł poddał się paranoji, lub wpływom jakichś dziwnych sił.

Jego lekarzem jest [[Ernest Ceriani]] . znalazł on w krwi Axela jakąś substację, która nie daje się przebadać, aktywnie "ucieka" przed próbami pobrania próbki.

Axel gdy dowiedział się o tym, że Lilian również przebywa w szpitalu, poprosił doktora Ceriani o spotkanie z nią. Bredził i opowiadał o mrocznych wizjach końca świata.

## Powiązane wpisy

```dataviewjs
await dv.view("_Szablony/widoki/powiazania")
```
