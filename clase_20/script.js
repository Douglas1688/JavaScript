/*DOM - Crear e insertar ELEMENTOS
Crea un elemento: document.createElement(element);
Escribir texto en una elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = código HTML

Añadir un elemento al DOM: parent.appendChild(element)

Fragmentos de código: document.createDocumentFragment()

*/

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const title = document.getElementById('title');
const daysList = document.getElementById('daysList');
const daysSelect = document.getElementById('daysSelect');

// const itemList = document.createElement('LI');
// itemList.textContent = 'Lunes';
// daysList.appendChild(itemList);
// console.log(itemList);

title.innerHTML = 'DOM - <span>Crear e insertar elementos</span>';

// for (const day of days) {
//     daysList.innerHTML += `<li>${day}</li>`
// }

// const fragment = document.createDocumentFragment();
// for (const day of days){
//     const itemList = document.createElement('LI');
//     itemList.textContent = day
//     fragment.appendChild(itemList);
// }

// daysList.appendChild(fragment);

const fragment = document.createDocumentFragment();
for (const day of days){
    const selectItem = document.createElement('OPTION');
    selectItem.setAttribute('value',day.toLocaleLowerCase());
    selectItem.textContent = day;
    fragment.appendChild(selectItem);
}

daysSelect.appendChild(fragment);