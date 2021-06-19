/*
Atributos
element.getAttribute('attribute')
element.setAttribute('attribyte',value)

Clases
element.classList.add('class,class,....)
element.classList.remove('class','class',...)
element.classList.toggle('class',[,force])
element.classList.contains('class')
element.classList.replace('oldClass',newClass)


*/
const title = document.getElementById('title');
const name = document.getElementById('name');

// name.setAttribute('type','radio');
// name.setAttribute('type','number');
// name.setAttribute('type','date');

// title.classList.add('main-title');
title.classList.remove('main-title');
name.value = 'Algo para mostrar'