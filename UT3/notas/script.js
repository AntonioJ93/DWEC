"use strict"
//let declaraciones variables y funciones
let aNotas=[];
let entradaNotas=()=>{
    let nota, i=0;
    nota=validarNota();
    while(nota!=0){
        //aNotas[i]=nota;
       // i++;
        aNotas.push(nota)
        nota=validarNota();
    }
}
let validarNota=()=>{
    let nota=prompt("Introduzca nota [1-10] (0->Salir)");
    while (isNaN(nota) || nota<0 || nota>10){
        nota=prompt("Error. Vuelva a introducir una nota [1-10] (0->Salir)");
    }
   return parseInt(nota) ;
}
let mediaAritm=()=>{
    let suma=0;
    aNotas.forEach(nota => {
        console.log(nota);
        suma+=nota;
    });
    return Math.round(suma/aNotas.length);
}
//script
entradaNotas();
console.log(`La media artimética de las notas es ${mediaAritm()}`);
