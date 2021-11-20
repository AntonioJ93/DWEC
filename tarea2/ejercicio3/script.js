"use strict"
const numAleatorioInicial = 1;
const numAleatorioFinal = 150;
const numAleatorio = getNumAleatorio();


function contarPalabras() {
    let palabras = texto.split(" ");
    //quitamos posiciones vacias de los espacios consecutivos
    palabras = palabras.filter(p => p != "");
    return palabras.length;
}

function textoAascii() {
    let textoASCII = [];
    for (let index = 0; index < texto.length; index++) {
        textoASCII.push(texto.charCodeAt(index));
    }
    return textoASCII;
}

function getNumAleatorio() {
    return Math.random() * (numAleatorioFinal - numAleatorioInicial) + numAleatorioInicial;
}

function codificar(textoASCII) {

    let textoCdificado = [];
    textoASCII.forEach(element => {
        if (element + numAleatorio <= 255) {
            textoCdificado.push( element+numAleatorio);
        } else {
            textoCdificado.push( element - (255 / 2));
        }
    });
    return textoCdificado;
}

let texto=prompt("Introduzca su texto a codificar").trim();

while (contarPalabras(texto)<4) {
    texto = prompt("Error como minimo introduzca 4 palabras\nIntroduzca su texto a codificar").trim();
}

document.write("Mensaje: " + texto + "<br>");
document.write("Mensaje en ASCII: " + textoAascii() + "<br>");
document.write("Num Aleatorio: " + numAleatorio + "<br>");
document.write("Texto codificado: " + codificar(textoAascii()) + "<br>");
