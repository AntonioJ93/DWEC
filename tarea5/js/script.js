"use strict"
let datosJugador1 = {
    puntuacion: 0,
    jugadas: 10,
    tiradas: 2,
    spare: false,
    strike: false
};
let datosJugador2 = {
    puntuacion: 0,
    jugadas: 10,
    tiradas: 2,
    spare: false,
    strike: false
};
let maxBolos = 10;
let tirados = 0;

let jugadorActivo;

comenzar.addEventListener("submit", function (e) {
    e.preventDefault();
    jugadorActivo = jugadorRandom();
    resetLabels();
    colorearLabels(jugadorActivo);
    resetBola();
    mostrarPelota(jugadorActivo);
    todosBolos();
    comenzarDisabled();

});


function jugadorRandom() {
    return Math.round(Math.random() + 1);
}

function resetLabels() {
    //reset color
    let labels = document.getElementsByTagName("label");
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
    img.addEventListener("click", tirar);
    div.classList.add("item");
    div.id = "bola";
    row.appendChild(div);
    div.appendChild(img);
}

function resetBola() {
    if (document.getElementById("bola") != null) {
        let row = bola.parentNode;
        row.removeChild(bola);
    }

}

function resetBolos() {
    if (document.getElementById("bolos") != null) {
        let row = bolos.parentNode;
        row.removeChild(bolos);
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

function comenzarDisabled() {
    comenzarBtn.disabled = true;
}

function bolosTiradosRandom(max = 10) {
    return Math.round(Math.random() * max);
}

function tirar() {
    let jugador;
    if (jugadorActivo == 1) {
        jugador = datosJugador1;
    } else {
        jugador = datosJugador2;
    }
    if (jugador.jugadas > 0) {
        //tienes jugadas
        maxBolos = maxBolos - tirados;

        let derrivados = bolosTiradosRandom(maxBolos);
        tirados += derrivados;
        
        let item = document.createElement("div");
        item.classList.add("item");
        let img = document.createElement("img");
        img.setAttribute("src", "./img/boloTirado.jpg");
        img.classList.add("bolo");
        item.appendChild(img);

        for (let index = 0; index < derrivados; index++) {
            bolos.replaceChild(item.cloneNode(true), bolos.childNodes[index]) //replaceChild(new child, old child)
        }
        alert("Tirados en esta tirada= " + derrivados + " totalTirados=" + tirados + " bolo(s)");
        //restamos una tirada
        jugador.tiradas = jugador.tiradas - 1;
        jugador.puntuacion = jugador.puntuacion + derrivados;

        if (jugador.tiradas == 1) {
            //primera tirada 
            if (derrivados==10) {
                jugador.strike=true;
                jugador.jugadas = jugador.jugadas + 1;
                document.getElementById("jug" + jugadorActivo).value = jugador.jugadas;
                tirados = 0;
                maxBolos = 10;
                resetBolos();
                todosBolos();
            }
            document.getElementById("t" + jugadorActivo).value = jugador.tiradas;
            document.getElementById("p" + jugadorActivo).value = jugador.puntuacion;
            console.log("primera");
        } else if (jugador.tiradas == 0) {
            //segunda tirada sin extra
            
            jugador.tiradas = 2;
            jugador.jugadas = jugador.jugadas - 1;
            document.getElementById("t" + jugadorActivo).value = jugador.tiradas;
            document.getElementById("p" + jugadorActivo).value = jugador.puntuacion;
            document.getElementById("jug" + jugadorActivo).value = jugador.jugadas;
            if(tirados==10&&!jugador.strike){
                jugador.spare=true;
                jugador.tiradas = 1;
                document.getElementById("t" + jugadorActivo).value = jugador.tiradas;
                jugador.jugadas = jugador.jugadas + 1;
                document.getElementById("jug" + jugadorActivo).value = jugador.jugadas;
                tirados = 0;
                maxBolos = 10;
                resetBolos();
                todosBolos();
            }
            if(!jugador.strike&&!jugador.spare){
                cambiarJugador(jugadorActivo);
            }else{
                jugador.strike=false;
                jugador.spare=false;
               
            }
            
            console.log("segunda")
        }
    }else{
        alert("Fin del juego");
    }

}

function cambiarJugador(numJugador) {
    jugadorActivo = numJugador == 1 ? 2 : 1;
    resetLabels();
    colorearLabels(jugadorActivo);
    resetBola();
    mostrarPelota(jugadorActivo);
    resetBolos();
    todosBolos();
    tirados = 0;
    maxBolos = 10;
}