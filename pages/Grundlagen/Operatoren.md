# Operatoren

## 📌 Was sind Operatoren?
**Operatoren sind Symbole, die Operationen auf Operanden (Variablen, Werte) ausführen.**

**Arithmetische Operatoren:**
- **+** = Addition (Summe zweier Werte)
- **-** = Subtraktion (Differenz zweier Werte)
- ***** = Multiplikation (Produkt zweier Werte)
- **/** = Division (Quotient zweier Werte)
- **%** = Modulo (Rest bei ganzzahliger Division)


## ➕ Arithmetische Operatoren

<div class="card-row">
	<div class="card card-expandable">
		<div class="card-header">+</div>
		<div class="card-details">
			<div class="detail-label">Operation:</div>
			<div class="detail-value">Addition</div>
			<div class="detail-label">Beispiel:</div>
			<div class="detail-value"><code><span class="keyword">int</span> <span class="variable">sum</span> <span class="operator">=</span> <span class="number">5</span> <span class="operator">+</span> <span class="number">3</span>;</code></div>
		</div>
	</div>
	<div class="card card-expandable">
		<div class="card-header">-</div>
		<div class="card-details">
			<div class="detail-label">Operation:</div>
			<div class="detail-value">Subtraktion</div>
			<div class="detail-label">Beispiel:</div>
			<div class="detail-value"><code><span class="keyword">int</span> <span class="variable">diff</span> <span class="operator">=</span> <span class="number">5</span> <span class="operator">-</span> <span class="number">3</span>;</code></div>
		</div>
	</div>
	<div class="card card-expandable">
		<div class="card-header">*</div>
		<div class="card-details">
			<div class="detail-label">Operation:</div>
			<div class="detail-value">Multiplikation</div>
			<div class="detail-label">Beispiel:</div>
			<div class="detail-value"><code><span class="keyword">int</span> <span class="variable">prod</span> <span class="operator">=</span> <span class="number">5</span> <span class="operator">*</span> <span class="number">3</span>;</code></div>
		</div>
	</div>
	<div class="card card-expandable">
		<div class="card-header">/</div>
		<div class="card-details">
			<div class="detail-label">Operation:</div>
			<div class="detail-value">Division</div>
			<div class="detail-label">Beispiel:</div>
			<div class="detail-value"><code><span class="keyword">int</span> <span class="variable">div</span> <span class="operator">=</span> <span class="number">10</span> <span class="operator">/</span> <span class="number">2</span>;</code></div>
		</div>
	</div>
	<div class="card card-expandable">
		<div class="card-header">%</div>
		<div class="card-details">
			<div class="detail-label">Operation:</div>
			<div class="detail-value">Modulo (Rest)</div>
			<div class="detail-label">Beispiel:</div>
			<div class="detail-value"><code><span class="keyword">int</span> <span class="variable">mod</span> <span class="operator">=</span> <span class="number">5</span> <span class="operator">%</span> <span class="number">3</span>;</code></div>
		</div>
	</div>
</div>

## ++ und -- Operatoren

**Inkrement (++)** = Variable um 1 erhöhen | **Dekrement (--)** = Variable um 1 verringern

| Operator | Name | Ausführungsreihenfolge |
|----------|------|------------------------|
| <code><span class="operator">++</span><span class="variable">a</span></code> | Präfix-Inkrement | **Zuerst erhöhen, dann Wert zurückgeben** |
| <code><span class="variable">a</span><span class="operator">++</span></code> | Postfix-Inkrement | **Zuerst Wert zurückgeben, dann erhöhen** |
| <code><span class="operator">--</span><span class="variable">a</span></code> | Präfix-Dekrement | **Zuerst verringern, dann Wert zurückgeben** |
| <code><span class="variable">a</span><span class="operator">--</span></code> | Postfix-Dekrement | **Zuerst Wert zurückgeben, dann verringern** |

### Unterschied Präfix vs Postfix

```java
int a = 5;
int b = ++a;  // Präfix: a wird zuerst auf 6 erhöht, dann b zugewiesen -> a=6, b=6
int c = a++;  // Postfix: c wird zuerst der Wert 6 zugewiesen, dann a erhöht -> c=6, a=7
```
