"use strict";
//declaraciones
const arrayI = ["mano", "pie", "dedo"];
const arrayII=arrayI
//let copiaArrayI=arrayI.slice();
const copiaArrayI=Array.from(arrayI)

//cambio arrayI
arrayI[0]="cabeza";

console.log(arrayI);
console.log(arrayII);
console.log(copiaArrayI);