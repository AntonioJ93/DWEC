
// devuelve true si es un número
function validaLado(lado) {
    return !isNaN(Number.parseFloat(lado));
}
// devuelve true si sumaMenores > ladoMayor
function validarTriangulo(lados) {
    let ladoMayor = Math.max(lados[0], lados[1], lados[2]);
    let indice = lados.indexOf(ladoMayor);
    let sumaMenores = 0;
    for (let index = 0; index < lados.length; index++) {
        if (index != indice) {// suma todos menos el mayor
            sumaMenores += lados[index];
        }
    }
    return sumaMenores > ladoMayor;
}
// devuelve el String con el tipo de triangulo
function clasificarTriangulo(lados) {

    if (lados[0] == lados[1] && lados[0] == lados[2] && lados[1] == lados[2]) {
        return "equilátero";
    } else if (lados[0] != lados[1] && lados[0] != lados[2] && lados[1] != lados[2]) {
        return "escaleno";
    }
    return "isósceles";
    

}

let triangulo = [];

while (triangulo[0] != "0") {
    if (triangulo.length < 3) {//si el triangulo tiene menos de 3 lados
        let lado = prompt("introduce el lado " + (triangulo.length + 1));
        if (validaLado(lado)) {// si es un número
            triangulo.push(Number.parseFloat(lado));
        } else {
            document.write("Lado incorrecto <br>");
            console.log("Lado incorrecto");
        }

    } else {
        if (validarTriangulo(triangulo)) {// si el triangulo esta completo
            console.log("Lado 1= "+triangulo[0]+" Lado 2= "+triangulo[1]+" Lado 3= "+triangulo[2]+" El triángulo es: " + clasificarTriangulo(triangulo));
            document.write("Lado 1= "+triangulo[0]+" Lado 2= "+triangulo[1]+" Lado 3= "+triangulo[2]+" El triángulo es: "  + clasificarTriangulo(triangulo) + "</br>");

        }else{
            console.log("No se puede formar el triángulo --> Lado 1= "+triangulo[0]+" Lado 2= "+triangulo[1]+" Lado 3= "+triangulo[2]);
            document.write("No se puede formar el triángulo --> Lado 1= "+triangulo[0]+" Lado 2= "+triangulo[1]+" Lado 3= "+triangulo[2]+ "</br>");
        }
        triangulo = []; //reset triángulo

    }
}