"use strict";
//declarar variables y funciones
function saluda() {
    console.log("Hola, soy una función");
}
//funciones con parámetros
function tablaMultiplicar(tabla, hasta) {
    console.log("Tabla multiplicar 2 parámetros");
    for (let index = 1; index <= hasta; index++) {
        console.log(tabla + "*" + index + "=" + (index * tabla));

    }
}
//funciones con parámetros opcionales
function tablaMultiplicarBis(tabla, hasta=10) {
    console.log("Tabla multiplicar con parámetros opcionales");
    for (let index = 1; index <= hasta; index++) {
        console.log(tabla + "*" + index + "=" + (index * tabla));

    }
}
//functiones con return
function sumar(a,b){
    return (a+b);
}

//script del proceso
saluda();
tablaMultiplicar(5, 7);
tablaMultiplicar(2, 3);
tablaMultiplicar(6);
tablaMultiplicarBis(5, 7);
tablaMultiplicarBis(2, 3);
tablaMultiplicarBis(6);
console.log ("La suma de 3+4 = "+ sumar(3,4));