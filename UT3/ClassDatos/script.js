"use strict";
//declaraciones
let aDatos = [];
//clase
class Alumno {
    constructor(nom, ape, edad) {
        this.nombre = nom,
            this.apellidos = ape;
        this.edad = edad
    }
    mostrarDatos() {
        document.write(`<br>${this.nombre} ${this.apellidos} tiene ${this.edad} años`);
    }
}

let entradaDatos = () => {

    let nombre = prompt("Introduzca nombre (Cancelar->Fin)");
    while (nombre != null) {
        let apell = prompt("Introduzca apellidos");
        let anios = validarEdad(prompt("Introduzca edad"));
        //entrada de datos al array
        aDatos.push(new Alumno(nombre, apell, anios))
        nombre = prompt("Introduzca nombre (Cancelar->Fin)");
    }
};
let validarEdad = (edad) => {
    while (isNaN(edad) || edad < 1 || edad > 120) {
        edad = prompt("Error de datos\nIntroduzca edad [1-120]");
    }
    return parseInt(edad);
};
let ordenar = () => {
    //ordenar por edad ascendente
    aDatos.sort((a, b) => {
        return a.edad - b.edad; // numérico
        //  return b[2] - a[2]; // descendente
        //a[2].localeCompare(b[2]) //si es un string
    });
    // aDatos.sort((a,b)=>{a[2]-b[2]});
};
let visualizarDatos = () => {
    document.write("<h3>Visualizar Datos</h3>");
    aDatos.forEach((fila) => {
        fila.mostrarDatos();

    });
};
//script
entradaDatos();
ordenar();
visualizarDatos();