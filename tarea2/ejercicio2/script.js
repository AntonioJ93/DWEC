"use strict"

let fechas=[];
let fecha;
const annoInicial=2021;
const annoFinal=2100;
const mes=11;//diciembre
const dia=6;

//comprueba si diaMes es lunes en la fecha especificada
function esLunes(fecha, diaMes){
    let diaSem=fecha.getDay(diaMes);
    return diaSem==1;//1 para el lunes
}

for (let index = annoInicial; index < annoFinal; index++) {
    fecha=new Date(index,mes,dia);
    if(esLunes(fecha,dia)){
        document.write("Es Lunes"+fecha+"<br>");
    }
}

