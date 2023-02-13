
# Python

He adaptado, ampliado (y reducido) y traducido de aquí: [Python Refresher](https://github.com/kawu/hhu-dl-materials-2019/blob/master/python-refresher/README.md)<br/>

El símbolo ⚠️ indica las partes que pueden ser más particulares de Python, comparado con otros lenguajes. Hay partes individuales y secciones completas

# índice

-[Indentación](#indentaci%C3%B3n)<br/>
-[Comentarios](#comentarios)<br/>
-[Tipos de datos primitivos y operadores](#tipos-de-datos-primitivos-y-operadores)<br/>
-[Variables y colecciones](#tipos-de-datos-primitivos-y-operadores)<br/>
 -[Tuplas](#tuplas)<br/>
-[Diccionarios](#diccionarios)<br/>
-[Sets](#sets)<br/>
-[Control de flujo](#control-de-flujo)<br/>
-[Testing](#testing)<br/>
-[Programación orientada a objetos](#programaci%C3%B3n-orientada-a-objetos)<br/>
 -[Herencia](#herencia)<br/>
-[Iterables](#iterables)<br/>
-[Generators](#generators)<br/>
-[Aleatoriedad](#aleatoriedad)<br/>
-[Fusión](zip)](#fusi%C3%B3n-zip)<br/>
-[args y kwargs](#args-y-kwargs)<br/>
-[Tipado dinámico y anotaciones de tipos](#tipado-din%C3%A1mico-y-anotaciones-de-tipos)<br/>
-[Métodos especiales de Python](#m%C3%A9todos-especiales-de-python)<br/>
 -[new() e init()](#new-e-init)<br/>
 -[str() y rpr()](#str-y-rpr)<br/>

## Indentación

Python utiliza la indentación para delimitar la estructura permitiendo establecer bloques de código. No existen comandos para finalizar las líneas ni llaves con las que delimitar el código. Los únicos delimitadores existentes son los dos puntos ( : ) y la indentación del código.

Normalmente se suelen dejar como indentación o sangrado <ins>4 espacios</ins> en blanco con lo que se indicaría el inicio del bloque, si en las posteriores líneas no introdujéramos el sangrado, significaría el final de dicho bloque de código, con lo cual para finalizar un bloque de código, solo tenemos que dejar de introducir el sangrado, no tenemos que usar ninguna llave ni símbolo.

<ins>Hay que ser consistentes con el indentado utiliazado a lo largo de todo el 
código.</ins>

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

----

<strong>Lenguajes de programación cuyas listas empiezan por cero (0)</strong>
```
- TODOS los que merecen la pena: JavaScript, Java, C#, C, C++, Perl, Python, Rust, etc, etc, etc.

- ¿Hay lenguajes en los el índice empieza por 1?: sí, pero en su mayoría son lenguajes desarrollados 
en los años 60 y 70 por gente con el cerebro agujereado por lamer constantemente 
la espalda de sapos alucinógenos para soportar su vida en entornos corporativos 
(ALGOL, Cobol, RPG, Smalltalk, etc.). 
También empiezan por 1 lenguajes como Fortran, Matlab, Mathematica o R, 
pero son para estadísticos y ultra-matemáticos, y no nos hablamos con esa gente.

- ¿Y qué pasa con SASS, XQuery y Julia?: mira... pedaz... ven aquí y escúchame bien... me remito a lo de los sapos.
  
```

----

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

## Variables y colecciones

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

## Diccionarios

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

En versiones <3.7 el orden no se garantiza, pero en 3.7+ se conserva el orden de inserción.

```python
list(filled_dict.keys())  # => ["three", "two", "one"] en Python <3.7
list(filled_dict.keys())  # => ["one", "two", "three"] en  Python 3.7+
```

Con "values()" se obtienen todos los valores como un iterable. Una vez más hay que<br/>
meterlos en un list(). El orden tiene las mismas particularidades que con las claves.

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

Si se buscan un valor que no existe, se lanza un KeyError

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

## Sets

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

## Control de flujo

Inicializamos una variable

```python
some_var = 5
# Condición if. Muestra "some_var es más pequeña que 10"
if some_var > 10:
    print("some_var es mayor que 10.")
elif some_var < 10:    # Esta cláusula elif es OPCIONAL
    print("some_var es más pequeña que 10.")
else:                  # Esto también es OPCIONAL
    print("some_var es 10.")
# También se pueden utilizar ternarios if-then-else como una expresión
parity = "pares" if some_var % 5 == 0 else "nones"
```

Python tiene loops while

```python
x = 0
while x < 10:
    print("{x} es más pequeño que 10".format(x=10))
    x += 1
```

También loops for

```python
for x in range(10)    # range(10) es [1, 2, ..., 10]
    print("{x} es más pequeño que 10".format(x=10))
```

Se puede obtener una lógica algo más compleja con "continue" y "break"

```python
for x in range(10):
    if x < 10:
        continue  # ve a la siguiente iteración
    elif x == 5:
        break     # sale del loop
```

## Testing

Existen varios frameworks para probar el código (Robot, PyTest, Unittest, DocTest, Nose2, Testify...), pero en este resumen nos restringimos al uso de "assert", que simplemente verifica que una expresión Boolean es "True" durante la ejecución del código.

```python
assert 2 + 2 == 4                         
assert 2 + 2 == 4, "2 + 2 debería ser 4"    # En caso en el que falle el assert
```

## Programación orientada a objetos

Python permite definir "clases" para encapsular datos y métodos que pueden operar en ellos.

Por ejemplo, implementemos un tipo "Bag" que se va comportar de forma similar a un set, pero permite realizar un seguimiento de cada uno de los elementos que están en él.

```python
class Bag:
    """Como con las funciones, las clases pueden ser documentadas con docstrings (los tres dobles paréntesis)."""

    # Constructor de la clase, que contiene los objetos necesarios
    # para contruir Bag.
    #
    # Los dobles subrayados denotan objetos o atributos que se utilizan por
    # Python pero que viven en un namespace controlado por el usuario
    # Los métodos (u objetos o atributos) como: __init__, __str__,
    # __repr__ etc. se llaman métodos especiales. No debes "reinventarlos"
    #
    def __init__(self, elems=[]):
        # Hacemos un seguimiento de los elementos y su número en un dict
        self.data = {}
        for elem in elems:
            self.add(elem)

    # Un método de instancia. Todos los métodos llevan "self" como su primer argumento.
    def add(self, elem):
        """Añade el elemento a la bolsa."""
        try:
            self.data[elem] += 1
        except KeyError:
            self.data[elem] = 1

    def delete(self, elem):
        """Elimina el elemento de la bolsa."""
        try:
            k = self.data[elem]
            if k > 1:
                self.data[elem] = k - 1
            else:
                del self.data[elem]
        except KeyError:
            pass

    def number(self, elem):
        """Devuelve el número de ocurrencias del elemento."""
        try:
            return self.data[elem]
        except KeyError:
            return 0
```

### Herencia

Se puede utilizar la herencia para crear clases nuevas extendiendo o restringiendo las que ya existan. Por ejemplo, imaginemos que en una parte específica del código no deberían eliminarse elementos de una bolsa (Bag) determinada. Podríamos rezar y esperar que el código funcione como se espera y nadie incumpla la condición o FORZARLO creando una variante del objeto Bag que simplemente no permita quitar elementos.

```python
# Fíjate que la clase base `Bag` se encuentra entre los paréntesis.
class SafeBag(Bag):
    """Objeto Bag del que no se pueden eliminar elementos"""

    # La subclase hereda todos los métodos (p.e. `número`) y atributos
    # (p.e., `data`) de su clase padre.

    # Se sobreescribe el método `delete` para que lance una excepción.
    def delete(self, elem):
        raise Exception("No se pueden eliminar elementos de un SafeBag.")
```

Fíjate que Python no impide que el usuario acceda a los atributos de datos de la clase Bag (y, de forma efectiva, eliminar algunos elementos manualmente). Pueden indicar que el atributo es <ins>PRIVADO</ins> utilizando un único subrayado (p.e. self._data). Esto funciona por convención y el usuario todavía puede modificar el atributo manualmente.

:warning: Conclusión: Python no tiene métodos private reales. Java, C#, JavaScript o PHP tienen (y protected, etc. dependiendo del lenguaje) ([🔗 Pregunta de StackOverflow](https://stackoverflow.com/questions/1641219/does-python-have-private-variables-in-classes))

## Iterables

Python tiene una abstracción llamada Iterable. Un iterable es un objeto que puede ser usado como una secuencia. El objeto devuelto es un iterable.

```python
filled_dict = {"one": 1, "two": 2, "three": 3}
our_iterable = filled_dict.keys()

# => dict_keys(['one', 'two', 'three']). Objeto que implementa el interfaz iterable.
print(our_iterable)  

# Se puede recorrer con bucles.
for i in our_iterable:
    print(i)  # Muestra one, two, three

# PERO no se pueden acceder a los elementos por índice
our_iterable[1]  # Lanza un TypeError

# Un iterable es un objeto que sabe cómo crear un iterator
our_iterator = iter(our_iterable)

# El iterator es un objeto que recuerda el estado al ser recorrido
# Se puede obtener el siguiente elemento con "next()".
next(our_iterator)  # => "one"

# Mantiene el estado al ser iterado
next(our_iterator)  # => "two"
next(our_iterator)  # => "three"

# Al terminar de entregar todos los datos
# lanza una excepción StopIteration
next(our_iterator)  # Lanza StopIteration

# Puedes recoger todos los elementos de un iterator llamando list()
list(filled_dict.keys())  # => Devuelve ["one", "two", "three"]

"""
"range(number)" devuelve un iterable de números
desde cero al númnero dado
imprime:
    0
    1
    2
    3
"""
for i in range(4):
    print(i)

"""
"range(lower, upper)" devuelve un iterable de números
desde el más bajo al más alto
imprime:
    4
    5
    6
    7
"""
for i in range(4, 8):
    print(i)

"""
"range(lower, upper, step)" devuelve un iterable de números
desde el más bajo al más alto mientras incrementa
por saltos. Si no se indica el salto, el valor por defecto es 1.
prints:
    4
    6
"""
for i in range(4, 8, 2):
    print(i)
```

## Generators

Los generators de Python se utilizan para declarar funciones y permitir que se comporten como un iterator (p.e. se pueden utilizar en bucles). Se utilizan los conceptos y funciones yield, range, xrange, irange

```python
# Los generadores permiten crear lógica con poco código.
def double_numbers(iterable):
    for i in iterable:
        yield i + i

# Los generadores son eficientes (memoria) ya que sólo cargan los datos
# que necesitan para procesar el siguiente valor del iterable. Esto permite
# realizar operaciones que serían complicadas al 
# realizarse en rangos de valores muy grandes
# NOTE: `range` reemplaza a `xrange` en Python 3.
for i in double_numbers(range(1, 900000000)):  # `range` es un generador
    print(i)
    if i >= 30:
        break

# Tal y como se pueden crear comprensiones de listas, se pueden crear
# comprensiones de generadores
values = (-x for x in [1,2,3,4,5])
for x in values:
    print(x)  # imprime -1 -2 -3 -4 -5 en la consola

# También se pueden convertir (cast) directamente a una lista
values = (-x for x in [1,2,3,4,5])
gen_to_list = list(values)
print(gen_to_list)  # => [-1, -2, -3, -4, -5]
```

## Aleatoriedad

Para generar números aleatorios, se puede utilizar el módulo `random`.

```python
import random

# random.random() genera números uniformemente en [0, 1)
[random.random() for _ in range(4)]
```

OJO: El módulo random proporciona números pseudoaleatóreos, es decir, son determinísticos. Con `random.seed` se puede obtener el mismo número aleatorio cada vez.

```python
random.seed(0)      # Setea la semilla a 0
random.random()     # => 0.8444218515250481
random.random()     # => 0.7579544029403025
random.seed(0)      # Resetea la semilla 0
random.random()     # => 0.8444218515250481
random.random()     # => 0.7579544029403025
```

Es útil para realizar experimentos repetibles, PERO cuidado al intentar desarrollar funcionalidades de cifrado. Para eso existen paquetes y metodologías específicas.

Otras funciones de random que pueden ser útiles:

```python
# random.shuffle mezcla los elementos de una lista
xs = list(range(5)) # xs ahora es [0, 1, 2, 3, 4]
random.shuffle(xs)  # xs ahora es [2, 0, 3, 1, 4] (por ejemplo...)

# Escoger un elemento al azar en una lista
my_best_friends = ["Bob", "Alice", "Charlie"]
random.choice(my_best_friends)   # => "Bob" por ejemplo

# Para seleccionar un conjunto de elementos sin duplicados
lottery_numbers = range(60)
random.sample(lottery_numbers, 6)   # => [51, 16, 34, 45, 59, 38]

# Para seleccionar un conjunto de elementos CON duplicados
# Usa random.choice
[random.choice(range(4)) for _ in range(6)]  # => [2, 3, 0, 2, 3, 2]
```

## Fusión (zip)

Se pueden fusionar, mezclar (zip) dos listas (o iterables) utilizando la función `zip`.

```python
nums = (1, 2, 3)
strs = ("one", "two", "three")
pairs = list(zip(num_list, str_list))
pairs                               # => [(1, 'one'), (2, 'two'), (3, 'three')]
```

También se pueden 'desmezclar':

```python
nums2, strs2 = zip(*pairs)
assert nums == nums2 and strs == strs2
```

El operador especial asterisco (*) realiza una operación llamada 'desempaquetado de argumentos' (argument unpacking). En el ejemplo siguiente, `*pairs` se despliega en tres argumentos: `(1, 'one'), (2, 'two') y (3, 'three')`.

```python
assert list(zip(*pairs)) == list(zip((1, 'one'), (2, 'two'), (3, 'three')))
```

## args y kwargs

El desempaquetado de argumentos es útil si quieres definir una función con un número desconocido de argumentos.

```python

# Puedes definir funciones que tomen un número variable
# de argumentos 
def varargs(*args):
    return args

varargs(1, 2, 3)  # => (1, 2, 3)

# También se pueden definir funciones que tomen
# un número variable de palabras clave
def keyword_args(**kwargs):
    return kwargs

# Salida...
keyword_args(big="foot", loch="ness")  # => {"big": "foot", "loch": "ness"}

# Se pueden mezclar...
def all_the_args(*args, **kwargs):
    print(args)
    print(kwargs)
"""
all_the_args(1, 2, a=3, b=4) imprime:
    (1, 2)
    {"a": 3, "b": 4}
"""


# Cuando se llaman a funciones, se puede realizar lo
# contrario a args/kwargs. Utiliza * para expandir tuplas y ** para expandir kwargs
args = (1, 2, 3, 4)
kwargs = {"a": 3, "b": 4}
all_the_args(*args)            # equivalente a all_the_args(1, 2, 3, 4)
all_the_args(**kwargs)         # equivalente a all_the_args(a=3, b=4)
all_the_args(*args, **kwargs)  # equivalente a all_the_args(1, 2, 3, 4, a=3, b=4)
```

## Tipado dinámico y anotaciones de tipos

Python es un lenguaje dinámicamente tipado, lo que significa que a Python no se interesa por los tipos hasta que se utilizan mal.

```python
def add(x, y):
    return x + y

add(2, 2)       # => 4
try:
    add(2, "two")
except TypeError:
    print("No se puede añadir un int a un string")
```

Pero en versiones recientes de Python ya se puede añadir anotaciones de tipo. Por ejemplo, se puede especificar que x, y, y el resultado, deben ser ints.

```python
def add(x: int, y: int) -> int:
    return x + y
```

En contraste con los lenguajes con tipado estático, esto todavía no evita que el usuario pueda ejecutar, por ejemplo, add(2, "two"). De todas formas, las anotaciones ayudan a ENTENDER el código y hacen posible que el IDE (o el sistema de chequeo de código) pueda detectar errores comprobando los tipos.

```python
# Producto escalar (dot product) de dos vectores. Pero no están muy claros los 
# tipos de entrada...
def dot_product(x, y): ...

# Producto escalar de dos vectores, devuelve un int... se lee mucho mejor
def dot_product(x: Vector, y: Vector) -> int: ...
```

## Métodos especiales de Python

Una clase puede tener definidos métodos especiales. Estos métodos tienen un significado particular para el intérprete de Python. Sus nombres empiezan y terminan en __ (doble guión bajo). Por ejemplo `__init__`.

```python
class Lote(object):
    def __init__(self):
        ...
    def __repr__(self):
        ...
```

Hay muchos métodos especiales en Python, pero vamos a ver sólo los más importantes:

### __new__() e __init__()

`__new__()` Este es el método encargado de crear al objeto, pero no de asignarle valores iniciales. Debe retornar como resultado el objeto que ha creado.

`__init__()` este es el método encargado de asignar valores iniciales al objeto creado desde `__new__()`.

```python
def crear_e_inicializar_objeto_de_la_clase_cls(cls, *args, **kwargs):
  # 1. Crearlo
  obj = cls.__new__(cls, *args, **kwargs)
  if isinstance(obj,cls):
     # 2. Inicializarlo
     cls.__init__(obj, *args, **kwargs)
  return obj
```

Y se usa así:

```python
class Ejemplo:
  def __init__(self, valor):
      self.valor = valor


ejemplo = crear_e_inicializar_objeto_de_la_clase_cls(Ejemplo, 4)
print(ejemplo.valor)
```

El parámetro que se le está pasando al Ejemplo() será el que se le pasará a __init__() una vez el objeto haya sido creado.

Se pueden sobreescribir para añadirle algún tipo de metainformación que esté relacionada con su creación, por ejemplo:

```python
import datetime

class Ejemplo:
    def __new__(cls, *args, **kwargs):
      obj = super().__new__(cls)
      obj._created_at = datetime.datetime.now()
      return obj
    def __init__(self, valor):
      self.valor = valor

ejemplo = Ejemplo(4)
```

[🔗 Respuesta más completa en StackOverflow](https://es.stackoverflow.com/questions/469542/para-que-sirve-sobrescribir-el-m%C3%A9todo-new-en-python)

### __str__() y __rpr__()

Los objetos tienen dos representaciones de tipo cadena.

```python
from datetime import date
d = date(2020, 12, 21)
print(d)
> 2020-12-21

d
> datetime.date(2020, 12, 21)

```

La función str() se usa para crear una representación agradable de ver:

```python
str(d)
>>> '2020-12-21'
```

Pero para crear una representación más informativa para programadores, se usa la función repr().

```python
repr(d)
>>> 'datetime.date(2020, 12, 21)'
```

Las funciones str() y repr() llaman a métodos especiales de la clase para generar la cadena de caracteres que se va a mostrar.

```python
class Date(object):
    def __init__(self, year, month, day):
        self.year = year
        self.month = month
        self.day = day

    # Con `str()`
    def __str__(self):
        return f'{self.year}-{self.month}-{self.day}'

    # Con `repr()`
    def __repr__(self):
        return f'Date({self.year},{self.month},{self.day})'
```

Nota: Hay una convención para `__repr__()` que indica que debe devolver un string que, cuando sea pasado a eval() vuelva a crear el objeto subayacente. Analizá el ejemplo de datetime.date(2020, 12, 21). Si no es posible crear un string que haga eso, la convención es generar una representación que sea fácil de interpretar para una persona.

```python
class Punto():
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f'({self.x}, {self.y})'

    # Used with `repr()`
    def __repr__(self):
        return f'Punto({self.x}, {self.y})'
```

[👩🏿‍🦱](https://www.youtube.com/watch?v=kQub-omnZSg) <br/>

[🐊](https://www.youtube.com/watch?v=DuwI3_N0aVw)
