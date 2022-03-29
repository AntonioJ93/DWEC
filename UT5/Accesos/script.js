"use strict"

window.addEventListener("load", () => {
    for (let ele of document.getElementsByName("rad")) {
    //for (let ele of document.getElementsByClassName("edad")) {
    //for (let ele of document.querySelectorAll("input[id*='rad']")) {

        ele.addEventListener("click", cambioObjeto)
    }
})

function cambioObjeto() {
    //  this.setAttribute("type", "button");
    this.type = "button"
    this.nextSibling.innerHTML = ""; //nextSibling hace referencia al hermano siguiente del botón que es el span
    this.addEventListener("click", () => {
        alert("Ha pulsado el botón " + this.value)

    })
}