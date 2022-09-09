/* class Animal {
    constructor(nombre){
        this.nombre = nombre;
    
    }

    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    saludar(){
        return `Hola me llamo ${this.nombre}`;
    }

    saludarGato(){
        return `soy un animal muy independiente 🐱`
    }
}

class Estudiante extends Animal{}

const marley = new Estudiante("marley");
console.log(marley)

const zoe = new Animal("zoe");

//ANTES DEL SET/OBTENER
console.log(zoe.getNombre)
console.log(zoe.nombre)
console.log(zoe);

zoe.setNombre= "Milka";
//DESPUES DEL SET/OBTENER   
console.log(zoe.getNombre)
console.log(zoe.nombre)
console.log(zoe);
 */

/* class Persona {

    constructor(nombre, edad){
        this.nombre = nombre;  
        this.edad = edad;
    }

    saludar(){
        return `Hola mi nombre es ${this.nombre}`
    }
}
const lucas = new Persona("lucas", 23);
console.log(lucas)

class Estudiante extends Persona{

        constructor(nombre, edad, notas = []){
            super(nombre,edad);
            this.notas= notas;
        }

        set setNotas(nota){
            this.notas.push(nota);
        }

        get getNotas(){
            return this.notas;
        }

        promedio(){
            const notasPromedio = this.notas.reduce((acc, el) => acc + el, 0);
            const notaFinal = notasPromedio / this.notas.length;
            console.log(notaFinal);

        }
    }

const marce = new Estudiante("marce",24);

//SIN SET
console.log(marce);

//CON SET Y GET

marce.setNotas = 7; //ESTABLECER
marce.setNotas = 4;
marce.setNotas = 8;
marce.setNotas = 10;

console.log(marce.getNotas); //OBTENER

marce.promedio();

 */
