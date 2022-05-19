
$(() => {
   
        $("#regiones").on("change", mostrarProv)
    
})
function mostrarProv(){
    $.ajax({
        url:"../Ejemplo6.php",
        type:"POST",
        data:{
            ca: $("#regiones").val()
        }
    })
    .done(function (responseText){
        let cadena="";
            //borrar contenido de capa
            $("#mostrar").empty();
            $(responseText).find("capital").each((ind,ele)=>{
                cadena+=$(ele).text()+"<br>";
            });
            $("#mostrar").html(cadena);
        
    })
    .fail(function (responseText, textStatus, xhr){
        Swal.fire({
            icon:"error",
            title:"Error "+ xhr.status,
            text:xhr.statusText
        })
    })
    
}