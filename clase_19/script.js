const form = document.getElementById('form');
const input = document.getElementById('input');

// input.addEventListener('keyup',(e)=>{
// console.log(e);
// });

// addEventListener('click',(e)=>{
//     console.log(e.clientX,e.clientY);
// })
input.addEventListener('keyup',(e)=>{
    if(e.key === 'x'){
        console.log(e.key); 
    }

    });