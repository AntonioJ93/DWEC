"use strict";
//declaración de variables
const aDatos = [];

let entradaDatos = () => {
    let i = 0;
    let nombre = prompt("Introduzca nombre (Cancelar->Fin)");
    while (nombre != null) {
        aDatos[i] = []; //establecer estructura de bidimensional
       // aDatos[i][0]=nombre;
        aDatos[i].push(nombre);
        aDatos[i].push(prompt("Introduzca Apellidos"));
        aDatos[i].push(validarEdad(prompt("Introduzca edad")));

        // aDatos[i].push(
        //     nombre,
        //     prompt("introduzca apellidos"),
        //     validarEdad(prompt("Introduzca edad [1-120]"))
        // );
        i++;
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
        return a[2] - b[2]; // numérico
        return b[2] - a[2]; // descendente
        //a[2].localeCompare(b[2]) //si es un string
    });
    // aDatos.sort((a,b)=>{a[2]-b[2]}); 
};
let visualizarDatos = () => {
    document.write("<h3>Visualizar Datos</h3>");
    aDatos.forEach((fila) => {
        fila.forEach((element) => {
            document.write(`${element}   `);
        });
        document.write("<br>");
    });
};
//script
entradaDatos();
ordenar();
visualizarDatos();