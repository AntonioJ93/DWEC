"use strict"

$(()=>{

    $("#GET").on("click", mostrarMensajeGET)
    $("#POST").on("click", mostrarMensajePOST)

})
function mostrarMensajeGET(){
    fetch("../Ejemplo3.php?valor=GET&nombre=Ana")
    .then ( response =>{
        return response.text();
    })
    .then (data=>{
        $("#mensaje").text(data)
    })
    .catch (error=>{
        console.error(error);
    })
    
   
    
}
function mostrarMensajePOST(){

    fetch("../Ejemplo3.php", {
        method:'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "valor=POST&nombre=Luis"
    })
    .then ( response =>{
        return response.text();
    })
    .then (data=>{
        $("#mensaje").text(data)
    })
    .catch (error=>{
        console.error(error);
    })
    
    
   
}