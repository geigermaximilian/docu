# Konsolen-Ausgaben

## 📌 Ausgabe-Methoden

### 1. **println()** - Mit Zeilenumbruch

```java
System.out.println("Text 1");
System.out.println(true);
System.out.println(44);
```

Output:
```
Text 1
true
44
```

### 2. **print()** - Ohne Zeilenumbruch

```java
System.out.print("Text 2");
System.out.print("Text 3");
```

Output: `Text 2Text 3`

## 🎨 Formatierte Ausgabe mit printf()

Die `printf()`-Methode ermöglicht präzise Formatierung:

```java
System.out.printf("Format-String", wert1, wert2, ...);
```

### String-Formatierung mit `%s`

```java
String text = "Hallo";
String name = "Jürgen";

System.out.printf("%s %s%n", text, name);     // "Hallo Jürgen"
System.out.printf("%S %S%n", text, name);     // "HALLO JÜRGEN" (Großbuchstaben)
System.out.printf("%20s %s%n", text, name);   // "                Hallo Jürgen" (20 Zeichen breit)
System.out.printf("%-20s %s%n", text, name);  // "Hallo                Jürgen" (linksbündig)
```

### Dezimalzahlen-Formatierung mit `%d`

```java
int number = 1_000_000_000;

System.out.printf("%d%n", number);           // 1000000000
System.out.printf("%,d%n", number);          // 1,000,000,000 (mit Trennzeichen)
```

**Deutsches Format:**
```java
import java.util.Locale;

System.out.printf(Locale.GERMANY, "%,d%n", 1_000_000_000);  // 1.000.000.000
```

### Gleitkommazahlen-Formatierung mit `%f`

```java
double number = 3.53585487;

System.out.printf("%.2f%n", number);  // 3.54 (2 Dezimalstellen)
System.out.printf("%.1f%n", number);  // 3.5  (1 Dezimalstelle)
```

## 📊 Praktisches Beispiel: Tabelle ausgeben

```java
System.out.printf("%-10s %s%n", "Name", "Note");
System.out.println("---------------");
System.out.printf("%-10s %.1f%n", "Hans", 2.5);
System.out.printf("%-10s %.1f%n", "Jürgen", 1.5);
System.out.printf("%-10s %.1f%n", "Peter", 3.5);
System.out.printf("%-10s %.1f%n", "Harald", 4.5);
```

Output:
```
Name       Note
---------------
Hans       2.5
Jürgen     1.5
Peter      3.5
Harald     4.5
```

## 📋 Format-String Aufbau

```
%[Flags][Breite][.Präzision]Konvertierungs-Zeichen
```

| Element | Beispiel | Beschreibung |
|---------|----------|-------------|
| `%s` | `"Hallo"` | String |
| `%S` | `"HALLO"` | String in Großbuchstaben |
| `%d` | `42` | Dezimalzahl (Integer) |
| `%f` | `3.14` | Gleitkommazahl |
| `%.2f` | `3.14` | 2 Dezimalstellen |
| `%20s` | `"         Hallo"` | 20 Zeichen breit (rechtsbündig) |
| `%-20s` | `"Hallo         "` | 20 Zeichen breit (linksbündig) |
| `%,d` | `1,000,000` | Mit Trennzeichen |
| `%n` | Zeilenumbruch | Plattformunabhängiger Zeilenumbruch |

## 💡 Zusammenfassung

- `println()` = Ausgabe mit Zeilenumbruch
- `print()` = Ausgabe ohne Zeilenumbruch
- `printf()` = Formatierte Ausgabe
