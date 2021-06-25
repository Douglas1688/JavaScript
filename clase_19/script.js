const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');
const gallery = document.getElementById('gallery');
const link = document.getElementById('link');
// input.addEventListener('keyup',(e)=>{
// console.log(e);
// });

// addEventListener('click',(e)=>{
//     console.log(e.clientX,e.clientY);
// })
// button.addEventListener('click',(e)=>{
//         console.log(e.target);
//     });


// gallery.addEventListener('click',(e)=>{
// console.log(e.target.textContent);
// });
link.addEventListener('click',(e)=>{
    e.preventDefault();
    button.click();
});
form.addEventListener('submit',(e)=>{
    e.preventDefault();
console.log('El formulario se ha enviado.')
})
button.addEventListener('click',()=>{
        input.value = "Clicked";
});