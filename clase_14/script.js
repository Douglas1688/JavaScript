///SPREAD  => EXPANDIR
const numbers = [-12,2,3,23,43,2,3]

const addNumbers = (a, b, c) => {
    console.log(a+b+c);
}

let numbersToAdd = [1,2,3];

addNumbers(...numbersToAdd);


// AÑADIRD UN ARRAY A OTRO ARRAY
let users = ['javier','david','rosa','juan','mercedes'];
let newUsers = ['marta','jaime','laura'];

users.push(...newUsers);
console.log(users);

//COPIAR ARRAYS

// let arr1 = [1,2,3,4];
// let arr2 = [...arr1];

// console.log(arr2);

// CONCATENAR ARRAYS
let arr1 = [1,2,3,4];
let arr2 = [6,7,8];
// let arrConcat = arr1.concat(arr2);
// console.log(arrConcat);

let arrConcat = [...arr1, ...arr2];
console.log(arrConcat);

//ENVIAR UN NÚMERO INDEFINIDO DE ARGUMENTOS
const restParms = (...numbers) => {
    console.log(numbers)
}

restParms(1,2,3,4,5,6,7,8,9);

// LIBRERÍAS MATH

const num = [4,6,3,6,7,8];
console.log(Math.max(...num));
console.log(Math.min(...num));


// ELIMINAR ELEMENTOS DUPLICADOS
console.log(new Set(num));
