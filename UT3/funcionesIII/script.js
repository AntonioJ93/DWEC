"use strict";
//declarar variables y funciones
//let param=["Pepe", "Jiménez", "2DAW"];
//let param=["Pepe", "Jiménez"];
let param=["Pepe", "Jiménez", "2DAW", "1DAW"];


//funciones con un único parámetro, siendo un conjunto

const mostrar = (...datos) => {
    console.log("funciones solo un parámetro")
    for (let valor of datos) {
        console.log(valor);
    }
}
//funciones con parámetros spread
const mostrarSpread = (nombre, apellidos, unidad) => {
    console.log("spread");
    console.log(nombre);
    console.log(apellidos);
    console.log(unidad);
}

//script
mostrar("uno", "dos", 3, "cuatro");
mostrar("tomates", "peras");
mostrar("Juan");
mostrarSpread(...param);