"use strict"
let jugadorActivo;
comenzar.addEventListener("submit", function (e) {
    jugadorActivo = jugadorRandom();
    resetLabels();
    colorearLabels(jugadorActivo);
    resetBola();
    mostrarPelota(jugadorActivo);
    todosBolos();
    comenzarDisabled();
    e.preventDefault();
});


function jugadorRandom() {
    return Math.round(Math.random() + 1);
}

function resetLabels() {
    //reset color
    let labels = document.getElementsByTagName("label");
    console.log("labels a desactivar");
    for (let label of labels) {
        label.classList.remove("activo");
    }
}
function colorearLabels(jugadorActivo) {

    //añadir color
    let row = rowActiva(jugadorActivo);
    let labelsactivas = row.getElementsByTagName("label");
    for (let label of labelsactivas) {
        label.classList.add("activo");
    }
    //se lo quitamos a la primera
    labelsactivas[0].classList.remove("activo");
}

function rowActiva(jugadorActivo) {
    return document.getElementById("jugador" + jugadorActivo);
}

function mostrarPelota(jugadorActivo) {
    let row = rowActiva(jugadorActivo);
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", "./img/bola.webp");
    img.classList.add("bola");
    img.addEventListener("click",tirar);
    div.classList.add("item");
    div.id = "bola";
    row.appendChild(div);
    div.appendChild(img);
}

function resetBola() {
    console.log(document.getElementById("bola"));
    if (document.getElementById("bola") != null) {
        let row = bola.parentNode;
        row.removeChild(bola);
    }

}

function todosBolos() {
    if (document.getElementById("bolos") == null) {

        let row = document.createElement("div");
        row.classList.add("row");
        row.id = "bolos"
        document.getElementsByTagName("main")[0].appendChild(row);
        let item = document.createElement("div");
        item.classList.add("item");
        let img = document.createElement("img");
        img.setAttribute("src", "./img/bolo.jpg");
        img.classList.add("bolo");
        item.appendChild(img);
        while (row.childNodes.length < 10) {
            let itemN = item.cloneNode(true);
            row.appendChild(itemN);
        }

    }
}

function comenzarDisabled(){
    comenzarBtn.disabled=true;
}

function bolosTiradosRandom(){
    return Math.round(Math.random()*10);
}

function tirar(){
    let tirados=bolosTiradosRandom();
    alert("has tirado "+  tirados +" bolo(s)");
    let item = document.createElement("div");
        item.classList.add("item");
        let img = document.createElement("img");
        img.setAttribute("src", "./img/boloTirado.jpg");
        img.classList.add("bolo");
        item.appendChild(img);
        
    for (let index = 0; index <  tirados; index++) {
       bolos.replaceChild(item.cloneNode(true),bolos.childNodes[index]) //replaceChild(new child, old child)
    } 
}