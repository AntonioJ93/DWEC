
$(() => {
  
        $("#cursos").on("change", mostrarAsig)
    
})
function mostrarAsig(){
    fetch("../Ejemplo5.xml")
    .then ( response =>{
        return response.text();
    })
    .then (data=>{
        $("#modulos option:gt(0)").remove();
        $(data).find("curso").each((ind,ele)=>{
            if (ind== $("#cursos").prop("selectedIndex")-1){
                $(ele).find("asig").each((i, valor) =>{
                    $("#modulos").append("<option>"+ $(valor).text()+ "</option>")

                })
            }
        })
        Swal.fire("Todo correcto")
    })
    .catch (error=>{
        console.error(error);
    })
   
        
   
}