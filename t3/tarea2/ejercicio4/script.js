"use strict"


function esValido(cateto) {
    return cateto > 0;
}

function getHipotenusa(catetoA, catetoB) {
    return Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));
}

let continuar = true;
let contador=1;
while (continuar) {

    let catetoA = prompt("Introduzca el cateto 1");
    while (!esValido(catetoA)) {
        catetoA = prompt("Error el cateto no es correcto\nIntroduzca el cateto 1");
    }

    let catetoB = prompt("Introduzca el cateto 2");
    while (!esValido(catetoB)) {
        catetoB = prompt("Error el cateto no es correcto\nIntroduzca el cateto 2");
    }

    document.write(contador+". Cateto 1= "+catetoA+" Cateto 2= "+catetoB+" La hipotenusa es: " + Math.round(getHipotenusa(catetoA, catetoB)*100)/100+"<br>");
    contador++;
    continuar = confirm("¿Desea calcular mas hipotenusas?");
}
