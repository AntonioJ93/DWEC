"use strict";
//declaraciones
let arrayI = new Array(4); //desuso
let arrayII = new Array(1, 2, 3, 4); //desuso
let arrayIII = [];
const arrayIV = ["lunes", 2, true];
arrayIV[7]="María"; //asignación en ejecución a una constante
//arrayIV=[]; //error con const
//arrayII=[]
let arrayV = [{
    "nombre": "Jose",
    "apellidos": "León",
    "edad": 20
}, {
    nombre: "Ana",
    apellidos: "Jiménez",
    edad: "Diez"
}];
//recorridos de un array
let mostrarFor = (tabla) => {
    console.log("For");
    for (let index = 0; index < tabla.length; index++) {
        console.log(`indice=${index} - valor=${tabla[index]}`);

    }
}
let mostrarForIn = (tabla) => {
    console.log("For in");
    for (let index in tabla) {
        console.log(`indice=${index} - valor=${tabla[index]}`);
    }
}
let mostrarForOf = (tabla) => {
    console.log("For of");
    for (let valor of tabla) {
        console.log(`valor=${valor}`);
    }
}
let mostrarForOfIndice = (tabla) => {
    console.log("For of index");
   
    for (let [index, valor] of tabla.entries()) {
        console.log(`indice= ${index} - valor=${valor}`);
    }
}
let mostrarForOfEach = (tabla) => {
    console.log("For each");
    tabla.forEach((valor, index) => {
        console.log(`indice= ${index} - valor=${valor}`);
    });

}
let mostrarForOfEachBis = (tabla) => {
    console.log("For each");
    tabla.forEach((valor) => {
        console.log(`nombre=${valor.nombre} - apellidos ${valor.apellidos} - valor =${valor.edad}`);
    });

}


//script

mostrarFor(arrayII);
mostrarForIn(arrayIV);
mostrarForOf(arrayIV);
mostrarForOfIndice(arrayIV);
mostrarForOfEach(arrayIV);
mostrarForOfEachBis(arrayV);
