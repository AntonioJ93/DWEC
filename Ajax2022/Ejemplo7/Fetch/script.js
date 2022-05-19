
$(() => {
   
        $("#regiones").on("change", mostrarProv)
    
})
function mostrarProv(){
    let datos=new FormData();
    datos.append("ca",$("#regiones").val())

    fetch("../Ejemplo8.php", 
    {
        method:"POST",
        body: datos
    })
    .then ( response =>{
        return response.json();
    })
    .then (data=>{
        let cadena="";
            //borrar contenido de capa
            //$("#mostrar").empty();
            $(data).each((ind,ele)=>{
                cadena+=ele+"<br>";
            });
            $("#mostrar").html(cadena);
    })
    .catch (error=>{
        console.error(error);
    })
   
}