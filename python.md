
# Python

⚠️ indica las partes que pueden ser más particulares de Python, comparado con otros lenguajes. Hay partes individuales y secciones completas

## Comentarios

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
"Esto es una cadena."
'Estp también es una cadena.'
```

⚠️ Las cadenas también se pueden sumar
```
"Hello " + "world!"  # => "Hello world!"
# Los literales String (pero no las variables) se pueden concatenar sin necesidad de '+'
"Hello " "world!"    # => "Hello world!"
```

⚠️Una cadena puede ser utilizada como una lista de caracteres, accesibles por el índice (que parte de 0)
```
"Hello world!"[0]  # => 'H'
```

⚠️ La longitud de una cadena se calcula con len()
```
len("El joropo ha comenzado ")  # => 22
```

⚠️ Desde la versión de Python 3.6, se pueden utilizar f-strings o formateadas utilizando literales
```
texto = "hondo"
f"Lo más {texto} del compás" # => "Lo más hondo del compás"
# Cualquier expresión válida de Python incluida se manda al string
f"{texto} tiene {len(texto)} caracteres de longitud." # => "Hondo tiene 5 caracteres de longitud"
```

⚠️ None es un objeto
```
None  # => None
```

⚠️ No utilices el símbolo "no igual" "==" para comparar objetos con None
Utiliza "is". Comprueba la igualdad del objeto
```
"etc" is None  # => False
None is None   # => True
```

## Variables y colecciones

Python tiene una función print
```
print("bailan todos los vecinos")  # => bailan todos los vecinos
```

Por defecto, la función print también imprime el carácter de línea nueva al final
Utiliza el argumento opcional "end" para cambiar el final de línea
```
print("de Guatopo y Paso ", end="Real")  # => de Guatopo y Paso Real
```

Forma sencilla de coger el input de consola
```
input_string_var = input("Introduce algo: ") # Devuelve el texto introducido como un string
```

No hay declaraciones, sólo asignaciones
La convención es utilizar minúsculas_con_subrayados
```
alguna_variable = 5
alguna_variable  # => 5
```

Acceder a una variable que no haya sido asignada da como resultado una excepción
```
variable_desconocida  # Lanza un NameError
```

if se puede utilizar como una expresión
Equivalente a C: '?:' operador ternario
```
"hola" if 0 > 1 else "adiós"  # => "hola"
```

Las listas almacenan secuencias
```
li = []
# Se puede empezar con una lista ya rellena
otro_li = [4, 5, 6]
```

Añade cosas al final de una lista con append
```python
li.append(1)    # li es [1]
li.append(2)    # li es [1, 2]
li.append(4)    # li es [1, 2, 4]
li.append(3)    # li es [1, 2, 4, 3]
# Se eliminan del final con pop
li.pop()        # => 3 y li es [1, 2, 4]
# Se lo devolvemos
li.append(3)    # li es [1, 2, 4, 3] de nuevo
```

Accede a una lista de la misma forma que a un array
```python
li[0]   # => 1
# Mira en el último elemento...
li[-1]  # => 3
```

Accediendo fuera de rango es un IndexError
```python
li[4]  # Lanza un IndexError
```







[👩🏿‍🦱](https://www.youtube.com/watch?v=kQub-omnZSg) <br/>

[🐊](https://www.youtube.com/watch?v=DuwI3_N0aVw)
