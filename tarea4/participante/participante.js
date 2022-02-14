"use strict"

/* input apellidos y nombre en mayusculas*/
nombre.addEventListener("blur",function (e) {
    pasarAMayusculas(e.target);
},false);

apellidos.addEventListener("blur",function (e) {
    pasarAMayusculas(e.target);
},false);

function pasarAMayusculas(elemento) {
    let txt=elemento.value;
    elemento.value=txt.toUpperCase();
}

let regexAno=/^(19[5-9][7-9]|200[0-3])$/;
anno.addEventListener("input",function(e){
    validarAnno(e.target);
},false);

usuario.addEventListener("input",function(e){
    validarNombreUsuario(e.target);
},false);

/* año de nacimiento entre 1957 y 2003 */
const MIN_ANNO=1957;
const MAX_ANNO=2003;



function validarAnno(elemento){
    let error=elemento.parentNode.querySelector(".error");
        if(regexAno.test(elemento.value)){
            //rango correcto
            error.innerHTML="";
            return;
        }
    error.innerHTML="El año debe estar comprendido entre "+MIN_ANNO+" y "+MAX_ANNO;
}


/*
    VALIDAR USUAIRO
*/


const MIN_USER_LENGTH=5;
const MAX_USER_LENGTH=15;
let regexUsuario=/^[B-DF-HJ-NP-TV-Z][\wäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ]{4,15}$/;


function validarNombreUsuario(elemento){
    let error=elemento.parentNode.querySelector(".error");
    console.log(elemento.value);
    if(regexUsuario.test(elemento.value)){
        error.innerHTML="";
        return;
    }
    error.innerHTML=`Sólo caracteres alfanúmericos, "_" y estar entre ${MIN_USER_LENGTH} y ${MAX_USER_LENGTH}`;
}