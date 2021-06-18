
//document.getElementById('id') Acceder a un elemento
// a través de su id

const title = document.getElementById('title');
// console.log(title);

// title.textContent = 'Este es el nuevo texto';



/* document | element .querySelector 
Accede al primer elemento que conincida con selector CSS */
// const paragraph = document.querySelector('.paragraph')
// const span = paragraph.querySelector('span')
// console.log(span.textContent);


// const span = document.getElementById('title').querySelector('span');

// console.log(span.textContent);


const paragraphArray = Array.from(document.querySelectorAll('.paragraph'));
paragraphArray.map(p=>p.style.color='green');