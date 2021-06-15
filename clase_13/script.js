// ARRAYS

//FROM -> Convierte en array el elemento iterable
// .from(iterable)
let word = 'Hola Mundo';
console.log(Array.from(word));


//SORT -> Ordena los elementos de un array (ordena según valor UNICODE)
// .sort([callback])
const letters = ['b','c','z','a']
console.log(letters.sort())
const numbers = [1,8,100,300,3]
console.log(numbers.sort())
console.log(numbers.sort((a,b)=>a-b))  // [1,8,100,300,3]


// FOREACH -> Ejecuta la función indicada una vez por cada elemento del array
// .foreach(callback(currentValue,[index]))
const numbers1 = [12,25,47,84,98]
numbers1.forEach((elem)=>console.log(elem));
numbers1.forEach((elem, index)=>
                    console.log(`${elem} está en la posición ${index}`));


// SOME -> Comprueba si al menos un elemento del array cumple la condición.
// .some(callback)
const words = ['HTML','CSS','JavaScript','PHP'];
console.log(words.some(word => word.length>3));

// EVERY -> Comprueba si todos los elementos del array cumplen la condición
// .every(callback)

console.log(words.every(word => word.length>3));      

// MAP -> Transforma todos los elementos del array y devuelven un nuevo array
// .map(callback)

const numbers2 = [12,25,47,84,98]
numbers2.map(number => console.log(number*2));

// FILTER -> Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array
// .filter(callback)


const newelement = numbers2.filter((elem) => elem>50);
console.log(newelement)


// REDUCE -> Reduce todos los elementos del array a un único valor
// . reduce(callback)
const users = [
    {
        name: 'user1',
        online: true
    },
    {
        name: 'user2',
        online: true
    },
    {
        name: 'user3',
        online: false
    },
    {
        name: 'user4',
        online: true
    },
    {
        name: 'user5',
        online: false
    },
    {
        name: 'user6',
        online: true
    },
]

const usersOnline = users.reduce((cont, user) => {
    if(user.online) cont++
    return cont
},0)

console.log(`Hay ${usersOnline} usuarios conectados.`)