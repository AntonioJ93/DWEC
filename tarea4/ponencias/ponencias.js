"use strict"

window.addEventListener("load",function(){
    titulo.focus();//tambien con el atributo autofocus en el input del formulario
},false);

formulario.addEventListener("submit",function(e){
    document.getElementById("tabla-titulo").innerHTML=titulo.value;
    document.getElementById("tabla-descripcion").innerHTML=descripcion.value;
    document.getElementById("tabla-ponente").innerHTML=ponente.value;
    document.getElementById("tabla-aforo").innerHTML=aforo.value;
    tabla.style.display="block";
    e.preventDefault();
},false);

formulario.addEventListener("reset",function(e){
    tabla.style.display="none";
},false);