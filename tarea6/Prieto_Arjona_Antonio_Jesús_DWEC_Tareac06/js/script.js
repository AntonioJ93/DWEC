"use strict"


//asignar evento on load
$(function () {
    selectIngredientes();
    selectCategorias();
    selectTipo();
    selectTipoCopa();
});

$("select").on("change",mostrarCocktails);

//obtener todos los ingredientes con fetch
function selectIngredientes() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
        .then(resp => resp.json())//lo pasamos a json
        .then(data => {
            data.drinks.forEach(element => {
                $("#ingredientes").append(`<option value="${element.strIngredient1}">${element.strIngredient1}</option>`);
            });
            //ordenamos
            $("#ingredientes option").sort(ordenarAscendente).appendTo('#ingredientes');
            //ponemos primero seleccionar...
            $("#ingredientes").prepend("<option selected value=0>Seleccionar...</option>");
        })
        .catch(error => console.error("Ha ocurrido un error " + error))
}

function ordenarAscendente(a, b) {
    return ($(b).text()) < ($(a).text()) ? 1 : -1;
}

//obtener todas las categorias con jQuery
function selectCategorias() {

    $.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list", function (data, status) {
        if (status == "success") {
            data.drinks.forEach(element => {
                $("#categorias").append(`<option value="${element.strCategory}">${element.strCategory}</option>`);
            });
            //ordenamos
            $("#categorias option").sort(ordenarAscendente).appendTo('#categorias');
            //ponemos primero seleccionar...
            $("#categorias").prepend("<option selected value=0>Seleccionar...</option>");
        } else {
            console.log("error en la petición de categorías");
        }
    });
}

//obtener todos los tipos con XmlHttpRequest
function selectTipo() {

    let request = conexionXmlHttpRequest();
    request.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list", true);
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            let respuestaJson = JSON.parse(request.responseText);
            respuestaJson.drinks.forEach(element => {
                $("#tipo").append(`<option value="${element.strAlcoholic}">${element.strAlcoholic}</option>`);
            });
            //ordenamos
            $("#tipo option").sort(ordenarAscendente).appendTo('#tipo');
            //ponemos primero seleccionar...
            $("#tipo").prepend("<option selected value=0>Seleccionar...</option>");
        }
    }
    request.send();
}

//crear conexion xmlHttpRequest
function conexionXmlHttpRequest() {
    let request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        try {
            request = new ActiveXObject("MSXML2.XMLHTTP");
        } catch {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    return request;
}

//obtener tipos de copa axios
function selectTipoCopa() {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list', {
        responseType: 'json'
    })
        .then(function (res) {
            if (res.status == 200) {
                res.data.drinks.forEach(element => {
                    $("#tipoCopa").append(`<option value="${element.strGlass}">${element.strGlass}</option>`);
                });
                //ordenamos
                $("#tipoCopa option").sort(ordenarAscendente).appendTo('#tipoCopa');
                //ponemos primero seleccionar...
                $("#tipoCopa").prepend("<option selected value=0>Seleccionar...</option>");
            }
        })
        .catch(function (err) {
            console.log(err);
        })
}

function mostrarCocktails(){    
    //reset cocktails
    $("#cocteles div").remove();

    //reset select no activos
    let selectActivo=this;
    $("select").each(function(index,ele){
        if($(ele).val()!=$(selectActivo).val()){
            $(ele).children().first().prop("selected","selected");
        }
    });
    
    //select ingredientes
    if(this.id=="ingredientes"){
        peticion(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.value}`);
    }
    //select categorias
    if(this.id=="categorias"){
        peticion(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${this.value}`);
    }
    //select tipo
    if(this.id=="tipo"){
        peticion(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${this.value}`);
    }
    //select tipoCopa
    if(this.id=="tipoCopa"){
        peticion(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${this.value}`);
     
    }
}

//alert detalles
function mostrarDetalles(){
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.id}`)
        .then(resp => resp.json())//lo pasamos a json
        .then(data => {
           let ingredientes="";
           for (let index = 1; index <= 15; index++) {
              if(data.drinks[0]["strIngredient"+index]!=null){
                ingredientes+=data.drinks[0]["strIngredient"+index]+" ";
              }
               
           }
           
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Ingredientes',
                html:`<p>${ingredientes}</p>`
              })
        })
        .catch(error => console.error("Ha ocurrido un error " + error))
}

//petición
function peticion(url){
    fetch(`${url}`)
    .then(resp => resp.json())//lo pasamos a json
    .then(data => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se han cargado '+data.drinks.length+" cocktails",
            showConfirmButton: false,
            timer: 2000
          })
        data.drinks.forEach(element => {
            $("#cocteles").append(
            `<div class="card shadow  mb-5 bg-body rounded" style="width: 18rem;">
            <img src="${element.strDrinkThumb}" class="card-img-top" alt="${element.strDrink}">
            <div class="card-body">
              <h5 class="card-title">${element.strDrink}</h5>
              <button id="${element.idDrink}" class="btn btn-primary">Detalles</button>
            </div>
          </div>`);
        });
        $("button").on("click", mostrarDetalles);
    })
    .catch(error => console.error("Ha ocurrido un error " + error))
}
