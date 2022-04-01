"use strict";
//acceder a funciones, clases o variables de un módulo
//import {validarEdad, Alumno} from "./misFunciones.mjs"
import * as modulo from "./misFunciones.mjs"
//declaraciones
let aDatos = [];
//clase


let entradaDatos = () => {

    let nombre = prompt("Introduzca nombre (Cancelar->Fin)");
    let edad,apellidos;
    while (nombre != null) {
        
         apellidos = prompt("Introduzca apellidos");
         edad = modulo.validarEdad(prompt("Introduzca edad"));
        const objeto = new modulo.Alumno(nombre, apellidos, edad);
        //entrada de datos al array
        aDatos.push(objeto)
        nombre = prompt("Introduzca nombre (Cancelar->Fin)");
    }
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
    document.getElementById("capa").innerHTML = "<h3>Visualizar Datos</h3>";
    aDatos.forEach((fila) => {
        document.getElementById("capa").innerHTML+=fila.mostrarDatos();

    });
};
//script
entradaDatos();
ordenar();
visualizarDatos();