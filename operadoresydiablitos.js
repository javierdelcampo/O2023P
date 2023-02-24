console.clear();
console.log('Ejemplos de operadores');
console.log('----------------------');

let x = 5;
let y = 3;

// division
console.log('x / y = ', x / y);  // 1.6666666666666667

// resto
console.log('x % y = ', x % y);   // 2

// incrementos
console.log('++x = ', ++x); // Incremento: primero incrementa el valor y luego ejecuta la acción (si las hay). x es 6 (x = x + 1)
console.log('x++ = ', x++); // Postincremento: primero ejecuta la acción (imprime el valor) y luego aumenta el valor. Imprime 6, pero luego el valor de x es 7
console.log('x = ', x);     // 7

// decrementos
console.log('--x = ', --x); // x ahora es 6 (x = x - 1)
console.log('x-- = ', x--); // Post decremento. Imprime 6 y luego ejecuta la accción, restando 1, x = 5
console.log('x = ', x);     // 5

// Bucle for: for (sentencia que se ejecuta siempre antes del loop; condición final; sentencia que se ejecuta siempre al final de cada ciclo)
// Igual para JS, C, C++, Java

// Este loop presenta 1..9 con un postincremento en el 3er parámetro
for(var i = 0; i < 10; i++) {
    console.log(i); // 0..9
}

console.log("-----");

// Este loop hace LO MISMO utilizando un PREincremento: en este punto da igual cuándo se incrementa i
for(var i = 0; i < 10; ++i) {
    console.log(i); // 0..9
}

console.log("-----");

// Se pueden poner varias sentencias como primer parámetro
// En Java también funciona
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let texto = "";
for (let i = 0, len = cars.length; i < len; i++) {
    texto += cars[i] + "<br>";
}
console.log(texto); 

console.log("-----a");

// Cuenta de 0 a 9 y sale. No utiliza la segunda expresión
for(var a = 0; ; a++) {
    if(a > 9) break;
    console.log(a);
}

console.log("-----b");

// Imprime 1,3,5,7,9. 
for(var i = 0; i < 10; i++) {
    ++i;
    console.log(i); // 1, 3, 5, 7, 9
}

console.log("-----c");

// Este también imprime 1,3,5,7,9. 
// Primero es el incremento y luego la operación
for(var i = 0; i < 10; i++) {
    console.log(++i);
}

console.log("-----d");

// Imprime 0,2,4,8
// Ojo: primero realiza la operación (imprimir por consola) y LUEGO incrementa
for(var i = 0; i < 10; i++) {
    console.log(i++); 
}

console.log("-----e");

// Imprime 1,3,5,7,9
// Primero se incrementa y luego se imprime
for(var i = 0; i < 10; i++) {
    i++;
    console.log(i); 
}

console.log("-----f");

// Imprime 1,3,5,7,9
// Primero se incrementa y luego se imprime
let salidaf = 0;
let salidaf2 = 0;
for(var i = 0; i < 10; i++) {
    salidaf = i++;
    console.log(i); 
    salidaf2 = i;
}
console.log('salidaf:', salidaf);   // 8
console.log('salidaf2:', salidaf2); // 9

console.log("-----g");

// Imprime 1,4,7,10
// Ojo: primero realiza la operación (imprimir por consola) y LUEGO incrementa (ojo, dos veces)
let salidag = 0;
let salidag2 = 0;
for(var i = 0; i < 10; i++) {
    salidag = i++;
    console.log(i++); 
    salidag2 = i;
}

console.log('salidag:', salidag);   // 9
console.log('salidag2:', salidag2); // 11
