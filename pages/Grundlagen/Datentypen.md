# Datentypen

## 📌 Was sind Primitive Datentypen?
Primitive Datentypen sind die grundlegendsten Datentypen in Java. Sie speichern einfache Werte direkt und nicht als Objekte.

## 🔢 Primitive Datentypen in Java

### 1. **Ganzzahlen (Integer Types)**

| Typ | Größe | Bereich | Beispiel |
|-----|-------|---------|----------|
| `byte` | 8 Bit | -128 bis 127 | `byte b = 42;` |
| `short` | 16 Bit | -32.768 bis 32.767 | `short s = 22_743;` |
| `int` | 32 Bit | -2.147.483.648 bis 2.147.483.647 | `int i = 1_000_000_000;` |
| `long` | 64 Bit | Sehr großer Bereich | `long l = 5_000_000_000L;` |

**Hinweis:** Bei `long` muss ein `L` am Ende stehen, damit Java es als `long` erkennt.

### 2. **Zeichen (`char`)**

```java
char char1 = 'A';           // Direkt als Zeichen
char char2 = 0b1000001;     // Binär (0b...)
char char3 = 0101;          // Oktal (0...)
char char4 = 65;            // Dezimal
char char5 = 0x41;          // Hexadezimal (0x...)
char char6 = '\u0041';      // Unicode-Escape
```

Alle obigen Beispiele representieren das Zeichen `'A'`.

### 3. **Boolsche Wahrheitswerte (`boolean`)**

```java
boolean boolean1 = true;     // Nur zwei Werte möglich
boolean boolean2 = false;
```

Die einzigen möglichen Werte sind `true` und `false`.

### 4. **Gleitkommazahlen (Floating Point)**

| Typ | Größe | Präzision | Beispiel |
|-----|-------|-----------|----------|
| `float` | 32 Bit | ~7 Dezimalstellen | `float f = 0.1F;` |
| `double` | 64 Bit | ~15 Dezimalstellen | `double d = 0.1;` |

**Hinweis:** Bei `float` muss ein `F` am Ende stehen. `double` ist der Standard.

## ⚠️ Wichtiges: Precision bei Gleitkommazahlen

Gleitkommazahlen können Genauigkeitsprobleme haben:
```java
float float1 = 0.1F;
double double1 = 0.1;

System.out.println("float1: " + float1);    // 0.1
System.out.println("double1: " + double1);  // 0.1
```

Für exakte Dezimalzahlen sollte man **`BigDecimal`** verwenden:
```java
BigDecimal bigDecimal1 = new BigDecimal(0.1F);
BigDecimal bigDecimal2 = new BigDecimal(0.1);

System.out.println("bigDecimal1: " + bigDecimal1);
System.out.println("bigDecimal2: " + bigDecimal2);
```

**Warum**? `BigDecimal` ist präzise und eignet sich perfekt für finanzielle Berechnungen.

## 💡 Zahlensysteme

Java erlaubt verschiedene Zahlensysteme:
- **Binär**: `0b` Präfix → `0b1000001` = 65
- **Oktal**: `0` Präfix → `0101` = 65
- **Dezimal**: Keine Präfix → `65` = 65
- **Hexadezimal**: `0x` Präfix → `0x41` = 65

## 📊 Zusammenfassung

```java
// Ganzzahlen
byte byte1 = 42;
short short1 = 22_743;
int int1 = 1_000_000_000;
long long1 = 5_000_000_000L;

// Zeichen
char char1 = 'A';

// Boolean
boolean bool1 = true;

// Gleitkomma
float float1 = 0.1F;
double double1 = 0.1;
```
