"use strict"

$(()=>{
    $("#boton").on("click", mostrarMensaje)

})
function mostrarMensaje(){
    fetch("../ejemploPHP.php")
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