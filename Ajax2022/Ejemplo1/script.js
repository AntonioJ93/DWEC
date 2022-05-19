"use strict"
let xmlHttp;

$(()=>{
    //crear el objeto
    xmlHttp=crearConexion();
    if (xmlHttp != undefined){
        //funcionalidad
        $("#boton").on("click" ,mostrarMensaje);
    }else{
        Swal.fire("El navegador no soporta AJAX. Debe actualizar el navegador");
    }
})

let mostrarMensaje=()=>{
    //preparar el objeto xmlHttp
    xmlHttp.open("GET", "ficheros/Mensaje.txt", true);
    xmlHttp.onreadystatechange=()=>{
       if (xmlHttp.readyState==4 && xmlHttp.status==200) {
           $("#mensaje").text(xmlHttp.responseText);
       }
    };

    xmlHttp.send(); //comienza la petición de respuesta al servidor

}