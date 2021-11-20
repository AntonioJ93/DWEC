"use strict"

let fechas=[];
const annoInicial=2021;
const annoFinal=2100;
const mes=11;//diciembre
const dia=6;

function poblarFechas(){
    if (fechas.length==0) {
        for (let index = annoInicial; index < annoFinal; index++) {
            fechas.push(new Date(index,mes,dia));
        }
    }
}

function esLunes(fecha, diaMes){
    let diaSem=fecha.getDay(diaMes);
    return diaSem==1;//1 para el lunes
}

poblarFechas();

fechas.forEach(f=>esLunes(f,dia)?document.write("Es Lunes"+f+"<br>"):"");
