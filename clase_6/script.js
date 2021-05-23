// let num = prompt("Ingrese un número: ");

// (num %2 == 0 ) ? console.log("Es par"):console.log("Es impar");

// let arreglo = [];
// for (let i = 0; i < 5; i++) {
//     arreglo.push(prompt("Ingrese número: "));
    
// }
let arreglo = [1,2,3,4,5,6]

// console.log(arreglo);
// console.log(arreglo.length); // devuelve la longitud del array
// console.log(arreglo.shift()); // Elimina el primer elemento del array y lo devuelve
// console.log(arreglo);
// console.log(arreglo.pop()); // Elimina el último elemento del array y lo devuelve
// console.log(arreglo);

// arreglo.unshift(0); // inserta elemento en la primera posición y devuelve
// console.log(arreglo);
// arreglo.push(9);// inserta elemento al final del arreglo y devuelve el valor
// console.log(arreglo);


// console.log("************************************");

// console.log(arreglo.indexOf(9)); //devuelve el primer índice del elemento ingresado

// console.log(arreglo.lastIndexOf(3));

// console.log(arreglo.reverse()); // Invierte el orden de los elementos del array

// console.log(arreglo.join(' - '));// Devuelve un string cambiando las comas con el elemento ingresado

/////////// splice
arreglo.splice(1,3,10,20,30); //reemplaza valores dados el indice de inicio y fin

console.log(arreglo);

console.log(arreglo.slice(3));