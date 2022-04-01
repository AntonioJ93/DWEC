
function pideDato() {
    return prompt("introduce la calificación 1-10");
}
// devuelve true si es un número
function validaDato(dato) {
    return !isNaN(Number.parseInt(dato));
}
// imprime el resultado
function evaluarOpcion(calificacion) {
    switch (true) {
        case 1 <= calificacion && calificacion <= 4:
            document.write(dato + " --> Insuficiente <br>");
            console.log( dato + " --> Insuficiente");
            break;
        case calificacion == 5 || calificacion == 6:
            document.write(dato + " --> Bien <br>");
            console.log( dato + " --> Bien");
            break;
        case calificacion == 7 || calificacion == 8:
            document.write(dato + " --> Notable <br>");
            console.log( dato + " --> Notable");
            break;
        case calificacion == 9 || calificacion == 10:
            document.write(dato + " --> Sobresaliente <br>");
            console.log( dato + " --> Sobresaliente");
            break;
        default:
            alert("Calificación incorrecta");
            break;
    }
}

let dato=pideDato();
while(dato !== "0"){
    if(validaDato(dato)){// comprueba si es un número
        evaluarOpcion(dato); // comprueba si esta entre 1-10 e imprime el resultado
    }else{ //no ha introducido un número correcto o ha introducido un caracter no numérico
        alert("Calificación incorrecta");
    }
    
    dato=pideDato();
}
alert("Aplicación finalizada");



