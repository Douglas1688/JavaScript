const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a = prompt('Introduzca el primer número: ');
let b = prompt('Introduzca el segundo número: ');
let c = prompt('Introduzca el tercer número: ');

numbers.textContent = `Los números introducidos son ${a}, ${b}, ${c}`;

if(a>b && a>c){
    if(b>c){
        result.textContent = `El orden es ${a}, ${b},${c}`
    }else{
        result.textContent = `El orden es ${a}, ${c},${b}`
    }

}
if(b>a&&b>c){
    if(a>c){
        result.textContent = `El orden es ${b}, ${a},${c}`
    }else{
        result.textContent = `El orden es ${b}, ${c},${a}`
    }
}
if(c>a&&c>b){
    if(a>b){
        result.textContent = `El orden es ${c}, ${a},${b}`
    }else{
        result.textContent = `El orden es ${c}, ${b},${a}`
    }

}