# Strings

## 📌 Was ist ein String?
Ein Ein String ist eine Zeichenkette - eine Sequenz von Zeichen. In Java ist `String` ein Datentyp für Texte.

```java
String text = "Hello World";
```

## 🔤 Wichtige String-Methoden

### 1. **length()** - Länge des Strings

```java
String text = "Hello World";
int length = text.length();
System.out.println(length);  // 11
```

### 2. **charAt(Index)** - Zeichen an Position abrufen

```java
String text = "Hello World";

char characterAtIndex7 = text.charAt(7);   // 'o' (Index 7)
char firstCharacter = text.charAt(0);      // 'H' (Index 0)
char lastCharacter = text.charAt(text.length()-1);  // 'd' (letzter Index)
```

**Wichtig:** String-Indizes beginnen bei **0** (nicht bei 1)!

## ➕ String-Konkatenation (Verkettung)

### Mit `+` Operator

```java
String columns = "id";
String table = "flight";
String condition = "city = \"Friedrichshafen\"";

String sqlQuery = "SELECT " + columns + " FROM " + table + " WHERE " + condition + ";";

System.out.println(sqlQuery);
// Output: SELECT id FROM flight WHERE city = "Friedrichshafen";
```

### Mit Escape-Sequenzen

- `\t` = Tabulation (Einrückung)
- `\n` = Zeilenumbruch (Neue Zeile)
- `\"` = Anführungszeichen (im String)
- `\\` = Backslash (im String)

**Beispiel:**
```java
String sqlQuery = "\tSELECT " + columns + 
                  "\n\tFROM " + table + 
                  "\n\tWHERE " + condition + ";";

System.out.println(sqlQuery);
/* Output:
	SELECT id
	FROM flight
	WHERE city = "Friedrichshafen";
*/
```

## 📋 Zusammenfassung String-Methoden

| Methode | Beschreibung | Beispiel |
|---------|-------------|----------|
| `length()` | Länge des Strings | `text.length()` → 11 |
| `charAt(i)` | Zeichen an Index i | `text.charAt(0)` → 'H' |
| `+` | String-Verkettung | `"Hello" + " " + "World"` → "Hello World" |
