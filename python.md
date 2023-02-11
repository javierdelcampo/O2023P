
# Python

## ⚠Comentarios

⚠️

```

# Los comentarios de una sola línea empiezan con el símbolo almohadilla

```

⚠️ ⚠️ ⚠️ NO existen comentarios multilínea, PERO se pueden utilizar tres dobles comillas para definir cadenas multilínea. No generan cógigo, por lo que pueden considerarse comentarios.

```
""" Las cadenas multilínea pueden escribirse 
	utilizando tres dobles comillas ("), 
	y se utilizan a menudo como medio para documentar
"""
```

## Tipos de datos primitivos y operadores

Números

```
3 # -> es un 3, sin más
```

Las operaciones matemáticas se realizan con los operadores habituales, no hay sorpresas

```
1 + 1   # => 2
8 - 1   # => 7
10 * 2  # => 20
35 / 5  # => 7,0
```

Las divisiones de enteros se redondean hacia abajo, tanto para los números positivos como para los negativos

```
5 // 3       # => 1
-5 // 3      # => -2
5.0 // 3.0   # => 1.0 # También funciona con float
-5.0 // 3.0  # => -2,0
```

El resultado de una división siempre es un float

```
10.0 / 3  # => 3,3333333333333335
```

Operador módulo

```
7 % 3   # => 1
# i % j tiene el mismo signo que j, al contrario que en C 
-7 % 3  # => 2
```

Exponente (x**y, x a la y potencia)
```
2**3  # => 8
```

La precedencia se indica con paréntesis
```
1 + 3 * 2    # => 7
(1 + 3) * 2  # => 8
```

⚠️ Los boolean son primitivas (ojo a las mayúsculas)
```
True   # => True
False  # => False
```

⚠️ Los boolean se niegan con NOT
```
not True   # => False
not False  # => True
```

⚠️ Operadores booleanos
```
"and" y "or" son sensibles a las mayúsculas
True and False  # => False
False or True   # => True
```

⚠️ True y False son equivalentes a 1 y 0 (se pueden realizar operaciones matemáticas)
```
True + True # => 2
True * 8    # => 8
False - 5   # => -5
```

⚠️ Los operadores de comparación utilizan el valor numérico de True y False
```
0 == False  # => True
1 == True   # => True
2 == True   # => False
-5 != False # => True
```

⚠️ None, 0, y las cadenas vacías (y las listas, dicts, tuplas y sets vacíos) se evalúan como False.
El resto de valores es True
```
bool(0)     # => False
bool("")    # => False
bool([])    # => False
bool({})    # => False
bool(())    # => False
bool(set()) # => False
bool(4)     # => True
bool(-6)    # => True
```

⚠️ Utilizando los operadores lógicos booleanos sobre enteros, los comvierte (cast) a booleanos para ser evluados
pero se devuelve su valor no convertidos. No confundir/mezclar con bool(ints) y operaciones bitwise and/or (&,|)
```
bool(0)     # => False
bool(2)     # => True
0 and 2     # => 0
bool(-5)    # => True
bool(2)     # => True
-5 or 0     # => -5
```

Igualdad es ==
```
1 == 1  # => True
2 == 1  # => False
```

No igual es !=
```
1 != 1  # => False
2 != 1  # => True
```

Más comparaciones
```
1 < 10  # => True
1 > 10  # => False
2 <= 2  # => True
2 >= 2  # => True
```

Comprobando si un valor está dentro de un rango
```
1 < 2 and 2 < 3  # => True
2 < 3 and 3 < 2  # => False

# Encadenándolos para hacerlos más legibles...
1 < 2 < 3  # => True
2 < 3 < 2  # => False
```

⚠️ (is vs. ==) 'is' comprueba si dos variables se refieren al mismo OBJETO, pero == comprueba
si el objeto al que apunta tiene los mismos VALORES
```
a = [1, 2, 3, 4]  # Apunta una nueva lista, [1, 2, 3, 4]
b = a             # Hace apuntar "b" al valor al que "a" está apuntando
b is a            # => True, a y b se refieren al mismo objeto
b == a            # => True, los objetos a's y b's son iguales
b = [1, 2, 3, 4]  # Apunta b a una lista nueva, [1, 2, 3, 4]
b is a            # => False, a y b no son el mismo objeto
b == a            # => True, los objetos a's y b's son iguales
```

⚠️ Las cadenas (Strings) se crean con " o '
```
"This is a string."
'This is also a string.'
```

⚠️ Las cadenas también se pueden sumar
```
"Hello " + "world!"  # => "Hello world!"
# Los literales String (pero no las variables) se pueden concatenar sin necesidad de '+'
"Hello " "world!"    # => "Hello world!"
```

Un cadena puede ser utilizada como una lista de caracteres, accesibles por el índice (que parte de 0)
```
"Hello world!"[0]  # => 'H'
```

La longitud de una cadena se calcula con len()
```
len("Esto es una cadena")  # => 18
```

Desde la versión de Python 3.6, se pueden utilizar f-strings o formateadas utilizando literales
```
name = "Frederica"
f"Ella dijo que su nombre era {name}." # => "Ella dijo que su nombre era Frederica"
# Cualquier expresión válida de Python incluida se manda al string
f"{name} tiene {len(name)} caracteres de longitud." # => "Frederica tiene 9 caracteres de longitud"
```
