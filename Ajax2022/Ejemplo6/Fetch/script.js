
$(() => {
   
    $("#regiones").on("change", mostrarProv)

})


function mostrarProv(){
    fetch("../Ejemplo6.php", 
    {
        method:"POST",
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `ca=${$('#regiones').val()}`
    })
    .then ( response =>{
        return response.text();
    })
    .then (data=>{
        //borrar contenido de capa
        let cadena="";
        $(data).find("capital").each((ind,ele)=>{
            cadena+=$(ele).text()+"<br>";
        });
        $("#mostrar").html(cadena);
       
        Swal.fire("Todo correcto")
    })
    .catch (error=>{
        console.error(error);
    })
   
        
   
}