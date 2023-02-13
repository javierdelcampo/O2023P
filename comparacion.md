# Comparación de lenguajes

Extraído de la :link:[Wikipedia(en). Comparison of programming languages (basic instructions)](https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(basic_instructions)), con algunas adiciones y comentarios.

Más comparaciones en :link:[Wikipedia(en). Comparison of programming languages (syntax)](https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(syntax)).

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

|                                                                                                                                  | 8 bit (byte) | 16 bit (short integer) | 32 bit  | 64 bit (long integer) | Tamaño palabra | Arbitrary precise (bignum) |
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

|                   | Single precision | Double precision | Other precision |
| ----------------- | ---------------- | ---------------- | --------------- |
| C                 | float[b]         | double           | long double[f]  |
| C++ (STL)         | float[b]         | double           | long double[f]  |
| C#                | float            | double           | —               |
| Visual Basic .NET | Single           | Double           | —               |
| Java              | float            | double           | —               |
| JavaScript        | —                | Number           | —               |
| PHP               | —                | float            | —               |

## Otros tipos

|                   | Character     | String | Boolean | Enumeration                                                                                | Object/Universal           |
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
| C (C99)           | type name[size][a]              | type name[size1][size2][a]  | type \*name<br>or within a block:<br>int n = ...; type name[n]                 | —                               |
| C++ (STL)         | «std::»array<type, size>(C++11) | «std::»vector<type>         | «std::»vector<type>                                                            |
| C#                | type[]                          | type[,,...]                 | System.Collections.ArrayList<br>o<br>System.Collections.Generic.List<type>     | —                               |
| Visual Basic .NET | type()                          | type(,,...)                 | System.Collections.ArrayList<br>or<br>System.Collections.Generic.List(Of type) | —                               |
| Java              | type[][b]                       | type[][]...[b]              | ArrayList or ArrayList<type>                                                   |                                 |
| JavaScript        | —                               | —                           | Array                                                                          | Array                           |
| PHP               | —                               | —                           | array                                                                          | —                               |

## Declaración de variables y constantes

|                   | variable                                                                                                                                         | constant                                                                                             | type synonym          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | --------------------- |
| C (C99)           | type name« = initial_value»;                                                                                                                     | enum{ name = value };                                                                                | typedef type synonym; |
| C++               | type name« = initial_value»;                                                                                                                     | const type name = value;                                                                             | typedef type synonym; |
| C#                | type name« = initial_value», name« = initial_value», ...;<br>or<br>var name = initial_value;                                                     | const type name = value, name = value, ...;<br>or<br>readonly type name = value, name = value, ... ; | using synonym = type; |
| Visual Basic .NET | [Un cirio infumable…](https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(basic_instructions)#Variable_and_constant_declarations) |                                                                                                      |                       |
| Java              | type name« = initial_value»;                                                                                                                     | final type name = value;                                                                             | —                     |
| JavaScript        | var name« = initial_value»; or<br>let name« = initial_value»; (since ECMAScript 2015)                                                            | const name = value; (since ECMAScript 2015)                                                          | —                     |
| PHP               | $name = initial_value;                                                                                                                           | define("name", value);<br>const name = value (5.3+)                                                  | —                     |
| Python            | name«: type» = initial_value                                                                                                                     | —                                                                                                    | synonym = type        |

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
    <td>if (condition)&nbsp;&lt;codigo&gt;<br>&nbsp;«else &lt;codigo&gt;»<br>&nbsp;&lt;codigo&gt; puede ser una única orden o un bloque: { órdenes }</td>
    <td>if (condition)&nbsp;&lt;código&gt;<br>&nbsp;else if (condition) &lt;código&gt;<br>&nbsp;...<br>&nbsp;«else &lt;código&gt;»<br>&nbsp;o<br>&nbsp;if (condition) &lt;código&gt;<br>&nbsp;else { if (condition) &lt;código&gt; }</td>
    <td>switch (variable) {<br>&nbsp;  case case1: &lt;código&gt; «;break;»<br>&nbsp;  ...<br>&nbsp;  «default: &lt;código&gt;»<br>&nbsp;}</td>
    <td>condition ? valueIfTrue :&nbsp;valueIfFalse</td>
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
    <td>switch (variable)<br>&nbsp;{<br>&nbsp;  case case1:<br>&nbsp;    &nbsp;&lt;código&gt;<br>&nbsp;    &nbsp;«break_or_jump_statement»<br>&nbsp;  ...<br>&nbsp;  «default:<br>&nbsp;    &nbsp;&lt;código&gt;<br>&nbsp;    &nbsp;break_or_jump_statement»<br>&nbsp;}<br>&nbsp;<br>&nbsp;Todos los casos que tengan código deben terminar con un break o goto (es&nbsp;decir, no pueden ir al siguiente caso). El caso por defecto no es necesario&nbsp;que esté al final</td>
    <td>Ídem</td>
  </tr>
  <tr>
    <td>PHP</td>
    <td>Ídem</td>
    <td>Ídem</td>
    <td>switch (variable) {<br>&nbsp;  case case1: &lt;código&gt; «;break;»<br>&nbsp;  ...<br>&nbsp;  «default: &lt;código&gt;»<br>&nbsp;}</td>
    <td>Ídem</td>
  </tr>
  <tr>
    <td>Python</td>
    <td>if condition :<br>&nbsp;&lt;indentación&gt;&lt;código&gt;<br>&nbsp;«else:<br>&nbsp;&lt;indentación&gt;&lt;código&gt;</td>
    <td>if condition :<br>&nbsp;&lt;indentación&gt;&lt;código&gt;<br>&nbsp;elif condition :<br>&nbsp;&lt;indentación&gt;&lt;código&gt;<br>&nbsp;...<br>&nbsp;«else:<br>&nbsp;&lt;indentación&gt;&lt;código&gt;»</td>
    <td>Python 3.10+:<br>&nbsp;match variable:<br>&nbsp;&lt;indentación&gt;case case1:<br>&nbsp;&lt;indentación&gt;&lt;indentación&gt;&lt;código&gt;<br>&nbsp;&lt;indentación&gt;case case2:<br>&nbsp;&lt;indentación&gt;&lt;indentación&gt;&lt;código&gt;</td>
    <td>Python 2.5+:<br>&nbsp;valueIfTrue if condition else valueIfFalse</td>
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

|            | while loop                                                                                                         | do while loop                            | (count-controlled) for loop                                                                                                                                                                               | foreach                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| C          | Las instrucciones puede ir como una sola orden o en bloque como:<br/>{ statements }<br/>while (condition) instructions | do instructions while (condition);       | for («type» i = first; i <= last; i++) instructions                                                                                                                                                       | —                                                                                               |
| C++        | Ídem                                                                                                               | Ídem                                     | Ídem                                                                                                                                                                                                      | «std::»for_each(start, end, function)<br><br>Desde C++11:<br>for (type item : set) instructions |
| C#         | Ídem                                                                                                               | Ídem                                     | Ídem                                                                                                                                                                                                      | foreach (type item in set) instructions                                                         |
| Java       | Ídem                                                                                                               | Ídem                                     | Ídem                                                                                                                                                                                                      | for (type item : set) instructions                                                              |
| JavaScript | Ídem                                                                                                               | Ídem                                     | for (var i = first; i <= last; i++) instructions                                                                                                                                                          | Desde EcmaScript 2015:<br>for (var item of set) instructions                                    |
| PHP        | Ídem                                                                                                               | Ídem                                     | foreach (range(first, last) as $i) instructions<br><br>o<br><br>for ($i = first; $i <= last; $i++) instructions                                                                                           | foreach (set as item) instructions<br><br>or<br><br>foreach (set as key => item) instructions   |
| Python     | while condition :<br>Tab ↹instructions<br>«else:<br>Tab ↹instructions»                                             | —  (emular con un while TRUE..do..break) | Python 3.x:<br>for i in range(first, last+1):<br>Tab ↹instructions<br>«else:<br>Tab ↹instructions»<br>Python 2.x:<br>for i in xrange(first, last+1):<br>Tab ↹instructions<br>«else:<br>Tab ↹instructions» | for item in set:<br>Tab ↹instructions<br>«else:<br>Tab ↹instructions»                           |

### Excepciones

|            | throw                                    | handler                                                                                                                                                | assertion                                                                                                                     |
| ---------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| C (C99)    | longjmp(state, exception);               | switch (setjmp(state)) { case 0: instructions break; case exception: instructions ... }                                                                | assert(condition);                                                                                                            |
| C++        | throw exception;                         | try { instructions } catch «(exception)» { instructions } …                                                                                            | assert(condition);                                                                                                            |
| C#         | throw exception;                         | try { instructions } catch «(exception« name»)» { instructions } ... «finally { instructions }»                                                        | System.Diagnostics.Debug.Assert(condition);<br>or<br>System.Diagnostics.Trace.Assert(condition);                              |
| VB .NET     | Throw exception<br>or<br>Error errorcode | Try<br>  instructions<br>Catch« name As exception»« When condition»<br>  instructions<br>...<br>«Finally<br>  instructions»<br>End Try                 | System.Diagnostics.Debug.Assert(condition)<br>or<br>System.Diagnostics.Trace.Assert(condition)                                |
| Java       | throw exception;                         | try { instructions } catch (exception) { instructions } ... «finally { instructions }»                                                                 | assert condition «: description»;                                                                                             |
| JavaScript | throw exception;                         | try { instructions } catch (exception) { instructions} «finally { instructions }»                                                                      | [No hay un assert estándar. Utilizar una librería](https://stackoverflow.com/questions/15313418/what-is-assert-in-javascript) |
| PHP        | throw exception;                         | try { instructions } catch (exception) { instructions } ... «finally { instructions }»                                                                 | assert(condition);                                                                                                            |
| Python     | raise exception                          | try:<br>Tab ↹instructions<br>except «exception»:<br>Tab ↹instructions<br>...<br>«else:<br>Tab ↹instructions»<br>«finally:<br>Tab ↹instructions»        | assert condition                                                                                                              |
| Powershell | throw exception;                         | trap «[exception]» { instructions } ... instructions<br>or<br>try { instructions } catch «[exception]» { instructions } ... «finally { instructions }» | [Debug]::Assert(condition)                                                                                                    |

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