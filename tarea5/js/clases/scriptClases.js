"use strict"

import { Jugador } from "./Jugador.mjs";
import { Partida } from "./Partida.mjs";
import { Turno } from "./Turno.mjs";
let partida;

if (localStorage.getItem("partida") == null||localStorage.getItem("partida") == undefined) {
    partida = new Partida(new Jugador("Antonio", 1)
        , new Jugador("Sara", 2)
    );
    localStorage.setItem("partida",JSON.stringify(partida));
}else{
    partida=JSON.parse(localStorage.getItem("partida"));
}

console.log(partida);
console.log(partida._jugadores);
console.log(partida.jugadores);
console.log(partida.jugadorInicioPartida());
//JSON.parse(localStorage.getItem("usuario"));
//console.log(JSON.parse(localStorage.getItem("partida")));
//localStorage.removeItem("partida");
//localStorage.clear();
comenzar.addEventListener("submit", function (e) {
    e.preventDefault();
    comenzarDisabled();
    let jugador = partida.jugadorInicioPartida();
    let turno = jugador.turnoDisponible();
    if (turno) {
        turno.render();
    } else {
        jugador = partida.cambiarJugador(jugador);
    }

    alert("fin");

    //guardar objetos en localstorage
});

function comenzarDisabled() {
    comenzarBtn.disabled = true;
}