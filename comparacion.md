# Comparación de lenguajes

Extraído de la :link:[Wikipedia(en). Comparison of programming languages (basic instructions)](https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(basic_instructions)), con algunas adiciones y comentarios.

Más comparaciones en :link:[Wikipedia(en). Comparison of programming languages (syntax)](https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(syntax)).

⚠️ OJO: muchas cosas siguen en inglés. Las estoy traduciendo. Cuidado porque en el examen aparecen estos mismos conceptos en Español (...arreglos...) y me lío.

## Índice

- [Comparación de lenguajes](#comparación-de-lenguajes)
  - [Índice](#índice)
  - [Enteros](#enteros)
  - [Coma flotante](#coma-flotante)
  - [Otros tipos](#otros-tipos)
  - [Array](#array)
  - [Declaración de variables y constantes](#declaración-de-variables-y-constantes)
  - [Gestión de flujo](#gestión-de-flujo)
    - [Condicionales](#condicionales)
    - [Bucles](#bucles)
    - [Excepciones](#excepciones)
  - [Librerías y paquetes (import)](#librerías-y-paquetes-import)
  - [Espacio de nombres](#espacio-de-nombres)

## Enteros

|                                                                                                                                  | 8 bit (byte) | 16 bit (short integer) | 32 bit  | 64 bit (long integer) | Tamaño palabra | Precisión arbitraria (bignum) |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------- | ------- | --------------------- | -------------- | -------------------------- |
|                                                                                                                                  | Signed       | Unsigned               | Signed  | Unsigned              | Signed         | Unsigned                   | Signed | Unsigned | Signed | Unsigned |  |
| C (C99) - C++ (C++11) (fixed width)                                                                                              | int8_t       | uint8_t                | int16_t | uint16_t              | int32_t        | uint32_t                   | int64_t | uint64_t | intptr_t | size_t | — |
| C (C99) - C++ (C++11) (variable-width)                                                                                           | signed char  | unsigned char          | short   | unsigned short        | long           | unsigned long              | long long | unsigned long long | int | unsigned int | — |
| C#                                                                                                                               | sbyte        | byte                   | short   | ushort                | int            | uint                       | long | ulong | IntPtr | UIntPtr | System.Numerics.BigInteger (.NET 4.0) |
| Visual Basic .NET                                                                                                                | SByte        | Byte                   | Short   | UShort                | Integer        | UInteger                   | Long | ULong | — | — | System.Numerics.BigInteger (.NET 4.0) |
| Java                                                                                                                             | byte         | —                      | short   | char                  | int            | char                       | — | — | — | — | java.math.BigInteger |
| JavaScript: [[No tiene, ver]](https://stackoverflow.com/questions/33773296/is-there-or-isnt-there-an-integer-type-in-javascript) | —            | —                      | —       | —                     | —              | —                          | — | — | — | — | BigInt (ES2020) |
| PHP                                                                                                                              | —            | —                      |         |                       | int            | —                          | int | — | — | — | — |

## Coma flotante

|                   | Precisión sencilla | Precisión doble | Otra precisión |
| ----------------- | ---------------- | ---------------- | --------------- |
| C                 | float[b]         | double           | long double[f]  |
| C++ (STL)         | float[b]         | double           | long double[f]  |
| C#                | float            | double           | —               |
| Visual Basic .NET | Single           | Double           | —               |
| Java              | float            | double           | —               |
| JavaScript        | —                | Number           | —               |
| PHP               | —                | float            | —               |

## Otros tipos

|                   | Carácter     | String | Boolean | Enumeration                                                                                | Object/Universal           |
| ----------------- | ------------- | ------------------ | ------- | ------------------------------------------------------------------------------------------ | -------------------------- |
| C (C99)           | char, wchar_t | —                  | bool[b] | enum «name» { item1, item2, ... };                                                         | void \*                    |
| C++ (STL)         | char, wchar_t | «std::»string      | bool[b] | enum «name» { item1, item2, ... };                                                         | void \*                    |
| C#                | char          | string             | bool    | enum name { item1« = value», item2« = value», ... }                                        | object                     |
| Visual Basic .NET | Char          | String             | Boolean | Enum name<br>   item1 «= value»<br>   item2 «= value»<br>   ...<br>End Enum                | Object                     |
| Java              | char          | String             | boolean | enum name { item1, item2, ... }                                                            | Object                     |
| PHP               | —             | string             | bool    |                                                                                            | (type declaration omitted) |
| Python            | —             | str                | bool    | from enum import Enum<br>class Name(Enum):<br>   item1 = value<br>   item2 = value<br>   … | object                     |

## Array

|                   | Array unidimensional fijo       | Array multidimensional fijo | Array unidimensional dinámico                                                  | Array multidimensional dinámico |
| ----------------- | ------------------------------- | --------------------------- | ------------------------------------------------------------------------------ | ------------------------------- |
| C (C99)           | type name[size][a]              | `type name[size1][size2][a]  | type \*name`<br>o en un bloque:<br>`int n = ...; type name[n]`                 | —                               |
| C++ (STL)         | `std::array<type, size>`(C++11) | `std::vector`<type>         | `std::vector`<type>                                                            |
| C#                | type[]                          | type[,,...]                 | `System.Collections.ArrayList`<br>o<br>`System.Collections.Generic.List`<type>     | —                               |
| Visual Basic .NET | type()                          | type(,,...)                 | `System.Collections.ArrayList`<br>or<br>`System.Collections.Generic.List(Of type)` | —                               |
| Java              | type[][b]                       | type[][]...[b]              | `ArrayList` o `ArrayList`<type>                                                   |                                 |
| JavaScript        | —                               | —                           | Array                                                                          | Array                           |
| PHP               | —                               | —                           | array                                                                          | —                               |

## Declaración de variables y constantes

|                   | variable                                                                                                                                         | constante                                                                                             | Sinónimo          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | --------------------- |
| C (C99)           | type name = initial_value;                                                                                                                     | `enum{ name = value };`                                                                                | `typedef type synonym;` |
| C++               | type name = initial_value;                                                                                                                     | const type name = value;                                                                             | `typedef type synonym;` |
| C#                | `type name = initial_value, name« = initial_value, ...;`<br> o <br>`var name = initial_value;`                                                     | `const type name = value, name = value, ...;`<br>o<br>`readonly type name = value, name = value, ... ;` | `using synonym = type;` |
| Visual Basic .NET | [Un cirio infumable…](https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(basic_instructions)#Variable_and_constant_declarations) |                                                                                                      |                       |
| Java              | `type name = initial_value;`                                                                                                                     | `final type name = value;`                                                                             | —                     |
| JavaScript        | `var name = initial_value;`<br/>o<br/>`let name = initial_value;` (desde ECMAScript 2015)                                                            | `const name = value;` (desde ECMAScript 2015)                                                          | —                     |
| PHP               | `$name = initial_value;`                                                                                                                           | `define("name", value);`<br>`const name = value` (5.3+)                                                  | —                     |
| Python            | `name: type = initial_value`                                                                                                                     | —                                                                                                    | `synonym = type`        |

## Gestión de flujo

### Condicionales

<table>
<thead>
  <tr>
    <th></th>
    <th>if</th>
    <th>else if</th>
    <th>select case</th>
    <th>conditional expression</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>C</td>
    <td>

    if(condición) {
      // código
    } else {
      // código
    }  
    
  </td>
    <td>
    
    if(test_expression) {
      // código
    } else if(test_expression n) {
      // código
    } else {
      // código
    }

    // también soporta sentencias únicas...

  </td>
    
  <td>
    
    switch (expression) ​{
    case constant1:
      // código
      break;

    case constant2:
      // código
      break;
    .
    .
    default:
      // código por defecto
    }
</td>
    <td>
    
      condition ? valueIfTrue :&nbsp;valueIfFalse
  </td>
  </tr>
  <tr>
    <td>C++</td>
    <td>Ídem</td>
    <td>Ídem</td>
    <td>Ídem</td>
    <td>Ídem</td>
  </tr>
  <tr>
    <td>Java</td>
    <td>Ídem</td>
    <td>Ídem</td>
    <td>Ídem</td>
    <td>Ídem</td>
  </tr>
  <tr>
    <td>JavaScript</td>
    <td>Ídem</td>
    <td>Ídem</td>
    <td>Ídem</td>
    <td>Ídem</td>
  </tr>
  <tr>
    <td>C#</td>
    <td>Ídem</td>
    <td>Ídem</td>
    <td>
    
    switch (condicional) {
      case expression_value1:
          // código
      break;
      case expression_value2:
          // código
      break;
      .
      .
      default:
          // código
      break;
    }
    
  </td>
    <td>Ídem</td>
  </tr>
  <tr>
    <td>PHP</td>
    <td>Ídem</td>
    <td>Ídem</td>
    <td>

    <?php
    switch ($i) {
        case 0:
            // código
            break;
        case 1:
            // código
            break;
        case 2:
            // código
            break;
        ..
        default:
            // código
    }

  </td>
    <td>Ídem</td>
  </tr>
  <tr>
    <td>Python</td>
    <td>

  ```python
  if condition:
    # código (ojo al indentado)
  else
    # código
  ```
    
   </td>
    <td>

  ```python
  if condition1:
    # código

  elif condition2:
    # código

  else: 
    # código
  ```

   </td>
    <td>Python 3.10+: match, caso '_'

  ```python  
  def http_status(status):
    match status:
        case 400:
            return "Bad request"
        case 401:
            return "Unauthorized"
        ..
        case _:
            return "Other error"
  ```

  </td>
    <td>Python 2.5+:
    
  ```python
  valor_si_verdadero if condicion else valor_si_falso
  
  # Ejemplo:
  
  is_nice = True
  state = "nice" if is_nice else "not nice"
  ```
  </td>
  </tr>
  <tr>
    <td>Z80</td>
<td>
        
```assembly
.cond
    ld   a, (ix-1)   ;; if ( a >= 79 )
    sub  79          ;;
    jp   c, cond_not ;; jump if carry set
.cond_body              ;; then
    ld   (ix-3), -1  ;; b = -1
.cond_not               ;; else
```
</td>
    <td>---</td>
    <td>---</td>
    <td>---</td>
  </tr>
</tbody>
</table>

### Bucles

<table>
<thead>
  <tr>
    <th></th>
    <th>while</th>
    <th>do while</th>
    <th>for</th>
    <th>foreach</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>C</td>
    <td>
    
  ```c
  while (condición) { 
    // código
  }
  ```
  </td>
    <td>
    
  ```c
  do { 
    // código 
  } while (condicion)
  ```
    
  </td>
    <td>
    
  ```c
  for (<tipo> i = <primero>; i = <último>; i++) 
      instructions
      
  for (expresión inicial; expresión condicional; condición final) {
    // código
  }
  
  // las tres expresiones son CONDICIONALES
  for {;;} {} // Esto es válido
  
  for (;1<1;) { // Esto también es válido
      printf("Hello world!\n");
  }  // No imprime nada (1<1)
  ```
  </td>
  <td>—</td>
  </tr>
  <tr>
    <td>C++</td>
    <td>Ídem</td>
    <td>Ídem</td>
    <td>Ídem</td>
    <td>
    
  ```c
  std::for_each (InputIterator first, InputIterator last, Function fn);
  ```
    
  </td>
  </tr>
  <tr>
    <td>C#</td>
    <td>Ídem</td>
    <td>Ídem</td>
    <td>Ídem</td>
    <td>

    ```c#  
    foreach (type item in set) instrucciones
    ```
    
  </td>
  </tr>
  <tr>
    <td>Java</td>
    <td>Ídem</td>
    <td>Ídem</td>
    <td>Ídem</td>
    <td>

    ```java  
    for (type item : set) instrucciones
    ```
  </td>
  </tr>
  <tr>
    <td>JavaScript</td>
    <td>Ídem</td>
    <td>Ídem</td>
    <td>
    
  ```javascript
    for (var i = primero; i<=último; i++) 
      instrucciones
  ```
  </td>
  <td>
  
```javascript
const array1 = ['a', 'b', 'c'];

for (const elemento of array1) {
  console.log(elemento);
}
// Salida: "a"
// Salida: "b"
// Salida: "c"

```

```javascript
let numeros = [3, 6, 8]
numeros.forEach(function(numero) {
  console.log(numero)
}
// Salida: 3
// Salida: 6
// Salida: 8
```

  </td>
  </tr>
  <tr>
    <td>PHP</td>
    <td>Ídem</td>
    <td>Ídem</td>
    <td>
    
```php
<?php
// Mostrar mensajes del 1 al 10
/* Ejemplo 1 */
for ($i = 1; $i <= 10; $i++) {
    echo $i;
}

/* Ejemplo 2 */
for ($i = 1; ; $i++) {
    if ($i > 10) {
        break;
    }
    echo $i;
}

/* Ejemplo 3 */
$i = 1;
for (; ; ) {
    if ($i > 10) {
        break;
    }
    echo $i;
    $i++;
}

/* Ejemplo 4 */
for ($i = 1, $j = 0; $i <= 10; $j += $i, print $i, $i++);
?>
```
    
  </td>
  <td>

  ```php
  <?php
  // Del 0 al 2 con salto de 1 (por defecto)
  foreach (range(0, 2) as $number) {
      echo $number;
  }

  echo "\n";

  // A saltos (del 0 al 20 con saltos de 10)
  // array(0, 10, 20)
  foreach (range(0, 20, 10) as $number) {
      echo $number;
  }

  echo "\n";

  // Secuencias de letras
  // array('a', 'b', 'c');
  foreach (range('a', 'c') as $letter) {
      echo $letter;
  }

  echo "\n";

  // Al revés
  foreach (range('c', 'a') as $letter) {
      echo $letter;
  }
  ?>
  ``` 

  </td>
  </tr>
  <tr>
    <td>Python</td>
    <td>
    
```python
  # Imprime del 1 al 5
  i = 1
  while i < 6:
    print(i)
    i += 1
```

```python
# Imprime del 1 al 3 (break)
i = 1
while i < 6:
  print(i)
  if i == 3:
    break
  i += 1 
```

  </td>
    <td> No existe. Se puede emular con un while:
    
  ```python
  while TRUE..do..break)
  ```
  </td>
  <td>

  ```python
  fruits = ["apple", "banana", "cherry"]
  for x in fruits:
    print(x)
    ```
  Se pueden recorrer strings
  ```python
  for x in "banana":
    print(x)
  ```

  ```python
  # Imprime apple, banana y sale
  fruits = ["apple", "banana", "cherry"]
  for x in fruits:
    print(x)
    if x == "banana":
      break
  ```

  ```python
  # Imprime del 1 al 6
  for x in range(6):
    print(x)
  ```
  </td>
  <td>
    No hay. A partir de Python 3.x se puede emular:
    
  ```python
  for item in sequence:
    print(item)
  ```
  </td>
  </tr>
</tbody>
</table>

### Excepciones

<table>
<thead>
  <tr>
    <th></th>
    <th>throw</th>
    <th>handler</th>
    <th>assertion</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>C (C99)</td>
    <td>
    
  ```c
  longjmp(state, exception);
  ```
  </td>
    <td>

  ```c
  switch (setjmp(state)) { 
    case 0:
      instructions...;
      break; 
    case exception: 
      instructions ... 
    }
  ```
  </td>
    <td>

  ```c  
  assert(condition);
  ```
  </td>
  </tr>
  <tr>
    <td>C++</td>
    <td>
    
  ```c  
  throw exception;
  ```
  </td>
    <td>

  ```c
  try {
    // Código a probar
  throw exception; // Excepción
  }
  catch () {
    // Gestión del error
  } 
  ```
  </td>
    <td>

    ```c
    assert(condition);
    ```
  </td>
  </tr>
  <tr>
    <td>C#</td>
    <td>
    
  ```c++
    throw exception;
  ```
  </td>
    <td>

  ```c++
  try {
    // Código a probar
  throw exception; // Excepción
  }
  catch () {
    // Gestión del error
  } 
  ```
  </td>
    <td>System.Diagnostics.Debug.Assert(condition);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.Diagnostics.Trace.Assert(condition);</td>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
    <td>VB .NET</td>
    <td>Throw exception<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error errorcode</td>
    <td>Try<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  instructions<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Catch« name As exception»« When condition»<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  instructions<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;«Finally<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  instructions»<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;End Try</td>
    <td>System.Diagnostics.Debug.Assert(condition);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.Diagnostics.Trace.Assert(condition);</td>
  </tr>
  <tr>
    <td>Java</td>
    <td>throw exception;</td>
    <td>try { instructions } catch&nbsp;&nbsp;&nbsp;(exception) { instructions } ... «finally { instructions }»</td>
    <td>assert condition «:&nbsp;&nbsp;&nbsp;description»;</td>
  </tr>
  <tr>
    <td>JavaScript</td>
    <td>throw exception;</td>
    <td>try { instructions } catch&nbsp;&nbsp;&nbsp;(exception) { instructions} «finally { instructions }»</td>
    <td><a href="https://stackoverflow.com/questions/15313418/what-is-assert-in-javascript">No hay un assert estándar. Utilizar una librería</a></td>
  </tr>
  <tr>
    <td>PHP</td>
    <td>throw exception;</td>
    <td>try { instructions } catch&nbsp;&nbsp;&nbsp;(exception) { instructions } ... «finally { instructions }»</td>
    <td>assert(condition);</td>
  </tr>
  <tr>
    <td>Python</td>
    <td>raise exception</td>
    <td>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tab ↹instructions<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;except «exception»:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tab ↹instructions<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;«else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tab ↹instructions»<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;«finally:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tab ↹instructions»</td>
    <td>assert condition</td>
  </tr>
  <tr>
    <td>Powershell</td>
    <td>throw exception;</td>
    <td>trap «[exception]» {&nbsp;&nbsp;&nbsp;instructions } ... instructions<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try { instructions } catch «[exception]» { instructions } ... «finally {&nbsp;&nbsp;&nbsp;instructions }»</td>
    <td>[Debug]::Assert(condition)</td>
  </tr>
</tbody>
</table>

## Librerías y paquetes (import)

C, C++: `#include "filename"` / `#include <filename>`
PHP: `require "filename";`

Importar paquetes:
C, C++: `#include filename`
Java: `import package.*`
JavaScript: `import "modname";`

Importar función:
JavaScript: `import {function} from "modname";` / `import function from "modname";`
PHP: `use function Namespace\function_name;`

## Espacio de nombres

Java: `package package_name;`
C#: `namespace namespace_name {..}`
PHP (>5.3.0): `namespace foo;`:

```php
<?php
namespace foo;
$a = new \stdClass;

function test(\ArrayObject $parameter_type_example = null) {}

$a = \DirectoryIterator::CURRENT_AS_FILEINFO;

// extending an internal or global class
class MyException extends \Exception {}
?>
```

C++: `namespace abc {...}` ... `using namespace abc;`


----

[🦞](https://www.youtube.com/watch?v=n4QSYx4wVQg)<br/>
[🥔](https://www.youtube.com/watch?v=yXmnmvDl-ao)<br/>
[🤷‍♂️](https://www.youtube.com/watch?v=swBDlOk0V6Y)<br/>
