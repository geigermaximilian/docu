# Statische Methoden

## 📌 Was sind statische Methoden?

Eine **statische Methode** ist eine Methode, die zu einer Klasse gehört, nicht zu einer Instanz (Objekt). Sie kann aufgerufen werden, ohne ein Objekt zu erstellen.

## 🔑 Schlüsselwort: `static`

```java
public static void meinMethode() {
    // Methodeninhalt
}
```

Das Schlüsselwort `static` zeigt an, dass die Methode zur Klasse selbst gehört.

## 👨‍💻 Praktisches Beispiel: Utility-Klasse

### Die Printer-Klasse

```java
package main.helper;

public class Printer {
    
    public static void printHelloWorld() {
        System.out.println("Hello World");
    }
    
    public static void printText(String text) {
        System.out.println(text);
    }
}
```

### Verwendung der Klasse

```java
import main.helper.Printer;

public class Main {
    public static void main(String[] args) {
        Printer.printHelloWorld();      // "Hello World"
        Printer.printText("test");      // "test"
    }
}
```

**Wichtig:** Wir erstellen **kein Objekt** mit `new Printer()`. Wir rufen direkt `Printer.methodeName()` auf.

## 🆚 Statische vs. Instanz-Methoden

| | Statische Methode | Instanz-Methode |
|---|---|---|
| Keyword | `public static` | `public` |
| Zugehörigkeit | Zur Klasse | Zu Objekten |
| Aufruf | `KlasseName.methode()` | `objekt.methode()` |
| Beispiel | `Math.sqrt()` | `"Hello".toUpperCase()` |

## 💡 Wann statische Methoden verwenden?

### ✅ Verwendung für:
- **Hilfsfunktionen** (Utils wie `Printer`, `Calculator`)
- **Mathematische Funktionen** (Math.sqrt(), Math.pow())
- **Datenzugriff** (von der Klasse, nicht vom Objekt)

### ❌ Nicht für:
- Operationen, die spezifisch zu einem Objekt gehören
- Wenn man auf Instanz-Variablen zugreifen muss

## 📊 Beispiel: Calculator-Utility

```java
package utility;

public class Calculator {
    
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static int subtract(int a, int b) {
        return a - b;
    }
    
    public static int multiply(int a, int b) {
        return a * b;
    }
}
```

**Verwendung:**
```java
int result = Calculator.add(5, 3);
System.out.println(result);  // 8
```

## 🎯 Vorteile statischer Methoden

1. **Keine Objekt-Instanz nötig** - Speichereffizienz
2. **Klar als Utility erkennbar** - Code-Struktur
3. **Einfacher zu verwenden** - Weniger Code
4. **Gut für reine Funktionen** - Eingabe → Ausgabe (keine Seiteneffekte)
