/* EVENTOS
Es cualquier cosa que sucede en nuestro documento. 
El contenido se ha leído
El contenido se ha cargado
El usuario mueve el ratón
El usuario pusla una tecla 
La ventana se ha cerrado


Element.addEventListener('event',callback);

Eventos de ratón:
click - cuando pulsamos el botón izquierdo del ratón.
dblclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón.
mouseenter - cuando entramos en la zona que tiene el evento.
mousedown - cuando pulsamos el botón izquierdo del ratón.
mouseup - cuando soltamos el botón izquierdo del ratón.
mousemove - cuando movemos el ratón.
mouseleave - cuando salimos de la zona que tiene el evento.

Eventos de teclado:
keydown - cuando pulsamos una tecla.
keyup - cuando soltamos una tecla.
keypress - cuando pulsamos una tecla y no la soltamos.

*/
let n = 0;
const button = document.getElementById('button');
const box = document.getElementById('box')
const input = document.getElementById('input')
// button.addEventListener('click',() => {    
//     n++;
//     console.log(n);
// });

// button.addEventListener('dblclick',() => {
// console.log("Doble click");
// });

// box.addEventListener('mouseenter',() => {
//     box.classList.replace('red','green')
// });
// box.addEventListener('mouseleave',() => {
//     box.classList.replace('green','red')
    
//     });
// box.addEventListener('mousedown',() =>{
// console.log("Has pulsado la caja")
// })
// box.addEventListener('mouseup',() =>{
//     console.log("Has soltado la caja")
//     })

input.addEventListener('keydown',() =>{
    console.log('Has pulsado una tecla');
})