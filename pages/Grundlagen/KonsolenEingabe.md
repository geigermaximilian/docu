# Konsolen-Eingaben

## 📌 Wie liest man Eingaben vom Benutzer?

Mit der `Scanner`-Klasse können wir Eingaben from der Konsole lesen.

## 🎯 Die Scanner-Klasse

### 1. Scanner initialisieren

```java
import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
```

### 2. Verschiedene Input-Methoden

#### `nextInt()` - Ganze Zahl einlesen

```java
System.out.print("Bitte eine ganze Zahl eingeben: ");
int i1 = scanner.nextInt();
System.out.println("Du hast eingegeben: " + i1);
```

#### `nextDouble()` - Dezimalzahl einlesen

```java
System.out.print("Bitte eine reelle Zahl eingeben: ");
double d1 = scanner.nextDouble();
System.out.println("Du hast eingegeben: " + d1);
```

#### `nextBoolean()` - Boolean-Wert einlesen

```java
System.out.print("Bitte einen boolschen Wahrheitswert eingeben (true/false): ");
boolean b1 = scanner.nextBoolean();
System.out.println("Du hast eingegeben: " + b1);
```

#### `next()` - Ein Wort einlesen

```java
System.out.print("Bitte ein einzelnes Wort eingeben: ");
String s1 = scanner.next();
System.out.println("Du hast eingegeben: " + s1);
```

**Wichtig:** `next()` liest nur bis zum nächsten Whitespace (Leerzeichen, Tabulator, Zeilenumbruch).

#### `nextLine()` - Ganze Zeile einlesen

```java
System.out.print("Bitte mehrere Wörter eingeben: ");
scanner.nextLine();  // Zeilenumbruch vom vorigen Input konsumieren
String s2 = scanner.nextLine();
System.out.println("Du hast eingegeben: " + s2);
```

**Wichtig:** `nextLine()` liest die **ganze Zeile** inklusive Leerzeichen.

#### `next().charAt(0)` - Einzelnes Zeichen einlesen

```java
System.out.print("Bitte ein einzelnes Zeichen eingeben: ");
char c1 = scanner.next().charAt(0);
System.out.println("Du hast eingegeben: " + c1);
```

## 📋 Zusammenfassung aller Input-Methoden

| Methode | Was wird gelesen? | Beispiel |
|---------|-------------------|----------|
| `nextInt()` | Ganze Zahl | `42` |
| `nextDouble()` | Dezimalzahl | `3.14` |
| `nextBoolean()` | true/false | `true` |
| `next()` | Ein Wort | `"Hallo"` |
| `nextLine()` | Ganze Zeile | `"Hallo Welt"` |
| `next().charAt(0)` | Ein Zeichen | `'A'` |

## ⚠️ Wichtige Hinweise

1. Nach `nextInt()`, `nextDouble()` etc. bleibt der Zeilenumbruch im Buffer
2. Daher vor `nextLine()` ein zusätzliches `scanner.nextLine()` aufrufen
3. Immer `import java.util.Scanner;` verwenden
