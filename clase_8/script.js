let nombres = ['Pedro','Juan','María','Jessenia','Douglas'];

for (let elem in nombres) { // Recorre los índices del array
    console.log(elem);
}

for (const i of nombres) { // Recorre los valores del array
    if (i == 'Jessenia') {
        continue;
    }
    console.log(`Encontré a ${i}`);

}