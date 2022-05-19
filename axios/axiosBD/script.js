"use strict"

$(() => {

    $("#first, #all").on("click", mostrar);

})

function mostrar() {
    let parametro;
    if ($(this).attr("id") == "first") {
        parametro = "perro=111A";
    } else {
        parametro = "perro=";
    }
    axios.get('../php/mostrar.php?'+parametro,{
        responseType: 'json'
    })
    
    .then(function (response) {
        $("tbody").empty();
           console.log(response)
        $(response.data.data).each((ind, ele) => {
          $("tbody").append(`<tr><td>${ele.chip}</td><td>${ele.nombre}</td><td>${ele.raza}</td><td>${ele.fechaNac}</td></tr>`)
        })
    })
    .catch(function (err) {
        Swal.fire("Error: " + err.status + " " + err.statusText);
    })
   




}