# Typecasting / Typumwandlung

## 📌 Was ist Typecasting?
Typecasting ist die Konvertierung von einem Datentyp zu einem anderen.

## 1. Erweiternde Typumwandlung (Type Promotion)

Diese Konvertierung erfolgt **automatisch** und ist **sicher**:
```java
byte -> short -> int -> long -> float -> double
```

**Beispiel:**
```java
byte b1 = 65;
short s1 = b1;      // byte -> short (automatisch)
int i1 = s1;        // short -> int (automatisch)
long l1 = i1;       // int -> long (automatisch)
float f1 = l1;      // long -> float (automatisch)
double d1 = f1;     // float -> double (automatisch)

System.out.println(d1);  // 65.0
```

**Warum ist das sicher?** Der neue Typ kann alle Werte des alten Typs aufnehmen.

## 2. Einschränkende Typumwandlung (Type Demotion)

Diese Konvertierung muss **manuell** erfolgen mit **Cast-Operator** `(Typ)`:
```java
double d2 = 1.9;
float f2 = (float) d2;    // double -> float (manuell)
long l2 = (long) f2;      // float -> long (manuell)
int i2 = (int) l2;        // long -> int (manuell)
short s2 = (short) i2;    // int -> short (manuell)
byte b2 = (byte) s2;      // short -> byte (manuell)

System.out.println(b2);   // 1 (Das Original 1.9 wurde zu 1!)
```

**Warum manuell?** Es können Daten verloren gehen. Der Programmierer muss das bewusst entscheiden.

⚠️ **Wichtig:** Beim Casten von `1.9` zu `int` wird die Dezimalstelle einfach abgeschnitten → `1`

## 3. Typumwandlung zwischen `char` und `int`

Characters und Integers sind eng verwandt:
```java
int i3 = 'A';           // char -> int (Charakter-Code: 65)
System.out.println(i3); // 65

char c3 = 65;           // int -> char
System.out.println(c3); // A

char c4 = 3276;
System.out.println(c4); // Irgendein Unicode-Zeichen
```

## 📋 Zusammenfassung

| Richtung | Name | Manuell? | Sicher? |
|----------|------|----------|---------|
| `byte -> int` etc. | Erweiternde Umwandlung | Nein | Ja |
| `double -> int` etc. | Einschränkende Umwandlung | Ja | Nein (Datenverlust möglich) |
| `char <-> int` | Konvertierung | Ja | Teils |
