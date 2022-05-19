let xmlHttp;
$(() => {
   xmlHttp=crearConexion();
   if (xmlHttp!=undefined){
        $("#first, #all").on("click", mostrar)
   }else{
       Swal.fire("Navegador no soporta AJAX")
   }
})
function mostrar(){
    let parametro;
  //preparar la conexión
  //establecer el id o no como parámetro
  if ( $(this).attr("id")=="first"){
    parametro="perro=111A";
  }else{
      parametro="perro=";
  }
  xmlHttp.open ("GET", "php/mostrar.php?"+parametro, true);
  xmlHttp.onreadystatechange=()=>{
      if (xmlHttp.readyState == 4 && xmlHttp.status==200){ //comunicación ok
        //volcar la información a la tabla
        let datos=JSON.parse(xmlHttp.responseText);
        console.log(datos);
        //limpiar la etiqueta tbody
        $("tbody").empty(); 
        
        $(datos.data).each((ind,ele)=>{
            $("tbody").append(`<tr><td>${ele.chip}</td><td>${ele.nombre}</td><td>${ele.raza}</td><td>${ele.fechaNac}</td></tr>`)
        })

    }
  };
  xmlHttp.send();


}