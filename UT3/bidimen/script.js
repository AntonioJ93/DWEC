"use strict";
//declaraciones

const aNumeros = [];

let crear = () => {
    for (let fila = 1; fila <= 10; fila++) {
        aNumeros[fila - 1] = []; //crear un array en esa posición
        for (let col = 1; col <= 10; col++) {
            //  aNumeros[fila - 1][col - 1] = `${fila}-${col}`;
            aNumeros[fila - 1].push(`${fila}-${col}`);
        }
    }

}
let mostrar = () => {
    // for (let fila = 1; fila <= 10; fila++) {
    //     for (let col = 1; col <= 10; col++) {
    //         document.write(`${aNumeros[fila-1][col-1]} `);
    //     }
    //     document.write("<br>");
    // }
    aNumeros.forEach(fila => {
        fila.forEach(elemento => {
            document.write(`${elemento} `);
        })
        document.write("<br>");
    });


}

//
crear();
mostrar();