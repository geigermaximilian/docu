# Mathematik und Zufallszahlen

## 📌 Mathematische Operationen mit `Math`

Die `Math`-Klasse bietet viele mathematische Funktionen:

### Quadratwurzel mit `sqrt()`

```java
double result = Math.sqrt(64);
System.out.println(result);  // 8.0
```

### Weitere Math-Funktionen

| Funktion | Beschreibung | Beispiel |
|----------|-------------|----------|
| `Math.sqrt(x)` | Quadratwurzel | `Math.sqrt(16)` → 4.0 |
| `Math.pow(x, y)` | x hoch y | `Math.pow(2, 3)` → 8.0 |
| `Math.abs(x)` | Absolutwert | `Math.abs(-5)` → 5 |
| `Math.max(a, b)` | Maximum | `Math.max(5, 10)` → 10 |
| `Math.min(a, b)` | Minimum | `Math.min(5, 10)` → 5 |
| `Math.ceil(x)` | Aufrunden | `Math.ceil(3.2)` → 4.0 |
| `Math.floor(x)` | Abrunden | `Math.floor(3.8)` → 3.0 |
| `Math.random()` | Zufallszahl | `Math.random()` → 0.0 bis 1.0 |

## 🎲 Pseudozufallszahlen

### 1. Mit `Math.random()`

```java
// Zufallszahl zwischen 1 und 100
int randomNumber = (int)(Math.random() * 100) + 1;
System.out.println("Zufallszahl: " + randomNumber);
```

**Wie funktioniert das?**
- `Math.random()` gibt eine Dezimalzahl zwischen 0.0 (inklusive) und 1.0 (exklusive) zurück
- `* 100` multipliziert mit 100 → 0.0 bis 99.9...
- `(int)` konvertiert zu Ganzzahl → 0 bis 99
- `+ 1` verschiebt den Bereich → 1 bis 100

### 2. Mit `Random`-Klasse

```java
import java.util.Random;

Random random = new Random();

// Zufallszahl zwischen 1 und 100
int randomNumber = random.nextInt(1, 101);  // 1 bis 100 (101 ist exklusiv)
System.out.println("Zufallszahl: " + randomNumber);
```

**Vorteile der Random-Klasse:**
- Intuitiver mit der `nextInt(min, max)` Methode
- `min` ist inklusive, `max` ist exklusive

## ⚙️ Pseudozufallszahlen erklärt

**Was bedeutet "Pseudo"?**
- Zufallszahlen vom Computer sind nicht wirklich zufällig
- Sie folgen einem mathematischen Algorithmus
- Mit gleichem Seed erzeugen sie die gleiche Sequenz
- Für die meisten Zwecke sind sie "zufällig genug"

**Echte Zufallszahlen:**
- Basieren auf physikalischen Phänomenen (radioaktiver Zerfall, Rauschen)
- Sind für Sicherheitszwecke notwendig

## 📋 Zusammenfassung

```java
// Mathematik
Math.sqrt(64)          // 8.0
Math.pow(2, 3)         // 8.0
Math.abs(-5)           // 5
Math.max(5, 10)        // 10
Math.min(5, 10)        // 5

// Zufallszahlen
Math.random() * 100    // 0.0 bis 99.9...

Random random = new Random();
random.nextInt(1, 101) // 1 bis 100
```
