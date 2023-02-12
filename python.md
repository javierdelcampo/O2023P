
# Python

⚠️ indica las partes que pueden ser más particulares de Python, comparado con otros lenguajes. Hay partes individuales y secciones completas

### Comentarios

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

### Tipos de datos primitivos y operadores

Números

```python
3 # -> es un 3, sin más
```

Las operaciones matemáticas se realizan con los operadores habituales, no hay sorpresas

```python
1 + 1   # => 2
8 - 1   # => 7
10 * 2  # => 20
35 / 5  # => 7,0
```

Las divisiones de enteros se redondean hacia abajo, tanto para los números positivos como para los negativos

```python
5 // 3       # => 1
-5 // 3      # => -2
5.0 // 3.0   # => 1.0 # También funciona con float
-5.0 // 3.0  # => -2,0
```

El resultado de una división siempre es un float
```python
10.0 / 3  # => 3,3333333333333335
```

Operador módulo
```python
7 % 3   # => 1
# i % j tiene el mismo signo que j, al contrario que en C 
-7 % 3  # => 2
```

Exponente (x**y, x a la y potencia)
```python
2**3  # => 8
```

La precedencia se indica con paréntesis
```python
1 + 3 * 2    # => 7
(1 + 3) * 2  # => 8
```

⚠️ Los boolean son primitivas (ojo a las mayúsculas)
```python
True   # => True
False  # => False
```

⚠️ Los boolean se niegan con NOT
```python
not True   # => False
not False  # => True
```

⚠️ Operadores booleanos
```python
"and" y "or" son sensibles a las mayúsculas
True and False  # => False
False or True   # => True
```

⚠️ True y False son equivalentes a 1 y 0 (se pueden realizar operaciones matemáticas)
```python
True + True # => 2
True * 8    # => 8
False - 5   # => -5
```

⚠️ Los operadores de comparación utilizan el valor numérico de True y False
```python
0 == False  # => True
1 == True   # => True
2 == True   # => False
-5 != False # => True
```

⚠️ None, 0, y las cadenas vacías (y las listas, dicts, tuplas y sets vacíos) se evalúan como False.
El resto de valores es True
```python
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
```python
bool(0)     # => False
bool(2)     # => True
0 and 2     # => 0
bool(-5)    # => True
bool(2)     # => True
-5 or 0     # => -5
```

Igualdad es ==
```python
1 == 1  # => True
2 == 1  # => False
```

No igual es !=
```python
1 != 1  # => False
2 != 1  # => True
```

Más comparaciones
```python
1 < 10  # => True
1 > 10  # => False
2 <= 2  # => True
2 >= 2  # => True
```

Comprobando si un valor está dentro de un rango
```python
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
```python
"Esto es una cadena."
'Estp también es una cadena.'
```

⚠️ Las cadenas también se pueden sumar
```python
"Hello " + "world!"  # => "Hello world!"
# Los literales String (pero no las variables) se pueden concatenar sin necesidad de '+'
"Hello " "world!"    # => "Hello world!"
```

⚠️Una cadena puede ser utilizada como una lista de caracteres, accesibles por el índice (que parte de 0)
```python
"Hello world!"[0]  # => 'H'
```

<details><summary>Lenguajes de programación cuyas listas empiezan por cero (0)</summary>
  
TODOS los que merecen la pena: JavaScript, Java, C#, C, C++, Perl, Python, Rust, etc, etc, etc.<br/>
¿Hay lenguajes en los el índice empieza por 1?: sí, pero en su mayoría son lenguajes desarrollados en los años 60 y 70 por gente con el cerebro agujereado por lamer constantemente la espalda de sapos alucinógenos para soportar su vida en entornos corporativos (ALGOL, Cobol, RPG, Smalltalk, etc.). También empiezan por 1 lenguajes como Fortran, Matlab, Mathematica o R, pero son para estadísticos y ultra-matemáticos, y no nos hablamos con esa gente. <br/>
¿Y qué pasa con SASS, XQuery y Julia?: mira... pedaz... ven aquí y escúchame bien... me remito a lo de los sapos.
  
</details>

⚠️ La longitud de una cadena se calcula con len()
```python
len("El joropo ha comenzado ")  # => 22
```

⚠️ Desde la versión de Python 3.6, se pueden utilizar f-strings o formateadas utilizando literales
```python
texto = "hondo"
f"Lo más {texto} del compás" # => "Lo más hondo del compás"
# Cualquier expresión válida de Python incluida se manda al string
f"{texto} tiene {len(texto)} caracteres de longitud." # => "Hondo tiene 5 caracteres de longitud"
```

⚠️ None es un objeto
```python
None  # => None
```

⚠️ No utilices el símbolo "no igual" "==" para comparar objetos con None
Utiliza "is". Comprueba la igualdad del objeto
```python
"etc" is None  # => False
None is None   # => True
```

### Variables y colecciones

Python tiene una función print
```python
print("bailan todos los vecinos")  # => bailan todos los vecinos
```

Por defecto, la función print también imprime el carácter de línea nueva al final
Utiliza el argumento opcional "end" para cambiar el final de línea
```python
print("de Guatopo y Paso ", end="Real")  # => de Guatopo y Paso Real
```

Forma sencilla de coger el input de consola
```python
input_string_var = input("Introduce algo: ") # Devuelve el texto introducido como un string
```

No hay declaraciones, sólo asignaciones
La convención es utilizar minúsculas_con_subrayados
```python
alguna_variable = 5
alguna_variable  # => 5
```

Acceder a una variable que no haya sido asignada da como resultado una excepción
```python
variable_desconocida  # Lanza un NameError
```

if se puede utilizar como una expresión
Equivalente a C: '?:' operador ternario
```python
"hola" if 0 > 1 else "adiós"  # => "hola"
```

Las listas almacenan secuencias
```python
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

Quitar la primera ocurrencia de un valor
```python
li.remove(2)  # li ahora es [1, 3]
li.remove(2)  # Lanza un ValueError ya que 2 no está en la lista
```

Inserta un elemento en un índice determinado
```python
li.insert(1, 2)  # li is now [1, 2, 3] again
```

Devuelve el índice del primer elemento encontrado según un argumento
```python
li.index(2)  # => 1
li.index(4)  # Lanza un ValueError ya que 4 no está en la lista
```

Las listas se pueden sumar<br/>
Los valores de li y otro_li no se modifican<br/>
```python
li + otro_li  # => [1, 2, 3, 4, 5, 6]
```

Las listas se pueden concatenar con "extend()"
```python
li.extend(otro_li)  # Ahora li es [1, 2, 3, 4, 5, 6]
```

Comprueba la existencia de un elemento en una lista utilizando "in"
```python
1 in li  # => True
```

Calcular la longitud con "len()"
```python
len(li)  # => 6
```

### Tuplas

Las tuplas son como las listas pero son inmutables
```python
tup = (1, 2, 3)
tup[0]      # => 1
tup[0] = 3  # Raises a TypeError
```

⚠️ Una tupla de longitud uno (1) debe tener una coma tras el último elemento<br/>
pero las tuplas de otras longitudes, incluso cero, no
```python
type((1))   # => <class 'int'>
type((1,))  # => <class 'tuple'>
type(())    # => <class 'tuple'>
```

# You can do most of the list operations on tuples too
Se pueden realizar muchas operaciones con tuplas...
```python
len(tup)         # => 3
tup + (4, 5, 6)  # => (1, 2, 3, 4, 5, 6)
tup[:2]          # => (1, 2)
2 in tup         # => True
```


Las tuplas (o listas) se pueden asignar en variables
```python
a, b, c = (1, 2, 3)  # a es 1, b es 2 y c es 3
# También se puede extender
a, *b, c = (1, 2, 3, 4)  # a es 1, b es [2, 3] y c es 4
# Las tuplas se crean por defecto si se omiten los paréntesis
d, e, f = 4, 5, 6  # la tupla 4, 5, 6 se asignan a las variables d, e y f
# respectivamente d = 4, e = 5 y f = 6
# Se pueden intercambiar valores...
e, d = d, e  # d is now 5 and e is now 4
```

### Diccionarios

Los diccionarios almacenan mapeos de keys an valores
```python
empty_dict = {}
# Un diccionario ya relleno:
filled_dict = {"one": 1, "two": 2, "three": 3}
```

Las claves para los diccionarios deben ser de tipos inmutables. Esto es para asegurarse<br/>
de que las claves pueden convertirse a un valor constante hash para realizar búsquedas rápidas (tipo String de Java)<br/>
Los tipos inmutables incluyen los int, float, string y tuplas.
```python
invalid_dict = {[1,2,3]: "123"}  # => Lanza un TypeError: unhashable type: 'list'
valid_dict = {(1,2,3):[1,2,3]}   # ...pero los valores pueden ser de cualquier tipo
```

Busca valores con []
```python
filled_dict["one"]  # => 1
```

Con "keys()" se consiguen todas las claves de forma iterable. La llamada se mete en un list()<br/>
En versiones <3.7 el orden no se garantiza, pero en 3.7+ se conserva el orden de inserción
```python
list(filled_dict.keys())  # => ["three", "two", "one"] en Python <3.7
list(filled_dict.keys())  # => ["one", "two", "three"] en  Python 3.7+
```

Con "values()" se obtienen todos los valores como un iterable. Una vez más hay que<br/>
meterlos en un list(). El orden tiene las mismas particularidades que con las claves
```python
list(filled_dict.values())  # => [3, 2, 1]  en Python <3.7
list(filled_dict.values())  # => [1, 2, 3] en Python 3.7+
```

También se puede obtener la lista de pares (clave, valor) con "items()"
```python
list(filled_dict.items())   # => [('one', 1), ('two', 2), ('three', 3)]
```

Comprueba la existencia de claves en un diccionario con "in"
```python
"one" in filled_dict  # => True
1 in filled_dict      # => False
```

Si se buscan un valor que no existe, se lanza un KeyErro
```python
filled_dict["four"]  # KeyError
```

Se utiliza "get()" para evitar el KeyError
```python
filled_dict.get("one")      # => 1
filled_dict.get("four")     # => None
```

El método get permite incluir un argumento como valor por defecto cuando el valor no existe
```python
filled_dict.get("one", 4)   # => 1
filled_dict.get("four", 4)  # => 4
```

"setdefault()" inserta en un diccionario sólo si la clave no está presente
```python
filled_dict.setdefault("five", 5)  # filled_dict["five"] es 5
filled_dict.setdefault("five", 6)  # filled_dict["five"] todavía es 5
```

Añadir a un diccionario
```python
filled_dict.update({"four":4})  # => {"one": 1, "two": 2, "three": 3, "four": 4}
filled_dict["four"] = 4         # otra forma de añadir
```

Eliminar claves de un diccionario con "del"
```python
del filled_dict["one"]  # Elimina la clave "one" del diccionario
```

A partir de Python 3.5 hay nueva opciones para realizar unpacking
```python
{'a': 1, **{'b': 2}}  # => {'a': 1, 'b': 2}
{'a': 1, **{'a': 2}}  # => {'a': 2}
```

### Sets

```python
empty_set = set()
# Se puede inicializar un set con valores por defecto, se parece un poco a un dict
some_set = {1, 1, 2, 2, 3, 4}  # some_set es {1, 2, 3, 4}
```

Parecido a las claves de un diccionario, los elementos de un set deben ser inmutables
```python
invalid_set = {[1], 1}  # => Lanza un TypeError: unhashable type: 'list'
valid_set = {(1,), 1}
```

Añadir un nuevo valor a un set
```python
filled_set = some_set
filled_set.add(5)  # filled_set es ahora {1, 2, 3, 4, 5}
# :warning: Sets NO tienen elementos duplicados
filled_set.add(5)  # sigue como antes: {1, 2, 3, 4, 5}
```

Se pueden realizar intersecciones con "&"
```python
other_set = {3, 4, 5, 6}
filled_set & other_set  # => {3, 4, 5}
```

Las uniones con "|"
```python
filled_set | other_set  # => {1, 2, 3, 4, 5, 6}
```

Diferencias con "-"
```python
{1, 2, 3, 4} - {2, 3, 5}  # => {1, 4}
```

Diferencial simétrico con "^"
```python
{1, 2, 3, 4} ^ {2, 3, 5}  # => {1, 4, 5}
```

Comprobar si el set de la izquierda es un superset del set de la derecha
```python
{1, 2} >= {1, 2, 3} # => False
```

Comprueba si el set de la izquierda es un subset del de la derecha
```python
{1, 2} <= {1, 2, 3} # => True
```

Comprueba la existencia de un set con "in"
```python
2 in filled_set   # => True
10 in filled_set  # => False
```


[👩🏿‍🦱](https://www.youtube.com/watch?v=kQub-omnZSg) <br/>

[🐊](https://www.youtube.com/watch?v=DuwI3_N0aVw)
