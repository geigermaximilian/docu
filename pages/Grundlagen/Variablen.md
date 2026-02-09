# Variablen

## 📌 Was ist eine Variable?
**Eine Variable ist ein benannter Speicherplatz im RAM, der einen Wert aufnehmen kann.**

**Analogie:** Wie eine beschriftete Box / ein Fach im Regal.

- **Deklaration** = Speicherplatz reservieren (Variable wird angelegt, aber hat keinen Wert)
- **Initialisierung** = Ersten Wert zuweisen (Variable wird mit einem Wert befüllt)
- **Wichtig:** Deklarierte aber nicht initialisierte lokale Variablen können nicht verwendet werden!

```java
int zahl;         // Deklaration: Speicherplatz reserviert, aber kein Wert
// System.out.println(zahl); // FEHLER: Variable nicht initialisiert!
zahl = 42;        // Initialisierung: Jetzt hat die Variable einen Wert
int alter = 25;   // Deklaration + Initialisierung in einer Zeile
```

## 🔢 Ganzzahlige Datentypen (Integer)

**Speichern nur ganze Zahlen ohne Komma.**

<div class="card-row">
	<div class="card card-expandable">
		<div class="card-header">byte</div>
		<div class="card-details">
			<div class="detail-label">Beispiel:</div>
			<div class="detail-value"><code><span class="keyword">byte</span> <span class="variable">b1</span> <span class="operator">=</span> <span class="number">42</span>;</code></div>
			<div class="detail-label">Speicher:</div>
			<div class="detail-value">8 Bit (1 Byte)</div>
			<div class="detail-label">Bereich:</div>
			<div class="detail-value">-128 bis 127</div>
			<div class="detail-label">Verwendung:</div>
			<div class="detail-value">Kleine Zahlen, Speicher sparen</div>
		</div>
	</div>
	<div class="card card-expandable">
		<div class="card-header">short</div>
		<div class="card-details">
			<div class="detail-label">Beispiel:</div>
			<div class="detail-value"><code><span class="keyword">short</span> <span class="variable">s1</span> <span class="operator">=</span> <span class="number">1000</span>;</code></div>
			<div class="detail-label">Speicher:</div>
			<div class="detail-value">16 Bit (2 Bytes)</div>
			<div class="detail-label">Bereich:</div>
			<div class="detail-value">-32.768 bis 32.767</div>
			<div class="detail-label">Verwendung:</div>
			<div class="detail-value">Mittelgroße Zahlen</div>
		</div>
	</div>
	<div class="card card-expandable">
		<div class="card-header">int</div>
		<div class="card-details">
			<div class="detail-label">Beispiel:</div>
			<div class="detail-value"><code><span class="keyword">int</span> <span class="variable">i1</span> <span class="operator">=</span> <span class="number">34</span>;</code></div>
			<div class="detail-label">Speicher:</div>
			<div class="detail-value">32 Bit (4 Bytes)</div>
			<div class="detail-label">Bereich:</div>
			<div class="detail-value">-2 Mrd. bis 2 Mrd.</div>
			<div class="detail-label">Verwendung:</div>
			<div class="detail-value">Standard für Ganzzahlen</div>
		</div>
	</div>
	<div class="card card-expandable">
		<div class="card-header">long</div>
		<div class="card-details">
			<div class="detail-label">Beispiel:</div>
			<div class="detail-value"><code><span class="keyword">long</span> <span class="variable">l1</span> <span class="operator">=</span> <span class="number">100_000L</span>;</code></div>
			<div class="detail-label">Speicher:</div>
			<div class="detail-value">64 Bit (8 Bytes)</div>
			<div class="detail-label">Bereich:</div>
			<div class="detail-value">-9 Trillionen bis 9 Trillionen</div>
			<div class="detail-label">Suffix:</div>
			<div class="detail-value"><code>L</code> am Ende erforderlich</div>
		</div>
	</div>
</div>

## 🔢 Dezimalzahlen (Fließkomma)

**Speichern Zahlen mit Komma (Nachkommastellen).**

<div class="card-row">
	<div class="card card-expandable">
		<div class="card-header">float</div>
		<div class="card-details">
			<div class="detail-label">Beispiel:</div>
			<div class="detail-value"><code><span class="keyword">float</span> <span class="variable">f1</span> <span class="operator">=</span> <span class="number">3.14F</span>;</code></div>
			<div class="detail-label">Speicher:</div>
			<div class="detail-value">32 Bit (4 Bytes)</div>
			<div class="detail-label">Präzision:</div>
			<div class="detail-value">~6-7 Nachkommastellen</div>
			<div class="detail-label">Suffix:</div>
			<div class="detail-value"><code>F</code> am Ende erforderlich</div>
		</div>
	</div>
	<div class="card card-expandable">
		<div class="card-header">double</div>
		<div class="card-details">
			<div class="detail-label">Beispiel:</div>
			<div class="detail-value"><code><span class="keyword">double</span> <span class="variable">d1</span> <span class="operator">=</span> <span class="number">3.14</span>;</code></div>
			<div class="detail-label">Speicher:</div>
			<div class="detail-value">64 Bit (8 Bytes)</div>
			<div class="detail-label">Präzision:</div>
			<div class="detail-value">~15-16 Nachkommastellen</div>
			<div class="detail-label">Verwendung:</div>
			<div class="detail-value">Standard für Dezimalzahlen</div>
		</div>
	</div>
</div>

## 📝 Text & Zeichen

**Speichern Buchstaben, Wörter und Zeichen.**

<div class="card-row">
	<div class="card card-expandable">
		<div class="card-header">char</div>
		<div class="card-details">
			<div class="detail-label">Beispiel:</div>
			<div class="detail-value"><code><span class="keyword">char</span> <span class="variable">c1</span> <span class="operator">=</span> <span class="string">'A'</span>;</code></div>
			<div class="detail-label">Speicher:</div>
			<div class="detail-value">16 Bit (2 Bytes)</div>
			<div class="detail-label">Speichert:</div>
			<div class="detail-value">Ein einzelnes Zeichen</div>
			<div class="detail-label">Syntax:</div>
			<div class="detail-value">Einzelne Anführungszeichen ' '</div>
		</div>
	</div>
	<div class="card card-expandable">
		<div class="card-header">String</div>
		<div class="card-details">
			<div class="detail-label">Beispiel:</div>
			<div class="detail-value"><code><span class="keyword">String</span> <span class="variable">str</span> <span class="operator">=</span> <span class="string">"Hallo"</span>;</code></div>
			<div class="detail-label">Typ:</div>
			<div class="detail-value">Referenztyp (kein primitiver Typ)</div>
			<div class="detail-label">Speichert:</div>
			<div class="detail-value">Texte & Wörter (beliebig lang)</div>
			<div class="detail-label">Syntax:</div>
			<div class="detail-value">Doppelte Anführungszeichen " "</div>
		</div>
	</div>
</div>

## ✅ Boolean (Wahrheitswert)

**Speichert nur wahr oder falsch.**

<div class="card-row">
	<div class="card card-expandable">
		<div class="card-header">boolean</div>
		<div class="card-details">
			<div class="detail-label">Beispiel:</div>
			<div class="detail-value"><code><span class="keyword">boolean</span> <span class="variable">flag</span> <span class="operator">=</span> <span class="keyword">true</span>;</code></div>
			<div class="detail-label">Speicher:</div>
			<div class="detail-value">1 Bit (theoretisch)</div>
			<div class="detail-label">Werte:</div>
			<div class="detail-value">Nur <code>true</code> oder <code>false</code></div>
			<div class="detail-label">Verwendung:</div>
			<div class="detail-value">Bedingungen, Schalter, Flags</div>
		</div>
	</div>
</div>

## 📝 Variable Deklaration

**Deklaration** = Variable anlegen | **Initialisierung** = Ersten Wert zuweisen

```java
int alter = 25;           // Deklaration + Initialisierung in einem Schritt
int zahl;                 // Nur Deklaration (noch kein Wert zugewiesen)
zahl = 42;                // Spätere Initialisierung (erste Wertzuweisung)
int a = 5, b = 10;        // Mehrere Variablen desselben Typs gleichzeitig
final int KONSTANTE = 99; // final = Wert ist unveränderlich (Konstante)
```

## 🎯 Scope (Gültigkeitsbereich)

**Scope** = Gültigkeitsbereich einer Variable (wo sie sichtbar und verwendbar ist).

**Regel:** Der Scope einer Variable wird durch den Block definiert, in dem sie deklariert wurde.
Ein Block ist durch geschweifte Klammern `{ }` begrenzt.

```java
public static void main(String[] args) {
    int x = 10;           // Scope: gesamte main-Methode
    if (x > 5) {
        int y = 20;       // Scope: nur innerhalb des if-Blocks
        System.out.println(y); // OK: y ist hier sichtbar
    }
    // System.out.println(y); // FEHLER: y außerhalb des Scopes!
}
```

