"use strict"
let xmlHttp;

$(()=>{
    //crear el objeto
    xmlHttp=crearConexion();
    if (xmlHttp != undefined){
        //funcionalidad
        $(":button").on("click" ,mostrarMensaje);
        
    }else{
        Swal.fire("El navegador no soporta AJAX. Debe actualizar el navegador");
    }
})

let mostrarMensaje=()=>{
    //preparar el objeto xmlHttp
    xmlHttp.open("GET", "Ejemplo5.xml", true);
    xmlHttp.onreadystatechange=()=>{
       if (xmlHttp.readyState==4 && xmlHttp.status==200) {
          let datos= xmlHttp.responseXML;
          let mensaje="Módulos de 1º<br>";
          $(datos).find("curso").each((ind, ele)=>{
              
              //muestre los módulos de primero
              if (ind==1){
                  $(ele).find("asig").each((ind,mod)=>{
                     mensaje+= $(mod).text()+"<br>";
                  })
              }
          })
          //mostrar los módulos de 1º en la capa
          $("#mensaje").html(mensaje);
       }
    };

    xmlHttp.send(); //comienza la petición de respuesta al servidor

}

