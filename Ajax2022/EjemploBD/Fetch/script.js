"use strict"
$(() => {

    $("#first, #all").on("click", mostrar);

})

function mostrar() {

    if ($(this).attr("id") == "first") {
        parametro = "perro=111A";
    } else {
        parametro = "perro=";
    }
    fetch("../php/mostrar.php?" + parametro)

        .then(function (response) {
            //decodificar como texto
            console.log(response)


            return response.json(); //la respuesta del servidor es en JSON


        })
        .then(function (datos) {
            $("tbody").empty();
            $(datos.data).each((ind, ele) => {
                $("tbody").append(`<tr><td>${ele.chip}</td><td>${ele.nombre}</td><td>${ele.raza}</td><td>${ele.fechaNac}</td></tr>`)
            })

        })
        .catch(function (err) {
            Swal.fire("Error: " + err.status + " " + err.statusText);

        });




}