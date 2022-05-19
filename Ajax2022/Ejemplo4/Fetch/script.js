"use strict"

$(() => {
   
        $(":button").on("click", mostrarAsig)
    
})

function mostrarAsig() {
    fetch("../Ejemplo5.xml")
    .then ( response =>{
        return response.text();
    })
    .then (data=>{
        let mensaje="";
            $(data).find("curso").each((ind, ele) => {
                if (ind == 1) {
                    mensaje = "Módulos de 2º DAW";
                    $(ele).find("asig").each((ind, mod) => {
                        mensaje += "<br>" + $(mod).text()
                    })
                }
            })
            $("#mensaje").html(mensaje);
    })
    .catch (error=>{
        console.error(error);
    })
    
}
