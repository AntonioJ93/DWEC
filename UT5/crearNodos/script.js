"use strict";

window.addEventListener("load", () => {

    crearEstructura();
    asignarEventosBot();
    crearCapaLista();
})

function crearEstructura() {
    let boton, botonII
    //crear capa para los botones
    let capa = document.createElement("div");
    //capa.id="capaBotones"
    capa.setAttribute("id", "capaBotones");
    //añadir la capa
    document.body.appendChild(capa)
    crearBoton("add", "Añadir", false, capa)
    crearBoton("delete", "Eliminar", true, capa)
    crearBoton("edit", "Modificar", true, capa)
    crearBoton("addBef", "Añadir antes de..", true, capa)
    // // //crear botón Añadir
    // boton = document.createElement("button")
    // boton.type = "button"
    // boton.id = "add"
    // boton.innerText="Añadir"
    // //añadir el botón a la capa botones
    // capa.appendChild(boton)
    // // //crear botón Eliminar
    // botonII = document.createElement("button")
    // //botonII.type = "button"
    //  botonII = boton.cloneNode(true)

    //  botonII.id = "delete"
    //  botonII.innerText="Eliminar"
    // // //añadir el botón a la capa botones
    //  capa.appendChild(botonII)
}

function crearBoton(idBot, text, hab, capa) {
    let boton = document.createElement("button");
    boton.type = "button";
    boton.id = idBot;
    boton.innerText = text;
    boton.disabled = hab;
    //añadir el botón a la capa
    capa.appendChild(boton)
}

function asignarEventosBot() {
    document.getElementById("add").addEventListener("click", insertarEle);
    document.getElementById("delete").addEventListener("click", borrarEle);
    document.getElementById("edit").addEventListener("click", modificarEle);
    document.getElementById("addBef").addEventListener("click", insertarAEle);

}

let crearCapaLista = () => {
    let capa = document.createElement("div");
    let lista = document.createElement("ul");
    capa.id = "capaLista";
    document.body.appendChild(capa);
    //crear lista
    lista.id = "listaEle";
    //añadir la lista a la capa
    capa.appendChild(lista);



}

let insertarEle = () => {
    let ele = document.createElement("li")
    let indice = document.getElementById("listaEle").childNodes.length
    //crear un texto
    let texto = document.createTextNode("Elemento " + (indice + 1))
    //integramos el texto al elemento li
    ele.appendChild(texto);
    //añadir el elemento a la lista
    document.getElementById("listaEle").appendChild(ele);
    habDesBoto(false)
}
let habDesBoto = (valor) => {
    document.getElementById("delete").disabled = valor
    document.getElementById("edit").disabled = valor
    document.getElementById("addBef").disabled = valor
}
let modificarEle = () => {
    //extraer el número del último li

    document.getElementById("listaEle").replaceChild(crearLi(), document.getElementById("listaEle").lastChild);
}

function crearLi() {
    let dato = document.getElementById("listaEle").lastChild.innerText.split(" ");
    dato[1] = parseInt(dato[1]) + 1 //sumar 1
    //
    let ele = document.createElement("li")
    let indice = document.getElementById("listaEle").childNodes.length
    //crear un texto
    let texto = document.createTextNode("Elemento " + (indice+1))
    ele.appendChild(texto);
    return ele
}
let borrarEle = () => {
    Swal.fire({
        text: "¿Desea eliminar el elemento?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: "#3085d6",
        focusCancel: true,
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById("listaEle").removeChild(document.getElementById("listaEle").lastChild);
            //Si no hay elementos en la lista, deshabilitar
            if (!document.getElementById("listaEle").hasChildNodes()) {
                habDesBoto(true)
            }
            Swal.fire(
                '¡Eliminado!',
                'El elemento ha sido borrado',
                'success'
            )
        }
    })

}

let insertarAEle = () => {
    document.getElementById("listaEle").insertBefore(crearLi(), document.getElementById("listaEle").lastChild);
}