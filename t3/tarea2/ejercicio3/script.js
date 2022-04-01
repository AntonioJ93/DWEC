"use strict"
const numAleatorioInicial = 1;
const numAleatorioFinal = 150;
const numAleatorio = getNumAleatorio();


function contarPalabras(texto) {
    let palabras = texto.split(" ");
    //quitamos posiciones vacias de los espacios consecutivos
    palabras = palabras.filter(p => p != "");
    return palabras.length;
}

//convierte cada caracter a ascii y lo devuelve en un array
function textoAascii(texto) {

    let txtASCII = "";
    for (let index = 0; index < texto.length; index++) {

        txtASCII += texto.charCodeAt(index);
    }
    return txtASCII;
}

function getNumAleatorio() {
    return Math.round(Math.random() * (numAleatorioFinal - numAleatorioInicial) + numAleatorioInicial);
}

function codificar(texto) {
    let txtCodificado = "";
    let txtASCII;
    for (let index = 0; index < texto.length; index++) {
        txtASCII = Number(textoAascii(texto[index]));
        if (txtASCII + numAleatorio <= 255) {
            txtCodificado += txtASCII + numAleatorio;
        } else {
            txtCodificado += txtASCII - Math.round(255 / 2);
        }
    }

    return txtCodificado;
}

let texto = prompt("Introduzca su texto a codificar").trim();

while (contarPalabras(texto) < 4) {
    texto = prompt("Error como minimo introduzca 4 palabras\nIntroduzca su texto a codificar").trim();
}

document.write("Mensaje: " + texto + "<br>");
document.write("Mensaje en ASCII: " + textoAascii(texto) + "<br>");
document.write("Num Aleatorio: " + numAleatorio + "<br>");
document.write("Texto codificado: " + codificar(texto) + "<br>");
