"use strict"
$(() => {

    mostrarProv();

})

function mostrarProv() {
    axios.get("https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json")
        .then(function (response) {
            // handle success
            //ordenar ascedente
            console.log(response)
            response.data.sort((a, b) => {
                return a.nm.localeCompare(b.nm)
            })
            //cargar en el select
            $(response.data).each((ind, ele) => {
                $("#provincias").append("<option id=" + ele.id + ">" + ele.nm + "</option>")
            })
            //evento change
            $("#provincias").on("change", function () {

                Swal.fire("El Id es " + $("#provincias option:selected").attr("id"))
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
            console.log("Final");
        });



}