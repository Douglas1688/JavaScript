const persona = {
    name: 'Douglas',
    age: 32,
    country: 'Ecuador',
    programming_lenguages: ['Python','JS']
}

console.log(persona.name);

// for(const key in persona){
//     console.log(key);
// }
for(const key in persona){
    console.log(`${key} : ${persona[key]}`);
}


for(const son of persona.programming_lenguages){
console.log(son);
}