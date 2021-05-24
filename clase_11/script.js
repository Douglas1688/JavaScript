class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.datos = `Me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }
    saludar(){
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }

}

const p = new Persona("Juan", "Pérez",26);

console.log(p['saludar']());